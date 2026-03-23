import axiosClient from './axiosClient';

const productApi = {
  // Lấy danh sách tất cả sản phẩm
  getAll() {
    const url = '/products';
    return axiosClient.get(url);
  },

  // Lấy chi tiết một sản phẩm theo ID
  getById(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  // Thêm mới sản phẩm
  add(data) {
    const url = '/products';
    return axiosClient.post(url, data);
  },

  // Cập nhật sản phẩm
  update(id, data) {
    const url = `/products/${id}`;
    return axiosClient.put(url, data);
  },

  // Xóa sản phẩm
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  }
};

export default productApi;