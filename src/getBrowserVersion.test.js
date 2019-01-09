import test from 'ava';
import ua from 'useragent-generator';
import range from 'lodash.range';

import getBrowserVersion from './getBrowserVersion.js';

const browsers = {
    firefox: [30, 66],
    chrome: [20, 74],
    ie: [6,11],
    edge: [12,18],
    safari: [6,12],
};

Object.keys(browsers).forEach(browser => {
    const [version_min, version_max] = browsers[browser];
    range(version_min, version_max+1).forEach(version => {
        const userAgent = ua[browser](version);
        test(`browser: ${browser}, version ${version}, ua: ${userAgent}`, t => {
            t.is(version, getBrowserVersion[browser](userAgent));
        });
    });
});

