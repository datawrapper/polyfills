import getVersion from './getBrowserVersion.js';
import polyfills from './availablePolyfills.js';

export const availablePolyfills = polyfills;

export function getBrowser () {
    const userAgent = navigator.userAgent;

    // Firefox 1.0+
    const isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    const isSafari =
        /constructor/i.test(window.HTMLElement) ||
        (function (p) {
            return p.toString() === '[object SafariRemoteNotification]';
        })(!window.safari || window.safari.pushNotification);

    // Internet Explorer 6-11
    const isIE = /* @cc_on!@ */ false || !!document.documentMode;

    // Edge 20+
    const isEdge = !isIE && !!window.StyleMedia;

    // Chrome, Chromium 1+ or Chrome WebView
    const isChromeBrowser = !!window.chrome && !!window.chrome.loadTimes;
    const isChromeWebView = /; wv/.test(userAgent) && /Chrome/.test(userAgent);
    const isSamsungInternet = /SAMSUNG/.test(userAgent) && /Chrome/.test(userAgent);
    const isChrome = isChromeBrowser || isChromeWebView || isSamsungInternet;

    const browser = isChrome
        ? 'chrome'
        : isFirefox
            ? 'firefox'
            : isSafari
                ? 'safari'
                : isIE
                    ? 'ie'
                    : isEdge
                        ? 'edge'
                        : false;

    const version = browser && getVersion[browser] ? getVersion[browser](userAgent) : false;

    return { browser: browser, version: version };
}
