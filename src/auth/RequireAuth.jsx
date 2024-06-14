import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./useAuth";

export default function RequireAuth({ authRoute }) {
  const { authorized } = useAuth();
  const location = useLocation();

  return authorized() ? (
    <Outlet />
  ) : (
    <Navigate to={authRoute} state={{ from: location }} replace />
  );
}
