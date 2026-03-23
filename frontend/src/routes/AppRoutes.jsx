import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import ImportPage from "../pages/ImportPage";
import ExportPage from "../pages/ExportPage";
import StockPage from "../pages/StockPage";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/products" element={
        <ProtectedRoute><MainLayout><ProductPage /></MainLayout></ProtectedRoute>
      } />

      <Route path="/imports" element={
        <ProtectedRoute><MainLayout><ImportPage /></MainLayout></ProtectedRoute>
      } />

      <Route path="/exports" element={
        <ProtectedRoute><MainLayout><ExportPage /></MainLayout></ProtectedRoute>
      } />

      <Route path="/stock" element={
        <ProtectedRoute><MainLayout><StockPage /></MainLayout></ProtectedRoute>
      } />
    </Routes>
  );
}