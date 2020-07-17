/* Disable minification (remove `.min` from URL path) for more info */

(function(self, undefined) {function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}function Get(n,t){return n[t]}function IsCallable(n){return"function"==typeof n}function RequireObjectCoercible(e){if(null===e||e===undefined)throw TypeError(Object.prototype.toString.call(e)+" is not coercible to Object.");return e}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.toPrimitive?GetMethod(e,self.Symbol.toPrimitive):undefined;if(r!==undefined){var n=Call(r,e,[i]);if("object"!==Type(n))return n;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,String));default:return String(t)}}function TrimString(e,u){var r=RequireObjectCoercible(e),t=ToString(r),n=/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source;if("start"===u)var p=String.prototype.replace.call(t,new RegExp("^"+n,"g"),"");else p="end"===u?String.prototype.replace.call(t,new RegExp(n+"$","g"),""):String.prototype.replace.call(t,new RegExp("^"+n+"|"+n+"$","g"),"");return p}var _mutation=function(){function e(e){return"function"==typeof Node?e instanceof Node:e&&"object"==typeof e&&e.nodeName&&e.nodeType>=1&&e.nodeType<=12}return function n(t){if(1===t.length)return e(t[0])?t[0]:document.createTextNode(t[0]+"");for(var o=document.createDocumentFragment(),r=0;r<t.length;r++)o.appendChild(e(t[r])?t[r]:document.createTextNode(t[r]+""));return o}}();!function(t){"use strict";function e(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";default:return null===t?"null":"object"}}function r(t){return Object.prototype.toString.call(t).replace(/^\[object *|\]$/g,"")}function n(t){return"function"==typeof t}function o(t){if(null===t||t===B)throw TypeError();return Object(t)}function i(t){return t>>0}function f(t){return t>>>0}function u(e){if(!("TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS"in t)){if(e.length>N)throw RangeError("Array too large for polyfill");var r;for(r=0;r<e.length;r+=1)!function n(t){Object.defineProperty(e,t,{get:function(){return e._getter(t)},set:function(r){e._setter(t,r)},enumerable:!0,configurable:!1})}(r)}}function a(t,e){var r=32-e;return t<<r>>r}function h(t,e){var r=32-e;return t<<r>>>r}function y(t){return[255&t]}function s(t){return a(t[0],8)}function l(t){return[255&t]}function p(t){return h(t[0],8)}function c(t){return t=x(Number(t)),[t<0?0:t>255?255:255&t]}function b(t){return[255&t,t>>8&255]}function g(t){return a(t[1]<<8|t[0],16)}function E(t){return[255&t,t>>8&255]}function v(t){return h(t[1]<<8|t[0],16)}function _(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function O(t){return a(t[3]<<24|t[2]<<16|t[1]<<8|t[0],32)}function d(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function j(t){return h(t[3]<<24|t[2]<<16|t[1]<<8|t[0],32)}function P(t,e,r){function n(t){var e=m(t),r=t-e;return r<.5?e:r>.5?e+1:e%2?e+1:e}var o,i,f,u=(1<<e-1)-1;if(t!==t)i=(1<<e)-1,f=F(2,r-1),o=0;else if(t===Infinity||t===-Infinity)i=(1<<e)-1,f=0,o=t<0?1:0;else if(0===t)i=0,f=0,o=1/t==-Infinity?1:0;else if(o=t<0,(t=M(t))>=F(2,1-u)){i=Y(m(I(t)/S),1023);var a=t/F(2,i);a<1&&(i-=1,a*=2),a>=2&&(i+=1,a/=2);var h=F(2,r);f=n(a*h)-h,i+=u,f/h>=1&&(i+=1,f=0),i>2*u&&(i=(1<<e)-1,f=0)}else i=0,f=n(t/F(2,1-u-r));var y,s=[];for(y=r;y;y-=1)s.push(f%2?1:0),f=m(f/2);for(y=e;y;y-=1)s.push(i%2?1:0),i=m(i/2);s.push(o?1:0),s.reverse();for(var l=s.join(""),p=[];l.length;)p.unshift(parseInt(l.substring(0,8),2)),l=l.substring(8);return p}function T(t,e,r){var n,o,i,f,u,a,h,y,s=[];for(n=0;n<t.length;++n)for(i=t[n],o=8;o;o-=1)s.push(i%2?1:0),i>>=1;return s.reverse(),f=s.join(""),u=(1<<e-1)-1,a=parseInt(f.substring(0,1),2)?-1:1,h=parseInt(f.substring(1,1+e),2),y=parseInt(f.substring(1+e),2),h===(1<<e)-1?0!==y?NaN:a*Infinity:h>0?a*F(2,h-u)*(1+y/F(2,r)):0!==y?a*F(2,-(u-1))*(y/F(2,r)):a<0?-0:0}function w(t){return T(t,11,52)}function A(t){return P(t,11,52)}function L(t){return T(t,8,23)}function R(t){return P(t,8,23)}var B=void 0,N=1e5,S=Math.LN2,M=Math.abs,m=Math.floor,I=Math.log,U=Math.max,Y=Math.min,F=Math.pow,x=Math.round;!function(){var t=Object.defineProperty,e=!function(){try{return Object.defineProperty({},"x",{})}catch(t){return!1}}();t&&!e||(Object.defineProperty=function(e,r,n){if(t)try{return t(e,r,n)}catch(o){}if(e!==Object(e))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in n&&Object.prototype.__defineGetter__.call(e,r,n.get),Object.prototype.__defineSetter__&&"set"in n&&Object.prototype.__defineSetter__.call(e,r,n.set),"value"in n&&(e[r]=n.value),e})}(),function(){function a(t){if((t=i(t))<0)throw RangeError("ArrayBuffer size is not a small enough positive integer.");Object.defineProperty(this,"byteLength",{value:t}),Object.defineProperty(this,"_bytes",{value:Array(t)});for(var e=0;e<t;e+=1)this._bytes[e]=0}function h(){if(!arguments.length||"object"!=typeof arguments[0])return function(t){if((t=i(t))<0)throw RangeError("length is not a small enough positive integer.");Object.defineProperty(this,"length",{value:t}),Object.defineProperty(this,"byteLength",{value:t*this.BYTES_PER_ELEMENT}),Object.defineProperty(this,"buffer",{value:new a(this.byteLength)}),Object.defineProperty(this,"byteOffset",{value:0})}.apply(this,arguments);if(arguments.length>=1&&"object"===e(arguments[0])&&arguments[0]instanceof h)return function(t){if(this.constructor!==t.constructor)throw TypeError();var e=t.length*this.BYTES_PER_ELEMENT;Object.defineProperty(this,"buffer",{value:new a(e)}),Object.defineProperty(this,"byteLength",{value:e}),Object.defineProperty(this,"byteOffset",{value:0}),Object.defineProperty(this,"length",{value:t.length});for(var r=0;r<this.length;r+=1)this._setter(r,t._getter(r))}.apply(this,arguments);if(arguments.length>=1&&"object"===e(arguments[0])&&!(arguments[0]instanceof h)&&!(arguments[0]instanceof a||"ArrayBuffer"===r(arguments[0])))return function(t){var e=t.length*this.BYTES_PER_ELEMENT;Object.defineProperty(this,"buffer",{value:new a(e)}),Object.defineProperty(this,"byteLength",{value:e}),Object.defineProperty(this,"byteOffset",{value:0}),Object.defineProperty(this,"length",{value:t.length});for(var r=0;r<this.length;r+=1){var n=t[r];this._setter(r,Number(n))}}.apply(this,arguments);if(arguments.length>=1&&"object"===e(arguments[0])&&(arguments[0]instanceof a||"ArrayBuffer"===r(arguments[0])))return function(t,e,r){if((e=f(e))>t.byteLength)throw RangeError("byteOffset out of range");if(e%this.BYTES_PER_ELEMENT)throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.");if(r===B){var n=t.byteLength-e;if(n%this.BYTES_PER_ELEMENT)throw RangeError("length of buffer minus byteOffset not a multiple of the element size");r=n/this.BYTES_PER_ELEMENT}else r=f(r),n=r*this.BYTES_PER_ELEMENT;if(e+n>t.byteLength)throw RangeError("byteOffset and length reference an area beyond the end of the buffer");Object.defineProperty(this,"buffer",{value:t}),Object.defineProperty(this,"byteLength",{value:n}),Object.defineProperty(this,"byteOffset",{value:e}),Object.defineProperty(this,"length",{value:r})}.apply(this,arguments);throw TypeError()}function P(t,e,r){var n=function(){Object.defineProperty(this,"constructor",{value:n}),h.apply(this,arguments),u(this)};"__proto__"in n?n.__proto__=h:(n.from=h.from,n.of=h.of),n.BYTES_PER_ELEMENT=t;var o=function(){};return o.prototype=T,n.prototype=new o,Object.defineProperty(n.prototype,"BYTES_PER_ELEMENT",{value:t}),Object.defineProperty(n.prototype,"_pack",{value:e}),Object.defineProperty(n.prototype,"_unpack",{value:r}),n}t.ArrayBuffer=t.ArrayBuffer||a,Object.defineProperty(h,"from",{value:function(t){return new this(t)}}),Object.defineProperty(h,"of",{value:function(){return new this(arguments)}});var T={};h.prototype=T,Object.defineProperty(h.prototype,"_getter",{value:function(t){if(arguments.length<1)throw SyntaxError("Not enough arguments");if((t=f(t))>=this.length)return B;var e,r,n=[];for(e=0,r=this.byteOffset+t*this.BYTES_PER_ELEMENT;e<this.BYTES_PER_ELEMENT;e+=1,r+=1)n.push(this.buffer._bytes[r]);return this._unpack(n)}}),Object.defineProperty(h.prototype,"get",{value:h.prototype._getter}),Object.defineProperty(h.prototype,"_setter",{value:function(t,e){if(arguments.length<2)throw SyntaxError("Not enough arguments");if(!((t=f(t))>=this.length)){var r,n,o=this._pack(e);for(r=0,n=this.byteOffset+t*this.BYTES_PER_ELEMENT;r<this.BYTES_PER_ELEMENT;r+=1,n+=1)this.buffer._bytes[n]=o[r]}}}),Object.defineProperty(h.prototype,"constructor",{value:h}),Object.defineProperty(h.prototype,"copyWithin",{value:function(t,e){var r=arguments[2],n=o(this),u=n.length,a=f(u);a=U(a,0);var h,y=i(t);h=y<0?U(a+y,0):Y(y,a);var s,l=i(e);s=l<0?U(a+l,0):Y(l,a);var p;p=r===B?a:i(r);var c;c=p<0?U(a+p,0):Y(p,a);var b,g=Y(c-s,a-h);for(s<h&&h<s+g?(b=-1,s=s+g-1,h=h+g-1):b=1;g>0;)n._setter(h,n._getter(s)),s+=b,h+=b,g-=1;return n}}),Object.defineProperty(h.prototype,"every",{value:function(t){if(this===B||null===this)throw TypeError();var e=Object(this),r=f(e.length);if(!n(t))throw TypeError();for(var o=arguments[1],i=0;i<r;i++)if(!t.call(o,e._getter(i),i,e))return!1;return!0}}),Object.defineProperty(h.prototype,"fill",{value:function(t){var e=arguments[1],r=arguments[2],n=o(this),u=n.length,a=f(u);a=U(a,0);var h,y=i(e);h=y<0?U(a+y,0):Y(y,a);var s;s=r===B?a:i(r);var l;for(l=s<0?U(a+s,0):Y(s,a);h<l;)n._setter(h,t),h+=1;return n}}),Object.defineProperty(h.prototype,"filter",{value:function(t){if(this===B||null===this)throw TypeError();var e=Object(this),r=f(e.length);if(!n(t))throw TypeError();for(var o=[],i=arguments[1],u=0;u<r;u++){var a=e._getter(u);t.call(i,a,u,e)&&o.push(a)}return new this.constructor(o)}}),Object.defineProperty(h.prototype,"find",{value:function(t){var e=o(this),r=e.length,i=f(r);if(!n(t))throw TypeError();for(var u=arguments.length>1?arguments[1]:B,a=0;a<i;){var h=e._getter(a),y=t.call(u,h,a,e);if(Boolean(y))return h;++a}return B}}),Object.defineProperty(h.prototype,"findIndex",{value:function(t){var e=o(this),r=e.length,i=f(r);if(!n(t))throw TypeError();for(var u=arguments.length>1?arguments[1]:B,a=0;a<i;){var h=e._getter(a),y=t.call(u,h,a,e);if(Boolean(y))return a;++a}return-1}}),Object.defineProperty(h.prototype,"forEach",{value:function(t){if(this===B||null===this)throw TypeError();var e=Object(this),r=f(e.length);if(!n(t))throw TypeError();for(var o=arguments[1],i=0;i<r;i++)t.call(o,e._getter(i),i,e)}}),Object.defineProperty(h.prototype,"indexOf",{value:function(t){if(this===B||null===this)throw TypeError();var e=Object(this),r=f(e.length);if(0===r)return-1;var n=0;if(arguments.length>0&&(n=Number(arguments[1]),n!==n?n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(n>0||-1)*m(M(n)))),n>=r)return-1;for(var o=n>=0?n:U(r-M(n),0);o<r;o++)if(e._getter(o)===t)return o;return-1}}),Object.defineProperty(h.prototype,"join",{value:function(t){if(this===B||null===this)throw TypeError();for(var e=Object(this),r=f(e.length),n=Array(r),o=0;o<r;++o)n[o]=e._getter(o);return n.join(t===B?",":t)}}),Object.defineProperty(h.prototype,"lastIndexOf",{value:function(t){if(this===B||null===this)throw TypeError();var e=Object(this),r=f(e.length);if(0===r)return-1;var n=r;arguments.length>1&&(n=Number(arguments[1]),n!==n?n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(n>0||-1)*m(M(n))));for(var o=n>=0?Y(n,r-1):r-M(n);o>=0;o--)if(e._getter(o)===t)return o;return-1}}),Object.defineProperty(h.prototype,"map",{value:function(t){if(this===B||null===this)throw TypeError();var e=Object(this),r=f(e.length);if(!n(t))throw TypeError();var o=[];o.length=r;for(var i=arguments[1],u=0;u<r;u++)o[u]=t.call(i,e._getter(u),u,e);return new this.constructor(o)}}),Object.defineProperty(h.prototype,"reduce",{value:function(t){if(this===B||null===this)throw TypeError();var e=Object(this),r=f(e.length);if(!n(t))throw TypeError();if(0===r&&1===arguments.length)throw TypeError();var o,i=0;for(o=arguments.length>=2?arguments[1]:e._getter(i++);i<r;)o=t.call(B,o,e._getter(i),i,e),i++;return o}}),Object.defineProperty(h.prototype,"reduceRight",{value:function(t){if(this===B||null===this)throw TypeError();var e=Object(this),r=f(e.length);if(!n(t))throw TypeError();if(0===r&&1===arguments.length)throw TypeError();var o,i=r-1;for(o=arguments.length>=2?arguments[1]:e._getter(i--);i>=0;)o=t.call(B,o,e._getter(i),i,e),i--;return o}}),Object.defineProperty(h.prototype,"reverse",{value:function(){if(this===B||null===this)throw TypeError();for(var t=Object(this),e=f(t.length),r=m(e/2),n=0,o=e-1;n<r;++n,--o){var i=t._getter(n);t._setter(n,t._getter(o)),t._setter(o,i)}return t}}),Object.defineProperty(h.prototype,"set",{value:function(t,e){if(arguments.length<1)throw SyntaxError("Not enough arguments");var r,n,o,i,u,a,h,y,s,l;if("object"==typeof arguments[0]&&arguments[0].constructor===this.constructor){if(r=arguments[0],(o=f(arguments[1]))+r.length>this.length)throw RangeError("Offset plus length of array is out of range");if(y=this.byteOffset+o*this.BYTES_PER_ELEMENT,s=r.length*this.BYTES_PER_ELEMENT,r.buffer===this.buffer){for(l=[],u=0,a=r.byteOffset;u<s;u+=1,a+=1)l[u]=r.buffer._bytes[a];for(u=0,h=y;u<s;u+=1,h+=1)this.buffer._bytes[h]=l[u]}else for(u=0,a=r.byteOffset,h=y;u<s;u+=1,a+=1,h+=1)this.buffer._bytes[h]=r.buffer._bytes[a]}else{if("object"!=typeof arguments[0]||"undefined"==typeof arguments[0].length)throw TypeError("Unexpected argument type(s)");if(n=arguments[0],i=f(n.length),(o=f(arguments[1]))+i>this.length)throw RangeError("Offset plus length of array is out of range");for(u=0;u<i;u+=1)a=n[u],this._setter(o+u,Number(a))}}}),Object.defineProperty(h.prototype,"slice",{value:function(t,e){for(var r=o(this),n=r.length,u=f(n),a=i(t),h=a<0?U(u+a,0):Y(a,u),y=e===B?u:i(e),s=y<0?U(u+y,0):Y(y,u),l=s-h,p=r.constructor,c=new p(l),b=0;h<s;){var g=r._getter(h);c._setter(b,g),++h,++b}return c}}),Object.defineProperty(h.prototype,"some",{value:function(t){if(this===B||null===this)throw TypeError();var e=Object(this),r=f(e.length);if(!n(t))throw TypeError();for(var o=arguments[1],i=0;i<r;i++)if(t.call(o,e._getter(i),i,e))return!0;return!1}}),Object.defineProperty(h.prototype,"sort",{value:function(t){function e(e,r){return e!==e&&r!==r?0:e!==e?1:r!==r?-1:t!==B?t(e,r):e<r?-1:e>r?1:0}if(this===B||null===this)throw TypeError();for(var r=Object(this),n=f(r.length),o=Array(n),i=0;i<n;++i)o[i]=r._getter(i);for(o.sort(e),i=0;i<n;++i)r._setter(i,o[i]);return r}}),Object.defineProperty(h.prototype,"subarray",{value:function(t,e){function r(t,e,r){return t<e?e:t>r?r:t}t=i(t),e=i(e),arguments.length<1&&(t=0),arguments.length<2&&(e=this.length),t<0&&(t=this.length+t),e<0&&(e=this.length+e),t=r(t,0,this.length),e=r(e,0,this.length);var n=e-t;return n<0&&(n=0),new this.constructor(this.buffer,this.byteOffset+t*this.BYTES_PER_ELEMENT,n)}});var N=P(1,y,s),S=P(1,l,p),I=P(1,c,p),F=P(2,b,g),x=P(2,E,v),k=P(4,_,O),C=P(4,d,j),z=P(4,R,L),D=P(8,A,w);t.Int8Array=t.Int8Array||N,t.Uint8Array=t.Uint8Array||S,t.Uint8ClampedArray=t.Uint8ClampedArray||I,t.Int16Array=t.Int16Array||F,t.Uint16Array=t.Uint16Array||x,t.Int32Array=t.Int32Array||k,t.Uint32Array=t.Uint32Array||C,t.Float32Array=t.Float32Array||z,t.Float64Array=t.Float64Array||D}(),function(){function e(t,e){return n(t.get)?t.get(e):t[e]}function o(t,e,n){if(!(t instanceof ArrayBuffer||"ArrayBuffer"===r(t)))throw TypeError();if((e=f(e))>t.byteLength)throw RangeError("byteOffset out of range");if(n=n===B?t.byteLength-e:f(n),e+n>t.byteLength)throw RangeError("byteOffset and length reference an area beyond the end of the buffer");Object.defineProperty(this,"buffer",{value:t}),Object.defineProperty(this,"byteLength",{value:n}),Object.defineProperty(this,"byteOffset",{value:e})}function i(t){return function r(n,o){if((n=f(n))+t.BYTES_PER_ELEMENT>this.byteLength)throw RangeError("Array index out of range");n+=this.byteOffset;for(var i=new Uint8Array(this.buffer,n,t.BYTES_PER_ELEMENT),u=[],h=0;h<t.BYTES_PER_ELEMENT;h+=1)u.push(e(i,h));return Boolean(o)===Boolean(a)&&u.reverse(),e(new t(new Uint8Array(u).buffer),0)}}function u(t){return function r(n,o,i){if((n=f(n))+t.BYTES_PER_ELEMENT>this.byteLength)throw RangeError("Array index out of range");var u,h,y=new t([o]),s=new Uint8Array(y.buffer),l=[];for(u=0;u<t.BYTES_PER_ELEMENT;u+=1)l.push(e(s,u));Boolean(i)===Boolean(a)&&l.reverse(),h=new Uint8Array(this.buffer,n,t.BYTES_PER_ELEMENT),h.set(l)}}var a=function(){var t=new Uint16Array([4660]);return 18===e(new Uint8Array(t.buffer),0)}();Object.defineProperty(o.prototype,"getUint8",{value:i(Uint8Array)}),Object.defineProperty(o.prototype,"getInt8",{value:i(Int8Array)}),Object.defineProperty(o.prototype,"getUint16",{value:i(Uint16Array)}),Object.defineProperty(o.prototype,"getInt16",{value:i(Int16Array)}),Object.defineProperty(o.prototype,"getUint32",{value:i(Uint32Array)}),Object.defineProperty(o.prototype,"getInt32",{value:i(Int32Array)}),Object.defineProperty(o.prototype,"getFloat32",{value:i(Float32Array)}),Object.defineProperty(o.prototype,"getFloat64",{value:i(Float64Array)}),Object.defineProperty(o.prototype,"setUint8",{value:u(Uint8Array)}),Object.defineProperty(o.prototype,"setInt8",{value:u(Int8Array)}),Object.defineProperty(o.prototype,"setUint16",{value:u(Uint16Array)}),Object.defineProperty(o.prototype,"setInt16",{value:u(Int16Array)}),Object.defineProperty(o.prototype,"setUint32",{value:u(Uint32Array)}),Object.defineProperty(o.prototype,"setInt32",{value:u(Int32Array)}),Object.defineProperty(o.prototype,"setFloat32",{value:u(Float32Array)}),Object.defineProperty(o.prototype,"setFloat64",{value:u(Float64Array)}),t.DataView=t.DataView||o}()}(self);if (!("DocumentFragment"in self&&"append"in DocumentFragment.prototype
)) {DocumentFragment.prototype.append=function t(){this.appendChild(_mutation(arguments))};}if (!("DocumentFragment"in self&&"prepend"in DocumentFragment.prototype
)) {DocumentFragment.prototype.prepend=function t(){this.insertBefore(_mutation(arguments),this.firstChild)};}if (!("Element"in self&&"after"in Element.prototype
)) {Document.prototype.after=Element.prototype.after=function t(){if(this.parentNode){for(var t=Array.prototype.slice.call(arguments),e=this.nextSibling,o=e?t.indexOf(e):-1;-1!==o&&(e=e.nextSibling);)o=t.indexOf(e);this.parentNode.insertBefore(_mutation(arguments),e)}},"Text"in self&&(Text.prototype.after=Element.prototype.after);}if (!("Element"in self&&"append"in Element.prototype
)) {Document.prototype.append=Element.prototype.append=function p(){this.appendChild(_mutation(arguments))};}if (!("Element"in self&&"before"in Element.prototype
)) {Document.prototype.before=Element.prototype.before=function e(){if(this.parentNode){for(var e=Array.prototype.slice.call(arguments),t=this.previousSibling,o=t?e.indexOf(t):-1;-1!==o&&(t=t.previousSibling);)o=e.indexOf(t);this.parentNode.insertBefore(_mutation(arguments),t?t.nextSibling:this.parentNode.firstChild)}},"Text"in self&&(Text.prototype.before=Element.prototype.before);}if (!("document"in self&&"matches"in document.documentElement
)) {Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||function e(t){for(var o=this,r=(o.document||o.ownerDocument).querySelectorAll(t),c=0;r[c]&&r[c]!==o;)++c;return!!r[c]};}if (!("document"in self&&"closest"in document.documentElement
)) {Element.prototype.closest=function e(n){for(var t=this;t;){if(t.matches(n))return t;t="SVGElement"in window&&t instanceof SVGElement?t.parentNode:t.parentElement}return null};}if (!("Element"in self&&"prepend"in Element.prototype
)) {Document.prototype.prepend=Element.prototype.prepend=function t(){this.insertBefore(_mutation(arguments),this.firstChild)};}if (!("Element"in self&&"replaceWith"in Element.prototype
)) {Document.prototype.replaceWith=Element.prototype.replaceWith=function e(){this.parentNode&&this.parentNode.replaceChild(_mutation(arguments),this)},"Text"in self&&(Text.prototype.replaceWith=Element.prototype.replaceWith);}if (!("fetch"in self
)) {!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,function(t){"use strict";function e(t){return t&&DataView.prototype.isPrototypeOf(t)}function r(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function o(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:e===undefined,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function f(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function h(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function c(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:v.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:v.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():v.arrayBuffer&&v.blob&&e(t)?(this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):v.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||A(t))?this._bodyArrayBuffer=d(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(l)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=y(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function l(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function b(t){var e=new i;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e}function m(t,e){e||(e={}),this.type="default",this.status=e.status===undefined?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}function w(e,r){return new Promise(function(o,n){function i(){a.abort()}var s=new p(e,r);if(s.signal&&s.signal.aborted)return n(new t.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:b(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;o(new m(e,t))},a.onerror=function(){n(new TypeError("Network request failed"))},a.ontimeout=function(){n(new TypeError("Network request failed"))},a.onabort=function(){n(new t.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&v.blob&&(a.responseType="blob"),s.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),s.signal&&(s.signal.addEventListener("abort",i),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",i)}),a.send("undefined"==typeof s._bodyInit?null:s._bodyInit)})}var v={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(v.arrayBuffer)var E=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],A=ArrayBuffer.isView||function(t){return t&&E.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,e){t=r(t),e=o(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},i.prototype["delete"]=function(t){delete this.map[r(t)]},i.prototype.get=function(t){return t=r(t),this.has(t)?this.map[t]:null},i.prototype.has=function(t){return this.map.hasOwnProperty(r(t))},i.prototype.set=function(t,e){this.map[r(t)]=o(e)},i.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},v.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},c.call(p.prototype),c.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];m.redirect=function(t,e){if(-1===x.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.DOMException=self.DOMException;try{new t.DOMException}catch(g){t.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}w.polyfill=!0,self.fetch=w,self.Headers=i,self.Request=p,self.Response=m,t.Headers=i,t.Request=p,t.Response=m,t.fetch=w,Object.defineProperty(t,"__esModule",{value:!0})});}if (!("forEach"in NodeList.prototype
)) {NodeList.prototype.forEach=Array.prototype.forEach;}if (!("trim"in String.prototype&&function(){var r="​᠎"
return!"\t\n\x0B\f\r                　\u2028\u2029\ufeff".trim()&&r.trim()===r}()
)) {CreateMethodProperty(String.prototype,"trim",function t(){"use strict";var t=this;return TrimString(t,"start+end")});}if (!((function(e){"use strict"
try{var a=new e.URL("http://example.com")
if("href"in a&&"searchParams"in a){var r=new URL("http://example.com")
if(r.search="a=1&b=2","http://example.com/?a=1&b=2"===r.href&&(r.search="","http://example.com/"===r.href)){var t=new e.URLSearchParams("a=1"),c=new e.URLSearchParams(t)
if("a=1"===String(c))return!0}}return!1}catch(h){return!1}})(self)
)) {!function(e){"use strict";function t(t){return!!t&&("Symbol"in e&&"iterator"in e.Symbol&&"function"==typeof t[Symbol.iterator]||!!Array.isArray(t))}function n(e){return"from"in Array?Array.from(e):Array.prototype.slice.call(e)}!function(){function r(e){var t="",n=!0;return e.forEach(function(e){var r=encodeURIComponent(e.name),a=encodeURIComponent(e.value);n||(t+="&"),t+=r+"="+a,n=!1}),t.replace(/%20/g,"+")}function a(e,t){var n=e.split("&");t&&-1===n[0].indexOf("=")&&(n[0]="="+n[0]);var r=[];n.forEach(function(e){if(0!==e.length){var t=e.indexOf("=");if(-1!==t)var n=e.substring(0,t),a=e.substring(t+1);else n=e,a="";n=n.replace(/\+/g," "),a=a.replace(/\+/g," "),r.push({name:n,value:a})}});var a=[];return r.forEach(function(e){a.push({name:decodeURIComponent(e.name),value:decodeURIComponent(e.value)})}),a}function i(e){if(c)return new s(e);var t=document.createElement("a");return t.href=e,t}function o(e){var i=this;this._list=[],e===undefined||null===e||(e instanceof o?this._list=a(String(e)):"object"==typeof e&&t(e)?n(e).forEach(function(e){if(!t(e))throw TypeError();var r=n(e);if(2!==r.length)throw TypeError();i._list.push({name:String(r[0]),value:String(r[1])})}):"object"==typeof e&&e?Object.keys(e).forEach(function(t){i._list.push({name:String(t),value:String(e[t])})}):(e=String(e),"?"===e.substring(0,1)&&(e=e.substring(1)),this._list=a(e))),this._url_object=null,this._setList=function(e){u||(i._list=e)};var u=!1;this._update_steps=function(){u||(u=!0,i._url_object&&("about:"===i._url_object.protocol&&-1!==i._url_object.pathname.indexOf("?")&&(i._url_object.pathname=i._url_object.pathname.split("?")[0]),i._url_object.search=r(i._list),u=!1))}}function u(e,t){var n=0;this.next=function(){if(n>=e.length)return{done:!0,value:undefined};var r=e[n++];return{done:!1,value:"key"===t?r.name:"value"===t?r.value:[r.name,r.value]}}}function l(t,n){function r(){var e=l.href.replace(/#$|\?$|\?(?=#)/g,"");l.href!==e&&(l.href=e)}function u(){m._setList(l.search?a(l.search.substring(1)):[]),m._update_steps()}if(!(this instanceof e.URL))throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");n&&(t=function(){if(c)return new s(t,n).href;var e;try{var r;if("[object OperaMini]"===Object.prototype.toString.call(window.operamini)?(e=document.createElement("iframe"),e.style.display="none",document.documentElement.appendChild(e),r=e.contentWindow.document):document.implementation&&document.implementation.createHTMLDocument?r=document.implementation.createHTMLDocument(""):document.implementation&&document.implementation.createDocument?(r=document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null),r.documentElement.appendChild(r.createElement("head")),r.documentElement.appendChild(r.createElement("body"))):window.ActiveXObject&&(r=new window.ActiveXObject("htmlfile"),r.write("<head></head><body></body>"),r.close()),!r)throw Error("base not supported");var a=r.createElement("base");a.href=n,r.getElementsByTagName("head")[0].appendChild(a);var i=r.createElement("a");return i.href=t,i.href}finally{e&&e.parentNode.removeChild(e)}}());var l=i(t||""),f=function(){if(!("defineProperties"in Object))return!1;try{var e={};return Object.defineProperties(e,{prop:{get:function(){return!0}}}),e.prop}catch(t){return!1}}(),h=f?this:document.createElement("a"),m=new o(l.search?l.search.substring(1):null);return m._url_object=h,Object.defineProperties(h,{href:{get:function(){return l.href},set:function(e){l.href=e,r(),u()},enumerable:!0,configurable:!0},origin:{get:function(){return"origin"in l?l.origin:this.protocol+"//"+this.host},enumerable:!0,configurable:!0},protocol:{get:function(){return l.protocol},set:function(e){l.protocol=e},enumerable:!0,configurable:!0},username:{get:function(){return l.username},set:function(e){l.username=e},enumerable:!0,configurable:!0},password:{get:function(){return l.password},set:function(e){l.password=e},enumerable:!0,configurable:!0},host:{get:function(){var e={"http:":/:80$/,"https:":/:443$/,"ftp:":/:21$/}[l.protocol];return e?l.host.replace(e,""):l.host},set:function(e){l.host=e},enumerable:!0,configurable:!0},hostname:{get:function(){return l.hostname},set:function(e){l.hostname=e},enumerable:!0,configurable:!0},port:{get:function(){return l.port},set:function(e){l.port=e},enumerable:!0,configurable:!0},pathname:{get:function(){return"/"!==l.pathname.charAt(0)?"/"+l.pathname:l.pathname},set:function(e){l.pathname=e},enumerable:!0,configurable:!0},search:{get:function(){return l.search},set:function(e){l.search!==e&&(l.search=e,r(),u())},enumerable:!0,configurable:!0},searchParams:{get:function(){return m},enumerable:!0,configurable:!0},hash:{get:function(){return l.hash},set:function(e){l.hash=e,r()},enumerable:!0,configurable:!0},toString:{value:function(){return l.toString()},enumerable:!1,configurable:!0},valueOf:{value:function(){return l.valueOf()},enumerable:!1,configurable:!0}}),h}var c,s=e.URL;try{if(s){if("searchParams"in(c=new e.URL("http://example.com"))){var f=new l("http://example.com");if(f.search="a=1&b=2","http://example.com/?a=1&b=2"===f.href&&(f.search="","http://example.com/"===f.href))return}"href"in c||(c=undefined),c=undefined}}catch(m){}if(Object.defineProperties(o.prototype,{append:{value:function(e,t){this._list.push({name:e,value:t}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},"delete":{value:function(e){for(var t=0;t<this._list.length;)this._list[t].name===e?this._list.splice(t,1):++t;this._update_steps()},writable:!0,enumerable:!0,configurable:!0},get:{value:function(e){for(var t=0;t<this._list.length;++t)if(this._list[t].name===e)return this._list[t].value;return null},writable:!0,enumerable:!0,configurable:!0},getAll:{value:function(e){for(var t=[],n=0;n<this._list.length;++n)this._list[n].name===e&&t.push(this._list[n].value);return t},writable:!0,enumerable:!0,configurable:!0},has:{value:function(e){for(var t=0;t<this._list.length;++t)if(this._list[t].name===e)return!0;return!1},writable:!0,enumerable:!0,configurable:!0},set:{value:function(e,t){for(var n=!1,r=0;r<this._list.length;)this._list[r].name===e?n?this._list.splice(r,1):(this._list[r].value=t,n=!0,++r):++r;n||this._list.push({name:e,value:t}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},entries:{value:function(){return new u(this._list,"key+value")},writable:!0,enumerable:!0,configurable:!0},keys:{value:function(){return new u(this._list,"key")},writable:!0,enumerable:!0,configurable:!0},values:{value:function(){return new u(this._list,"value")},writable:!0,enumerable:!0,configurable:!0},forEach:{value:function(e){var t=arguments.length>1?arguments[1]:undefined;this._list.forEach(function(n){e.call(t,n.value,n.name)})},writable:!0,enumerable:!0,configurable:!0},toString:{value:function(){return r(this._list)},writable:!0,enumerable:!1,configurable:!0},sort:{value:function p(){for(var e=this.entries(),t=e.next(),n=[],r={};!t.done;){var a=t.value,i=a[0];n.push(i),Object.prototype.hasOwnProperty.call(r,i)||(r[i]=[]),r[i].push(a[1]),t=e.next()}n.sort();for(var o=0;o<n.length;o++)this["delete"](n[o]);for(var u=0;u<n.length;u++)i=n[u],this.append(i,r[i].shift())}}}),"Symbol"in e&&"iterator"in e.Symbol&&(Object.defineProperty(o.prototype,e.Symbol.iterator,{value:o.prototype.entries,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,e.Symbol.iterator,{value:function(){return this},writable:!0,enumerable:!0,configurable:!0})),s)for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&"function"==typeof s[h]&&(l[h]=s[h]);e.URL=l,e.URLSearchParams=o}(),function(){if("1"!==new e.URLSearchParams([["a",1]]).get("a")||"1"!==new e.URLSearchParams({a:1}).get("a")){var r=e.URLSearchParams;e.URLSearchParams=function(e){if(e&&"object"==typeof e&&t(e)){var a=new r;return n(e).forEach(function(e){if(!t(e))throw TypeError();var r=n(e);if(2!==r.length)throw TypeError();a.append(r[0],r[1])}),a}return e&&"object"==typeof e?(a=new r,Object.keys(e).forEach(function(t){a.set(t,e[t])}),a):new r(e)}}}()}(self);}})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});