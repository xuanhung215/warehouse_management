# routes/__init__.py

from .product_api import product_bp
from .import_api import import_bp
from .export_api import export_bp  # thêm khi bạn tạo file này
from .auth_api import auth_bp
from .dashboard_api import dashboard_bp
from .stock_api import report_bp
from .supplier_api import supplier_bp

def register_routes(app):
    """
    Hàm gom tất cả blueprint và đăng ký với app Flask.
    Gọi hàm này trong create_app() ở app.py.
    """
    app.register_blueprint(product_bp)
    app.register_blueprint(import_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(export_bp)
    app.register_blueprint(dashboard_bp)
    app.register_blueprint(report_bp)
    app.register_blueprint(supplier_bp)