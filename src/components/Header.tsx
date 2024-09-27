import React from 'react';
import Logo from '../assets/header_logo.svg';
import SearchRes from '../assets/res_header_search.svg';
import AlramRes from '../assets/res_header_alram.svg';
import ScrapRes from '../assets/res_header_scrap.svg';
import '../styles/css/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} />
            <div className='search_area'>
                <button className='search_btn' type='submit'></button>
                <input type="text" name='' className='search_txt' placeholder='검색' />
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
                <input type="text" name='' className='res_search_txt' placeholder='검색' />
            </div>
        </div>
    );
};

export default Header;