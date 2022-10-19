const { GETmovie } = require('./accessor');
const Option = require('../class/option');

exports.requestMovie = async (pref) => {
    var option = new Option(pref, 'movie');
    try {
        return await GETmovie(option.json());
    } catch(error) { return error; } 
}