import Logo from '../assets/header_logo.svg';
import SearchRes from '../assets/res_header_search.svg';
import AlramRes from '../assets/res_header_alram.svg';
import ScrapRes from '../assets/res_header_scrap.svg';
import '../styles/css/Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from './Layout';

const Header = () => {
    const {searchQuery, setSearchQuery} = useContext(SearchContext);

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
        </div>
    );
};

export default Header;