import React, { useState } from 'react';

const Dashboard = () => {
  const cardStyle = { background: '#111827', borderRadius: '12px', padding: '20px', border: '1px solid #1f2937' };
  const statLabelStyle = { color: '#94a3b8', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' };
  const statValueStyle = { color: 'white', fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0' };

  // Sau này sẽ set bằng Axios từ /api/dashboard
  const [stats] = useState({
    totalProducts: 0,
    importsTodayCount: 0,
    importsTodayQty: 0,
    exportsTodayCount: 0,
    exportsTodayQty: 0,
    lowStockCount: 0,
  });
  const [recentImports] = useState([]);
  const [recentActivities] = useState([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'white' }}>
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <div style={{ ...cardStyle, borderTop: '3px solid #60a5fa' }}>
          <div style={statLabelStyle}>Tổng sản phẩm</div>
          <h3 style={statValueStyle}>{stats.totalProducts}</h3>
          <div style={{ color: '#94a3b8', fontSize: '13px' }}>Số lượng sản phẩm đang quản lý</div>
        </div>
        <div style={{ ...cardStyle, borderTop: '3px solid #10b981' }}>
          <div style={statLabelStyle}>Phiếu nhập hôm nay</div>
          <h3 style={statValueStyle}>{stats.importsTodayCount}</h3>
          <div style={{ color: '#94a3b8', fontSize: '13px' }}>Tổng: {stats.importsTodayQty} đơn vị</div>
        </div>
        <div style={{ ...cardStyle, borderTop: '3px solid #8b5cf6' }}>
          <div style={statLabelStyle}>Phiếu xuất hôm nay</div>
          <h3 style={statValueStyle}>{stats.exportsTodayCount}</h3>
          <div style={{ color: '#94a3b8', fontSize: '13px' }}>Tổng: {stats.exportsTodayQty} đơn vị</div>
        </div>
        <div style={{ ...cardStyle, borderTop: '3px solid #f59e0b' }}>
          <div style={statLabelStyle}>Sắp hết hàng</div>
          <h3 style={statValueStyle}>{stats.lowStockCount}</h3>
          <div style={{ color: '#f59e0b', fontSize: '13px' }}>⚠️ Cần kiểm tra tồn kho</div>
        </div>
      </div>

      {/* Alert */}
      <div
        style={{
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          color: '#fcd34d',
          padding: '16px 20px',
          borderRadius: '8px',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        ⚠️ <strong>Cảnh báo:</strong> {stats.lowStockCount} sản phẩm có tồn kho dưới mức tối thiểu. Vui lòng kiểm tra báo cáo tồn kho.
      </div>

      {/* Bottom row: Phiếu nhập gần đây + Hoạt động gần đây */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '16px' }}>Phiếu nhập gần đây</h3>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #334155' }}>
                <th style={{ padding: '12px 0' }}>MÃ PHIẾU</th>
                <th>NHÀ CC</th>
                <th>TỔNG TIỀN</th>
                <th>TRẠNG THÁI</th>
              </tr>
            </thead>
            <tbody>
              {recentImports.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ padding: '16px 0', textAlign: 'center', color: '#9ca3af' }}>
                    Chưa có phiếu nhập nào
                  </td>
                </tr>
              ) : (
                recentImports.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #1f2937' }}>
                    <td style={{ padding: '16px 0', color: '#60a5fa' }}>{row.code}</td>
                    <td>{row.supplier}</td>
                    <td>{row.total}</td>
                    <td>
                      <span
                        style={{
                          color: '#10b981',
                          background: 'rgba(16, 185, 129, 0.1)',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontSize: '12px',
                        }}
                      >
                        {row.status || 'Đã lưu'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div style={cardStyle}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '16px' }}>Hoạt động gần đây</h3>
          {recentActivities.length === 0 ? (
            <div style={{ color: '#9ca3af', fontSize: '14px' }}>Chưa có hoạt động nào</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px' }}>
              {recentActivities.map((act, i) => (
                <div key={i}>
                  <div style={{ color: '#e2e8f0' }}>{act.message}</div>
                  <div
                    style={{
                      color: '#64748b',
                      fontSize: '12px',
                      marginLeft: '16px',
                      marginTop: '4px',
                    }}
                  >
                    {act.timeLabel}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;