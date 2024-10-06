import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/css/HotPost.css'
import useFetchPosts from '../hooks/useFetchPosts';
import Post from '../types/Post';
import Posts from '../components/Posts';

const HotPost = () => {
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