/* Disable minification (remove `.min` from URL path) for more info */

(function(undefined) {if (!("onhashchange"in this&&(null==this.onhashchange||"function"==typeof this.onhashchange)
)) {!function(n){function h(){a!==n.location.hash&&(a=n.location.hash,n.dispatchEvent(new Event("hashchange"))),setTimeout(h,500)}var a=n.location.hash;n.onhashchange=function(){},h()}(this);}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});