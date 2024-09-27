import React from 'react';
import '../styles/css/Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <ul>
                <li className='go_homne on'></li>
                <li className='go_hot'></li>
                <li className='go_chat'></li>
                <li className='go_scrap'></li>
                <li className='go_alram'></li>
                <li className='go_map'></li>
                <li className='go_mypage'></li>
            </ul>
        </div>
    );
};

export default Navbar;