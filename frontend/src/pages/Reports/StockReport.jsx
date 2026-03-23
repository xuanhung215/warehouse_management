import React from 'react';

const StockReport = () => {
  const fakeData = [
    { id: 'SP001', name: 'Gạo ST25', category: 'Thực phẩm', unit: 'kg', stock: 350, min: 50, status: 'Đủ hàng', sColor: '#10b981', pct: '80%' },
    { id: 'SP002', name: 'Dầu ăn Neptune 1L', category: 'Thực phẩm', unit: 'chai', stock: 82, min: 20, status: 'Đủ hàng', sColor: '#10b981', pct: '60%' },
    { id: 'SP003', name: 'Nước mắm Chinsu 500ml', category: 'Thực phẩm', unit: 'lọ', stock: 3, min: 10, status: '⚠ Thiếu hàng', sColor: '#ef4444', pct: '15%' },
    { id: 'SP004', name: 'Quạt điện Panasonic', category: 'Điện tử', unit: 'cái', stock: 15, min: 5, status: 'Trung bình', sColor: '#f59e0b', pct: '40%' },
    { id: 'SP005', name: 'Bột giặt OMO 3kg', category: 'Gia dụng', unit: 'túi', stock: 2, min: 15, status: '⚠ Thiếu hàng', sColor: '#ef4444', pct: '10%' },
    { id: 'SP006', name: 'Nước suối Aquafina', category: 'Thực phẩm', unit: 'thùng', stock: 120, min: 30, status: 'Đủ hàng', sColor: '#10b981', pct: '75%' },
    { id: 'SP007', name: 'Mì tôm Hảo Hảo', category: 'Thực phẩm', unit: 'thùng', stock: 4, min: 20, status: '⚠ Thiếu hàng', sColor: '#ef4444', pct: '10%' },
  ];

  const cardStyle = { background: '#111827', borderRadius: '12px', padding: '20px', border: '1px solid #1f2937', flex: 1 };

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', color: '#f8fafc' }}>Báo Cáo Tồn Kho</h2>
        <span style={{ color: '#94a3b8', fontSize: '13px' }}>UC3 — Xem tồn kho hiện tại, lọc theo danh mục</span>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
        <div style={{ ...cardStyle, borderTop: '3px solid #8b5cf6' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>TỔNG MẶT HÀNG</div>
          <h3 style={{ color: 'white', fontSize: '28px', margin: '0 0 4px 0' }}>247</h3>
          <div style={{ color: '#94a3b8', fontSize: '13px' }}>Đang quản lý</div>
        </div>
        <div style={{ ...cardStyle, borderTop: '3px solid #10b981' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>CÒN ĐỦ HÀNG</div>
          <h3 style={{ color: 'white', fontSize: '28px', margin: '0 0 4px 0' }}>242</h3>
          <div style={{ color: '#94a3b8', fontSize: '13px' }}>Trên mức tối thiểu</div>
        </div>
        <div style={{ ...cardStyle, borderTop: '3px solid #ef4444' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>SẮP HẾT</div>
          <h3 style={{ color: 'white', fontSize: '28px', margin: '0 0 4px 0' }}>5</h3>
          <div style={{ color: '#94a3b8', fontSize: '13px' }}>Dưới mức tối thiểu</div>
        </div>
      </div>

      <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid #1f2937', padding: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input type="text" placeholder="Tìm theo tên hoặc mã sản phẩm..." style={{ flex: 1, background: '#1f2937', border: '1px solid #334155', color: 'white', padding: '10px 16px', borderRadius: '8px', outline: 'none' }} />
          <select style={{ background: '#1f2937', border: '1px solid #334155', color: 'white', padding: '10px 16px', borderRadius: '8px', outline: 'none' }}>
            <option>Tất cả danh mục</option>
          </select>
          <select style={{ background: '#1f2937', border: '1px solid #334155', color: 'white', padding: '10px 16px', borderRadius: '8px', outline: 'none' }}>
            <option>Tất cả trạng thái</option>
          </select>
          <button style={{ padding: '0 16px', background: '#1f2937', color: '#e2e8f0', border: '1px solid #334155', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}>Xuất Excel</button>
        </div>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #1f2937' }}>
              <th style={{ padding: '12px 0', fontWeight: '600' }}>MÃ SP</th>
              <th style={{ fontWeight: '600' }}>TÊN SẢN PHẨM</th>
              <th style={{ fontWeight: '600' }}>DANH MỤC</th>
              <th style={{ fontWeight: '600' }}>ĐVT</th>
              <th style={{ fontWeight: '600' }}>TỒN HIỆN TẠI</th>
              <th style={{ fontWeight: '600' }}>MỨC TỐI THIỂU</th>
              <th style={{ fontWeight: '600' }}>MỨC TỒN KHO</th>
              <th style={{ fontWeight: '600', textAlign: 'right' }}>TRẠNG THÁI</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((item, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1f2937', color: '#e2e8f0' }}>
                <td style={{ padding: '16px 0', color: '#60a5fa', fontWeight: '500' }}>{item.id}</td>
                <td style={{ fontWeight: '500' }}>{item.name}</td>
                <td style={{ color: '#94a3b8' }}>{item.category}</td>
                <td style={{ color: '#94a3b8' }}>{item.unit}</td>
                <td style={{ fontWeight: 'bold', color: item.sColor }}>{item.stock}</td>
                <td style={{ color: '#94a3b8' }}>{item.min}</td>
                <td>
                  {/* Progress Bar */}
                  <div style={{ width: '80px', height: '6px', background: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: item.pct, height: '100%', background: item.sColor, borderRadius: '3px' }}></div>
                  </div>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <span style={{ color: item.sColor, fontSize: '12px', fontWeight: '500' }}>{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockReport;