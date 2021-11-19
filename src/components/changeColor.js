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
    } else {
        return ''
    }
}

export default changeColor;