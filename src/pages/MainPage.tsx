import { Link } from "react-router-dom";
// import { Link } from './joinPage'

const MainPage = () => {
    return (<>
        <div>Mainpage</div>
        <Link to='/MyPage'>
            마이페이지
        </Link>
        <Link to ='/loginPage'>
        </Link>
        <Link to='/joinPage'>회원가입</Link> 
    </>)
}

export default MainPage;