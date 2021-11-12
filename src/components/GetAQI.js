import React, { useState, useEffect } from 'react';
import DisplayCities from './displayCities';



const GetAQIInformation = ({keyword}) => {
    const [ allCities, setallCities ] = useState([]);

    const [ UID , setUID ] = useState(0);

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

    return (
        <>

        
            {
                UID ? 
                <DisplayCities JuanCity={UID}/> :
                allCities.map((city, key) => {
                    const { uid, aqi, station } = city;
                    return(<li key={key}>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            setUID(uid);
                        }}>

                            <h1>{uid}</h1>
                            <h1>{aqi}</h1>
                            <h1>{station.name}</h1>
                        </button>
                    </li>
                    );
            })

            }
            
        </>
    );
    // <DisplayCities cities={allCities}/>;

    {/* <DisplayCities cities={allCities}/> */}
            
}



export default GetAQIInformation;