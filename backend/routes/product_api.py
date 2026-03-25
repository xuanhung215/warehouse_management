from flask import Blueprint, request, jsonify
from models import Product, db

product_bp = Blueprint('product_bp', __name__, url_prefix='/api/products')

# 1. Lấy danh sách toàn bộ sản phẩm (GET)
@product_bp.route('/api/products', methods=['GET'])
def get_products():
    try:
        products = Product.query.order_by(Product.id.desc()).all()
        result = []

        for p in products:
            # Tính trạng thái dựa trên tồn kho
            status = "Thiếu hàng" if p.current_stock <= p.min_stock else "Hoạt động"

            result.append({
                "id": p.id,
                "product_code": p.product_code,
                "product_name": p.product_name,
                "category": p.category,
                "unit": p.unit,
                "min_stock": p.min_stock,
                "current_stock": p.current_stock,
                "status": status
            })

        return jsonify({"status": "success", "data": result}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


# 2. Thêm sản phẩm mới (POST)
@product_bp.route('/api/products', methods=['POST'])
def create_product():
    try:
        data = request.json

        if Product.query.filter_by(product_code=data['product_code']).first():
            return jsonify({"status": "error", "message": "Mã sản phẩm đã tồn tại!"}), 400

        new_product = Product(
            product_code=data['product_code'],
            product_name=data['product_name'],
            category=data['category'],
            unit=data['unit'],
            min_stock=data.get('min_stock', 10),
            current_stock=data.get('current_stock', 0)
        )

        db.session.add(new_product)
        db.session.commit()

        return jsonify({"status": "success", "message": "Thêm sản phẩm thành công!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"status": "error", "message": str(e)}), 500


# 3. Xóa sản phẩm (DELETE)
@product_bp.route('/api/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    try:
        product = Product.query.get(id)
        if not product:
            return jsonify({"status": "error", "message": "Không tìm thấy sản phẩm!"}), 404

        db.session.delete(product)
        db.session.commit()
        return jsonify({"status": "success", "message": "Xóa sản phẩm thành công!"}), 200
    except Exception as e:
        db.session.rollback()
        # Thực tế nên check ràng buộc FK với lịch sử nhập/xuất
        return jsonify({"status": "error", "message": "Không thể xóa sản phẩm đã có lịch sử nhập/xuất!"}), 400