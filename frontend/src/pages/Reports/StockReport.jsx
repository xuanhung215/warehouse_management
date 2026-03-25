import React, { useState } from 'react';

const StockReport = () => {
  const [rows] = useState([]);

  const cardStyle = {
    background: '#111827',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #1f2937',
    flex: 1,
  };

  return (
    <div style={{ padding: '20px', color: 'white', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ margin: 0 }}>Báo cáo tồn kho</h2>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={cardStyle}>
          <h3 style={{ margin: 0, fontSize: '16px' }}>Tổng quan</h3>
          <p style={{ color: '#9ca3af', marginTop: '12px', fontSize: '14px' }}>
            Dữ liệu chi tiết sẽ hiển thị khi có sản phẩm trong kho.
          </p>
        </div>
      </div>

      <div style={cardStyle}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Chi tiết từng sản phẩm</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #334155' }}>
              <th style={{ padding: '12px 0' }}>MÃ SP</th>
              <th>TÊN SẢN PHẨM</th>
              <th>DANH MỤC</th>
              <th>ĐVT</th>
              <th>TỒN HIỆN TẠI</th>
              <th>MỨC TỐI THIỂU</th>
              <th>MỨC TỒN KHO</th>
              <th>TRẠNG THÁI</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ padding: '16px 0', textAlign: 'center', color: '#9ca3af' }}>
                  Chưa có dữ liệu tồn kho
                </td>
              </tr>
            ) : (
              rows.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #1f2937' }}>
                  <td style={{ padding: '12px 0', color: '#60a5fa' }}>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.unit}</td>
                  <td>{item.stock}</td>
                  <td>{item.min}</td>
                  <td>
                    {/* Progress bar đơn giản */}
                    <div style={{ background: '#1f2937', borderRadius: '999px', overflow: 'hidden', width: '100px' }}>
                      <div
                        style={{
                          width: item.pct,
                          background: item.sColor,
                          height: '6px',
                        }}
                      />
                    </div>
                  </td>
                  <td style={{ color: item.sColor }}>{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockReport;