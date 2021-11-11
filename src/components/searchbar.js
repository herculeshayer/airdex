import React, { useState } from 'react';
import GetAQIInformation from './GetAQI';



const SearchBar = () => {
    const [ keyword, setKeyword ] = useState([]);

    const handleEvent = (e) => {

        // addEventListener('input', )
        e.preventDefault();

        setKeyword(e.target.value);

            
    }
    // addEventListener('input', (e) => {
    //     e.preventDefault();
    //     setKeyword(e.target.value);
    // })
    
    
    return(
        <>
            <input type="text" placeholder="Enter City" onChange={e=>setKeyword(e.target.value)}/>
            {/* <button></button> */}
            <GetAQIInformation keyword={keyword} />

        </>
    );
}

export default SearchBar;