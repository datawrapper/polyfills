/* Disable minification (remove `.min` from URL path) for more info */

(function(undefined) {var _mutation=function(){function e(e){return"function"==typeof Node?e instanceof Node:e&&"object"==typeof e&&e.nodeName&&e.nodeType>=1&&e.nodeType<=12}return function(n){if(1===n.length)return e(n[0])?n[0]:document.createTextNode(n[0]+"");for(var t=document.createDocumentFragment(),o=0;o<n.length;o++)t.appendChild(e(n[o])?n[o]:document.createTextNode(n[o]+""));return t}}();DocumentFragment.prototype.prepend=function(){this.insertBefore(_mutation(arguments),this.firstChild)};Document.prototype.after=Element.prototype.after=function(){if(this.parentNode){for(var t=Array.prototype.slice.call(arguments),e=this.nextSibling,o=e?t.indexOf(e):-1;-1!==o&&(e=e.nextSibling);)o=t.indexOf(e);this.parentNode.insertBefore(_mutation(arguments),e)}},"Text"in this&&(Text.prototype.after=Element.prototype.after);Document.prototype.before=Element.prototype.before=function(){if(this.parentNode){for(var e=Array.prototype.slice.call(arguments),t=this.previousSibling,o=t?e.indexOf(t):-1;-1!==o&&(t=t.previousSibling);)o=e.indexOf(t);this.parentNode.insertBefore(_mutation(arguments),t?t.nextSibling:this.parentNode.firstChild)}},"Text"in this&&(Text.prototype.before=Element.prototype.before);Document.prototype.prepend=Element.prototype.prepend=function(){this.insertBefore(_mutation(arguments),this.firstChild)};Document.prototype.append=Element.prototype.append=function(){this.appendChild(_mutation(arguments))};!function(e){"use strict";function t(t){return!!t&&("Symbol"in e&&"iterator"in e.Symbol&&"function"==typeof t[Symbol.iterator]||!!Array.isArray(t))}function n(e){return"from"in Array?Array.from(e):Array.prototype.slice.call(e)}!function(){function r(e){var t="",n=!0;return e.forEach(function(e){var r=encodeURIComponent(e.name),a=encodeURIComponent(e.value);n||(t+="&"),t+=r+"="+a,n=!1}),t.replace(/%20/g,"+")}function a(e,t){var n=e.split("&");t&&-1===n[0].indexOf("=")&&(n[0]="="+n[0]);var r=[];n.forEach(function(e){if(0!==e.length){var t=e.indexOf("=");if(-1!==t)var n=e.substring(0,t),a=e.substring(t+1);else n=e,a="";n=n.replace(/\+/g," "),a=a.replace(/\+/g," "),r.push({name:n,value:a})}});var a=[];return r.forEach(function(e){a.push({name:decodeURIComponent(e.name),value:decodeURIComponent(e.value)})}),a}function i(e){if(c)return new s(e);var t=document.createElement("a");return t.href=e,t}function o(e){var i=this;this._list=[],e===undefined||null===e||(e instanceof o?this._list=a(String(e)):"object"==typeof e&&t(e)?n(e).forEach(function(e){if(!t(e))throw TypeError();var r=n(e);if(2!==r.length)throw TypeError();i._list.push({name:String(r[0]),value:String(r[1])})}):"object"==typeof e&&e?Object.keys(e).forEach(function(t){i._list.push({name:String(t),value:String(e[t])})}):(e=String(e),"?"===e.substring(0,1)&&(e=e.substring(1)),this._list=a(e))),this._url_object=null,this._setList=function(e){u||(i._list=e)};var u=!1;this._update_steps=function(){u||(u=!0,i._url_object&&("about:"===i._url_object.protocol&&-1!==i._url_object.pathname.indexOf("?")&&(i._url_object.pathname=i._url_object.pathname.split("?")[0]),i._url_object.search=r(i._list),u=!1))}}function u(e,t){var n=0;this.next=function(){if(n>=e.length)return{done:!0,value:undefined};var r=e[n++];return{done:!1,value:"key"===t?r.name:"value"===t?r.value:[r.name,r.value]}}}function l(t,n){function r(){var e=l.href.replace(/#$|\?$|\?(?=#)/g,"");l.href!==e&&(l.href=e)}function u(){m._setList(l.search?a(l.search.substring(1)):[]),m._update_steps()}if(!(this instanceof e.URL))throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");n&&(t=function(){if(c)return new s(t,n).href;var e;try{var r;if("[object OperaMini]"===Object.prototype.toString.call(window.operamini)?(e=document.createElement("iframe"),e.style.display="none",document.documentElement.appendChild(e),r=e.contentWindow.document):document.implementation&&document.implementation.createHTMLDocument?r=document.implementation.createHTMLDocument(""):document.implementation&&document.implementation.createDocument?(r=document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null),r.documentElement.appendChild(r.createElement("head")),r.documentElement.appendChild(r.createElement("body"))):window.ActiveXObject&&(r=new window.ActiveXObject("htmlfile"),r.write("<head></head><body></body>"),r.close()),!r)throw Error("base not supported");var a=r.createElement("base");a.href=n,r.getElementsByTagName("head")[0].appendChild(a);var i=r.createElement("a");return i.href=t,i.href}finally{e&&e.parentNode.removeChild(e)}}());var l=i(t||""),f=function(){if(!("defineProperties"in Object))return!1;try{var e={};return Object.defineProperties(e,{prop:{get:function(){return!0}}}),e.prop}catch(t){return!1}}(),h=f?this:document.createElement("a"),m=new o(l.search?l.search.substring(1):null);return m._url_object=h,Object.defineProperties(h,{href:{get:function(){return l.href},set:function(e){l.href=e,r(),u()},enumerable:!0,configurable:!0},origin:{get:function(){return"origin"in l?l.origin:this.protocol+"//"+this.host},enumerable:!0,configurable:!0},protocol:{get:function(){return l.protocol},set:function(e){l.protocol=e},enumerable:!0,configurable:!0},username:{get:function(){return l.username},set:function(e){l.username=e},enumerable:!0,configurable:!0},password:{get:function(){return l.password},set:function(e){l.password=e},enumerable:!0,configurable:!0},host:{get:function(){var e={"http:":/:80$/,"https:":/:443$/,"ftp:":/:21$/}[l.protocol];return e?l.host.replace(e,""):l.host},set:function(e){l.host=e},enumerable:!0,configurable:!0},hostname:{get:function(){return l.hostname},set:function(e){l.hostname=e},enumerable:!0,configurable:!0},port:{get:function(){return l.port},set:function(e){l.port=e},enumerable:!0,configurable:!0},pathname:{get:function(){return"/"!==l.pathname.charAt(0)?"/"+l.pathname:l.pathname},set:function(e){l.pathname=e},enumerable:!0,configurable:!0},search:{get:function(){return l.search},set:function(e){l.search!==e&&(l.search=e,r(),u())},enumerable:!0,configurable:!0},searchParams:{get:function(){return m},enumerable:!0,configurable:!0},hash:{get:function(){return l.hash},set:function(e){l.hash=e,r()},enumerable:!0,configurable:!0},toString:{value:function(){return l.toString()},enumerable:!1,configurable:!0},valueOf:{value:function(){return l.valueOf()},enumerable:!1,configurable:!0}}),h}var c,s=e.URL;try{if(s){if("searchParams"in(c=new e.URL("http://example.com"))){var f=new l("http://example.com");if(f.search="a=1&b=2","http://example.com/?a=1&b=2"===f.href&&(f.search="","http://example.com/"===f.href))return}"href"in c||(c=undefined),c=undefined}}catch(m){}if(Object.defineProperties(o.prototype,{append:{value:function(e,t){this._list.push({name:e,value:t}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},"delete":{value:function(e){for(var t=0;t<this._list.length;)this._list[t].name===e?this._list.splice(t,1):++t;this._update_steps()},writable:!0,enumerable:!0,configurable:!0},get:{value:function(e){for(var t=0;t<this._list.length;++t)if(this._list[t].name===e)return this._list[t].value;return null},writable:!0,enumerable:!0,configurable:!0},getAll:{value:function(e){for(var t=[],n=0;n<this._list.length;++n)this._list[n].name===e&&t.push(this._list[n].value);return t},writable:!0,enumerable:!0,configurable:!0},has:{value:function(e){for(var t=0;t<this._list.length;++t)if(this._list[t].name===e)return!0;return!1},writable:!0,enumerable:!0,configurable:!0},set:{value:function(e,t){for(var n=!1,r=0;r<this._list.length;)this._list[r].name===e?n?this._list.splice(r,1):(this._list[r].value=t,n=!0,++r):++r;n||this._list.push({name:e,value:t}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},entries:{value:function(){return new u(this._list,"key+value")},writable:!0,enumerable:!0,configurable:!0},keys:{value:function(){return new u(this._list,"key")},writable:!0,enumerable:!0,configurable:!0},values:{value:function(){return new u(this._list,"value")},writable:!0,enumerable:!0,configurable:!0},forEach:{value:function(e){var t=arguments.length>1?arguments[1]:undefined;this._list.forEach(function(n){e.call(t,n.value,n.name)})},writable:!0,enumerable:!0,configurable:!0},toString:{value:function(){return r(this._list)},writable:!0,enumerable:!1,configurable:!0}}),"Symbol"in e&&"iterator"in e.Symbol&&(Object.defineProperty(o.prototype,e.Symbol.iterator,{value:o.prototype.entries,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,e.Symbol.iterator,{value:function(){return this},writable:!0,enumerable:!0,configurable:!0})),s)for(var h in s)s.hasOwnProperty(h)&&"function"==typeof s[h]&&(l[h]=s[h]);e.URL=l,e.URLSearchParams=o}(),function(){if("1"!==new e.URLSearchParams([["a",1]]).get("a")||"1"!==new e.URLSearchParams({a:1}).get("a")){var r=e.URLSearchParams;e.URLSearchParams=function(e){if(e&&"object"==typeof e&&t(e)){var a=new r;return n(e).forEach(function(e){if(!t(e))throw TypeError();var r=n(e);if(2!==r.length)throw TypeError();a.append(r[0],r[1])}),a}return e&&"object"==typeof e?(a=new r,Object.keys(e).forEach(function(t){a.set(t,e[t])}),a):new r(e)}}}()}(self);Document.prototype.replaceWith=Element.prototype.replaceWith=function(){this.parentNode&&this.parentNode.replaceChild(_mutation(arguments),this)},"Text"in this&&(Text.prototype.replaceWith=Element.prototype.replaceWith);DocumentFragment.prototype.append=function(){this.appendChild(_mutation(arguments))};!function(n){function h(){a!==n.location.hash&&(a=n.location.hash,n.dispatchEvent(new Event("hashchange"))),setTimeout(h,500)}var a=n.location.hash;n.onhashchange=function(){},h()}(this);}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});