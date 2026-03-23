import React from "react";
import { Link } from "react-router-dom"; // Import thẻ Link

const NotFound = () => {
  return (
    // Đổi màu nền sang nền tối của KhoHub (#0b0f19), chữ màu xám sáng
    <div style={{ backgroundColor: '#0b0f19', color: '#e2e8f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}> 
      
      {/* Nếu bạn chưa có ảnh 404_NotFound.png, bạn có thể dùng tạm một icon text bự ở đây */}
      <div style={{ fontSize: '120px', fontWeight: '900', color: '#3b82f6', marginBottom: '20px', lineHeight: '1' }}>
        404
      </div>
      
      {/* Nếu bạn dùng ảnh thật, hãy uncomment dòng dưới đây và copy ảnh vào thư mục public nhé:
        <img src="/404_NotFound.png" alt="not found" style={{ maxWidth: '100%', width: '380px', marginBottom: '24px' }} /> 
      */}

      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#f8fafc' }}>
        Opps! Không tìm thấy trang
      </h2>
      
      <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '500px', marginBottom: '30px', lineHeight: '1.5' }}>
        Bạn đã đi lạc vào vùng đất không tồn tại! Có vẻ như đường dẫn đã bị thay đổi hoặc không có sẵn. Hãy quay trở lại trang chủ để tiếp tục hành trình.
      </p>
      
      <Link 
        to="/" 
        style={{ 
          display: 'inline-block', 
          padding: '12px 24px', 
          fontWeight: '600', 
          color: 'white', 
          backgroundColor: '#3b82f6', // Màu xanh chủ đạo KhoHub
          borderRadius: '8px', 
          textDecoration: 'none',
          transition: 'all 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
      >
        Quay về trang chủ
      </Link>
    </div>


  )
};

export default NotFound;