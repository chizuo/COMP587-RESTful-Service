const { GETmovie, GETaccount, POSTaccount } = require('./accessor');
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
    } catch (error) { return error;} 
}

exports.authenticate = async(data) => {
    try {
        let response = await GETaccount(data);
        return response;
    } catch (error) { return error;} 
}