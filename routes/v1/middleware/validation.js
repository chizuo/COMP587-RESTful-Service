const { valid } = require("joi");

exports.validPref = (req, res, next) => {
    if(hasProperty(req.body) && validDataType(req.body)) { 
        console.log('...a request failed the properties validation');
        res.status(406).send('you naughty boy');
    } else if(hasData(req.body)  && validDataType(req.body)) {
        console.log('...a request failed the content validation');
        res.status(400).send('Required data is missing');
    } else { next(); }
}

function hasProperty(pref) {
    return (pref.hasOwnProperty('country') && pref.hasOwnProperty('service') && 
    pref.hasOwnProperty('genre') && pref.hasOwnProperty('page') && 
    pref.hasOwnProperty('orderBy')) ? false : true;
}

function validDataType() {
    return true;
}

function hasData(pref) {
    const { country, service, genre, page, orderBy } = pref;
    return (country && service.length > 0 && genre.length > 0 && page ) ? false : true;
}

function validData() {
    return true;
}