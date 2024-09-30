import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/css/Post.css'
import Like from '../assets/like_btn.png';
import Comments from '../assets/comments_btn.png';
import Scrap from '../assets/scrap_btn.png';
import Camera from '../assets/camera.svg';
import '../styles/css/DetailPage.css';


const DetailPage = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className='detail_area'>
            <div className='detail_post'>
                <div className='detail_user_info'>
                    <p>
                        <img src="" alt="" className='detail_user_profile'/>
                        <span className='detail_user_nickname'>chun_bong</span>
                    </p>
                    <button className='modify_btn'>···</button>
                    <ul className='modify_area'>
                        <li>수정하기</li>
                        <li>삭제하기</li>
                    </ul>
                </div>
                <Slider {...settings}>
                    <img src="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg" alt="" className='detail_user_picture'/>
                    <img src="https://images.mypetlife.co.kr/content/uploads/2023/11/18161317/d6c08aa5-dc1c-46a1-97bb-6782641c1624.jpeg" alt="" className='detail_user_picture'/>
                    <img src="https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg" alt="" className='detail_user_picture'/>
                    <img src="https://health.chosun.com/site/data/img_dir/2024/04/23/2024042302394_0.jpg" alt="" className='detail_user_picture'/>
                    <img src="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg" alt="" className='detail_user_picture'/>
                </Slider>
                <p className='detail_user_text'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <ul className='detail_buttons'>
                    <li className='detail_like'>
                        <button className='detail_like_btn'>
                            <img src={Like} alt="" />
                        </button>
                        <span className='detail_like_cnt'>77</span>
                    </li>
                    <li className='detail_comments'>
                        <button className='detail_comments_btn'>
                            <img src={Comments} alt="" />
                        </button>
                        <span className='detail_comments_cnt'>77</span>
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
                        <li>
                            <div className='comment_user_info'>
                                <img src="" alt="" />
                                <span>chun_bong</span>
                            </div>
                            <p className='comment'>
                                hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~
                            </p>
                        </li>
                        <li>
                            <div className='comment_user_info'>
                                <img src="" alt="" />
                                <span>chun_bong</span>
                            </div>
                            <p className='comment'>
                                hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~
                            </p>
                        </li>
                        <li>
                            <div className='comment_user_info'>
                                <img src="" alt="" />
                                <span>chun_bong</span>
                            </div>
                            <p className='comment'>
                                hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~
                            </p>
                        </li>
                        <li>
                            <div className='comment_user_info'>
                                <img src="" alt="" />
                                <span>chun_bong</span>
                            </div>
                            <p className='comment'>
                                hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~hi~hello~
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='comment_post_area'>
                    <input type="text" placeholder='댓글을 입력해 주세요'/>
                    <button>입력</button>
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
        
    );
};

export default DetailPage;