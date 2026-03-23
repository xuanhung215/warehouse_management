import React from 'react';

const SupplierList = () => {
  const fakeData = [
    { id: 'NCC001', name: 'Công ty Bình An', phone: '0901 234 567', address: 'Q.1, TP.HCM', imports: 48 },
    { id: 'NCC002', name: 'NCC Minh Đức', phone: '0912 345 678', address: 'Bình Dương', imports: 22 },
    { id: 'NCC003', name: 'Cty TNHH Hà Nội', phone: '024 3826 5555', address: 'Hà Nội', imports: 15 },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', color: '#f8fafc' }}>Nhà Cung Cấp</h2>
          <span style={{ color: '#94a3b8', fontSize: '13px' }}>Danh sách nhà cung cấp</span>
        </div>
        <button style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>+ Thêm nhà CC</button>
      </div>

      <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid #1f2937', padding: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #1f2937' }}>
              <th style={{ padding: '12px 0', fontWeight: '600' }}>MÃ NCC</th>
              <th style={{ fontWeight: '600' }}>TÊN NHÀ CUNG CẤP</th>
              <th style={{ fontWeight: '600' }}>LIÊN HỆ</th>
              <th style={{ fontWeight: '600' }}>ĐỊA CHỈ</th>
              <th style={{ fontWeight: '600' }}>SỐ PHIẾU NHẬP</th>
              <th style={{ fontWeight: '600' }}>THAO TÁC</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((item, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1f2937', color: '#e2e8f0' }}>
                <td style={{ padding: '16px 0', color: '#60a5fa', fontWeight: '500' }}>{item.id}</td>
                <td style={{ fontWeight: '600' }}>{item.name}</td>
                <td style={{ color: '#94a3b8' }}>{item.phone}</td>
                <td style={{ color: '#94a3b8' }}>{item.address}</td>
                <td>{item.imports}</td>
                <td><button style={{ background: '#1f2937', color: '#e2e8f0', border: '1px solid #334155', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Xem</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierList;