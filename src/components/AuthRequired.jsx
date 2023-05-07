import { Navigate, Outlet, useLocation } from 'react-router-dom';

function AuthRequired() {
  const location = useLocation();
  const pathname = location.pathname;
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  // const isLoggedIn = true;

  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ message: 'You must login first', pathname }}
      />
    );
  }

  return <Outlet />;
}

export default AuthRequired;
