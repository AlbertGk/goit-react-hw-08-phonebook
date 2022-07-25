import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

export const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const userRequestStatus = useSelector(state => state.users.user.status);
  const isUserAuthenticated = useSelector(
    state => state.users.user.isUserAuthenticated
  );
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('jwt_token');

    if (!authToken) {
      navigate('/login', { replace: true });
    }
    //eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate('/login');
    }
    //eslint-disable-next-line
  }, [isUserAuthenticated]);

  if (userRequestStatus === 'fetching') {
    return 'Loading...';
  }

  return <Outlet />;
};
