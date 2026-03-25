from flask import Blueprint, jsonify
from models import Supplier, ImportReceipt, db

supplier_bp = Blueprint('supplier_bp', __name__)

@supplier_bp.route('/api/suppliers', methods=['GET'])
def get_suppliers():
    try:
        suppliers = Supplier.query.order_by(Supplier.id.asc()).all()
        result = []

        for s in suppliers:
            import_count = ImportReceipt.query.filter_by(supplier_id=s.id).count()

            result.append({
                "id": s.supplier_code,   # NCC001
                "name": s.name,
                "phone": s.phone,
                "address": s.address,
                "imports": import_count
            })

        return jsonify({"status": "success", "data": result}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500