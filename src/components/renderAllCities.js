import React, { useState, useEffect } from 'react';

import RenderSingleCity from './renderSingleCity';


/**
 * 
 * @param {String} cityName - the name of the city, the user is trying to search for 
 * @returns if there is a UID - it will return a single city
 * if no UID - it returns a list of all cities that match the keyword
 */
const RenderAllCities = ({keyword}) => {
    const [ allCities, setallCities ] = useState([]);

    const [ UID , setUID ] = useState(0);

   

    let URL = `https://api.waqi.info/search/?keyword=${keyword}&token=${process.env.REACT_APP_AQI_TOKEN}`;

    /**
     * GET all city data
     */
    useEffect(()=> {
        fetch(URL)
            .then(res => res.json())
            .then(cityData => {
                setallCities(cityData.data);
                
            })
            .catch(err => console.log(err))
    }, [URL])


  

    /**
     * 
     * @param {Integer} value 
     * @returns String
     * 
     * Function will change the className of the container to
     * the appropriate CSS class. 
     * I.e. everything under 50 AQI will be green
     * Everything over 301 will be dark red
     */
    const changeColor = (value) => {

        if(value >= 0 && value <= 50) {
            return 'good';
        } else if (value >= 51 && value <= 100) {
            return 'moderate';
        } else if (value >= 101 && value <= 150) {
            return 'unhealthy-sensitive';
        } else if (value >= 151 && value <= 200) {
            return 'unhealthy';
        } else if (value >= 201 && value <= 300) {
            return 'very-unhealthy';
        } else if (value >= 301) {
            return 'hazardous';
        } 
    }

    /**
     * 
     * If there is a UID present, 
     * RenderSingleCity component is passed the value of the UID
     * 
     * If there isn't a UID value, all cities will be listed.
     * Upon selection of a city, a UID is passed and RenderSingleCity is executed
     * 
     */
    return (
        <div className="All-Cities-Container">

        
            {
                UID ? 

                <RenderSingleCity JuanCity={UID}/> :

                allCities.map((city, key) => {
                    const { uid, aqi, station } = city;

                    
                    return(
                    
                    <li key={key}>
                        <button className="Individual-City-Container" onClick={(e)=>{
                            e.preventDefault();
                            setUID(uid);
                        }}>
                            <div className="Name-Geo-Item">
                                <h4>{station.name.substring(0, 55)}</h4>
                                <h6>Longitude: {station.geo[0]}<br />
                                Latitude: {station.geo[1]}</h6>
                            </div>
                            
                            
                            <div className={`AQI-Item ${changeColor(aqi)}`}>
                                
                                <h1>{aqi}</h1>
                                <p>AQI</p>

                            </div>
                        </button>
                    </li>
                    );
            })

            }
            
        </div>
    );
    
            
}



export default RenderAllCities;