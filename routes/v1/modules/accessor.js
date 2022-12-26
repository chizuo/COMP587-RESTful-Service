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

exports.UPDATEaccount = async(data) => {
    return new Promise( (resolve, reject) => {
        if(accountDB.has(data.email))
        {
            let details = accountDB.get(data.email);
            if(details.password = data.password) {
                if(data.hasOwnProperty("country")) { details.country = data.country; }
                if(data.hasOwnProperty("name")) { details.name = data.name; }
                if(data.hasOwnProperty("services")) { details.services = data.services; }
                if(data.hasOwnProperty("updatedpw")) { details.password = data.updatedpw; }
                accountDB.set(data.email, details);
                resolve(accountDB.get(data.email));
            } else { reject(new Error("authentication failed")); }
        } else {
            reject(new Error("account doesn't exist"));
        }
    });
}

exports.UPDATEuserBehavior = async(data) => {
    return new Promise ( (resolve, reject) => {
        let details = accountDB.get(data.email);
        if(details.password = data.password) { 
            details.genre_habits = data. genre_habits;
        } else {
            reject(new Error("authentication failed"));
        }
    });
}

exports.GETall = async(data) => {
    return new Promise ( (resolve, reject) => {
        let users = accountDB.values;
        let response = [];
        for(let i = 0; i < accountDB.size; i++) {
            response.push(users.next().value);
        }
        resolve(response);
    });
}