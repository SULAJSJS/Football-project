import { useSelector } from 'react-redux';
import { userSelector } from '../store/auth/selectors';

export const useAuth = () => {
  const { email, token, id } = useSelector(userSelector);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
