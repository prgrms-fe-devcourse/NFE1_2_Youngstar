import { useState, useEffect } from "react";
import axios from "axios";
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
            </div>
            <button className='post_add'>
                <Link to={'/postform'}>+</Link>
            </button>
        </div>
    )
}

export default MainPage;