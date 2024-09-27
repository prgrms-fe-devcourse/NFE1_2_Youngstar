import Layout from './components/Layout';
import ChatPage from './pages/ChatPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NotificationPage from './pages/NotificationPage';
import StarredPage from './pages/StarredPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/notification', element: <NotificationPage /> },
      { path: '/chatting', element: <ChatPage /> },
      { path: '/saved', element: <StarredPage /> },
    ],
  },
];

export default routes;
