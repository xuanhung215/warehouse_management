# routes/auth_api.py

from flask import Blueprint, request, jsonify
from models import User, db
from werkzeug.security import check_password_hash

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/api/login', methods=['POST'])
def login():
    """
    Đăng nhập cơ bản:
    - Nhận username, password
    - Kiểm tra trong DB
    - Trả về token (fake) + thông tin user
    """
    try:
        data = request.json or {}
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return jsonify({"status": "error", "message": "Thiếu username hoặc password"}), 400

        user = User.query.filter_by(username=username).first()
        if not user:
            return jsonify({"status": "error", "message": "Sai tài khoản hoặc mật khẩu"}), 401

        # Nếu bạn đang lưu password dạng hash:
        # if not check_password_hash(user.password_hash, password):
        #     return jsonify({"status": "error", "message": "Sai tài khoản hoặc mật khẩu"}), 401

        # Nếu tạm thời lưu plain text (không khuyến khích), dùng:
        if user.password_hash != password:
            return jsonify({"status": "error", "message": "Sai tài khoản hoặc mật khẩu"}), 401

        # TODO: Sau này bạn có thể dùng JWT để tạo token thật
        fake_token = "demo-token-123"

        return jsonify({
            "status": "success",
            "data": {
                "token": fake_token,
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "full_name": user.full_name,
                    "role": user.role,
                }
            }
        }), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@auth_bp.route('/api/profile', methods=['GET'])
def profile():
    """
    Trả về thông tin user hiện tại.
    Version demo: không kiểm tra token thật, chỉ trả về user giả.
    Sau này bạn có thể:
    - Đọc token từ header Authorization
    - Giải mã JWT để lấy user_id
    - Truy vấn User trong DB
    """
    try:
        # Demo: user giả
        user_data = {
            "id": 1,
            "username": "demo",
            "full_name": "Demo User",
            "role": "admin",
        }

        return jsonify({"status": "success", "data": user_data}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500