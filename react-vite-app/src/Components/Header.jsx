import React from 'react';

const Header = () => {
    return (
        <>
          <div className="flex justify-between p-4 bg-gray-600">
            <div className="logo flex gap-2">
                <span className='text-white text-3xl font-bold'>ChatApp</span>
            </div>
            <div className="menu flex items-center gap-8">
                <li className="text-2xl text-white font-semibold cursor-pointer  hover:text-rose-500 active:text-rose-500">HOME</li>
                <li className="text-2xl text-white font-semibold cursor-pointer  hover:text-rose-500 active:text-rose-500">CONTACT</li>
                <li className="text-2xl text-white font-semibold cursor-pointer  hover:text-rose-500 active:text-rose-500">CHAT</li>
            </div>
            <div className="login btn">
                LOGIN
            </div>
          </div>  
        </>
    );
};

export default Header;