import React from 'react';

const DisplayCities = ({cities}) => {
    // console.log(cities);
    return(

        <>
            {cities.map((city, key) => {
                const { aqi, station, time, uid } = city;
                return(
                    <div key={key}>
                        
                        <h3>{aqi}</h3>
                        <h3>{station.name}</h3>
                        {/* <h3>{time.stime}</h3> */}
                        {/* <h3>{uid}</h3> */}
                    </div>
                );
            })}
        </>
    );
}

export default DisplayCities;