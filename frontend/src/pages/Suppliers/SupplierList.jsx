import React, { useState } from 'react';

const SupplierList = () => {
  const [suppliers] = useState([]);

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h2 style={{ margin: 0 }}>Nhà cung cấp</h2>
        <button
          style={{
            background: '#22c55e',
            color: 'white',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          + Thêm nhà cung cấp
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #334155' }}>
            <th style={{ padding: '12px 0' }}>MÃ NCC</th>
            <th>TÊN NHÀ CUNG CẤP</th>
            <th>LIÊN HỆ</th>
            <th>ĐỊA CHỈ</th>
            <th>SỐ PHIẾU NHẬP</th>
            <th>THAO TÁC</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ padding: '16px 0', textAlign: 'center', color: '#9ca3af' }}>
                Chưa có nhà cung cấp nào
              </td>
            </tr>
          ) : (
            suppliers.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #1f2937' }}>
                <td style={{ padding: '12px 0', color: '#60a5fa' }}>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.imports}</td>
                <td>
                  <button
                    style={{
                      background: '#1d4ed8',
                      color: 'white',
                      border: 'none',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierList;