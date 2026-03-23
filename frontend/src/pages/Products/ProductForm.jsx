import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Lấy ID từ URL nếu đang ở chế độ Sửa

  const [formData, setFormData] = useState({
    product_code: '',
    product_name: '',
    category: '',
    unit: '',
    min_stock: 10
  });

  // Nếu có ID (chế độ sửa), tải thông tin sản phẩm cũ
  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axiosClient.get(`/products/${id}`);
          setFormData(response.data || response);
        } catch (error) {
          alert('Không tìm thấy thông tin sản phẩm!');
          navigate('/products');
        }
      };
      fetchProduct();
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Cập nhật sản phẩm hiện có
        await axiosClient.put(`/products/${id}`, formData);
        alert('Cập nhật sản phẩm thành công!');
      } else {
        // Thêm sản phẩm mới
        await axiosClient.post('/products', formData);
        alert('Thêm sản phẩm mới thành công!');
      }
      navigate('/products'); // Trở về danh sách
    } catch (error) {
      console.error('Lỗi khi lưu sản phẩm:', error);
      alert('Có lỗi xảy ra, vui lòng kiểm tra lại (có thể trùng mã sản phẩm).');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>{id ? 'Cập Nhật Sản Phẩm' : 'Thêm Mới Sản Phẩm'}</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Mã Sản Phẩm:</label>
          <input type="text" name="product_code" value={formData.product_code} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} disabled={!!id} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Tên Sản Phẩm:</label>
          <input type="text" name="product_name" value={formData.product_name} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Danh Mục:</label>
          <select name="category" value={formData.category} onChange={handleChange} required style={{ width: '100%', padding: '8px' }}>
            <option value="">-- Chọn danh mục --</option>
            <option value="Đồ uống">Đồ uống</option>
            <option value="Thực phẩm">Thực phẩm</option>
            <option value="Gia dụng">Gia dụng</option>
            <option value="Khác">Khác</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Đơn vị tính:</label>
            <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Ví dụ: Thùng, Cái, Lốc" required style={{ width: '100%', padding: '8px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Tồn tối thiểu:</label>
            <input type="number" name="min_stock" min="0" value={formData.min_stock} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button type="button" onClick={() => navigate('/products')} style={{ padding: '10px 20px', background: '#95a5a6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hủy</button>
          <button type="submit" style={{ padding: '10px 20px', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Lưu Sản Phẩm</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;