import React from 'react';

const SearchItem = ({name}) => {
    return (
        <div className="border border-main-gainsboro rounded-[20px] w-fit py-3 px-5 font-medium text-xs h-fit">
            {name}
        </div>
    );
};

export default SearchItem;