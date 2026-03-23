import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExportList = () => {
  const navigate = useNavigate();

  const fakeData = [
    { id: 'PX-0153', date: '17/03/2025', reason: 'Bán hàng', reasonColor: '#10b981', items: 4, total: '2,450,000đ' },
    { id: 'PX-0152', date: '16/03/2025', reason: 'Chuyển kho', reasonColor: '#f59e0b', items: 2, total: '880,000đ' },
    { id: 'PX-0151', date: '15/03/2025', reason: 'Hủy hàng lỗi', reasonColor: '#ef4444', items: 1, total: '150,000đ' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', color: '#f8fafc' }}>Phiếu Xuất Kho</h2>
          <span style={{ color: '#94a3b8', fontSize: '13px' }}>UC2 — Ghi nhận hàng hóa xuất ra khỏi kho</span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ padding: '8px 16px', background: '#1f2937', color: '#e2e8f0', border: '1px solid #334155', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Lịch sử</button>
          <button onClick={() => navigate('/exports/create')} style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>+ Tạo phiếu xuất</button>
        </div>
      </div>

      <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid #1f2937', padding: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #1f2937' }}>
              <th style={{ padding: '12px 0', fontWeight: '600' }}>MÃ PHIẾU</th>
              <th style={{ fontWeight: '600' }}>NGÀY XUẤT</th>
              <th style={{ fontWeight: '600' }}>LÝ DO XUẤT</th>
              <th style={{ fontWeight: '600' }}>SỐ DÒNG SP</th>
              <th style={{ fontWeight: '600' }}>TỔNG TIỀN</th>
              <th style={{ fontWeight: '600' }}>TRẠNG THÁI</th>
              <th style={{ fontWeight: '600' }}>THAO TÁC</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((item, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1f2937', color: '#e2e8f0' }}>
                <td style={{ padding: '16px 0', color: '#60a5fa', fontWeight: '500' }}>{item.id}</td>
                <td>{item.date}</td>
                <td>
                  <span style={{ border: `1px solid ${item.reasonColor}`, color: item.reasonColor, padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', background: `${item.reasonColor}15` }}>
                    {item.reason}
                  </span>
                </td>
                <td>{item.items}</td>
                <td style={{ fontWeight: '600' }}>{item.total}</td>
                <td>
                  <span style={{ border: '1px solid #3b82f6', color: '#60a5fa', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>Hoàn thành</span>
                </td>
                <td><button style={{ background: '#1f2937', color: '#e2e8f0', border: '1px solid #334155', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Xem</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExportList;