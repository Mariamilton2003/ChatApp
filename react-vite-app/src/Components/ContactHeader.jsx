import  Avatar  from "./Avatar";
import { Chat, DonutLarge, MoreVert} from '@mui/icons-material';

const ContactHeader = () => {
    return (
        <>
         <div className="flex justify-between p-2 bg-gray-600 w-[100%]">
           <div className="">
            <Avatar />
           </div>
           <div className="flex gap-4 items-center">
                     <DonutLarge className='text-2xl font-bold items-center justify-center text-gray-400 hover:text-blue-500'/>
                     <Chat className='text-2xl font-bold items-center justify-center text-gray-400 hover:text-blue-500'/>
                     <MoreVert className='text-4xl font-bold items-center justify-center text-gray-400 hover:text-blue-500'/>
            </div>
         </div>   
        </>
    );
};

export default ContactHeader;