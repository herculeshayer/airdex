import React, { useEffect, useState } from 'react';
import GetAQIInformation from './GetAQI';

import { GrRefresh } from 'react-icons/gr';

const SearchBar = () => {
    const [ keyword, setKeyword ] = useState('');

    const [ selectCity, setSelectCity ] = useState(true);
    

    // const handleEvent = (e) => {

    //     // addEventListener('input', )
    //     e.preventDefault();

    //     setKeyword(e.target.value);

            
    // }
    // addEventListener('input', (e) => {
    //     e.preventDefault();
    //     setKeyword(e.target.value);
    // })
    // const [ allCities ] = GetAQIInformation(keyword);

    // console.log(allCities);

    // if(!keyword) {
    //     return <><h1>Enter the name of a city</h1></>
    // } 
    
    function handleRefresh(e){
        e.preventDefault();
        
        setKeyword('');
        console.log(keyword, 'pressed');
    }
    // useEffect(()=> {
    //     setKeyword(0);
    // }, [handleRefresh])
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

            {/* {
                keyword ?
                <h1>Enter data</h1> :
                <h1>Thanks</h1>
            } */}
            {/* <button></button> */}
            
            {/* {
                selectCity ?
                <h1>Gimme</h1> :
            } */}

            {
                keyword ?
                <GetAQIInformation keyword={keyword} /> :
                <h1>Go ahead, try it</h1>
            }
        </>
    );
}

export default SearchBar;