const ENV = require('../../../env/env');
const URL = process.env.APIv1URL || ENV.GETapiURL();
const headers = process.env.APIv1headers || ENV.GETheaders();

exports.Options = (jsonObj, type) => {
  const { country, service, genre, page, language, orderBy, minYear, maxYear } = jsonObj;
  var services = unBoxServices(service);

  /* Required Preferences */
  let prefObj = {
    country: country || 'us',
    service: services || 'netflix',
    type: type,
    order_by: orderBy || 'year',
    genre: genre || '28',
    page: page || '1',
    desc: 'true',
    output_language: language || 'en',
  }

  /* Optional Preferences */
  if(maxYear) { prefObj['maxYear'] = maxYear; }
  if(minYear) { prefObj['minYear'] = minYear; }

  const schema = {
      method: 'GET',
      url: URL,
      params: prefObj,
      headers: headers
  };

  return schema;
}

function unBoxServices(service) {
  var services = "";
  for(let i = 0; i < service.length; i++) {
    services = services.length ? services.concat(',',service[i]) : service[i];
  }
  return services;
}