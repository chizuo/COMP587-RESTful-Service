const { GETmovie, GETaccount, GETall, POSTaccount, UPDATEaccount, UPDATEuserBehavior } = require('./accessor');
const Option = require('../class/option');
const Movie = require('../class/movie');

exports.requestMovie = async (pref) => {
    var option = new Option(pref, 'movie');
    const movies = [];
    let response;

    try {
        response = await GETmovie(option.json());    
    } catch(error) { return error; } 

    const { results, total_pages } = response;

    for(let i = 0; i < results.length; i++) {
        movies.push(new Movie(results[i]));
    }
    return { movies, total_pages };
}

exports.register = async(data) => {
    try {
        let response = await POSTaccount(data);
        return response;
    } catch (error) { return error; } 
}

exports.authenticate = async(data) => {
    try {
        let response = await GETaccount(data);
        return response;
    } catch (error) { return error; } 
}

exports.update = async(data) => {
    try {
        let response = await UPDATEaccount(data);
        return response;
    } catch (error) { return error; }
}

exports.userData = async(data) => {
    try {
        let response = await UPDATEuserBehavior(data);
        return response;
    } catch(error) { return error; }
}

exports.allUsers = async() => {
    try {
        let response = await GETall();
        return response;
    } catch(error) { return error; }
}