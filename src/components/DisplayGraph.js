import React, { useEffect, useState } from "react";

import { Bar } from 'react-chartjs-2';
import { Route, Routes } from "react-router-dom";

import Page404 from "../pages/404";

/**
 * 
 * @param {Object} City -- an object of a single city
 * 
 * @returns This componenet will return a graph created using Chart.js
 * 
 */

const DisplayGraph = ({graphData}) => {
    
    console.log(graphData)
 

    let datesARR = [], 
        o3ARR = [],
        pm10ARR = [],
        pm25ARR = [];
    

    try {
        if(graphData.forecast) {
            
            /**
             * Push all values of o3, pm10, and pm25 into an array
             * The array is given to the graph as a dataset below
             */
                    for(let i = 0; i < 4; i++) {
                    
                        datesARR.push(graphData.forecast.daily.o3[i].day)
                        o3ARR.push(graphData.forecast.daily.o3[i].avg)
                        pm10ARR.push(graphData.forecast.daily.pm10[i].avg)
                        pm25ARR.push(graphData.forecast.daily.pm25[i].avg)
                
                    }
                }
    } catch (error) {
        /**
         * If there is an error in adding data, route user to 404 page
         */
        console.log(error)
        return (
            <>
            
                <Routes>

                    <Route path="https://google.ca" element={<Page404 />}>
                        
                        Here
                    </Route>

                </Routes>
            </>
        );
    }

 

    console.log('dates', datesARR);
    console.log('o3', o3ARR);
    console.log('pm10', pm10ARR);
    console.log('pm25', pm25ARR);

    
    const lineData = {
        labels: datesARR,
        datasets: [{
            label: 'O\u2083',
            data: o3ARR,
            fill: false,
            backgroundColor: 'green',
            tension: 0.1
        }, {
          label: 'PM\u2081\u2080',
          data: pm10ARR,
          fill: false,
          backgroundColor: 'blue',
          tension: 0.1
        }, {
            label: 'PM\u2082\u2085',
          data: pm25ARR,
          fill: false,
          backgroundColor: 'red',
          tension: 0.1
        }]
      };

    const options = {
        // responsive: true,
        // maintainAspectRatio: false,
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

   
    return(
        <div className="Graph">
            <Bar data={lineData} options={options}/>
        </div>
    )
}

export default DisplayGraph;