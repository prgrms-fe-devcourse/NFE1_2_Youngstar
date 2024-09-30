import { Link } from "react-router-dom";
import Follower from "../components/UserLive";
import Post from "../components/Post";
import '../styles/css/MainPage.css';

const MainPage = () => { 
    return (
        <div className="page-container">
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