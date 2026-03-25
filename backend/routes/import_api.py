from flask import Blueprint, request, jsonify
from models import ImportReceipt, ImportReceiptDetail, Product, db
from datetime import datetime

import_bp = Blueprint('import_bp', __name__)

# 1. Lấy danh sách phiếu nhập (Kèm tổng tiền và số dòng SP)
@import_bp.route('/api/imports', methods=['GET'])
def get_imports():
    try:
        receipts = ImportReceipt.query.order_by(ImportReceipt.import_date.desc(), ImportReceipt.id.desc()).all()
        result = []
        for r in receipts:
            # Tính tổng tiền và số lượng mặt hàng của phiếu này
            total_money = sum(detail.quantity * detail.price for detail in r.details)
            items_count = len(r.details)
            
            result.append({
                'id': r.id,
                'receipt_code': r.receipt_code,
                'import_date': r.import_date.strftime('%d/%m/%Y'),
                'supplier_id': r.supplier_id,
                'items_count': items_count,
                'total_money': float(total_money),
                'note': r.note
            })
        return jsonify({"status": "success", "data": result}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

# 2. Tạo phiếu nhập kho MỚI (Xử lý Transaction quan trọng)
@import_bp.route('/api/imports', methods=['POST'])
def create_import():
    try:
        data = request.json
        
        # 1. Tạo phiếu nhập (Bảng cha)
        new_receipt = ImportReceipt(
            receipt_code=data['receipt_code'],
            import_date=datetime.strptime(data['import_date'], '%Y-%m-%d').date(),
            supplier_id=data.get('supplier_id'),
            note=data.get('note', '')
        )
        db.session.add(new_receipt)
        db.session.flush() # Lấy ID của new_receipt nhưng chưa commit hẳn
        
        # 2. Thêm chi tiết phiếu nhập và CẬP NHẬT TỒN KHO
        for item in data['details']:
            new_detail = ImportReceiptDetail(
                receipt_id=new_receipt.id,
                product_id=item['product_id'],
                quantity=item['quantity'],
                price=item['price']
            )
            db.session.add(new_detail)
            
            # Update tồn kho sản phẩm
            product = Product.query.get(item['product_id'])
            if product:
                product.current_stock += item['quantity']
                
        # 3. Lưu toàn bộ thay đổi vào Database (Nếu có lỗi ở đâu sẽ rollback toàn bộ)
        db.session.commit()
        return jsonify({"status": "success", "message": "Tạo phiếu nhập thành công!"}), 201
        
    except Exception as e:
        db.session.rollback() # Hoàn tác nếu có lỗi
        return jsonify({"status": "error", "message": str(e)}), 500