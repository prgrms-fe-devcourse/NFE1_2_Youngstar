import { Link } from "react-router-dom";

const MainPage = () => {
    return (<>
        <div>Mainpage</div>
        <Link to='/MyPage'>
            마이페이지
        </Link>
        <Link to='/notification'>
            알림
        </Link>
    </>)
}

export default MainPage;