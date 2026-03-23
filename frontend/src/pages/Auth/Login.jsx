import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Gọi API đăng nhập đến Backend Flask
      const response = await axiosClient.post('/login', {
        username,
        password
      });

      // Giả sử Backend trả về một token (JWT hoặc chuỗi hash)
      if (response.token) {
        localStorage.setItem('token', response.token);
        
        // Có thể lưu thêm thông tin user, role vào localStorage hoặc Context API
        localStorage.setItem('userRole', response.role); 

        // Đăng nhập thành công, điều hướng vào trang chủ (mặc định là báo cáo tồn kho)
        navigate('/');
      } else {
        setError('Tài khoản hoặc mật khẩu không chính xác!');
      }
    } catch (err) {
      console.error('Lỗi đăng nhập:', err);
      setError('Kết nối đến máy chủ thất bại. Vui lòng thử lại!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#ecf0f1' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '350px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>Đăng Nhập Hệ Thống</h2>
        
        {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center', backgroundColor: '#ffeaa7', padding: '10px', borderRadius: '4px' }}>{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#34495e' }}>Tên đăng nhập:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              style={{ width: '100%', padding: '10px', border: '1px solid #bdc3c7', borderRadius: '4px' }} 
              required 
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#34495e' }}>Mật khẩu:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={{ width: '100%', padding: '10px', border: '1px solid #bdc3c7', borderRadius: '4px' }} 
              required 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            style={{ width: '100%', padding: '12px', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: isLoading ? 'not-allowed' : 'pointer', fontSize: '16px', fontWeight: 'bold' }}
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng Nhập'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;