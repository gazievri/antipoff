import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoutes = () => {
  const isLogged = useSelector((state) => state.auth.loggedIn);
  return isLogged ? <Outlet /> : <Navigate to="/sign-in" />;
};
