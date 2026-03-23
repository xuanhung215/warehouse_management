import React from 'react';

const Dashboard = () => {
  // Styles dùng chung
  const cardStyle = { background: '#111827', borderRadius: '12px', padding: '20px', border: '1px solid #1f2937' };
  const statLabelStyle = { color: '#94a3b8', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' };
  const statValueStyle = { color: 'white', fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0' };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* 4 Thẻ Thống Kê (Top Row) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <div style={{ ...cardStyle, borderTop: '3px solid #60a5fa' }}>
          <div style={statLabelStyle}>Tổng sản phẩm</div>
          <h3 style={statValueStyle}>247</h3>
          <div style={{ color: '#94a3b8', fontSize: '13px' }}>▲ 12 mặt hàng mới tháng này</div>
        </div>
        <div style={{ ...cardStyle, borderTop: '3px solid #10b981' }}>
          <div style={statLabelStyle}>Phiếu nhập hôm nay</div>
          <h3 style={statValueStyle}>8</h3>
          <div style={{ color: '#94a3b8', fontSize: '13px' }}>Tổng: 1,240 đơn vị</div>
        </div>
        <div style={{ ...cardStyle, borderTop: '3px solid #8b5cf6' }}>
          <div style={statLabelStyle}>Phiếu xuất hôm nay</div>
          <h3 style={statValueStyle}>15</h3>
          <div style={{ color: '#94a3b8', fontSize: '13px' }}>Tổng: 893 đơn vị</div>
        </div>
        <div style={{ ...cardStyle, borderTop: '3px solid #f59e0b' }}>
          <div style={statLabelStyle}>Sắp hết hàng</div>
          <h3 style={statValueStyle}>5</h3>
          <div style={{ color: '#f59e0b', fontSize: '13px' }}>⚠️ Cần đặt hàng gấp</div>
        </div>
      </div>

      {/* Thanh Cảnh Báo (Alert) */}
      <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#fcd34d', padding: '16px 20px', borderRadius: '8px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        ⚠️ <strong>Cảnh báo:</strong> 5 sản phẩm có tồn kho dưới mức tối thiểu. Vui lòng kiểm tra báo cáo tồn kho.
      </div>

      {/* Biểu đồ (Middle Row) */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div style={cardStyle}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '16px' }}>Nhập / Xuất 7 ngày qua</h3>
          {/* Mockup Biểu đồ cột */}
          <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', gap: '15px', paddingBottom: '20px', borderBottom: '1px solid #334155' }}>
            <div style={{ width: '40px', height: '60%', background: '#3b82f6', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ width: '40px', height: '40%', background: '#10b981', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ width: '40px', height: '90%', background: '#3b82f6', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ width: '40px', height: '70%', background: '#10b981', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ width: '40px', height: '50%', background: '#3b82f6', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ width: '40px', height: '100%', background: '#3b82f6', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ width: '40px', height: '30%', background: '#10b981', borderRadius: '4px 4px 0 0' }}></div>
          </div>
          <div style={{ display: 'flex', gap: '20px', marginTop: '15px', fontSize: '13px' }}>
            <span style={{ color: '#3b82f6' }}>■ Nhập</span>
            <span style={{ color: '#10b981' }}>■ Xuất</span>
          </div>
        </div>

        <div style={cardStyle}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '16px' }}>Tồn kho theo danh mục</h3>
          {/* Mockup thông số phần trăm */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}><span style={{ color: '#3b82f6' }}>● Gia dụng</span> <strong>40%</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}><span style={{ color: '#10b981' }}>● Thực phẩm</span> <strong>24%</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}><span style={{ color: '#f59e0b' }}>● Điện tử</span> <strong>19%</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}><span style={{ color: '#8b5cf6' }}>● Khác</span> <strong>17%</strong></div>
          </div>
        </div>
      </div>

      {/* Bảng Dữ Liệu & Hoạt Động (Bottom Row) */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '16px' }}>Phiếu nhập gần đây</h3>
            <span style={{ background: '#1e3a8a', color: '#60a5fa', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>Hôm nay</span>
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
              {/* Fake Data mô phỏng y hệt ảnh */}
              {[['PN-0241', 'Công ty Bình An', '12,500,000đ'], ['PN-0240', 'NCC Minh Đức', '8,750,000đ'], ['PN-0239', 'Cty TNHH Hà Nội', '3,200,000đ']].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #1f2937' }}>
                  <td style={{ padding: '16px 0', color: '#60a5fa' }}>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td><span style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '4px 10px', borderRadius: '4px', fontSize: '12px' }}>Đã lưu</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={cardStyle}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '16px' }}>Hoạt động gần đây</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px' }}>
            <div>
              <div style={{ color: '#e2e8f0' }}><span style={{ color: '#10b981' }}>●</span> Nhập kho <strong>Gạo ST25</strong> × 200 kg từ NCC Bình An</div>
              <div style={{ color: '#64748b', fontSize: '12px', marginLeft: '16px', marginTop: '4px' }}>14:32 hôm nay</div>
            </div>
            <div>
              <div style={{ color: '#e2e8f0' }}><span style={{ color: '#3b82f6' }}>●</span> Xuất kho <strong>Dầu ăn Neptune</strong> × 48 chai (bán hàng)</div>
              <div style={{ color: '#64748b', fontSize: '12px', marginLeft: '16px', marginTop: '4px' }}>13:15 hôm nay</div>
            </div>
            <div>
              <div style={{ color: '#fcd34d' }}><span style={{ color: '#f59e0b' }}>●</span> Cảnh báo: <strong>Nước mắm Chinsu</strong> còn 3 lọ (dưới mức tối thiểu)</div>
              <div style={{ color: '#64748b', fontSize: '12px', marginLeft: '16px', marginTop: '4px' }}>11:00 hôm nay</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;