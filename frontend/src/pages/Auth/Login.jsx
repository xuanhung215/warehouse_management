// src/pages/Auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authApi from '../../api/authApi'; // chỉnh path cho đúng dự án của bạn

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await authApi.login(form);
      // Với axiosClient, res = response.data từ backend
      if (res.status === 'success') {
        const token = res.data.token;
        const user = res.data.user;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        navigate('/'); // hoặc '/dashboard'
      } else {
        setError(res.message || 'Đăng nhập thất bại');
      }
    } catch (err) {
      console.error(err);
      setError('Sai tài khoản hoặc mật khẩu');
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    background: '#020617',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  const cardStyle = {
    background: '#0f172a',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #1f2937',
    width: '100%',
    maxWidth: '380px',
  };

  const inputStyle = {
    background: '#020617',
    border: '1px solid #1f2937',
    borderRadius: '8px',
    padding: '8px 10px',
    color: 'white',
    fontSize: '14px',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <form style={cardStyle} onSubmit={handleSubmit}>
        <h2 style={{ margin: '0 0 8px 0' }}>Đăng nhập KhoHub</h2>
        <p style={{ margin: '0 0 20px 0', color: '#9ca3af', fontSize: '14px' }}>
          Nhập tài khoản được cấp để truy cập hệ thống.
        </p>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ fontSize: '13px', color: '#9ca3af', display: 'block', marginBottom: '6px' }}>
            Tên đăng nhập
          </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            style={inputStyle}
            placeholder="vd: admin"
          />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ fontSize: '13px', color: '#9ca3af', display: 'block', marginBottom: '6px' }}>
            Mật khẩu
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={inputStyle}
            placeholder="******"
          />
        </div>

        {error && (
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#fca5a5',
              padding: '8px 10px',
              borderRadius: '8px',
              fontSize: '13px',
              marginBottom: '12px',
            }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          style={{
            width: '100%',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '10px 0',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer',
            marginTop: '8px',
          }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;