import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import cartPic from './shopping-cart.png';
import { ShopContext } from '../../Context/ShopContext';
import User from '../User';
import toast from 'react-hot-toast';

function Navbar() {
  const { cartCount } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const deleteToken = () => {
    localStorage.removeItem('token');
    toast.success('Logout successful');
    navigate('/');
  };

  return (
    <div className='main  border-b py-3 justify-between items-center md:flex nav-container'>
      <div className='flex items-center justify-between'>
        <Link to='/' onClick={closeMenu}>
          <h4 className='font-extralight text-2xl ml-2 cursor-pointer'>Devine Vogue</h4>
        </Link>
        <div className='md:hidden'>
          <button className="relative group mr-2" onClick={toggleMenu}>
            <div className={`relative flex overflow-hidden items-center justify-center rounded-full w-10 h-10 bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md ${menuOpen ? 'active' : ''}`}>
              <div className="flex flex-col justify-between w-5 h-5 transition-all duration-300 origin-center overflow-hidden">
                <div className={`bg-white h-0.5 w-5 transition-all duration-300 origin-left ${menuOpen ? 'rotate-[45deg] translate-y-[2px]' : ''}`}></div>
                <div className={`bg-white h-0.5 w-2.5 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`bg-white h-0.5 w-5 transition-all duration-300 origin-left ${menuOpen ? '-rotate-[45deg] -translate-y-[2px]' : ''}`}></div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className={`md:flex md:items-center ${menuOpen ? 'flex-col text-center ' : 'hidden'}`}>
        <ul className='md:flex md:gap-6 md:items-center md:font-medium md:flex-row'>
          {token && (
            <li className='text-gray-500 md:hidden cursor-pointer font-light hover:text-black' onClick={closeMenu}>
              Welcome, {name}
            </li>
          )}
          <li className='text-gray-500 p-2 cursor-pointer font-light hover:text-black' onClick={closeMenu}>
            <Link to='/men'>Men</Link>
          </li>
          <li className='text-gray-500 p-2 cursor-pointer font-light hover:text-black' onClick={closeMenu}>
            <Link to='/women'>Women</Link>
          </li>
          <li className='text-gray-500 p-2 cursor-pointer font-light hover:text-black' onClick={closeMenu}>
            <Link to='/kid'>Kids</Link>
          </li>
          {!token && (
            <li className='text-gray-500 md:hidden lg:hidden p-2 cursor-pointer font-light hover:text-black' onClick={closeMenu}>
              <Link to='/login'>Login</Link>
            </li>
          )}
          {!token && (
            <li className='text-gray-500 md:hidden lg:hidden p-2 cursor-pointer font-light hover:text-black' onClick={closeMenu}>
              <Link to='/register'>Register</Link>
            </li>
          )}
          {token && (
            <li className='text-gray-500 p-2 cursor-pointer font-light hover:text-black' onClick={() => {deleteToken(); closeMenu();}}>
              Logout
            </li>
          )}
        </ul>
        <div className='md:hidden flex items-center justify-center my-6'>
          <Link to='/CartItem'>
            <img src={cartPic} className='w-10 h-10' alt="Cart" />
          </Link>
          <Link to='/CartItem' className='flex'>
            <span className='bg-black text-white rounded-full text-sm w-5 h-5'>{cartCount()}</span>
          </Link>
        </div>
      </div>
      <div className='items-center gap-10 hidden md:flex'>
        <div className='user flex items-center gap-6'>
          {token ? (
            <div className='flex items-center gap-4'>
              <span>Welcome, {name}</span>
              <Link to='#' onClick={deleteToken} className='text-gray-500 font-light hover:text-black'>Logout</Link>
            </div>
          ) : (
            <User />
          )}
        </div>
        <div className='relative mr-12'>
          <Link to='/CartItem'>
            <img src={cartPic} className='w-10 h-10' alt="Cart" />
          </Link>
          <Link to='/CartItem' className='absolute top-0 right-0'>
            <span className='bg-black text-white rounded-full text-sm w-5 h-5 flex items-center justify-center'>{cartCount()}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
