import DetailPage from './pages/DetailPage';
import Layout from './components/Layout';
import ChatPage from './pages/ChatPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';
import NotificationPage from './pages/NotificationPage';
import PostFormPage from './pages/PostFormPage';
import StarredPage from './pages/StarredPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/loginpage', element: <LoginPage /> },
      { path: '/notification', element: <NotificationPage /> },
      { path: '/chatting', element: <ChatPage /> },
      { path: '/saved', element: <StarredPage /> },
      { path: '/detailpage', element: <DetailPage /> },
      { path: '/postform', element: <PostFormPage /> },
    ],
  },
];

export default routes;
