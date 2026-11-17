import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <div style={{ padding: 48 }}>Loading…</div>;
  if (!user) return <Navigate to="/app/login" replace state={{ from: location.pathname }} />;
  return <Outlet />;
};
