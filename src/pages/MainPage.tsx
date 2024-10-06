import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Follower from "../components/UserLive";
import Posts from "../components/Posts";
import "../styles/css/MainPage.css";
import { useAuth } from "../hooks/useAuth";
import useFetchPosts from "../hooks/useFetchPosts";

const MainPage = () => {
  const { authUser, token } = useAuth();
  const navigate = useNavigate();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const { pathname } = useLocation();

  // 1003 추가 - 로그인 안한 상태면 메인페이지 접근 불가
  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthChecked) {
        const user = await authUser();
        if (!user) {
          alert("로그인이 필요합니다.");
          navigate("/loginPage", {state: pathname});
        } else {
          setIsAuthChecked(true); // 인증 확인 완료로 상태 업데이트
        }
      }
    };

    checkAuth();
  }, [authUser, navigate, isAuthChecked, pathname]);

  const { data } = useFetchPosts();

  return (
    <div className="main-page-container">
      <Follower />
      <div className="post_area">
        <Posts posts={data}/>
      </div>
      <button className="post_add">
        <Link to={"/postform"}>+</Link>
      </button>
    </div>
  );
};

export default MainPage;
