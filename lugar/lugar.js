const axios = require('axios');

const getLugarLatLng = async( dir ) =>{

    // Para permitir escribir parlabras que puedan tener espacios por ejemplo
const encodedUrl = encodeURI( dir );

const instance = axios.create({
  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
  headers:{'x-rapidapi-key':'e2a2e6160bmsh335a313a63b868fp18ec8fjsn032dd6cbb95c'}  
});

const resp = await instance.get();
     
    if( resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${ dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng= data.lon;

    return{
            direccion,
            lat,
            lng
        }
}

module.exports = {
    getLugarLatLng
}
