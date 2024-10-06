import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/css/Post.css'
import Heart from '../assets/like_btn.png';
import HeartOn from '../assets/like_btn_on.svg';
import Comments from '../assets/comments_btn.png';
import Scrap from '../assets/scrap_btn.png';
import Camera from '../assets/camera.svg';
import '../styles/css/DetailPage.css';
import useFetchPost from '../hooks/useFetchPost';
import Comment from '../types/Comment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import axios from 'axios';

const DetailPage = () => {
    const [show, setShow] = useState(false);
    const [liked, setLike] = useState(false);
    const [likeCnt, setLikeCnt] = useState(0);
    const { id: paramId } = useParams();
    const { data }  = useFetchPost(paramId || '');
    const [newComment, setNewComment] = useState<Comment[]>([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (data) {
            setLike(data.likes.some(like => like.user === token));
            setLikeCnt(data.likes.length); 
        }
    },[data]);


    if (!data) {
        return  null;
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    // 좋아요 추가 함수
    const handleLike = async () => {
        if (liked) return;
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/likes/create`,
                { postId: data._id },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (response.status === 200) {
                setLike(true);
                setLikeCnt((prev) => prev + 1);
            }
        } catch (error) {
            console.error('좋아요 실패:', error);
        }
    };

    // 좋아요 취소 함수
    const handleUnlike = async () => {
        if (!liked) return;
        const userLike = data.likes.find((like) => like.user === like._id);

        if(!userLike) {
            console.error('사용자의 좋아요 정보 검색 불가');
            return;
        }

        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/likes/delete`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                    data: { id: data._id }
                }
            );
            console.log(response);
            if (response.status === 200) {
                setLike(false);
                setLikeCnt((prev) => prev - 1); // 좋아요 개수 감소
            }
        } catch (error) {
            console.error('좋아요 취소 실패:', error);
        }
    };

    const handleComment = () => {
        const inputNode = document.querySelector('.comment-input') as HTMLInputElement;
        const text = inputNode.value;

        const addComment = async(comment: string) => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/comments/create`,
                    {
                        comment: comment,
                        postId: data._id
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                setNewComment((prev: Comment[]) => [...prev, response.data]);
                inputNode.value='';
                return response.data

            } catch (error) {
                console.error(error)
            }
        }

        addComment(text);
    }

    return (
        <div className='detail-container'>
            <PageHeader> </PageHeader>
            <div className='detail_area'>
                <div className='detail_post'>
                    <div className='detail_user_info'>
                        <p>
                            <img src={data.author.coverImage} alt="" className='detail_user_profile'/>
                            <span className='detail_user_nickname'>{data.author.fullName}</span>
                        </p>
                        <button className='modify_btn' onClick={() => setShow(prev => !prev)}>···</button>
                        {show && <ul className='modify_area'>
                            <li>수정하기</li>
                            <li>삭제하기</li>
                        </ul>}
                    </div>
                    <Slider {...settings}>
                        <img src={data.image} alt="" className='detail_user_picture'/>
                    </Slider>
                    <p className='detail_user_text'>
                        {data.title}
                    </p>
                    <ul className='detail_buttons'>
                    <li className='detail_like'>
                        <button 
                        className='detail_like_btn'
                        onClick={liked ? handleUnlike : handleLike}
                        >
                            <img src={liked ? HeartOn : Heart} alt="" />
                        </button>
                        <span className='detail_like_cnt'>{likeCnt}</span>
                    </li>
                        <li className='detail_comments'>
                            <button className='detail_comments_btn'>
                                <img src={Comments} alt="" />
                            </button>
                            <span className='detail_comments_cnt'>{data.comments.length}</span>
                        </li>
                        <li className='detail_scrap'>
                            <button className='detail_scrap_btn'>
                                <img src={Scrap} alt="" />
                            </button>
                        </li>
                    </ul>
                    <div className='comment_area'>
                        <hr/>
                        <span>comments</span>
                        <ul className='comment_lists'>
                            {
                                data.comments.map((comment: Comment) => {
                                    return(
                                        <li key={comment._id}>
                                            <div className='comment_user_info'>
                                                <img src="" alt="" />
                                                <span>{comment.author.fullName}</span>
                                            </div>
                                            <p className='comment'>
                                                {comment.comment}
                                            </p>
                                        </li>
                                    )
                                })
                            }
                            {
                                newComment?.map((comment: Comment) => {
                                    return(
                                        <li key={comment._id}>
                                            <div className='comment_user_info'>
                                                <img src="" alt="" />
                                                <span>{comment.author.fullName}</span>
                                            </div>
                                            <p className='comment'>
                                                {comment.comment}
                                            </p>
                                        </li>
                                    )
                                })
                            } 
                        </ul>
                    </div>
                    <div className='comment_post_area'>
                        <input type="text" className='comment-input' placeholder='댓글을 입력해 주세요' 
                            onKeyUp={(e) => {if (e.key === 'Enter') { handleComment();}}}
                            />
                        <button onClick={handleComment}>입력</button>
                    </div>
                </div>
                {/* 모달창 영역, 평소에는 display : none */}
                <div className='modify_modal'>
                    <div className='modify_modal_area'>
                        <div className='modify_header'>
                            <h3>수정하기</h3>
                            <button className='modify_close_btn'>×</button>
                        </div>
                        <ul className='modify_images'>
                            <li>
                                <button className='add_image_btn'>
                                    <img src={Camera} alt="" />
                                </button>
                            </li>
                            <li>
                                <img src="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg" alt="" />
                                <button className='delete_image_btn'>×</button>
                            </li>
                            <li>
                                <img src="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg" alt="" />
                                <button className='delete_image_btn'>×</button>
                            </li>
                            <li>
                                <img src="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg" alt="" />
                                <button className='delete_image_btn'>×</button>
                            </li>
                            <li>
                                <img src="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg" alt="" />
                                <button className='delete_image_btn'>×</button>
                            </li>
                            <li>
                                <img src="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg" alt="" />
                                <button className='delete_image_btn'>×</button>
                            </li>
                        </ul>
                        <input type="text" placeholder='' className='modify_text'/>
                        <button className='modify_btn'>수정 완료</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default DetailPage;