import PageHeader from '../components/PageHeader';
import '../styles/css/PostFormPage.css'
const PostFormPage = () => {
    return(
        <>
            <div className='page-container'>
                <PageHeader>글쓰기</PageHeader>
                <div className='content-box'>
                    <div className='button-box'>
                        <img src='src/assets/camera.svg' />
                        <img src='src/assets/tag.svg' />
                    </div>
                    <div>
                        <textarea name='content' placeholder='내용을 입력하세요.'></textarea>
                    </div>
                    <button>등록</button>

                </div>
            </div>
        </>
    )
}

export default PostFormPage;