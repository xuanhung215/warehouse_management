import axiosClient from './axiosClient';

const authApi = {
  /**
   * Gửi request đăng nhập
   * @param {Object} credentials - Chứa username và password
   * @returns {Promise} - Kết quả trả về từ server (token, user info...)
   */
  login(credentials) {
    const url = '/login';
    return axiosClient.post(url, credentials);
  },

  /**
   * (Mở rộng thêm) Có thể viết sẵn hàm lấy thông tin user hiện tại
   * nếu backend của bạn có hỗ trợ route /profile
   */
  getProfile() {
    const url = '/profile';
    return axiosClient.get(url);
  }
};

export default authApi;