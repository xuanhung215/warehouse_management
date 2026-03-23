/**
 * Định dạng số thành tiền tệ VNĐ
 * Ví dụ: 1500000 -> "1.500.000 đ"
 */
export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return '0 đ';
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

/**
 * Định dạng chuỗi ngày tháng từ Database (ISO) sang chuẩn Việt Nam
 * Ví dụ: "2026-03-20T00:00:00" -> "20/03/2026"
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};