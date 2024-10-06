import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/css/HotPost.css'
import Like from '../assets/like_btn.png';
import Comments from '../assets/comments_btn.png';
import Scrap from '../assets/scrap_btn.png';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import useFetchPosts from '../hooks/useFetchPosts';
import Post from '../types/Post';
import Posts from '../components/Posts';

const HotPost = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const { data } = useFetchPosts();
    const [postList, setPostList] = useState<Post[]>([]);
    
    useEffect(() => {
      setPostList(data);
    }, [data]);
    
    const hotPosts = postList.slice().sort((a, b) => b.likes.length - a.likes.length).slice(0, 10);
    console.log(hotPosts);
    

    return (
        <div className='hot_post'>
            <div className='hot_post_container'>
                <Posts posts={hotPosts} />
            </div>
        </div>
    );
};

export default HotPost;