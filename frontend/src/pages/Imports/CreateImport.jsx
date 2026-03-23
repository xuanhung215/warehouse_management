import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

const CreateImport = () => {
  const navigate = useNavigate();
  
  // 1. Quản lý thông tin chung của phiếu nhập 
  const [supplier, setSupplier] = useState('');
  const [note, setNote] = useState('');
  const [importDate, setImportDate] = useState(new Date().toISOString().split('T')[0]);

  // 2. Quản lý danh sách các dòng sản phẩm chi tiết 
  const [details, setDetails] = useState([
    { productId: '', quantity: 1, price: 0 } // Dòng mặc định đầu tiên
  ]);

  // Danh sách sản phẩm để hiển thị trong thẻ <select>
  const [productList, setProductList] = useState([]);

  // Lấy danh sách sản phẩm từ Backend Flask khi load trang [cite: 193]
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosClient.get('/products');
        setProductList(response.data || response);
      } catch (error) {
        console.error('Lỗi khi tải danh sách sản phẩm:', error);
      }
    };
    fetchProducts();
  }, []);

  // Hàm thêm một dòng sản phẩm mới
  const handleAddRow = () => {
    setDetails([...details, { productId: '', quantity: 1, price: 0 }]);
  };

  // Hàm xóa một dòng sản phẩm
  const handleRemoveRow = (indexToRemove) => {
    setDetails(details.filter((_, index) => index !== indexToRemove));
  };

  // Hàm cập nhật dữ liệu khi người dùng nhập vào một dòng cụ thể 
  const handleDetailChange = (index, field, value) => {
    const newDetails = [...details];
    newDetails[index][field] = value;
    setDetails(newDetails);
  };

  // Hệ thống tự động tính tổng tiền phiếu nhập 
  const calculateTotal = () => {
    return details.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

  // Hàm xử lý khi nhấn "Lưu phiếu nhập" [cite: 83]
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate cơ bản
    if (!supplier) {
      alert('Vui lòng nhập tên nhà cung cấp!');
      return;
    }
    const hasInvalidDetails = details.some(d => !d.productId || d.quantity <= 0 || d.price < 0);
    if (hasInvalidDetails) {
      alert('Vui lòng kiểm tra lại sản phẩm, số lượng và đơn giá!'); [cite, 87]
      return;
    }

    // Chuẩn bị payload gửi lên Backend Flask
    const payload = {
      date: importDate,
      supplier: supplier,
      note: note,
      items: details.map(d => ({
        product_id: d.productId,
        quantity: Number(d.quantity),
        price: Number(d.price)
      }))
    };

    try {
      // Gửi request POST đến API /api/imports [cite: 230]
      await axiosClient.post('/imports', payload);
      alert('Lưu phiếu nhập thành công!');
      navigate('/imports'); // Điều hướng về danh sách phiếu nhập
    } catch (error) {
      console.error('Lỗi khi lưu phiếu nhập:', error);
      alert('Có lỗi xảy ra khi lưu phiếu nhập!');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Tạo Phiếu Nhập Kho</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Phần thông tin chung */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Ngày nhập:</label>
            <input type="date" value={importDate} onChange={(e) => setImportDate(e.target.value)} style={{ width: '100%', padding: '8px' }} required />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Nhà cung cấp:</label>
            <input type="text" value={supplier} onChange={(e) => setSupplier(e.target.value)} placeholder="Nhập tên nhà cung cấp..." style={{ width: '100%', padding: '8px' }} required />
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Ghi chú:</label>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} rows="3" style={{ width: '100%', padding: '8px' }}></textarea>
          </div>
        </div>

        <hr style={{ margin: '20px 0' }} />

        {/* Phần chi tiết các dòng sản phẩm */}
        <h3>Chi tiết sản phẩm nhập</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
          <thead>
            <tr style={{ background: '#ecf0f1' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Sản phẩm</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Số lượng</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Đơn giá (VNĐ)</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Thành tiền</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {details.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '5px' }}>
                  <select 
                    value={item.productId} 
                    onChange={(e) => handleDetailChange(index, 'productId', e.target.value)}
                    style={{ width: '100%', padding: '8px' }}
                    required
                  >
                    <option value="">-- Chọn sản phẩm --</option>
                    {productList.map(p => (
                      <option key={p.id} value={p.id}>{p.product_code} - {p.product_name}</option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '5px' }}>
                  <input type="number" min="1" value={item.quantity} onChange={(e) => handleDetailChange(index, 'quantity', e.target.value)} style={{ width: '100%', padding: '8px' }} required />
                </td>
                <td style={{ padding: '5px' }}>
                  <input type="number" min="0" value={item.price} onChange={(e) => handleDetailChange(index, 'price', e.target.value)} style={{ width: '100%', padding: '8px' }} required />
                </td>
                <td style={{ padding: '5px', fontWeight: 'bold' }}>
                  {(item.quantity * item.price).toLocaleString()} đ
                </td>
                <td style={{ padding: '5px', textAlign: 'center' }}>
                  {details.length > 1 && (
                    <button type="button" onClick={() => handleRemoveRow(index)} style={{ padding: '6px 10px', background: '#e74c3c', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>Xóa</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="button" onClick={handleAddRow} style={{ padding: '8px 15px', background: '#3498db', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px', marginBottom: '20px' }}>
          + Thêm dòng sản phẩm
        </button>

        <div style={{ textAlign: 'right', fontSize: '1.2em', marginBottom: '20px' }}>
          <strong>Tổng tiền phiếu nhập: <span style={{ color: '#27ae60' }}>{calculateTotal().toLocaleString()} VNĐ</span></strong>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button type="button" onClick={() => navigate('/imports')} style={{ padding: '10px 20px', background: '#95a5a6', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>Hủy</button>
          <button type="submit" style={{ padding: '10px 20px', background: '#2ecc71', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>Lưu Phiếu Nhập</button>
        </div>
      </form>
    </div>
  );
};

export default CreateImport;