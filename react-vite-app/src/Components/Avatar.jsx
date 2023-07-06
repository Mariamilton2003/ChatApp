import React from 'react';
import {Person } from '@mui/icons-material';

const Avatar = () => {
    return (
        <>
               <div className="flex w-10 h-10 bg-blue-500 group-hover:bg-gray-900 rounded-full items-center justify-center">
                <Person className='text-gray-600'/>
               </div> 
        </>
    );
};

export default Avatar;