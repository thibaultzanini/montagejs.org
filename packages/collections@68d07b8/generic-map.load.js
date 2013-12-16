montageDefine("68d07b8","generic-map",{dependencies:["./shim-object","./listen/map-changes","./listen/property-changes"],factory:function(e,t,n){"use strict";function i(){throw Error("Can't construct. GenericMap is a mixin.")}function r(e,t){this.key=e,this.value=t}var a=e("./shim-object"),o=e("./listen/map-changes"),s=e("./listen/property-changes");n.exports=i,a.addEach(i.prototype,o.prototype),a.addEach(i.prototype,s.prototype),i.prototype.isMap=!0,i.prototype.addEach=function(e){return e&&a(e)===e&&("function"==typeof e.forEach?e.isMap===!0?e.forEach(function(e,t){this.set(t,e)},this):e.forEach(function(e){this.set(e[0],e[1])},this):a.keys(e).forEach(function(t){this.set(t,e[t])},this)),this},i.prototype.get=function(e,t){var n=this.store.get(new this.Item(e));return n?n.value:arguments.length>1?t:this.getDefault(e)},i.prototype.set=function(e,t){var n=new this.Item(e,t),i=this.store.get(n),r=!1;return i?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,i.value),i.value=t,this.dispatchesMapChanges&&this.dispatchMapChange(e,t)):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,void 0),this.store.add(n)&&(this.length++,r=!0),this.dispatchesMapChanges&&this.dispatchMapChange(e,t)),r},i.prototype.add=function(e,t){return this.set(t,e)},i.prototype.has=function(e){return this.store.has(new this.Item(e))},i.prototype["delete"]=function(e){var t=new this.Item(e);if(this.store.has(t)){var n=this.store.get(t).value;return this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,n),this.store["delete"](t),this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(e,void 0),!0}return!1},i.prototype.clear=function(){var e;this.dispatchesMapChanges&&(this.forEach(function(e,t){this.dispatchBeforeMapChange(t,e)},this),e=this.keys()),this.store.clear(),this.length=0,this.dispatchesMapChanges&&e.forEach(function(e){this.dispatchMapChange(e)},this)},i.prototype.reduce=function(e,t,n){return this.store.reduce(function(t,i){return e.call(n,t,i.value,i.key,this)},t,this)},i.prototype.reduceRight=function(e,t,n){return this.store.reduceRight(function(t,i){return e.call(n,t,i.value,i.key,this)},t,this)},i.prototype.keys=function(){return this.map(function(e,t){return t})},i.prototype.values=function(){return this.map(Function.identity)},i.prototype.entries=function(){return this.map(function(e,t){return[t,e]})},i.prototype.items=function(){return this.entries()},i.prototype.equals=function(e,t){if(t=t||a.equals,this===e)return!0;if(a.can(e,"every"))return e.length===this.length&&e.every(function(e,n){return t(this.get(n),e)},this);var n=a.keys(e);return n.length===this.length&&a.keys(e).every(function(n){return t(this.get(n),e[n])},this)},i.prototype.Item=r,r.prototype.equals=function(e){return a.equals(this.key,e.key)&&a.equals(this.value,e.value)},r.prototype.compare=function(e){return a.compare(this.key,e.key)}}});