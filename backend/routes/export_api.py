from flask import Blueprint, jsonify
from models import ExportReceipt, ExportReceiptDetail, db

export_bp = Blueprint('export_bp', __name__)

@export_bp.route('/api/exports', methods=['GET'])
def get_exports():
    try:
        receipts = (
            ExportReceipt.query
            .order_by(ExportReceipt.export_date.desc(), ExportReceipt.id.desc())
            .all()
        )
        result = []

        for r in receipts:
            total_money = sum(d.quantity * d.price for d in r.details)
            items_count = len(r.details)

            # Map reason -> color giống fakeData
            if r.reason.lower() == 'bán hàng':
                reason_color = '#10b981'
            elif 'chuyển' in r.reason.lower():
                reason_color = '#f59e0b'
            else:
                reason_color = '#ef4444'

            result.append({
                "id": r.receipt_code,                                   # PX-0153
                "date": r.export_date.strftime('%d/%m/%Y'),
                "reason": r.reason,
                "reasonColor": reason_color,
                "items": items_count,
                "total": f"{total_money:,.0f}đ".replace(",", ".")
            })

        return jsonify({"status": "success", "data": result}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500