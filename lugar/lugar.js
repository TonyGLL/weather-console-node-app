const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);
    
    const instance = axios.create({
    
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': '787673122fmsh3ec7f6dd8d9f131p11e0aejsnd6233649257a'}
    });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        
        throw new Error(`No hay resultados para "${dir}"`);
    }

    const data      = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
