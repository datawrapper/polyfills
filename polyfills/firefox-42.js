/* Disable minification (remove `.min` from URL path) for more info */

(function(undefined) {function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function ToInteger(n){var i=Number(n);return isNaN(i)?0:1/i===Infinity||1/i==-Infinity||i===Infinity||i===-Infinity?i:(i<0?-1:1)*Math.floor(Math.abs(i))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function Get(n,t){return n[t]}function SameValueNonNumber(e,n){return e===n}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in this&&e instanceof this.Symbol?"symbol":"object"}}function SameValueZero(n,e){return Type(n)===Type(e)&&("number"===Type(n)?!(!isNaN(n)||!isNaN(e))||(1/n===Infinity&&1/e==-Infinity||(1/n==-Infinity&&1/e===Infinity||n===e)):SameValueNonNumber(n,e))}function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function GetV(t,e){return ToObject(t)[e]}function IsCallable(n){return"function"==typeof n}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?GetMethod(e,this.Symbol.toPrimitive):undefined;if(r!==undefined){var n=Call(r,e,[i]);if("object"!==Type(n))return n;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,"string"));default:return String(t)}}CreateMethodProperty(Array.prototype,"includes",function(e){"use strict";var r=ToObject(this),t=ToLength(Get(r,"length"));if(0===t)return!1;var o=ToInteger(arguments[1]);if(o>=0)var n=o;else(n=t+o)<0&&(n=0);for(;n<t;){var a=Get(r,ToString(n));if(SameValueZero(e,a))return!0;n+=1}return!1});var _mutation=function(){function e(e){return"function"==typeof Node?e instanceof Node:e&&"object"==typeof e&&e.nodeName&&e.nodeType>=1&&e.nodeType<=12}return function(n){if(1===n.length)return e(n[0])?n[0]:document.createTextNode(n[0]+"");for(var t=document.createDocumentFragment(),o=0;o<n.length;o++)t.appendChild(e(n[o])?n[o]:document.createTextNode(n[o]+""));return t}}();DocumentFragment.prototype.append=function(){this.appendChild(_mutation(arguments))};DocumentFragment.prototype.prepend=function(){this.insertBefore(_mutation(arguments),this.firstChild)};Document.prototype.append=Element.prototype.append=function(){this.appendChild(_mutation(arguments))};Document.prototype.prepend=Element.prototype.prepend=function(){this.insertBefore(_mutation(arguments),this.firstChild)};Document.prototype.remove=Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)},"Text"in this&&(Text.prototype.remove=Element.prototype.remove);Document.prototype.replaceWith=Element.prototype.replaceWith=function(){this.parentNode&&this.parentNode.replaceChild(_mutation(arguments),this)},"Text"in this&&(Text.prototype.replaceWith=Element.prototype.replaceWith);Document.prototype.after=Element.prototype.after=function(){if(this.parentNode){for(var t=Array.prototype.slice.call(arguments),e=this.nextSibling,o=e?t.indexOf(e):-1;-1!==o&&(e=e.nextSibling);)o=t.indexOf(e);this.parentNode.insertBefore(_mutation(arguments),e)}},"Text"in this&&(Text.prototype.after=Element.prototype.after);this.addEventListener("focus",function(e){e.target.dispatchEvent(new Event("focusin",{bubbles:!0,cancelable:!0}))},!0),this.addEventListener("blur",function(e){e.target.dispatchEvent(new Event("focusout",{bubbles:!0,cancelable:!0}))},!0);Document.prototype.before=Element.prototype.before=function(){if(this.parentNode){for(var e=Array.prototype.slice.call(arguments),t=this.previousSibling,o=t?e.indexOf(t):-1;-1!==o&&(t=t.previousSibling);)o=e.indexOf(t);this.parentNode.insertBefore(_mutation(arguments),t?t.nextSibling:this.parentNode.firstChild)}},"Text"in this&&(Text.prototype.before=Element.prototype.before);!function(n){function h(){a!==n.location.hash&&(a=n.location.hash,n.dispatchEvent(new Event("hashchange"))),setTimeout(h,500)}var a=n.location.hash;n.onhashchange=function(){},h()}(this);}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});