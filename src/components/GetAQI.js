import React, { useState, useEffect } from 'react';
import DisplayCities from './displayCities';



const GetAQIInformation = ({keyword}) => {
    const [ allCities, setallCities ] = useState([]);

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


    return (


        <>

            <DisplayCities cities={allCities}/>
            {/* {allCities.map((city, key) => {
                const { uid, aqi, station } = city;
                return(<div key={key}>
    
                    <h1>{uid}</h1>
                    <h1>{aqi}</h1>
                    <h1>{station.name}</h1>
    
                </div>
                );
            })} */}
        </> 

    );
    // <DisplayCities cities={allCities}/>;
}



export default GetAQIInformation;