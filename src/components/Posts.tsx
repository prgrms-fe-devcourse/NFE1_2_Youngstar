import { useEffect, useState } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/css/Post.css'
import Like from '../assets/like_btn.png';
import Comments from '../assets/comments_btn.png';
import Scrap from '../assets/scrap_btn.png';
import { Link, useNavigate } from 'react-router-dom';
import Post from '../types/Post';

interface PostsProps {
    posts: Post[];
}

const Posts = ({ posts }: PostsProps) => {
    const [postList, setPostList] = useState<Post[]>(posts);

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
                                <ul className='buttons'>
                                    <li className='like'>
                                        <button className='like_btn'>
                                            <img src={Like} alt="" />
                                        </button>
                                        <span className='like_cnt'>{post.likes.length}</span>
                                    </li>
                                    <li className='comments'>
                                        <button className='comments_btn'>
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
                        </div>
                    ))
                }
                
            </>
            
    );
};

export default Posts;