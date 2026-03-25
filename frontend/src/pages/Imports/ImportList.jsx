import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ImportList = () => {
  const navigate = useNavigate();
  // Sau này set bằng Axios
  const [imports] = useState([]);

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h2 style={{ margin: 0 }}>Phiếu nhập kho</h2>
        <button
          onClick={() => navigate('/imports/create')}
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
          + Tạo phiếu nhập
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #334155' }}>
            <th style={{ padding: '12px 0' }}>MÃ PHIẾU</th>
            <th>NGÀY NHẬP</th>
            <th>NHÀ CUNG CẤP</th>
            <th>SỐ DÒNG SP</th>
            <th>TỔNG TIỀN</th>
            <th>GHI CHÚ</th>
            <th>THAO TÁC</th>
          </tr>
        </thead>
        <tbody>
          {imports.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ padding: '16px 0', textAlign: 'center', color: '#9ca3af' }}>
                Chưa có phiếu nhập nào
              </td>
            </tr>
          ) : (
            imports.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #1f2937' }}>
                <td style={{ padding: '12px 0', color: '#60a5fa' }}>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.supplier}</td>
                <td>{item.items}</td>
                <td>{item.total}</td>
                <td>{item.note}</td>
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
                    Xem
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

export default ImportList;