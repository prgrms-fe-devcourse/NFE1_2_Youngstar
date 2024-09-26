import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NotificationPage from './pages/NotificationPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/notification', element: <NotificationPage /> },
    ],
  },
];

export default routes;
