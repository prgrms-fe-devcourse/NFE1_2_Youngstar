import Logo from '../assets/header_logo.svg';
import SearchRes from '../assets/res_header_search.svg';
import AlramRes from '../assets/res_header_alram.svg';
import ScrapRes from '../assets/res_header_scrap.svg';
import '../styles/css/Header.css';
import { Link } from 'react-router-dom';
import useFetchUsers from '../hooks/useFetchUsers';
import Search   from '../types/Search'
import { useState } from 'react';

const Header = () => {
    const [searchQuery,setSearchQuery]= useState('') //검색창에 입력된 텍스트 저장
    const {data}=useFetchUsers();//사용자 데이터 훅을 호출

//     const filteredUsers= data?.filter((user:Search)=>
//     user.fullName.toLowerCase().includes(searchQuery.toLowerCase())||
// user.email.toLowerCase().includes(searchQuery.toLowerCase())
// );
//검색어를 소문자로 변환후 이름이나 이메일에 검색한게 포함이 되어있는지
    return (
        <div className='header'>
            <Link to={'/'}>
                <img src={Logo} />
            </Link>
            <div className='search_area'>
                <button className='search_btn' type='submit'> </button>
                <input
                 type="text" 
                  className='search_txt' 
                  placeholder='검색' 
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}/> 
                  {/* 입력한값을 업데이트값으로  */}

                  {/* 검색 결과를 표시 */}
                  {searchQuery &&(
                    <div className='search_results'>
                        {/* {filteredUsers&& filteredUsers.length>0 ?(
                            filteredUsers.map((user)=>(
                                <div key={user.id } className='search_result_item'>
                                    <p>{user.fullName} ({user.email})</p>
                                </div>
                            ))
                        ):(
                             <p>검색 결과가 없습니다.</p>   
                        )} */}
                    </div>
                  )}
            </div>
            <ul className='res_header'>
                <li>
                    <button className='res_search'>
                        <img src={SearchRes} alt="" />
                    </button>
                    <button className='res_alram'>
                        <img src={AlramRes} alt="" />
                    </button>
                    <button className='res_scrap'>
                        <img src={ScrapRes} alt="" />
                    </button>
                </li>
            </ul>
            {/* 반응형 검색창 */}
            <div className='res_search_area'>
                <button className='res_search_btn' type='submit'></button>
                <input 
                    type="text" 
                    className='res_search_txt' 
                    placeholder='검색' 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    // 반응형 검색창에서도 searchQuery 상태 업데이트
                />
            </div>
        </div>
    );
};

export default Header;