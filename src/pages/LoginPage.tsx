import React,{useState} from 'react';


interface LoginFromState{
    id: string;
    password:string;
}
//초기값 설정
const LoginForm: React.FC=() => {
const [formState,setFormState]=useState<LoginFromState>({
    id:"",
    password:""
    })
    //업데이트값
    const updateValue=(e: React.ChangeEvent<HTMLInputElement>)=> {
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    };
//로그인 버튼을 누르면 콘솔창에 현제값 출력
const  handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();// 제출시 새로고침 막기
    console.log('Form Submitted:',formState)
}

}




