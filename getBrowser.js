function getBrowser() {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome or Chromium 1+
    var isChrome = !!window.chrome && !!window.chrome.loadTimes;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    var browser = isChrome ? 'chrome' :
        isFirefox ? 'firefox' :
        isSafari ? 'safari' :
        isIE ? 'ie' :
        isEdge ? 'edge' :
        false;

    var version = isChrome ? getVersion(/chrom(?:e|ium)\/([0-9]+)\./) :
        isFirefox ? getVersion(/firefox\/([0-9]+\.*[0-9]*)/) :
        isSafari ? getVersion(/version\/([0-9+]).[0-9+].[0-9+] safari/) :
        isIE ? getVersion(/msie ([0-9+]).[0-9+].[0-9+]/) :
        isEdge ? getVersion(/edge\/([0-9+]).[0-9+].[0-9+]/) :
        false;

    return { browser:browser, version: version };

    function getVersion(RE) {
        var raw = navigator.userAgent.toLowerCase().match(RE);
        return raw ? parseInt(raw[1], 10) : false;
    }
}
