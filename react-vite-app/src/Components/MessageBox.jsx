import React from 'react';
import { AttachFile, Send } from '@mui/icons-material';
const MessageBox = () => {
    return (
        <>
          <div className="bg-gray-700 p-2 flex gap-2">
          <input type="text" className="ml-4 bg-transparent w-[90%] text-xl font-semibold" />  
          <AttachFile className='text-2xl font-bold items-center justify-center text-gray-400 hover:text-blue-500'/>
          <Send className='text-2xl font-bold items-center justify-center text-gray-400 hover:text-blue-500'/>
          </div>  
        </>
    );
};

export default MessageBox;