# AirDex - Air Quality Index Frontend Application 

[![AirDex CI/CD](https://github.com/herculeshayer/airdex/actions/workflows/main.yml/badge.svg)](https://github.com/herculeshayer/airdex/actions/workflows/main.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f44a8f25-755a-4f57-b720-f6bbc3f1da11/deploy-status)](https://app.netlify.com/sites/airdex/deploys)


Hosted on [AWS](https://main.dpsrlf9zur0gc.amplifyapp.com/).
Hosted on [Netlify](https://airdex.netlify.app/).


## Description

Air Quality Index application using React.js
This is an Air Quality Index application. 

Users will be able to search from 1000+ cities and recieve accurate information regarding the inputted city.

For more information on React visit the [React Website](https://reactjs.org/).

### Technology Used
Frontend: HTML, CSS, SASS, JavaScript, React.js, Chart.js

Misc: AWS, Netlify, GitHub, GitHub Actions

## Demo


https://user-images.githubusercontent.com/64183136/142565326-62566b9a-825b-4336-85f3-d6e1eec4c400.mp4



## Installation 

1. Download [node.js](https://nodejs.org/en/).
2. A token is required from [AQI API](https://aqicn.org/data-platform/token/#/).
4. git clone this repository to your desktop 
5. Open the folder in your favorite text-editor
6. Create a .env file and add a variable REACT_APP_TOKEN=yourTokenHere
7. Access your terminal -> enter the repository folder -> type: 'npm install && npm start'
8. You're done! 

## TODO - Issues
1. <s>On occasion the city will not have the information needed for display. Specifically, this causes the 
application to crash due to undefined data.</s>
2. The Chart.js bar graph is not entirely responsive. Further inspection needed
3. Add react-router to navigate to a 404 page, r-r updated to v6

## TODO - Addons
1. Test API using Jest. Integration testing for reliable API calls
2. <s>CI/CD GitHub Actions testing</s>
3. <s>Animations for RenderAllCities.js. Cascading dropdown.</s>


