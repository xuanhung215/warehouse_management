from flask import Blueprint, jsonify
from datetime import date
from models import Product, ImportReceipt, ImportReceiptDetail, ExportReceipt, ExportReceiptDetail, Supplier, db

dashboard_bp = Blueprint('dashboard_bp', __name__)

@dashboard_bp.route('/api/dashboard', methods=['GET'])
def get_dashboard():
    try:
        today = date.today()

        # Tổng sản phẩm
        total_products = Product.query.count()

        # Phiếu nhập hôm nay
        imports_today = (
            ImportReceipt.query
            .filter(ImportReceipt.import_date == today)
            .all()
        )
        imports_today_ids = [r.id for r in imports_today]
        imports_today_qty = 0
        if imports_today_ids:
            imports_today_qty = db.session.query(
                db.func.coalesce(db.func.sum(ImportReceiptDetail.quantity), 0)
            ).filter(ImportReceiptDetail.receipt_id.in_(imports_today_ids)).scalar()

        # Phiếu xuất hôm nay
        exports_today = (
            ExportReceipt.query
            .filter(ExportReceipt.export_date == today)
            .all()
        )
        exports_today_ids = [r.id for r in exports_today]
        exports_today_qty = 0
        if exports_today_ids:
            exports_today_qty = db.session.query(
                db.func.coalesce(db.func.sum(ExportReceiptDetail.quantity), 0)
            ).filter(ExportReceiptDetail.receipt_id.in_(exports_today_ids)).scalar()

        # Số sản phẩm sắp hết
        low_stock_count = Product.query.filter(Product.current_stock <= Product.min_stock).count()

        # Phiếu nhập gần đây
        recent_receipts = (
            ImportReceipt.query
            .order_by(ImportReceipt.import_date.desc(), ImportReceipt.id.desc())
            .limit(3)
            .all()
        )
        recent_imports = []
        for r in recent_receipts:
            total_money = sum(d.quantity * d.price for d in r.details)
            supplier_name = None
            if r.supplier_id:
                s = Supplier.query.get(r.supplier_id)
                supplier_name = s.name if s else None

            recent_imports.append({
                "code": r.receipt_code,
                "supplier": supplier_name or "—",
                "total": f"{total_money:,.0f}đ".replace(",", "."),
                "status": "Đã lưu"
            })

        data = {
            "stats": {
                "totalProducts": total_products,
                "importsToday": {
                    "count": len(imports_today),
                    "qty": int(imports_today_qty)
                },
                "exportsToday": {
                    "count": len(exports_today),
                    "qty": int(exports_today_qty)
                },
                "lowStockCount": low_stock_count
            },
            "recentImports": recent_imports,
            "recentActivities": []  # Sau này nối với audit_logs
        }

        return jsonify({"status": "success", "data": data}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500