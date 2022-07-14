import { useRoutes } from 'react-router-dom';
import { Home } from '../components/home/Home';
import Test from '../components/test1/Tset';

export const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Test />
    },
    {
      path: 'home',
      element: <Home name="Home" />
    }
  ]);
};
