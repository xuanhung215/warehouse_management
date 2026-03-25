import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExportList = () => {
  const navigate = useNavigate();
  const [exportsData] = useState([]);

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h2 style={{ margin: 0 }}>Phiếu xuất kho</h2>
        <button
          onClick={() => navigate('/exports/create')}
          style={{
            background: '#f97316',
            color: 'white',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          + Tạo phiếu xuất
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #334155' }}>
            <th style={{ padding: '12px 0' }}>MÃ PHIẾU</th>
            <th>NGÀY XUẤT</th>
            <th>LÝ DO XUẤT</th>
            <th>SỐ DÒNG SP</th>
            <th>TỔNG TIỀN</th>
            <th>TRẠNG THÁI</th>
            <th>THAO TÁC</th>
          </tr>
        </thead>
        <tbody>
          {exportsData.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ padding: '16px 0', textAlign: 'center', color: '#9ca3af' }}>
                Chưa có phiếu xuất nào
              </td>
            </tr>
          ) : (
            exportsData.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #1f2937' }}>
                <td style={{ padding: '12px 0', color: '#60a5fa' }}>{item.id}</td>
                <td>{item.date}</td>
                <td>
                  <span
                    style={{
                      color: item.reasonColor,
                      background: 'rgba(15, 23, 42, 0.8)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      border: `1px solid ${item.reasonColor}`,
                    }}
                  >
                    {item.reason}
                  </span>
                </td>
                <td>{item.items}</td>
                <td>{item.total}</td>
                <td>Hoàn thành</td>
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

export default ExportList;