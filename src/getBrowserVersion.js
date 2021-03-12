function getVersion(RE) {
    return function (userAgent) {
        const raw = userAgent.toLowerCase().match(RE);
        return raw ? parseInt(raw[1], 10) : false;
    };
}

export default {
    chrome: getVersion(/chrom(?:e|ium)\/([0-9]+)\./),
    firefox: getVersion(/firefox\/([0-9]+\.*[0-9]*)/),
    safari: getVersion(/version\/([0-9]+).[0-9]+.[0-9]+ safari/),
    ie: getVersion(/(?:msie |rv:)([0-9]+).[0-9]+/),
    edge: getVersion(/edge\/([0-9]+).[0-9]+.[0-9]+/)
};
