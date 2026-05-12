import { createBrowserRouter } from 'react-router-dom';

import Confirmation from '../pages/Confirmation/Confirmation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Order from '../pages/Order/Order';
import Passengers from '../pages/Passengers/Passengers';
import Payment from '../pages/Payment/Payment';
import Seats from '../pages/Seats/Seats';
import Trains from '../pages/Trains/Trains';

import Layout from '../components/Layout/Layout';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'confirmation', element: <Confirmation /> },
      { path: 'order', element: <Order /> },
      { path: 'passengers', element: <Passengers /> },
      { path: 'payment', element: <Payment /> },
      { path: 'trains', element: <Trains /> },
      { path: 'seats', element: <Seats /> },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL }); // 'base' vite

export default router;
