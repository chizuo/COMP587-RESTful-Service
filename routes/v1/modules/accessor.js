const axios = require('axios');
const accountDB = new Map();

exports.GETmovie = async (options) => {
    return new Promise( (resolve, reject) => {
        axios.request(options).then(function (response) {
            resolve(response.data);
        }).catch(function (error) {
            reject(error);
        });
    });
}

exports.POSTaccount = async(data) => {
    return new Promise( (resolve, reject) => {
        if(accountDB.has(data.email)) { reject(new Error("account already exists")); }
        else {
            accountDB.set(data.email, data);
            resolve(accountDB.get(data.email));
        }
    });
}

exports.GETaccount = async(data) => {
    return new Promise( (resolve, reject) => {
        if(accountDB.has(data.email))
        {
            let details = accountDB.get(data.email);
            if(details.password == data.password) { resolve(details); }
            else { reject(new Error("authentication failed")); }
        } else {
            reject(new Error("account doesn't exist"));
        }
    });
}