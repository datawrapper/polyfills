const fs = require('fs');
const ua = require('useragent-generator');
const range = require('lodash.range');
const request = require('request');
const { queue } = require('d3-queue');

const browsers = {};

const versions = {
    firefox: [30, 66],
    chrome: [20, 74],
    ie: [6, 11],
    edge: [12, 18],
    safari: [6, 12]
};

Object.keys(versions).forEach(browser => {
    const [v0, v1] = versions[browser];
    range(v0, v1 + 1).forEach(v => {
        browsers[`${browser}-${v}`] = ua[browser](v);
    });
});

const q = queue(10);

const load = (key, ua, callback) => {
    console.log('loading', key);
    request(`https://cdn.polyfill.io/v3/polyfill.min.js?ua=${ua}`, (err, res, body) => {
        if (!err) {
            fs.writeFile(`polyfills/${key}.js`, body, err => {
                if (!err) callback();
            });
        }
    });
};

Object.keys(browsers).forEach(key => {
    q.defer(load, key, browsers[key]);
});

q.defer(load, 'all', 'all-browsers');

q.awaitAll(() => {
    console.log('all done!');
});
