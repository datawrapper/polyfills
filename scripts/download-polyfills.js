/* eslint-env node */
/* eslint no-console: "off" */
const fs = require('fs').promises;
const ua = require('useragent-generator');
const range = require('lodash.range');
const { promisify } = require('util');
const { getLatestStableBrowsers } = require('caniuse-api');

const request = promisify(require('request'));

export function getLatestVersionNumber (browser) {
    return +getLatestStableBrowsers()
        .find(val => val.includes(browser))
        .split(' ')[1];
}

const browsers = [];

const versions = {
    /* v50 released 11.2015 */
    firefox: [50, getLatestVersionNumber('firefox')],
    /* v50 released 4.2016 */
    chrome: [50, getLatestVersionNumber('chrome')],
    /* v6 released 8.2001 */
    ie: [6, getLatestVersionNumber('ie')],
    /* v12 released 7.2015 */
    edge: [12, getLatestVersionNumber('edge')],
    /* v9 released 10.2015 */
    safari: [9, getLatestVersionNumber('safari')]
};

Object.entries(versions).forEach(([browser, value]) => {
    const [v0, v1] = value;
    range(v0, v1 + 1).forEach(v => {
        browsers.push([`${browser}-${v}`, ua[browser](v)]);
    });
});

// add features here that are not in the bundles by default
const features = [
    'Array.prototype.includes',
    'Array.prototype.find',
    'Array.prototype.findIndex',
    'Array.prototype.keys',
    'Object.values',
    'Object.assign',
    'Object.entries',
    'Object.keys',
    'Symbol',
    'fetch',
    'Number.isFinite',
    'Math.sign',
    'NodeList.prototype.forEach',
    'Float64Array'
];

const availablePolyfills = {
    firefox: [],
    chrome: [],
    ie: [],
    edge: [],
    safari: []
};

async function load (key, ua) {
    console.log('loading', key);
    const { body } = await request(
        `https://cdn.polyfill.io/v3/polyfill.min.js?flags=gated&features=default,${features.join(
            ','
        )},fetch&ua=${ua}`
    );

    const hasPolyfills = !!body.replace(/\/\*.*\*\//g, '').trim();
    if (hasPolyfills) {
        const [browser, version] = key.split('-');
        if (availablePolyfills[browser]) {
            availablePolyfills[browser].push(Number(version));
        }
        await fs.writeFile(`polyfills/${key}.js`, body);
    }
}

async function main () {
    for (const [browser, ua] of browsers) {
        await load(browser, ua);
    }
    await load('all', 'all-browsers');
    Object.entries(availablePolyfills).forEach(([key, values]) => {
        availablePolyfills[key] = [Math.min(...values), Math.max(...values)];
    });

    await fs.writeFile(
        'src/availablePolyfills.js',
        `/*
  This file is auto generated. Please run \`npm run download\` to update.
*/
export default ${JSON.stringify(availablePolyfills)}`
    );
    console.log('all done!');
}

main();
