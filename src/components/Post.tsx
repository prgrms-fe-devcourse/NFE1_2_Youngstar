import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Post.css'
import Like from '../assets/like_btn.png';
import Comments from '../assets/comments_btn.png';
import Scrap from '../assets/scrap_btn.png';

const Post = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className='post_area'>
            <ul className='user_post'>
                <li>
                    <div className='user_info'>
                        <p>
                            <img src="" alt="" className='user_profile'/>
                            <span className='user_nickname'>chun_bong</span>
                        </p>
                        <button className='follow_btn'>following</button>
                    </div>
                    <Slider {...settings}>
                        <img src="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg" alt="" className='user_picture'/>
                        <img src="https://images.mypetlife.co.kr/content/uploads/2023/11/18161317/d6c08aa5-dc1c-46a1-97bb-6782641c1624.jpeg" alt="" className='user_picture'/>
                        <img src="https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg" alt="" className='user_picture'/>
                        <img src="https://health.chosun.com/site/data/img_dir/2024/04/23/2024042302394_0.jpg" alt="" className='user_picture'/>
                        <img src="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg" alt="" className='user_picture'/>
                    </Slider>
                    <p className='user_text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <ul className='buttons'>
                        <li className='like'>
                            <button className='like_btn'>
                                <img src={Like} alt="" />
                            </button>
                            <span className='like_cnt'>77</span>
                        </li>
                        <li className='comments'>
                            <button className='comments_btn'>
                                <img src={Comments} alt="" />
                            </button>
                            <span className='comments_cnt'>77</span>
                        </li>
                        <li className='scrap'>
                            <button className='scrap_btn'>
                                <img src={Scrap} alt="" />
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className='user_post'>
                <li>
                    <div className='user_info'>
                        <p>
                            <img src="" alt="" className='user_profile'/>
                            <span className='user_nickname'>chun_bong</span>
                        </p>
                        <button className='follow_btn'>following</button>
                    </div>
                    <Slider {...settings}>
                        <img src="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg" alt="" className='user_picture'/>
                        <img src="https://images.mypetlife.co.kr/content/uploads/2023/11/18161317/d6c08aa5-dc1c-46a1-97bb-6782641c1624.jpeg" alt="" className='user_picture'/>
                        <img src="https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg" alt="" className='user_picture'/>
                        <img src="https://health.chosun.com/site/data/img_dir/2024/04/23/2024042302394_0.jpg" alt="" className='user_picture'/>
                        <img src="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg" alt="" className='user_picture'/>
                    </Slider>
                    <p className='user_text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <ul className='buttons'>
                        <li className='like'>
                            <button className='like_btn'>
                                <img src="/images/like_btn.png" alt="" />
                            </button>
                            <span className='like_cnt'>77</span>
                        </li>
                        <li className='comments'>
                            <button className='comments_btn'>
                                <img src="/images/comments_btn.png" alt="" />
                            </button>
                            <span className='comments_cnt'>77</span>
                        </li>
                        <li className='scrap'>
                            <button className='scrap_btn'>
                                <img src="/images/scrap_btn.png" alt="" />
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className='user_post'>
                <li>
                    <div className='user_info'>
                        <p>
                            <img src="" alt="" className='user_profile'/>
                            <span className='user_nickname'>chun_bong</span>
                        </p>
                        <button className='follow_btn'>following</button>
                    </div>
                    <Slider {...settings}>
                        <img src="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg" alt="" className='user_picture'/>
                        <img src="https://images.mypetlife.co.kr/content/uploads/2023/11/18161317/d6c08aa5-dc1c-46a1-97bb-6782641c1624.jpeg" alt="" className='user_picture'/>
                        <img src="https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg" alt="" className='user_picture'/>
                        <img src="https://health.chosun.com/site/data/img_dir/2024/04/23/2024042302394_0.jpg" alt="" className='user_picture'/>
                        <img src="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg" alt="" className='user_picture'/>
                    </Slider>
                    <p className='user_text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <ul className='buttons'>
                        <li className='like'>
                            <button className='like_btn'>
                                <img src="/images/like_btn.png" alt="" />
                            </button>
                            <span className='like_cnt'>77</span>
                        </li>
                        <li className='comments'>
                            <button className='comments_btn'>
                                <img src="/images/comments_btn.png" alt="" />
                            </button>
                            <span className='comments_cnt'>77</span>
                        </li>
                        <li className='scrap'>
                            <button className='scrap_btn'>
                                <img src="/images/scrap_btn.png" alt="" />
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
            <button className='post_add'>+</button>
        </div>
    );
};

export default Post;