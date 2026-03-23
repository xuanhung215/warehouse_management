import React from 'react';

const ProductList = () => {
  const fakeData = [
    { id: 'SP001', name: 'Gạo ST25', category: 'Thực phẩm', unit: 'kg', stock: 350, min: 50, status: 'Hoạt động', sColor: '#10b981' },
    { id: 'SP002', name: 'Dầu ăn Neptune 1L', category: 'Thực phẩm', unit: 'chai', stock: 82, min: 20, status: 'Hoạt động', sColor: '#10b981' },
    { id: 'SP003', name: 'Nước mắm Chinsu 500ml', category: 'Thực phẩm', unit: 'lọ', stock: 3, min: 10, status: 'Thiếu hàng', sColor: '#ef4444' },
    { id: 'SP004', name: 'Quạt điện Panasonic', category: 'Điện tử', unit: 'cái', stock: 15, min: 5, status: 'Hoạt động', sColor: '#10b981' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', color: '#f8fafc' }}>Quản Lý Sản Phẩm</h2>
          <span style={{ color: '#94a3b8', fontSize: '13px' }}>UC5 — Thêm / sửa thông tin sản phẩm</span>
        </div>
        <button style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>+ Thêm sản phẩm</button>
      </div>

      <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid #1f2937', padding: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #1f2937' }}>
              <th style={{ padding: '12px 0', fontWeight: '600' }}>MÃ SP</th>
              <th style={{ fontWeight: '600' }}>TÊN SẢN PHẨM</th>
              <th style={{ fontWeight: '600' }}>DANH MỤC</th>
              <th style={{ fontWeight: '600' }}>ĐƠN VỊ</th>
              <th style={{ fontWeight: '600' }}>TỒN KHO</th>
              <th style={{ fontWeight: '600' }}>TỐI THIỂU</th>
              <th style={{ fontWeight: '600' }}>TRẠNG THÁI</th>
              <th style={{ fontWeight: '600' }}>THAO TÁC</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((item, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1f2937', color: '#e2e8f0' }}>
                <td style={{ padding: '16px 0', color: '#60a5fa', fontWeight: '500' }}>{item.id}</td>
                <td style={{ fontWeight: '500' }}>{item.name}</td>
                <td style={{ color: '#94a3b8' }}>{item.category}</td>
                <td style={{ color: '#94a3b8' }}>{item.unit}</td>
                <td>{item.stock}</td>
                <td>{item.min}</td>
                <td>
                  <span style={{ border: `1px solid ${item.sColor}50`, color: item.sColor, padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', background: `${item.sColor}10` }}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: 'transparent', color: '#94a3b8', border: '1px solid #334155', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Sửa</button>
                    <button style={{ background: 'transparent', color: '#ef4444', border: '1px solid #ef444450', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Xóa</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;