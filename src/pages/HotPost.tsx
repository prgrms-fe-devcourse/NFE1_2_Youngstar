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
        "image": String, // 프로필 이미지
        "role": String,
        "emailVerified": Boolean, // 사용되지 않음
        "banned": Boolean, // 사용되지 않음
        "isOnline": Boolean,
        "posts": Post[],
        "likes": Like[],
        "comments": String[],
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
        "_id": String,
        "fullName": String,
        "email": String,
        "createdAt": String,
        "updatedAt": String
    }

    interface Like {
        "_id": String,
        "user": String, // 사용자 id
        "post": String, // 포스트 id
        "createdAt": String,
        "updatedAt": String
    }

    interface Message {
        "_id": String,
        "message": String,
        "sender": User,
        "receiver": User,
        "seen": Boolean,
        "createdAt": String,
        "updatedAt": String
    }

    interface Channel {
        "authRequired": Boolean, // 사용되지 않음
        "posts": String[],
        "_id": String,
        "name": String,
        "description": String,
        "createdAt": String,
        "updatedAt": String
    }

    interface Post {
        "likes": Like[],
        "comments": Comment[],
        "_id": String,
        "image"?: string,
        "imagePublicId"?: string,
        "title": String,
        "channel": Channel,
        "author": User,
        "createdAt": String,
        "updatedAt": String,
        "__v": string
    }

    const [postList, setPostList] = useState<Post[]>([]);

    useEffect(() => {
        const loadPostData = async() => {
            try {


                const response = await axios.get('https://kdt.frontend.5th.programmers.co.kr:5010/posts/channel/65a637c681af0c2145980120');
                setPostList(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error)
            }
        }
        loadPostData();
    },[]);

    const hotPosts = postList.slice().sort((a, b) => b.likes.length - a.likes.length).slice(0, 10);

    return (
        <div className='hot_post'>
            <div className='hot_post_container'>
                <PageHeader>인기 게시글</PageHeader>
                {
                    hotPosts.map((post, idx) => (
                        <div className='user_post' key={idx}>
                            <div className='user_info' >
                                <p>
                                    <img src={post.author.coverImage || '/default.jpg'} alt="" className='user_profile'/>
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
                    ))
                }
            </div>
        </div>
    );
};

export default Post;