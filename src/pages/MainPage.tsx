import { Link } from "react-router-dom";
import Follower from "../components/UserLive";
import Post from "../components/Post";
import '../styles/css/MainPage.css';
// import APITest from './APITest'; // 테스트

const MainPage = () => { 
    return (

        <div className="page-container">
            {/* <APITest /> 테스트 : 기능 구현되면 삭제 */}
            <Follower />
            <div className='post_area'>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <button className='post_add'>
                <Link to={'/postform'}>+</Link>
            </button>
        </div>
    )
}

export default MainPage;