import React,{useState} from 'react';
import "../styles/css/join.css"

import bigLogo from "../assets/bigLogo.png"
import Group from"../assets/Group.png"
import Group1 from"../assets/Group1.png"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const LoginPage: React.FC=() => {
const [formState,setFormState]=useState({
    email:"",
    id:"",
    password:"",
    checkpassword:""
    })
//비밀번호 표시 여부
const [showPassword, setShowPassword] = useState(false);
const [showCheckPassword, setShowCheckPassword] = useState(false); 

    //업데이트값
    const updateValue=(e: React.ChangeEvent<HTMLInputElement>)=> {
        setFormState({
            ...formState,
            [e.target.name]:e.target.value //입력한값 id,password :사용자 입력값
        })
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // 버튼 클릭 시 가시성 토글
      };

      const toggleCheckPasswordVisibility = () => {
        setShowCheckPassword(!showCheckPassword); // 비밀번호 확인 표시 여부 토글
      };
    

   
//로그인 버튼을 누르면 콘솔창에 현재값 출력
const  handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();// 제출시 새로고침 막기
    console.log('Form Submitted:',formState)//콘솔에 id,password값이 출력됨
};

return(
    <div className="join-container">
        <form className="join-form" onSubmit={handleSubmit}>
            <h1>회원가입</h1>
            <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
{/* 이메일 입력 */}
            <div className="join-form-group">
                <label htmlFor="join-email">이메일</label>
                <input 
                type="text"
                id="join-email"
                name="email"
                placeholder="이메일을 입력하세요 "
                value={formState.email}
                onChange={updateValue}
                required
                />
            </div>
            {/* 아이디 입력 */}
            <div className="join-form-group">
                <label htmlFor="id">아이디</label>
                <div className="id-container">
                <input 
                type="text"
                id="id"
                name="id"
                placeholder="아이디를 입력하세요"
                value={formState.id}
                onChange={updateValue}
                required
                />
                {/* 비밀번호입력창 */}

                {/* 비밀번호 확인 입력창 */}
                
                {/* 눈모양 아이콘 추가하여 클릭하면 비밀번호여부 */}
               
                </div>
            </div>
            <div className="join-form-group">
                <label htmlFor="password">비밀번호</label>
                <div className="password-container">
                    <input 
                    type={showPassword ?"text":"password"}
                    id="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    value={formState.password}
                    onChange={updateValue}
                    required
                    />
                    <button
                    type='button'
                    onClick={togglePasswordVisibility}
                    className='join-password-toggle'>
                    {showPassword ? <AiFillEyeInvisible color='black'/> : <AiFillEye color='black'/>}
                    </button>
                </div>
            </div>
            <div className="join-form-group">
                <label htmlFor="checkpassword">비밀번호 확인</label>
                <div className="password-container">
                <input 
                type={showCheckPassword? "text":"password"}
                id="checkpassword"
                name="checkpassword"
                placeholder="비밀번호 확인"
                value={formState.checkpassword}
                onChange={updateValue}
                required
                />
              
              <button
              type="button"
              onClick={toggleCheckPasswordVisibility}
              className="join-password-toggle"
            >
              {showCheckPassword ? <AiFillEyeInvisible color='black' /> : <AiFillEye color='black'/>}
              </button>
                </div>
            </div>
            {/* 로그인버튼 */}
            <button  type='submit' className='login-btn'>가입하기</button>
            {/* 회원가입 */}
            <div className="singup-link">
                <span> 계정이 이미 있으신가요?<a href="">로그인하기</a></span>
            </div>
        </form>

        <div className='logo-container'>
            <img src='src/assets/pageLogo.png'></img>
        </div>
 
    </div>
)
}

export default LoginPage;




