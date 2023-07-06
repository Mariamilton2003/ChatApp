import ChatConversationHeader from '../Components/ChatConversationHeader';
import ChatConversation from '../Components/ChatConversation'
import ContactHeader from '../Components/ContactHeader'
import PeopleList from '../Components/PeopleList';
import SearchBar from '../Components/SearchBar';
const ChatPage = () => {
    return (  
        <>
          <div className="flex h-[100vh]">
            <div className="left flex flex-col grow sm:grow-[.1]">
                <ContactHeader />
                <SearchBar />
                <PeopleList />
            </div>
            <div className="hidden right sm:flex flex-col grow-[3]">
                <ChatConversationHeader />
                <ChatConversation />
            </div>
          </div>  
        </>
    );
};

export default ChatPage;