const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=28326a0308d330e56dc08cec6f8db032&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}