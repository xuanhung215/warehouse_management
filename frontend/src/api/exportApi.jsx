import axiosClient from './axiosClient';

const exportApi = {
  // Lấy danh sách tất cả phiếu xuất
  getAll() {
    const url = '/exports';
    return axiosClient.get(url);
  },

  // Lấy chi tiết một phiếu xuất cụ thể
  getById(id) {
    const url = `/exports/${id}`;
    return axiosClient.get(url);
  },

  // Tạo phiếu xuất mới (Backend sẽ kiểm tra tồn kho tại bước này)
  create(data) {
    const url = '/exports';
    return axiosClient.post(url, data);
  }
};

export default exportApi;