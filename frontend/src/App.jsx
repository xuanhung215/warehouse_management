import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

import Login from './pages/Auth/Login';
import NotFound from './pages/NotFound'; // Trang 404

import Dashboard from './pages/DashBoard';
import ImportList from './pages/Imports/ImportList';
import CreateImport from './pages/Imports/CreateImport';
import ExportList from './pages/Exports/ExportList';
import CreateExport from './pages/Exports/CreateExport';
import ProductList from './pages/Products/ProductList';
import ProductForm from './pages/Products/ProductForm';
import StockReport from './pages/Reports/StockReport';
import Supplier from './pages/Suppliers/SupplierList';


// Các component giả lập cho các trang chưa code 

function App() {
  return (
    <Router>
      <Routes>
        {/* Route không yêu cầu layout chung */}
        <Route path="/login" element={<Login />} />

        {/* Các route yêu cầu đã đăng nhập, được bọc trong MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductList />} />
          <Route path="imports" element={<ImportList />} />
          <Route path="exports" element={<ExportList />} /> 
          <Route path="reports/stock" element={<StockReport />} />
          <Route path="suppliers" element={<Supplier />} />
          <Route path="products/new" element={<ProductForm />} />
          <Route path="products/:id/edit" element={<ProductForm />} />
          <Route path="imports/create" element={<CreateImport />} />
          <Route path="exports/create" element={<CreateExport />} />
          <Route path="*" element={<NotFound />} /> {/* Route cho trang 404 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;