import { useAuth } from '../hooks/useAuth';
import { Navigation } from './Navigation/Navigation';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigation to={redirectTo} /> : Component;
};
