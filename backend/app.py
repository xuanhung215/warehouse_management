from flask import Flask, jsonify
from config import Config
from extensions import db, cors
from routes.product_api import product_bp
from routes.import_api import import_bp
from routes import register_routes 

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Khởi tạo các thư viện
    db.init_app(app)
    cors.init_app(app) # Cho phép Frontend (cổng 5173/3000) gọi API mà không bị chặn lỗi CORS
    
    # Đăng ký các Routes (API) sẽ được viết sau
    # app.register_blueprint(product_bp)
    # app.register_blueprint(import_bp)
    # app.register_blueprint(auth_bp)
    # app.register_blueprint(product_bp)
    register_routes(app)
    
    @app.route('/', methods=['GET'])
    def health_check():
        return jsonify({"status": "success", "message": "KhoHub API is running perfectly!"})
        
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)