const ENV = require('../../../env/env');
const URL = process.env.APIv1URL || ENV.GETapiURL();
const headers = process.env.APIv1headers || ENV.GETheaders();

class Option {
    constructor(jsonObj, type) {
        this.method = 'GET';
        this.url = URL;
        this.params = this.buildPreferences(jsonObj, type);
        this.headers = headers;
    }

    json() {
        return { method: this.method, url: this.url, params: this.params, headers: this.headers }
    }

    buildPreferences(jsonObj, type) {
        const { country, service, genre, page, language, orderBy, minYear, maxYear } = jsonObj;
        var services = this.unBoxServices(service);
        var genres = this.unBoxGenres(genre);
        
        /* Required Preferences */
        let prefObj = {
            country: country || 'us',
            services: services || 'netflix',
            type: type,
            order_by: orderBy || 'year',
            genres: genres,
            page: page || '1',
            desc: 'True',
            output_language: language || 'en',
        }

        /* Optional Preferences */
        if(maxYear) { prefObj['maxYear'] = maxYear; }
        if(minYear) { prefObj['minYear'] = minYear; }

        return prefObj;
    }

    unBoxServices(service) {
        var services = "";
        for(let i = 0; i < service.length; i++) {
          services = services.length ? services.concat(',',service[i]) : service[i];
        }
        return services;
      }
      
    unBoxGenres(genre) {
        var genres = "";
        for(let i = 0; i < genre.length; i++) {
            genres = genres.length ? genres.concat(',',genre[i]) : genre[i];
        }
        return genres;
    }
}

module.exports = Option;