const ENV = require('../../../env/env');
const URL = process.env.APIv1URL || ENV.GETapiURL();
const headers = process.env.APIv1headers || ENV.GETheaders();

exports.Options = (jsonObj, type) => {
    const { country, service, genre, page, language } = jsonObj;
    const schema = {
        method: 'GET',
        url: URL,
        params: {
          country: country || 'us',
          service: service || 'netflix',
          type: type,
          genre: genre || '18',
          page: page || '1',
          output_language: 'en',
          language: language || 'en'
        },
        headers: headers
   };
   return schema;
}