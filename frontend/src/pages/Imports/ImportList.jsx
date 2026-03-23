import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImportList = () => {
  const navigate = useNavigate();

  const fakeData = [
    { id: 'PN-0241', date: '17/03/2025', supplier: 'Công ty Bình An', items: 5, total: '12,500,000đ', note: 'Nhập định kỳ tuần' },
    { id: 'PN-0240', date: '16/03/2025', supplier: 'NCC Minh Đức', items: 3, total: '8,750,000đ', note: '—' },
    { id: 'PN-0239', date: '15/03/2025', supplier: 'Cty TNHH Hà Nội', items: 8, total: '3,200,000đ', note: 'Bổ sung khẩn cấp' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', color: '#f8fafc' }}>Phiếu Nhập Kho</h2>
          <span style={{ color: '#94a3b8', fontSize: '13px' }}>UC1 — Ghi nhận hàng hóa nhập vào kho</span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ padding: '8px 16px', background: '#1f2937', color: '#e2e8f0', border: '1px solid #334155', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Lịch sử</button>
          <button onClick={() => navigate('/imports/create')} style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>+ Tạo phiếu nhập</button>
        </div>
      </div>

      <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid #1f2937', padding: '20px' }}>
        <input type="text" placeholder="Tìm theo mã phiếu, nhà cung cấp..." style={{ background: '#1f2937', border: '1px solid #334155', color: 'white', padding: '10px 16px', borderRadius: '8px', width: '300px', marginBottom: '20px', outline: 'none' }} />
        
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #1f2937' }}>
              <th style={{ padding: '12px 0', fontWeight: '600' }}>MÃ PHIẾU</th>
              <th style={{ fontWeight: '600' }}>NGÀY NHẬP</th>
              <th style={{ fontWeight: '600' }}>NHÀ CUNG CẤP</th>
              <th style={{ fontWeight: '600' }}>SỐ DÒNG SP</th>
              <th style={{ fontWeight: '600' }}>TỔNG TIỀN</th>
              <th style={{ fontWeight: '600' }}>GHI CHÚ</th>
              <th style={{ fontWeight: '600' }}>THAO TÁC</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((item, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1f2937', color: '#e2e8f0' }}>
                <td style={{ padding: '16px 0', color: '#60a5fa', fontWeight: '500' }}>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.supplier}</td>
                <td>{item.items}</td>
                <td style={{ fontWeight: '600' }}>{item.total}</td>
                <td style={{ color: '#94a3b8' }}>{item.note}</td>
                <td><button style={{ background: '#1f2937', color: '#e2e8f0', border: '1px solid #334155', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Xem</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportList;