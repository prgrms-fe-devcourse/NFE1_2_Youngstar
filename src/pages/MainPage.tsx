import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Follower from "../components/UserLive";
import Post from "../components/Post";
import "../styles/css/MainPage.css";
import useFetchUsers from "../hooks/useFetchUsers";
import { useAuth } from "../hooks/useAuth";

const MainPage = () => {
  const { authUser, token } = useAuth();
  const navigate = useNavigate();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  // 1003 추가 - 로그인 안한 상태면 메인페이지 접근 불가
  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthChecked) {
        const user = await authUser();
        if (!user) {
          alert("로그인이 필요합니다.");
          navigate("/loginPage");
        } else {
          setIsAuthChecked(true); // 인증 확인 완료로 상태 업데이트
        }
      }
    };

    checkAuth();
  }, [authUser, navigate, isAuthChecked]);

  return (
    <div className="page-container">
      <Follower />
      <div className="post_area">
        <Post />
      </div>
      <button className="post_add">
        <Link to={"/postform"}>+</Link>
      </button>
    </div>
  );
};

export default MainPage;
