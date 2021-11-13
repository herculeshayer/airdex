import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import DisplayCities from './displayCities';



const GetAQIInformation = ({keyword}) => {
    const [ allCities, setallCities ] = useState([]);

    const [ UID , setUID ] = useState(0);

    const [ color, setColor ] = useState('black');

    let URL = `https://api.waqi.info/search/?keyword=${keyword}&token=${process.env.REACT_APP_AQI_TOKEN}`;

    // console.log(URL);
    useEffect(()=> {
        fetch(URL)
            .then(res => res.json())
            .then(cityData => {
                setallCities(cityData.data);
                // console.log(cityData.data.city.name);
            })
            .catch(err => console.log(err))
    }, [URL])

    console.log(allCities);

    console.log(UID);
    // const handleEvent = e => {
    //     e.preventDefault();
    //     setUID()
    // }

    /**
     * 
     * @param {Integer} value 
     * @returns String
     * 
     * .good {
            background-color: #096;
        }
        .moderate {
            background-color: #ffde33;
        }
        .unhealthy-sensitive {
            background-color: #ff9933;
        }
        .unhealthy {
            background-color: #c03;
        }
        .very-unhealthy {
            background-color: #609;
        }
        .hazardous {
            background-color: #7e0023;
        }
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

    return (
        <div className="All-Cities-Container">

        
            {
                UID ? 

                <DisplayCities JuanCity={UID}/> :

                allCities.map((city, key) => {
                    const { uid, aqi, station } = city;

                    // if(aqi > 0 && aqi < 51) {
                    //     setColor('green')
                    // } 
                    return(
                    
                    <li key={key}>
                        <button className="Individual-City-Container" onClick={(e)=>{
                            e.preventDefault();
                            setUID(uid);
                        }}>
                            <div className="Name-Geo-Item">
                                <h4>{station.name}</h4>
                                <h6>Longitude: {station.geo[0]}</h6>
                                <h6>Latitude: {station.geo[1]}</h6>
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
    // <DisplayCities cities={allCities}/>;

    {/* <DisplayCities cities={allCities}/> */}
            
}



export default GetAQIInformation;