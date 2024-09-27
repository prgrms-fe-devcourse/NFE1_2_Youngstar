import Layout from './components/Layout';
import ChatPage from './pages/ChatPage';
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
      { path: '/chatting', element: <ChatPage /> },
    ],
  },
];

export default routes;
