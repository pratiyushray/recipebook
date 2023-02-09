import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';



function Header(props) {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const autoClose=()=>{
    setNav(!nav);
  }



  return (
    <div className='flex items-center h-20 mx-auto px-4 text-white bg-[#111827] font-sans'>
      <img src={logo} className="mr-3 sm:h-9 w-12 h-12" alt="RecipeBook" />
      <span className='w-full text-3xl font-bold text-[#00df9a]'>RecipeBook</span>
      <ul className='hidden md:flex space-x-10'>
        <Link to="/" className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>Home</Link>
        <Link to="/about" className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>About</Link>
        <Link to="/recipe" className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>Recipes</Link>
        <Link to="/onlinetut" className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>Tutorials</Link>
        <Link to="/queries" className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>Queries</Link>
        <Link to="/signup" className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>SignUp</Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#111827] ease-in-out duration-500 z-10' : 'ease-in-out duration-500 fixed left-[-100%] z-10'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>RecipeBook</h1>
          <li className='p-4 border-b border-gray-600' onClick={autoClose}><Link to="/login">Login / SignUp</Link></li>
          <li className='p-4 border-b border-gray-600' onClick={autoClose}><Link to="/">Home</Link></li>
          <li className='p-4 border-b border-gray-600' onClick={autoClose}><Link to="/about">About</Link></li>
          <li className='p-4 border-b border-gray-600' onClick={autoClose}><Link to="/recipe">Recipe</Link></li>
          <li className='p-4 border-b border-gray-600' onClick={autoClose}><Link to="/onlinetut">Tutorials</Link></li>
          <li className='p-4'><Link to="/queries" onClick={autoClose}>Queries</Link></li>
      </ul>
    </div>
  );
};


export default Header