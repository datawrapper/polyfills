import getVersion from './getBrowserVersion.js';

export default function() {
    // Opera 8.0+
    const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    const isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    const isEdge = !isIE && !!window.StyleMedia;

    // Chrome or Chromium 1+
    const isChrome = !!window.chrome && !!window.chrome.loadTimes;

    // Blink engine detection
    const isBlink = (isChrome || isOpera) && !!window.CSS;

    const browser = isChrome ? 'chrome' :
        isFirefox ? 'firefox' :
        isSafari ? 'safari' :
        isIE ? 'ie' :
        isEdge ? 'edge' :
        false;

    const version = browser && getVersion[browser] ?
        getVersion[browser](navigator.userAgent) :
        false;

    return { browser:browser, version: version };
}
