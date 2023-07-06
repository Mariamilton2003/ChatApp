import React from 'react';
import Avatar from './Avatar';
import { ArrowBackRounded, MoreVert, SearchOutlined } from '@mui/icons-material';

const ChatConversationHeader = () => {
    return (
        <>
        <div className="flex justify-between p-[.95rem] bg-gray-700 w-[100%]">
            <div className='text-gray-500'>
                   <ArrowBackRounded />
            </div>
            <div className="flex items-center justify-center">
            <div className="absolute left-[24rem]">
            <Avatar />
            </div>
            </div>
            <div className="flex items-center justify-center">
            <div className="flex flex-col absolute left-[28rem]">
             <span className='text-lg text-white'>Maria Milton</span>
             <span className='text-xs text-gray-500'>Last seen at</span>
            </div> 
            </div>
            <div className="flex gap-4 items-center">
                <SearchOutlined className='text-2xl font-bold items-center justify-center text-gray-400 hover:text-blue-500'/>
                <MoreVert className='text-2xl font-bold items-center justify-center text-gray-400 hover:text-blue-500'/>
            </div>
        </div>
        </>
    );
};

export default ChatConversationHeader;