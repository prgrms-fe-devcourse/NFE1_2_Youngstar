import React from 'react';
import Logo from '../assets/Logo_header.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} />
            <form action='' method='' className='search_area'>
                <button className='search_btn' type='submit'></button>
                <input type="text" name='' className='search_txt' placeholder='검색' />
            </form>
        </div>
    );
};

export default Header;