import axiosClient from './axiosClient';

const stockApi = {
  /**
   * Lấy danh sách báo cáo tồn kho hiện tại của tất cả sản phẩm
   * Thường backend sẽ tính toán: Tồn = Tổng Nhập - Tổng Xuất
   */
  getReport() {
    const url = '/stock';
    return axiosClient.get(url);
  },

  /**
   * (Mở rộng thêm) Lấy lịch sử xuất/nhập (thẻ kho) của riêng 1 sản phẩm
   * Rất hữu ích khi Chủ cửa hàng muốn biết tại sao tồn kho lại bị sai
   */
  getProductHistory(productId) {
    const url = `/stock/history/${productId}`;
    return axiosClient.get(url);
  }
};

export default stockApi;