import PageHeader from "../components/PageHeader";
import '../styles/css/StarredPage.css'

const StarredPage = () => {
    return(
        <>
            <PageHeader>즐겨찾기</PageHeader>
            <div className="page-container">
                <div className="button-container">
                    <button>+</button>
                </div>
                <div className="folder-container">
                    <div className="folder-box">
                        <div className="folder">
                            <img src='src/assets/postImage1.png' />
                        </div>
                        <div>그룹 1</div>
                    </div>
                    <div className="folder-box">
                        <div className="folder">
                            <img src='src/assets/postImage1.png' />
                        </div>
                        <div>그룹 2</div>
                    </div>
                    <div className="folder-box">
                        <div className="folder">
                            <img src='src/assets/postImage1.png' />
                        </div>
                        <div>그룹 3</div>
                    </div>
                    <div className="folder-box">
                        <div className="folder">
                            <img src='src/assets/postImage1.png' />
                        </div>
                        <div>그룹 3</div>
                    </div><div className="folder-box">
                        <div className="folder">
                            <img src='src/assets/postImage1.png' />
                        </div>
                        <div>그룹 3</div>
                    </div><div className="folder-box">
                        <div className="folder">
                            <img src='src/assets/postImage1.png' />
                        </div>
                        <div>그룹 3</div>
                    </div><div className="folder-box">
                        <div className="folder">
                            <img src='src/assets/postImage1.png' />
                        </div>
                        <div>그룹 3</div>
                    </div><div className="folder-box">
                        <div className="folder">
                            <img src='src/assets/postImage1.png' />
                        </div>
                        <div>그룹 3</div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default StarredPage;