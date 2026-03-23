import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Kiểm tra xem token có tồn tại trong localStorage không
  const isAuthenticated = !!localStorage.getItem('token');

  // Nếu đã đăng nhập, cho phép render các route con bên trong (Outlet)
  // Nếu chưa, điều hướng thẳng về trang /login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;