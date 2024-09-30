import PageHeader from "../components/PageHeader";
import '../styles/css/ChatPage.css'

const ChatPage = () => {
    return (
        <div className="chat-page">
            <div className="page-container">
                <PageHeader>채팅창</PageHeader>
                <div className="chat-container">
                    <div className="chat-box mine">
                        <div className="user-info">
                            <img src='src/assets/profile.png' />
                            <div>cheom_ji</div>
                        </div>
                        <div className="content">
                            츄르 맛집을 알려줘!!
                        </div>
                    </div>

                    <div className="chat-box others">
                        <div className="user-info">
                            <img src='src/assets/profile.png' />
                            <div>cheom_ji</div>
                        </div>
                        <div className="content">
                            츄르 맛집을 알려줘!!
                        </div>
                    </div>

                    <div className="chat-box others">
                        <div className="user-info">
                            <img src='src/assets/profile.png' />
                            <div>cheom_ji</div>
                        </div>
                        <div className="content">
                            츄르 맛집을 알려줘!!
                        </div>
                    </div>

                    <div className="chat-box others">
                        <div className="user-info">
                            <img src='src/assets/profile.png' />
                            <div>cheom_ji</div>
                        </div>
                        <div className="content">
                            츄르 맛집을 알려줘!!
                        </div>
                    </div>
                </div>
            </div>
            <div className="input-bar">
                    <input type="text" />
                    <button type="submit">
                        <img src="src/assets/send.png" />
                    </button>
                </div>
            
        </div>
    );
}

export default ChatPage;
