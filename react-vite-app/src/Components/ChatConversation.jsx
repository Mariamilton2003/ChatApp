import React from 'react';
import MessageList from './MessageList';
import MessageBox from './MessageBox';

const ChatConversation = () => {
    return (
        <>
          <div className="chat_conversation flex flex-col h-[100%]">
            <MessageList />
            <MessageBox />
          </div>  
        </>
    );
};

export default ChatConversation;