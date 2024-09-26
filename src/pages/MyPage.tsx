// import useFetchUsers from "../hooks/useFetchUsers";
import "../styles/Mypage.css"; // SCSS 파일 임포트
import profilePhoto from "../assets/chun_bong.png";
import logo_header from "../assets/logo_header.png"

const MyPage = () => {
  // const { data } = useFetchUsers();

  return (
    <>
      {/* <div>Mypage</div> */}
      {/* <header>

            </header>
            <div className = 'profile'>
                <div id = 'profile-photo'>
                    <img src = {profilePhoto} alt = "profile-photo" id = "pro_photo"></img>
                </div>
            </div> */}

      <div className="container">
        <header className="header">
          <img className="logo" src={logo_header} alt="로고" />
          <div className="search-bar">
            <span className="search-icon"></span>
            <input className="search-input" type="text" placeholder="검색" />
          </div>
        </header>
        <div className="profile-section">
          <img
            className="profile-image"
            src={profilePhoto}
            alt="Profile"
          />
          <h2 className="userid">chun_bong</h2>
          <div>
            <p className="introduce-text">자기소개란</p>
          </div>
          
        </div>
        <div className="tab-mypage">
          <button className="tab">게시물</button>
          <button className="tab">팔로잉</button>
          <button className="tab">팔로워</button>
        </div>
      </div>

      {/* <div className="mypage-container">Mypage</div> */}
      {/* {data && (<div>{data[0]}</div>)} */}
    </>
  );
};

export default MyPage;
