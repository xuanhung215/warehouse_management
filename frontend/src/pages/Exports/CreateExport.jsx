import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateImport = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    receipt_code: '',
    import_date: '',
    supplier_id: '',
    note: '',
  });

  const [details, setDetails] = useState([
    { product_id: '', product_name: '', quantity: 1, price: 0 },
  ]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDetailChange = (index, field, value) => {
    setDetails((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  };

  const addRow = () => {
    setDetails((prev) => [...prev, { product_id: '', product_name: '', quantity: 1, price: 0 }]);
  };

  const removeRow = (index) => {
    setDetails((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: gọi API POST /api/imports
    console.log('Create import', { form, details });
    alert('Tạm thời mới log ra console, chưa gọi API.');
  };

  const cardStyle = {
    background: '#111827',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #1f2937',
  };

  const inputStyle = {
    background: '#020617',
    border: '1px solid #1f2937',
    borderRadius: '8px',
    padding: '8px 10px',
    color: 'white',
    fontSize: '14px',
    width: '100%',
  };

  return (
    <div style={{ padding: '20px', color: 'white', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0 }}>Tạo phiếu nhập kho</h2>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: '#1f2937',
            color: '#e5e7eb',
            border: '1px solid #374151',
            padding: '8px 14px',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          ← Quay lại
        </button>
      </div>

      {/* Thông tin chung */}
      <div style={cardStyle}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Thông tin phiếu nhập</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '13px', color: '#9ca3af', display: 'block', marginBottom: '6px' }}>
              Mã phiếu (PN-xxxx)
            </label>
            <input
              type="text"
              name="receipt_code"
              value={form.receipt_code}
              onChange={handleChange}
              placeholder="PN-0001"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ fontSize: '13px', color: '#9ca3af', display: 'block', marginBottom: '6px' }}>
              Ngày nhập
            </label>
            <input
              type="date"
              name="import_date"
              value={form.import_date}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ fontSize: '13px', color: '#9ca3af', display: 'block', marginBottom: '6px' }}>
              Nhà cung cấp (ID hoặc chọn sau)
            </label>
            <input
              type="text"
              name="supplier_id"
              value={form.supplier_id}
              onChange={handleChange}
              placeholder="Nhập ID NCC hoặc để trống"
              style={inputStyle}
            />
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <label style={{ fontSize: '13px', color: '#9ca3af', display: 'block', marginBottom: '6px' }}>
            Ghi chú
          </label>
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            rows={3}
            placeholder="Nhập định kỳ, nhập bổ sung..."
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>
      </div>

      {/* Chi tiết sản phẩm */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '16px' }}>Chi tiết sản phẩm</h3>
          <button
            type="button"
            onClick={addRow}
            style={{
              background: '#22c55e',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            + Thêm dòng
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #334155' }}>
              <th style={{ padding: '8px 0' }}>MÃ SP / ID</th>
              <th>TÊN SẢN PHẨM</th>
              <th>SỐ LƯỢNG</th>
              <th>ĐƠN GIÁ</th>
              <th>TỔNG</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {details.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ padding: '12px 0', textAlign: 'center', color: '#9ca3af' }}>
                  Chưa có dòng sản phẩm nào
                </td>
              </tr>
            ) : (
              details.map((row, index) => {
                const total = (Number(row.quantity) || 0) * (Number(row.price) || 0);
                return (
                  <tr key={index} style={{ borderBottom: '1px solid #1f2937' }}>
                    <td style={{ padding: '8px 0' }}>
                      <input
                        type="text"
                        value={row.product_id}
                        onChange={(e) => handleDetailChange(index, 'product_id', e.target.value)}
                        placeholder="ID / mã SP"
                        style={inputStyle}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={row.product_name}
                        onChange={(e) => handleDetailChange(index, 'product_name', e.target.value)}
                        placeholder="Tên SP (tùy chọn)"
                        style={inputStyle}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={row.quantity}
                        onChange={(e) => handleDetailChange(index, 'quantity', e.target.value)}
                        style={inputStyle}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        value={row.price}
                        onChange={(e) => handleDetailChange(index, 'price', e.target.value)}
                        style={inputStyle}
                      />
                    </td>
                    <td style={{ color: '#e5e7eb' }}>{total.toLocaleString('vi-VN')}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => removeRow(index)}
                        style={{
                          background: '#b91c1c',
                          color: 'white',
                          border: 'none',
                          padding: '6px 8px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              background: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '10px 18px',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Lưu phiếu nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateImport;