import axiosClient from './axiosClient';

const importApi = {
  // Lấy danh sách tất cả phiếu nhập
  getAll() {
    const url = '/imports';
    return axiosClient.get(url);
  },

  // Lấy chi tiết một phiếu nhập cụ thể (để làm chức năng "Xem chi tiết")
  getById(id) {
    const url = `/imports/${id}`;
    return axiosClient.get(url);
  },

  // Tạo phiếu nhập mới (Gửi thông tin chung và danh sách sản phẩm)
  create(data) {
    const url = '/imports';
    return axiosClient.post(url, data);
  }
};

export default importApi;