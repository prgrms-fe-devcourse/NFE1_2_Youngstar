import { useEffect, useState } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/css/Post.css'
import Comments from '../assets/comments_btn.png';
import Scrap from '../assets/scrap_btn.png';
import { Link, useNavigate } from 'react-router-dom';
import Post from '../types/Post';
import axios from 'axios';
import Like from '../types/Like';
import Liked from '../assets/Liked.png'
import notLiked from '../assets/notLiked.png'


interface PostsProps {
    posts: Post[];
}

const Posts = ({ posts }: PostsProps) => {
    const [postList, setPostList] = useState<Post[]>(posts);
    const token = localStorage.getItem('token');
    const handleLike = async (postId: string) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/likes/create`,
                { postId },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            
            if (response.status === 200) {
                setPostList((prevPosts) => 
                    prevPosts.map(post => 
                        post._id === postId ? { ...post, likes: [...post.likes, response.data] } : post
                    )
                );
            }
        } catch (error) {
            console.error('좋아요 실패:', error);
        }
    };

    const handleUnlike = async (likeId: string) => {
        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/likes/delete`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                    data: {id: likeId}
                }
            );
            // 좋아요 취소 성공 시 포스트 목록 업데이트
            if (response.status === 200) {
                setPostList((prevPosts) => 
                    prevPosts.map(post => {
                        const updatedLikes = post.likes.filter(like => like._id !== likeId);
                        return { ...post, likes: updatedLikes };
                    })
                );
            }
        } catch (error) {
            console.error('좋아요 취소 실패:', error);
        }
    };

    useEffect(() => {
        setPostList(posts);
    }, [posts]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const navigate = useNavigate();

    const handleClickUser = (id: String) => {
        navigate(`/mypage/${id}`);
    }

    const handleClickPost = (id: String) => {
        navigate(`/detailpage/${id}`);
    }

    const userId = JSON.parse(localStorage.getItem('user') || '')._id;

    const handleClickLike = (post: Post) => {
        const myLike = post.likes.find((like: Like) =>  like.user === userId);
        if(myLike) handleUnlike(myLike._id);
        else handleLike(post._id);
    }

    const isPostLiked = (post: Post) => {
        return post.likes.some((like: Like) => like.user === userId);
    };

    return (
            <>
                {
                    postList.map((post, idx) => (
                        <div className='user_post' key={idx}>
                            <div className='user_info' onClick={() =>handleClickUser(post.author._id)}>
                                <p>
                                    <img src={post.author.image || '/default.jpg'} alt="" className='user_profile'/>
                                    <span className='user_nickname'>{post.author.fullName}</span>
                                </p>
                                <button className='follow_btn'>
                                    {post.author.followers.find((followerId: string) => followerId === userId) ? 'following' : 'follow'}
                                </button>

                            </div>
                            <div onClick={() => handleClickPost(post._id)}>
                                <Slider {...settings}>
                                    <img src={post.image} alt="User post" className='user_picture' />
                                </Slider>
                                <p className='user_text'>
                                    {post.title}
                                </p>
                            </div>
                            <ul className='buttons'>
                                    <li className='like'>
                                        <button 
                                            className='like_btn'
                                            onClick={() =>handleClickLike(post)}
                                            >
                                            <img src={isPostLiked(post) ? Liked : notLiked} alt="" />
                                        </button>
                                        <span className='like_cnt'>{post.likes.length}</span>
                                    </li>
                                    <li className='comments'>
                                        <button className='comments_btn' onClick={() => handleClickPost(post._id)}>
                                            <img src={Comments} alt="" />
                                        </button>
                                        <span className='comments_cnt'>{post.comments.length}</span>
                                    </li>
                                    <li className='scrap'>
                                        <button className='scrap_btn'>
                                            <Link to={'/starredpage'}>
                                                <img src={Scrap} alt="" />
                                            </Link>
                                        </button>
                                    </li>
                                </ul>
                        </div>
                    ))
                }
                
            </>
            
    );
};

export default Posts;