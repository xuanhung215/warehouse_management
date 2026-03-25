import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map status → màu
  const getStatusColor = (status, stock, min) => {
    if (stock <= min) return '#ef4444'; // Thiếu hàng
    if (status === 'Hoạt động') return '#10b981';
    return '#6b7280';
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div style={{ color: 'white', padding: 20 }}>Đang tải danh sách sản phẩm...</div>;
  }

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h2 style={{ marginBottom: '16px' }}>Danh sách sản phẩm</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ color: '#94a3b8', textAlign: 'left', borderBottom: '1px solid #334155' }}>
            <th style={{ padding: '12px 0' }}>MÃ SP</th>
            <th>TÊN SẢN PHẨM</th>
            <th>DANH MỤC</th>
            <th>ĐƠN VỊ</th>
            <th>TỒN KHO</th>
            <th>TỐI THIỂU</th>
            <th>TRẠNG THÁI</th>
            <th>THAO TÁC</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            const status = p.status || (p.current_stock <= p.min_stock ? 'Thiếu hàng' : 'Hoạt động');
            const color = getStatusColor(status, p.current_stock, p.min_stock);

            return (
              <tr key={p.id} style={{ borderBottom: '1px solid #1f2937' }}>
                <td style={{ padding: '12px 0', color: '#60a5fa' }}>{p.product_code}</td>
                <td>{p.product_name}</td>
                <td>{p.category}</td>
                <td>{p.unit}</td>
                <td>{p.current_stock}</td>
                <td>{p.min_stock}</td>
                <td>
                  <span
                    style={{
                      color,
                      background: 'rgba(15, 23, 42, 0.8)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      border: `1px solid ${color}`,
                    }}
                  >
                    {status}
                  </span>
                </td>
                <td>
                  <button
                    style={{
                      background: '#1d4ed8',
                      color: 'white',
                      border: 'none',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            );
          })}
          {products.length === 0 && (
            <tr>
              <td colSpan="8" style={{ padding: '16px 0', textAlign: 'center', color: '#9ca3af' }}>
                Chưa có sản phẩm nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;