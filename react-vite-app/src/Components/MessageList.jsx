import React from 'react';
import Message from './Message';

const MessageList = () => {
    const Messages=[{
        senderId:'you',
        receiverId:"Maria Milton",
        message:"Hello"
    },{
        senderId:"Maria Milton",
        receiverId:'you',
        message:"Hello"
    },{
        senderId:'you',
        receiverId:"Maria Milton",
        message:"How are you ? bro"
    },{
        senderId:"Maria Milton",
        receiverId:'you',
        message:"fine ,How are you? bro"
    },{
        senderId:'you',
        receiverId:"Maria Milton",
        message:"fine bro, do know flash movie release date?"
    },{
        senderId:'Maria Milton',
        receiverId:"you",
        message:'i think june month of 2023'
    },{
        senderId:"you",
        receiverId:"Maria Milton",
        message:"Thank you bro.."
    },{
        senderId:'Maria Milton',
        receiverId:"you",
        message:"Welcome bro, you want buy movie tickets?"
    }]
    return (
        <>
         <div className="relative h-full">
            <div className="scrollBar overflow-y-scroll absolute inset-0">
            {
               Messages.map((message,i)=>(
                   <Message key={i} message={message} className='w-[100%]'/>   
               ))   
            }
            </div>
         </div>           
        </>
    );
};

export default MessageList;