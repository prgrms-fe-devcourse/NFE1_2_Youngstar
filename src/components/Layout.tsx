import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../styles/css/Layout.css';
import Navbar from './Navbar';
import { createContext, useState } from 'react';

export const SearchContext = createContext({ searchQuery: '', setSearchQuery: (query: string) => {} });

export default function Layout() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      <div className='container'>
          <Header />
          <main>
            <Outlet />
          </main>
          <Navbar />
      </div>
    </SearchContext.Provider>
  );
}
