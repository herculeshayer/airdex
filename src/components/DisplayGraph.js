import React, { useEffect, useState } from "react";

import { Line } from 'react-chartjs-2';

const DisplayGraph = ({graphData}) => {
    
    const [ graph, setGraph ] = useState({});

    const [ dates, setDates ] = useState([]);

    let datesARR = [], 
        o3ARR = [],
        pm10ARR = [],
        pm25ARR = [];
    // let o3ARR = [];

    // console.log(graphData.forecast)
    // console.log('pm10',graphData.forecast.daily.pm10[2].avg)

    try {
        if(graphData.forecast) {
            //graphData.forecast.daily.o3.length
                    for(let i = 0; i < 4; i++) {
                    
                        datesARR.push(graphData.forecast.daily.o3[i].day)
                        o3ARR.push(graphData.forecast.daily.o3[i].avg)
                        pm10ARR.push(graphData.forecast.daily.pm10[i].avg)
                        pm25ARR.push(graphData.forecast.daily.pm25[i].avg)
                
                    }
                }
    } catch (error) {
        return console.log(error);
    }

    

    
        
    const addValues = () => {
        if(graphData.forecast.daily) {
       
            
            // for(let i = 0; i < graphData.forecast.daily.pm10[i].length; i++) {
            
            //     pm10ARR.push(graphData.forecast.daily.pm10[i].avg)
                
            // }
            // for(let i = 0; i < graphData.forecast.daily.pm25[i].length; i++) {
                
            //     pm25ARR.push(graphData.forecast.daily.pm25[i].avg)
            // }
    
        }
    }

    // useEffect(() => {
    //     addValues();
    // }, [])
    
    

    console.log('dates', datesARR);
    console.log('o3', o3ARR);
    console.log('pm10', pm10ARR);
    console.log('pm25', pm25ARR);

    // const o3Data;
    // const labels = datesARR;
    const lineData = {
        labels: datesARR,
        datasets: [{
            label: 'O\u2083',
            data: o3ARR,
            fill: false,
            borderColor: 'white',
            tension: 0.1
        }, {
          label: 'PM\u2081\u2080',
          data: pm10ARR,
          fill: false,
          borderColor: 'blue',
          tension: 0.1
        }, {
            label: 'PM\u2082\u2085',
          data: pm25ARR,
          fill: false,
          borderColor: 'red',
          tension: 0.1
        }]
      };

    const options = {
        responsive: true,
        tooltips: {
            enabled: true,
            mode: 'index'
        },
        title: {
            display: true,
            text: 'Air Quality Index min/avg/max'
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        }
    }

    // const chart = () => {
    //     setGraph({
    //         labels: ['m','t','w','r','f'],
    //         datasets: [{
    //                 label: 'o3',
    //                 data: [1,2,3,4,5],
    //                 backgroundColor: 'rgba(1,1,1,1)',
    //                 borderWidth: 4
    //             }],   
    //     })
    // }


    // useEffect(()=> {
    //     chart();
    // }, []);

    // console.log(graphData.forecast.daily.o3[0].day)
    return(
        <div>
            <Line data={lineData} options={options}/>
        </div>
    )
}

export default DisplayGraph;