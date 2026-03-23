/**
 * Kiểm tra xem trường dữ liệu có bị bỏ trống hay không
 */
export const isRequired = (value) => {
  if (value === null || value === undefined) return false;
  return value.toString().trim().length > 0;
};

/**
 * Kiểm tra xem giá trị có phải là số dương hợp lệ (dùng cho số lượng, đơn giá)
 */
export const isPositiveNumber = (value) => {
  const num = Number(value);
  return !isNaN(num) && num > 0;
};

/**
 * Kiểm tra tính hợp lệ của danh sách chi tiết (phiếu nhập/xuất)
 * Yêu cầu: Phải có ít nhất 1 dòng, sản phẩm không được rỗng, số lượng > 0
 */
export const isValidReceiptDetails = (details) => {
  if (!details || details.length === 0) return false;
  
  return details.every(item => 
    isRequired(item.productId) && 
    isPositiveNumber(item.quantity)
  );
};