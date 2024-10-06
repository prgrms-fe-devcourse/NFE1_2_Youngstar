import { Link, useNavigate } from 'react-router-dom';
import '../styles/css/Navbar.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [currentActive, setCurrentActive] = useState('/loginpage');

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const target = e.currentTarget.closest('li');
        const targetPath = target?.getAttribute('data-path');

        if (!token && targetPath !== '/hotpost') {
            alert('로그인 하세요 !')
            setCurrentActive('/mypage')
            navigate('/loginpage');
            return;
        }

        setCurrentActive(targetPath || '/');
        navigate(targetPath || '#');
    };

    useEffect(() => {
        document.querySelectorAll('.nav li a').forEach((link) => {
            link.addEventListener('click', handleClick);
        });

        return () => {
            document.querySelectorAll('.nav li a').forEach((link) => {
                link.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return (
        <div className='nav'>
            <ul>
                <li className={`go_home ${currentActive === '/' ? 'on' : ''}`} data-path="/">
                    <Link to={'/'}></Link>
                </li>
                <li className={`go_hot ${currentActive === '/hotpost' ? 'on' : ''}`} data-path="/hotpost">
                    <Link to={'/hotpost'}></Link>
                </li>
                <li className={`go_chat ${currentActive === '/chatting' ? 'on' : ''}`} data-path="/chatting">
                    <Link to={'/chatting'}></Link>
                </li>
                <li className={`go_scrap ${currentActive === '/saved' ? 'on' : ''}`} data-path="/saved">
                    <Link to={'/saved'}></Link>
                </li>
                <li className={`go_alarm ${currentActive === '/notification' ? 'on' : ''}`} data-path="/notification">
                    <Link to={'#'}></Link>
                </li>
                <li className={`go_map ${currentActive === '/map' ? 'on' : ''}`} data-path="/map">
                    <Link to={'/map'}></Link>
                </li>
                <li className={`go_mypage ${currentActive === '/mypage' ? 'on' : ''}`} data-path="/mypage">
                    <Link to={'/mypage'}></Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
