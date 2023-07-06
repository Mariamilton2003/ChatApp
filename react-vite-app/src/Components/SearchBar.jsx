import { SearchOutlined } from '@mui/icons-material';
import React from 'react';

const SearchBar = () => {
    return (
        <>
          <div className="flex px-3 py-2 w-[100%]">
            <div className="flex px-3 py-2 w-[100%] rounded-xl bg-gray-300">
            <input type="text" className="bg-transparent w-[95%] text-xl font-semibold" />  
            <SearchOutlined />
            </div>
          </div>    
        </>
    );
};

export default SearchBar;