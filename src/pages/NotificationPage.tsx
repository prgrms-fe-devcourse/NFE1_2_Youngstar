import Notice from '../components/Notice';
import PageHeader from '../components/PageHeader';
import '../styles/css/NotificationPage.css'
const NotificationPage = () => {
    return(
        <>
            <PageHeader>알림</PageHeader>
            <div className="content-box">
                <Notice />
                <Notice />
                <Notice />
                <Notice />
            </div>
        </>
    )

}

export default NotificationPage;