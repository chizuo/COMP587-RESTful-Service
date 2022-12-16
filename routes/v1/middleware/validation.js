const valid = require('../defaults/validValues');

exports.validPref = (req, res, next) => {
    if(hasData(req.body) || hasProperty(req.body)) { 
        res.status(406).send('Preferences properties are incorrect');
    } else if(validPropertyDataType(req.body)|| validData(req.body)) {
        res.status(400).send('Required data in preference is incorrect');
    } else { next(); }
}

function hasProperty(pref) {
    return (pref.hasOwnProperty('country') && pref.hasOwnProperty('service') && 
    pref.hasOwnProperty('genre') && pref.hasOwnProperty('page') && 
    pref.hasOwnProperty('orderBy')) && pref.hasOwnProperty('language')
    && Object.keys(pref).length === 6 ? false : true;
}

function hasData(pref) {
    const { country, service, genre, page, orderBy } = pref;
    return (country == null || service == null || genre == null || page == null || orderBy == null) ? true : false;
}

function validPropertyDataType(pref) {
    const { country, service, genre, page, orderBy } = pref;
    return (typeof country === 'string' && Array.isArray(service) && Array.isArray(genre) && !isNaN(page) && typeof orderBy === 'string') ? false : true;
}

function validData(pref) {
    return false;
}