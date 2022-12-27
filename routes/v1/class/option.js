const ENV = require('../../../env/env');
const URL = process.env.APIv1URL || ENV.GETapiURL();
const headers = process.env.APIv1headers || ENV.GETheaders();
const Mapper = require('../defaults/genre');
const genre2num = Mapper.getGenreNum();

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
        const { country, services, genre, page, language, orderBy, minYear, maxYear } = jsonObj;
        let service = this.unBoxServices(services);
        let genres = this.unBoxGenres(genre);
        
        /* Required Preferences */
        let prefObj = {
            country: country || 'us',
            services: this.toString(service) || 'netflix',
            type: type,
            order_by: orderBy || 'year',
            genres: this.toString(genres),
            genres_relation: 'or',
            page: page || '1',
            desc: 'True',
            language: language || 'en',
            output_language: language || 'en',
        }

        /* Optional Preferences */
        if(maxYear) { prefObj['maxYear'] = maxYear; }
        if(minYear) { prefObj['minYear'] = minYear; }

        return prefObj;
    }

    unBoxServices(service) {
        let serviceList = [];
        for(let i = 0; i < service.length; i++) {
            serviceList.push(service[i]);
        }
        return serviceList;
      }
      
    unBoxGenres(genre) {
        let genres = [];
        for(let i = 0; i < genre.length; i++) {
            genres.push(genre2num.get(genre[i]));
        }
        return genres;
    }

    toString(list) {
        let result = "";
        for(let i = 0; i < list.length; i++) {
            result = result.length ? result.concat(',',list[i]) : list[i];
        }
        return result;
    }
}

module.exports = Option;