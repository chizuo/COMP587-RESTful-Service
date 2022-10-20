const { GETmovie } = require('./accessor');
const Option = require('../class/option');
const Movie = require('../class/movie');
const huluMovie = require('../testData/movie_hulu.json');
const netflixMovie = require('../testData/movie_netflix.json');
const response = require('../testData/movielist.json');

exports.requestMovie = async (pref) => {
    var option = new Option(pref, 'movie');
    const movies = [];
    const { results, total_pages } = response;
    /*
    try {
        const response = await GETmovie(option.json());
        const { results, total_pages } = response;
    } catch(error) { return error; } 
    */

    for(let i = 0; i < results.length; i++) {
        movies.push(new Movie(results[i]));
    }
    return { movies, total_pages };
}