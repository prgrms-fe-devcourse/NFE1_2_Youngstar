import Notice from '../components/Notice';
import PageHeader from '../components/PageHeader';
import useFetchNotification from '../hooks/useFetchNotification';
import '../styles/css/NotificationPage.css'
import Notification from '../types/Notification';

const NotificationPage = () => {
    const { data } = useFetchNotification();
    console.log(data?.notifications);

    const elapsedTime = (date: number): string => {
        const start = new Date(date);
        const end = new Date();
    
        const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
        if (seconds < 60) return '방금 전';
    
        const minutes = seconds / 60;
        if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    
        const hours = minutes / 60;
        if (hours < 24) return `${Math.floor(hours)}시간 전`;
    
        const days = hours / 24;
        if (days < 7) return `${Math.floor(days)}일 전`;
    
        return `${start.toLocaleDateString()}`;
    };

    return(
        <div className='page-container'>
            <PageHeader>알림</PageHeader>
            <div className="content-box">
                {
                    data?.notifications.map((notice: Notification) => {
                        return(
                            <div className={`notification-box ${notice.seen}`}>
                                <div className='notice-content'>
                                    <div className='profile-image-container'>
                                        <img src={notice.author.image} />
                                    </div>
                                    <div className='notification-message'>
                                        {notice.author.fullName}님이&nbsp;
                                        {notice?.follow && <div>팔로우를 시작했습니다.</div>}
                                        {notice?.comment && <div> 댓글을 달았습니다.</div>}
                                        {(!notice?.comment && !notice.follow) && <div> 좋아합니다.</div>}
                                    </div>
                                </div>
                                <div>{elapsedTime(new Date(notice.createdAt).getTime())}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NotificationPage;