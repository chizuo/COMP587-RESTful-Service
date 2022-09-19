const axios = require('axios');

exports.GETmovie = async (options) => {
    return new Promise( (resolve, reject) => {
        axios.request(options).then(function (response) {
            resolve(response.data);
        }).catch(function (error) {
            reject(error);
        });
    });
}