import '../styles/css/NotificationPage.css'

const Notice = () => {
    return(
        <div className="notification-box">
            <div className='notice-content'>
                <img src='src/assets/profile.png' />
                <div>cheom_ji 님이 팔로우를 시작했습니다.</div>
            </div>
            <div>1시간 전</div>
        </div>
    )

}

export default Notice;