import React, { useState } from 'react';
//import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex fixed w-full top-0  justify-between items-center h-24  mx-auto px-4 text-white z-50 bg-slate-600'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>AThor.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 text-red-900 '>Home</li>
        <li className='p-4 text-red-900 '>Resources</li>
        <li className='p-4 text-red-900 '>About</li>
        <li className='p-4 text-red-900 '>Templates</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <CloseIcon  /> : <MenuIcon />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>AThor.</h1>
          <li className=' text-red-900 p-4 border-b border-gray-600'>Home</li>
          <li className=' text-red-900 p-4 border-b border-gray-600'>Templates</li>
          <li className=' text-red-900 p-4 border-b border-gray-600'>Resources</li>
          <li className=' text-red-900 p-4 border-b border-gray-600'>About</li>
          <li className=' text-red-900 p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
