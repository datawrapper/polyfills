import test from 'ava';
import ua from 'useragent-generator';
import range from 'lodash.range';

import getBrowserVersion, { getLatestVersionNumber } from './getBrowserVersion.js';

const browsers = {
    firefox: [30, getLatestVersionNumber('firefox')],
    chrome: [20, getLatestVersionNumber('chrome')],
    ie: [6, getLatestVersionNumber('ie')],
    edge: [12, getLatestVersionNumber('edge')],
    safari: [6, getLatestVersionNumber('safari')]
};

Object.keys(browsers).forEach(browser => {
    const [versionMin, versionMax] = browsers[browser];
    range(versionMin, versionMax + 1).forEach(version => {
        const userAgent = ua[browser](version);
        test(`browser: ${browser}, version ${version}, ua: ${userAgent}`, t => {
            t.is(version, getBrowserVersion[browser](userAgent));
        });
    });
});
