/* eslint-env node */
/* eslint no-console: "off" */
const fs = require('fs');
const ua = require('useragent-generator');
const range = require('lodash.range');
const request = require('request');
const { queue } = require('d3-queue');
const { getLatestVersionNumber } = require('../src/getBrowserVersion');

const browsers = {};

const versions = {
    firefox: [30, getLatestVersionNumber('firefox')],
    chrome: [20, getLatestVersionNumber('chrome')],
    ie: [6, getLatestVersionNumber('ie')],
    edge: [12, getLatestVersionNumber('edge')],
    safari: [6, getLatestVersionNumber('safari')]
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
    request(
        `https://cdn.polyfill.io/v3/polyfill.min.js?flags=gated&features=default,Array.prototype.includes,fetch&ua=${ua}`,
        (err, res, body) => {
            if (!err) {
                fs.writeFile(`polyfills/${key}.js`, body, err => {
                    if (!err) callback();
                });
            }
        }
    );
};

Object.keys(browsers).forEach(key => {
    q.defer(load, key, browsers[key]);
});

q.defer(load, 'all', 'all-browsers');

q.awaitAll(() => {
    console.log('all done!');
});
