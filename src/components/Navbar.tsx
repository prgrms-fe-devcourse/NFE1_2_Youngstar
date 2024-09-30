import { Link } from 'react-router-dom';
import '../styles/css/Navbar.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = (e: Event) => {
        e.preventDefault();
        const navItems = document.querySelectorAll('.nav li');
        navItems.forEach((item) => item.classList.remove('on'));
        const target = e.currentTarget as HTMLElement;
        target.classList.add('on');
        navigate(target.getAttribute('data-path') || '#')
    };

    useEffect(() => {
        document.querySelectorAll('.nav li').forEach((li) => {
            li.addEventListener('click', handleClick);
        })
    }, [])



    return (
        <div className='nav'>
            <ul>
                <li className='go_home on' data-path="/">
                    <Link to={'/'}></Link>
                </li>
                <li className='go_hot' data-path="#">
                    <Link to={'#'}></Link>
                </li>
                <li className='go_chat' data-path="/chatting">
                    <Link to={'/chatting'}></Link>
                </li>
                <li className='go_scrap' data-path="/saved">
                    <Link to={'/saved'}></Link>
                </li>
                <li className='go_alram' data-path="/notification">
                    <Link to={'#'}></Link>
                </li>
                <li className='go_map' data-path="#">
                    <Link to={'#'}></Link>
                </li>
                <li className='go_mypage' data-path="/mypage">
                    <Link to={'/mypage'}></Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

