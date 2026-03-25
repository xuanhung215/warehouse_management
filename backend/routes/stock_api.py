from flask import Blueprint, jsonify
from models import Product, db

report_bp = Blueprint('report_bp', __name__)

@report_bp.route('/api/stock-report', methods=['GET'])
def get_stock_report():
    try:
        products = Product.query.order_by(Product.id.asc()).all()
        result = []

        for p in products:
            stock = p.current_stock
            min_stock = p.min_stock or 0

            if stock <= min_stock:
                status = "⚠ Thiếu hàng"
                sColor = "#ef4444"
            elif stock <= min_stock * 2:
                status = "Trung bình"
                sColor = "#f59e0b"
            else:
                status = "Đủ hàng"
                sColor = "#10b981"

            pct = 0
            if min_stock > 0:
                pct = min(int(stock / (min_stock * 2) * 100), 100)

            result.append({
                "id": p.product_code,
                "name": p.product_name,
                "category": p.category,
                "unit": p.unit,
                "stock": stock,
                "min": min_stock,
                "status": status,
                "sColor": sColor,
                "pct": f"{pct}%"
            })

        return jsonify({"status": "success", "data": result}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500