const moment = require('moment');


const isDate = (value, {req, location, path }) => {

    if( !value ) {
        return false;
    }

    const fecha = moment(value)
    if( fecha) {
        return true;
    } else {
        return false;
    }

}

module.exports = {
    isDate
};