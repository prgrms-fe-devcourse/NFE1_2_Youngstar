import React, { useState } from 'react';
import axios from 'axios';
import '../styles/css/PostFormPage.css';
import PageHeader from '../components/PageHeader';
import { useNavigate } from 'react-router-dom';

const PostFormPage: React.FC = () => {
    const [title, setTitle] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files).slice(0, 5);
            setImages(selectedFiles);
        }
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        if (content) {
            formData.append('title', content);
        } else {
            alert('내용을 적어주세요.');
            return;
        }
        images.forEach((image) => {
            formData.append('image', image);
        });

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2ZmNiODU4YzczNjllMzdiZTMxNTA2NiIsImVtYWlsIjoiYXVkc2tkQGdtYWlsLmNvbSJ9LCJpYXQiOjE3Mjc4MzgyOTZ9.LOfkLAehxjd5MveY0vSEbW8qLZnCDj4axtsszkaP1is"; // 나중에 실제 JWT 토큰으로 변경해야 함

        try {
            const response = await axios.post('https://kdt.frontend.5th.programmers.co.kr:5006/posts/create', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
        });

        if (response.status === 200) {
            console.log('포스트 작성 완료');
            navigate('/');
            
        } else {
            console.error('에러 발생');
        }
        } catch (error) {
            console.error('에러 발생', error);
        }
    };

  return (
    <>
        <div className='page-container'>
            <PageHeader>글쓰기</PageHeader>
            <div className='content-box'>
                <div className='button-box'>
                    <form method="post" encType='multipart/form-data'>
                        <label htmlFor="chooseFile">
                            <img src='src/assets/camera.svg' alt='카메라 아이콘' />
                        </label>
                        <input type='file' id="chooseFile" name="chooseFile" accept='image/*' multiple onChange={handleImageChange} />
                    </form>
                    <img src='src/assets/tag.svg' alt='태그 아이콘' />
                </div>
                <div>
                    <textarea
                    name='content'
                    placeholder='내용을 입력하세요.'
                    value={content}
                    onChange={handleContentChange}
                    maxLength={500}
                    ></textarea>
                </div>
                <button onClick={handleSubmit}>등록</button>
            </div>
        </div>
    </>
  );
};

export default PostFormPage;