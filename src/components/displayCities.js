import React, { useEffect, useState } from 'react';

const DisplayCities = ({JuanCity}) => {
    const [ singleCity, setSingleCity ] = useState([]);
    const { aqi, city, time, iaqi } = singleCity;
    const [ loading, setLoading ] = useState(true);


    useEffect(()=> {
        fetch(`https://api.waqi.info/feed/@${JuanCity}/?token=${process.env.REACT_APP_AQI_TOKEN}`)
            .then(res => res.json())
            .then(aqiCityData => {
                setSingleCity(aqiCityData.data)
                // console.log(aqiCityData)
                // console.log(singleCity)

                setLoading(false)
            })
            .catch(e=>console.log(e))
    }, [JuanCity])


    function handleEvent(e) {
        e.preventDefault();
        
        
    }

    // console.log('display', JuanCity)
    // if(!loading) {
        
    //     console.log('city-name', city.name)
    //     console.log('time', time.s)


    // }
    // console.log(cities);
    return(

        <>
        {
            loading ?
            <h1>Loading...</h1> :
            
            <div className="Individual-City">
                
                <h1>Good!</h1>
                {city.name}<br/>
                {city.geo[0]}
                {city.geo[1]}<br/>
                {aqi}

            </div>
            
            // <h1>{singleCity.map((prop, i) => {
            //     const { aqi, idx, city } = prop;
            //     return (
            //         <>
            //             <h1>{aqi}</h1>
            //         </>
            //     );
            // })}</h1>
        }
            
        </>
    );


    // {cities.map((city, key) => {
    //     const { aqi, station, time, uid } = city;
    //     return(
    //         <div key={key} >
    //             <button onClick={handleEvent}>
    //                 <h3>{station.name}</h3>
    //                 <h5>{aqi}</h5>
    //             </button>
                
    //             {/* <h3>{time.stime}</h3> */}
    //             {/* <h3>{uid}</h3> */}
    //         </div>
    //     );
    // })}
}

export default DisplayCities;