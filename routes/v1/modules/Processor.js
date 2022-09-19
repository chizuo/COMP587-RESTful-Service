const { GETmovie } = require('./Accessor');
const { Options } = require('./Shape');

exports.requestMovie = async (params) => {
    let options = Options(params, 'movie')
    try {
        return await GETmovie(options);
    } catch(error) { return error; }
}