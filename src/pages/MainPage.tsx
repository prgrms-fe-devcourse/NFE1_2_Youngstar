import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Follower from "../components/UserLive";
import Posts from "../components/Posts";
import "../styles/css/MainPage.css";
import { useAuth } from "../hooks/useAuth";
import { SearchContext } from '../components/Layout';
import useFetchPosts from "../hooks/useFetchPosts";
import axios from "axios";
import Post from "../types/Post";

const MainPage = () => {
  const { authUser, token } = useAuth();
  const navigate = useNavigate();
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const { searchQuery } = useContext(SearchContext);
  const [filteredPost, setFilteredPost] = useState<Post[]>([]);
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

  const searchItems = async () => {
    if (searchQuery.trim() === '') {
      setFilteredPost(data);
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/search/all/${searchQuery}`
      );

      const searchResults = response.data;
      const userPosts: Post[] = [];

      for (const result of searchResults) {
        if ('title' in result) {
          userPosts.push(result);
        } else if ('fullName' in result) {
          const userPostsResponse = await axios.get(
            `${import.meta.env.VITE_API_URL}/posts/author/${result._id}`
          );
          userPosts.push(...userPostsResponse.data);
          console.log(userPosts);
        }
      }
      setFilteredPost(userPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchItems();
  }, [searchQuery, data]);
  
  useEffect(() => {
    if (data) {
      setFilteredPost(data);
    }
  }, [data]);
  

  return (
    <div className="main-page-container">
      <Follower />
      <div className="post_area">
        <Posts posts={filteredPost.slice(0,20)}/>
      </div>
      <button className="post_add">
        <Link to={"/postform"}>+</Link>
      </button>
    </div>
  );
};

export default MainPage;