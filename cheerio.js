//Scrapping some data from cheerio npm page

const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
    uri: `https://www.npmjs.com/package/cheerio`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(($) => {
        console.log($('#readme').find('h5').text());
    })
    .catch((err) => {
        console.log(err);
    });