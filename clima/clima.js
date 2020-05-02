const axios = require('axios');



const getClima = async ( lat,lng ) =>{

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=0c919f02bd3565bec09c26eff4ec1458&units=degrees`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}