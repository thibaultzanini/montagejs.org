"use strict";var WeakMap=require("weak-map");module.exports=Object,Object.empty=Object.freeze(Object.create(null)),Object.isObject=function(e){return Object(e)===e},Object.getValueOf=function(e){return Object.can(e,"valueOf")&&(e=e.valueOf()),e};var hashMap=new WeakMap;Object.hash=function(e){return Object.can(e,"hash")?""+e.hash():Object(e)===e?(hashMap.has(e)||hashMap.set(e,Math.random().toString(36).slice(2)),hashMap.get(e)):""+e};var owns=Object.prototype.hasOwnProperty;Object.owns=function(e,t){return owns.call(e,t)},Object.can=function(e,t){return e!=null&&typeof e[t]=="function"&&!owns.call(e,t)},Object.has=function(e,t){if(typeof e!="object")throw new Error("Object.has can't accept non-object: "+typeof e);if(Object.can(e,"has"))return e.has(t);if(typeof t=="string")return t in e&&e[t]!==Object.prototype[t];throw new Error("Key must be a string for Object.has on plain objects")},Object.get=function(e,t,n){if(typeof e!="object")throw new Error("Object.get can't accept non-object: "+typeof e);return Object.can(e,"get")?e.get(t,n):Object.has(e,t)?e[t]:n},Object.set=function(e,t,n){Object.can(e,"set")?e.set(t,n):e[t]=n},Object.addEach=function(e,t){return Object.can(t,"forEach")?typeof t.keys=="function"?t.forEach(function(t,n){e[n]=t}):t.forEach(function(t){e[t[0]]=t[1]}):Object.keys(t).forEach(function(n){e[n]=t[n]}),e},Object.forEach=function(e,t,n){Object.keys(e).forEach(function(r){t.call(n,e[r],r,e)})},Object.map=function(e,t,n){return Object.keys(e).map(function(r){return t.call(n,e[r],r,e)})},Object.values=function(e){return Object.map(e,Function.identity)},Object.concat=function(){var e={};for(var t=0;t<arguments.length;t++)Object.addEach(e,arguments[t]);return e},Object.from=Object.concat,Object.is=function(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t},Object.equals=function(e,t,n){n=n||Object.equals,e=Object.getValueOf(e),t=Object.getValueOf(t);if(e===t)return e!==0||1/e===1/t;if(e===null||t===null)return e===t;if(Object.can(e,"equals"))return e.equals(t,n);if(Object.can(t,"equals"))return t.equals(e,n);if(typeof e=="object"&&typeof t=="object"){var r=Object.getPrototypeOf(e),i=Object.getPrototypeOf(t);if(r===i&&(r===Object.prototype||r===null)){for(var s in e)if(!n(e[s],t[s]))return!1;for(var s in t)if(!n(e[s],t[s]))return!1;return!0}}return e!==e&&t!==t},Object.compare=function(e,t){e=Object.getValueOf(e),t=Object.getValueOf(t);var n=typeof e,r=typeof t;return e===t?0:n!==r?0:n==="number"?e-t:n==="string"?e<t?-1:1:Object.can(e,"compare")?e.compare(t):Object.can(t,"compare")?-t.compare(e):0},Object.clone=function(e,t,n){e=Object.getValueOf(e),n=n||new WeakMap;if(t===undefined)t=Infinity;else if(t===0)return e;if(Object.isObject(e)){if(!n.has(e))if(Object.can(e,"clone"))n.set(e,e.clone(t,n));else{var r=Object.getPrototypeOf(e);if(r!==null&&r!==Object.prototype)throw new Error("Can't clone "+e);var i=Object.create(r);n.set(e,i);for(var s in e)i[s]=Object.clone(e[s],t-1,n)}return n.get(e)}return e},Object.clear=function(e){if(Object.can(e,"clear"))e.clear();else{var t=Object.keys(e),n=t.length;while(n)n--,delete e[t[n]]}return e}