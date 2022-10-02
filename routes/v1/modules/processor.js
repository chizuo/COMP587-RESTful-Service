const { GETmovie } = require('./accessor');
const { Options } = require('./shape');

exports.requestMovie = async (pref) => {
    var options = Options(pref, 'movie');
    try {
        return await GETmovie(options);
    } catch(error) { return error; }
}