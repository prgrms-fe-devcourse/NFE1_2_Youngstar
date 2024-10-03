import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/css/Post.css'
import Like from '../assets/like_btn.png';
import Comments from '../assets/comments_btn.png';
import Scrap from '../assets/scrap_btn.png';
import { Link } from 'react-router-dom';

const Post = () => {
    // 슬라이드 셋팅
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    interface User {
        "coverImage": string, // 커버 이미지
        "image": string, // 프로필 이미지
        "role": string,
        "emailVerified": Boolean, // 사용되지 않음
        "banned": Boolean, // 사용되지 않음
        "isOnline": Boolean,
        "posts": Post[],
        "likes": Like[],
        "comments": string[],
        "followers": [],
        "following": [
          {
            "_id": "6169e91316cb2265df003c6d",
            "user": "6169e58216cb2265df003bf4",
            "follower": "6169e206aa57d952c6dc1edd",
            "createdAt": "2021-10-15T20:48:19.816Z",
            "updatedAt": "2021-10-15T20:48:19.816Z",
            "__v": 0
          }
        ],
        "notifications": Notification[],
        "messages": Message[],
        "_id": string,
        "fullName": string,
        "email": string,
        "createdAt": string,
        "updatedAt": string
    }

    interface Like {
        "_id": string,
        "user": String, // 사용자 id
        "post": String, // 포스트 id
        "createdAt": string,
        "updatedAt": string
    }

    interface Message {
        "_id": string,
        "message": string,
        "sender": User,
        "receiver": User,
        "seen": Boolean,
        "createdAt": string,
        "updatedAt": string
    }

    interface Channel {
        "authRequired": Boolean, // 사용되지 않음
        "posts": string[],
        "_id": string,
        "name": string,
        "description": string,
        "createdAt": string,
        "updatedAt": string
    }

    interface Post {
        "likes": Like[],
        "comments": Comment[],
        "_id": string,
        "image"?: string,
        "imagePublicId"?: string,
        "title": string,
        "channel": Channel,
        "author": User,
        "createdAt": string,
        "updatedAt": string,
        "__v": string
    }

    const [postList, setPostList] = useState<Post[]>([]);

    useEffect(() => {
        const loadPostData = async() => {
            try {
                const response = await axios.get('https://kdt.frontend.5th.programmers.co.kr:5006/posts/channel/65a7badc09191705e1d459bf');
                setPostList(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error)
            }
        }
        loadPostData();
    },[]);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2ZmNiODU4YzczNjllMzdiZTMxNTA2NiIsImVtYWlsIjoiYXVkc2tkQGdtYWlsLmNvbSJ9LCJpYXQiOjE3Mjc4MzgyOTZ9.LOfkLAehxjd5MveY0vSEbW8qLZnCDj4axtsszkaP1is"; // 나중에 실제 JWT 토큰으로 변경해야 함

    // 좋아요 기능 추가
    const handleLike = async (postId: string) => {
        try {
            const response = await axios.post(
                'https://kdt.frontend.5th.programmers.co.kr:5006/likes/create',
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
                'https://kdt.frontend.5th.programmers.co.kr:5006/likes/delete',
                {
                    headers: { Authorization: `Bearer ${token}` },
                    data: { id: likeId }
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

    return (
            <>
                {
                    postList.map((post, idx) => (
                        <div className='user_post' key={idx}>
                            <div className='user_info' >
                                <p>
                                    <img src={post.author.image || '/default.jpg'} alt="" className='user_profile'/>
                                    <span className='user_nickname'>{post.author.fullName}</span>
                                </p>
                                <button className='follow_btn'>following</button>
                            </div>
                            <Slider {...settings}>
                                <img src={post.image} alt="User post" className='user_picture' />
                            </Slider>
                            <p className='user_text'>
                                {post.title}
                            </p>
                            <ul className='buttons'>
                                <li className='like'>
                                    <button 
                                    className='like_btn'
                                    onClick={() => {
                                        const liked = post.likes.some(like => like.user === like.user);
                                        if (liked) {
                                            const likeId = post.likes.find(like => like.user === like.user)?._id;
                                            if (likeId) {
                                                handleUnlike(likeId);
                                            }
                                        } else {
                                            handleLike(post._id);
                                        }
                                    }}
                                    >
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
                    ))
                }
                
            </>
            
    );
};

export default Post;