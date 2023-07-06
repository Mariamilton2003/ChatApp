import React from 'react';

const Message = ({message}) => {
    return (
        <> <div className="">
            <div className={`inline-block w-[100%] my-3 ${message.senderId === 'you' ? 'text-right':'text-left'}`}>
               <div className={`inline-block text-left text-white px-4 py-1 rounded-md mx-3 text-sm ${message.senderId === 'you' ? 'bg-gray-900':'bg-blue-500'}`}>
               <h1>{message.senderId}</h1>
                <p>{ message.message }</p>
               </div> 
            </div>
           </div>

        </>
    );
};

export default Message;