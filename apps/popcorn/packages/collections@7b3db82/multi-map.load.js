montageDefine("7b3db82","multi-map",{dependencies:["./map"],factory:function(e,t,n){"use strict";function i(e,t,n,s){if(!(this instanceof i))return new i(e,t,n,s);this.bucket=t||this.bucket,r.call(this,e,n,s,function(t){var n=this.bucket();return r.prototype.set.call(this,t,n),n})}var r=e("./map");n.exports=i,i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype.constructClone=function(e){return new this.constructor(e,this.bucket,this.contentEquals,this.contentHash)},i.prototype.set=function(e,t){var n=this.get(e);n.swap(0,n.length,t)},i.prototype.bucket=function(e){return[]}}})