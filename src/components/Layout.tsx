import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../styles/css/Layout.css';
import Navbar from './Navbar';


export default function Layout() {
  return (
    <div className='container'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Navbar />
    </div>
  );
}
