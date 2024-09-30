import DetailPage from './pages/DetailPage';
import Layout from './components/Layout';
import ChatPage from './pages/ChatPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage'
import NotificationPage from './pages/NotificationPage';
import PostFormPage from './pages/PostFormPage';
import StarredPage from './pages/StarredPage';
import APITest from './pages/APITest'; //테스트용
import SignupTest from './pages/SignupTest'; //테스트용

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/joinPage', element:<JoinPage/>},
      { path: '/loginpage', element: <LoginPage /> },
      { path: '/notification', element: <NotificationPage /> },
      { path: '/chatting', element: <ChatPage /> },
      { path: '/saved', element: <StarredPage /> },
      { path: '/detailpage', element: <DetailPage /> },
      { path: '/postform', element: <PostFormPage /> },
      { path: '/testapi', element: <APITest /> }, //테스트용 라우트 추가
      { path: '/signtest', element: <SignupTest /> },
    ],
  },
];

export default routes;
