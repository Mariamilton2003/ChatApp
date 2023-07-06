import Avatar from "./Avatar";

const People = ({People}) => {
    return ( 
        <>
            <div className="group flex gap-4 px-2 py-2 my-2 rounded-md text-white bg-gray-900 hover:bg-gray-700">
                <div className="py-1">
                    <Avatar />
                </div>
                <div className="flex flex-col group-hover:text-blue-400">
                    <h1>{People.name}</h1>
                    <span>{People.LastMessage}</span>
                </div>
            </div>
        </>
    );
};

export default People;