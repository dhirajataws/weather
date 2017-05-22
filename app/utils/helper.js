var axios = require('axios');
import apikey from '../config/apikey';

function getWhether(lat, lon, unit){
    let unit_ = unit === 'C' ? 'metric' : 'imperial';
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=${unit_}`);
};

var helpers = {
    getWhetherInfo : function(lat, lon, unit){
        "use strict";
        return axios.all([getWhether(lat, lon, unit)])
            .then(function(arr){
                return {
                    report : arr[0].data,

                }
            });
    }
};

module.exports = helpers;
