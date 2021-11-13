import React, { useEffect, useState } from 'react';
import RenderAllCities from './renderAllCities';

import { GrRefresh } from 'react-icons/gr';

const SearchBar = () => {
    const [ keyword, setKeyword ] = useState('');


    /**
     * 
     * @param {error} e
     * 
     * Reset keyword on press 
     */
    function handleRefresh(e){
        e.preventDefault();
        
        setKeyword('');
        console.log(keyword, 'pressed');
    }
    
    /**
     * Instead of it updating as I type, I could set a button that submits when clicked.
     * I like the way it is right now, but then I have the hassle of removing keywords
     * once passed..
     */
    return(
        <>  
            <div className="Search-Bar">
                <form onSubmit={handleRefresh}>

                    <input 
                        name="city" 
                        type="text" 
                        placeholder="Enter City i.e. Vancouver, Montreal, etc" 
                        value={keyword}
                        onChange={e=>setKeyword(e.target.value)}
                    />
                    <button type="submit"><GrRefresh /></button>

                </form>

                
            </div>

            {
                keyword ?
                <RenderAllCities keyword={keyword} /> :
                <h2>Go ahead, don't be shy</h2>
            }
        </>
    );
}

export default SearchBar;