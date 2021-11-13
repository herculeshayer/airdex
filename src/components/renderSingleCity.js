import React, { useEffect, useState } from 'react';

import DisplayGraph from './displayGraph';

const RenderSingleCity = ({JuanCity}) => {
    const [ singleCity, setSingleCity ] = useState([]);
    const { aqi, city } = singleCity;
    const [ loading, setLoading ] = useState(true);


    useEffect(()=> {
        fetch(`https://api.waqi.info/feed/@${JuanCity}/?token=${process.env.REACT_APP_AQI_TOKEN}`)
            .then(res => res.json())
            .then(aqiCityData => {
                setSingleCity(aqiCityData.data)
                

                setLoading(false)
            })
            .catch(e=>console.log(e))
    }, [JuanCity])


    
    return(

        <>
        {
            loading ?
            <h1>Loading...</h1> :
            
            <div className="Individual-City">
                
                <h1>{city.name}</h1>
               
                <h4>
                    Longitude: {city.geo[0] === null ? 'Null' : city.geo[0]}<br/>
                    Latitude: {city.geo[1] === null ? 'Null' : city.geo[1]}<br/>
                </h4>
                <h3>Current AQI: {aqi}</h3>

                <DisplayGraph graphData={singleCity}/>

            </div>
            
            
        }
            
        </>
    );

}

export default RenderSingleCity;