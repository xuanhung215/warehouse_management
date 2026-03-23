import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    color: isActive ? '#ffffff' : '#94a3b8',
    backgroundColor: isActive ? '#1e3a8a' : 'transparent', // Màu xanh blue khi active
    textDecoration: 'none',
    borderRadius: '8px',
    marginBottom: '4px',
    transition: 'all 0.2s',
    fontWeight: isActive ? '600' : '500',
    fontSize: '14px'
  });

  const sectionStyle = {
    color: '#64748b',
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '20px 0 10px 10px'
  };

  return (
    <div style={{ width: '300px', background: '#111827', borderRight: '1px solid #1f2937', padding: '20px 16px', display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <div style={{ padding: '0 10px', marginBottom: '30px' }}>
        <h2 style={{ margin: 0, color: '#60a5fa', fontSize: '24px', fontWeight: '800' }}>QUẢN LÝ KHO HÀNG</h2>
        <span style={{ color: '#64748b', fontSize: '12px' }}></span>
      </div>

      {/* Menu */}
      <nav style={{ flex: 1 }}>
        <div style={sectionStyle}>Tổng Quan</div>
        <NavLink to="/" style={linkStyle}>⊞ Dashboard</NavLink>

        <div style={sectionStyle}>Nghiệp Vụ Kho</div>
        <NavLink to="/imports" style={linkStyle}>📥 Phiếu Nhập Kho</NavLink>
        <NavLink to="/exports" style={linkStyle}>📤 Phiếu Xuất Kho</NavLink>
        <NavLink to="/reports/stock" style={linkStyle}>📊 Báo Cáo Tồn Kho</NavLink>

        <div style={sectionStyle}>Danh Mục</div>
        <NavLink to="/products" style={linkStyle}>📦 Sản Phẩm</NavLink>
        <NavLink to="/suppliers" style={linkStyle}>👥 Nhà Cung Cấp</NavLink>
      </nav>

      {/* User Profile Footer (Sang Xuân Hùng) */}
      <div style={{ marginTop: 'auto', background: '#1f2937', padding: '12px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '36px', height: '36px', background: '#3b82f6', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '14px' }}>
          SH
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>Sang Xuân Hùng</div>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Nhân viên kho</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;