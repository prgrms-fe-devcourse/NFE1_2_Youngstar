import { Link } from "react-router-dom";
import Follower from "../components/Follower";
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
            <button className='post_add'>+</button>
        </div>
    )
}

export default MainPage;