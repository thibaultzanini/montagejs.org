montageDefine("572fd27","core/extras/object",{dependencies:["core/core","collections/weak-map"],factory:function(e,t,n){var r=e("core/core"),i=e("collections/weak-map"),s="modify",o="string",u="function";Object.defineProperty(Object.prototype,"getProperty",{value:function(e,t,n,r,i){var s,o,a,f,l=null;if(e==null)return;return s=e.indexOf(".",i),i=i||0,a=e.substring(i,s===-1?e.length:s),a in this?o=this[a]:o=typeof this.undefinedGet===u?this.undefinedGet(a):undefined,r&&(f=e.indexOf(".",i),f!=-1&&(l=e.substr(f+1)),r(this,a,o,null,l)),(!r||!o||-1!==s)&&o&&s!==-1&&(o.getProperty?o=o.getProperty(e,t,n,r,s+1):o=Object.prototype.getProperty.call(o,e,t,n,r,s+1)),o},writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"_propertySetterNamesByName",{value:{},writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"_propertySetterByName",{value:{},writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"setProperty",{value:function(e,t){var n=!isNaN(e),r=n?-1:e.lastIndexOf("."),i,s,o;if(r!==-1){i=this.getProperty(e.substring(0,r));if(!i){this.undefinedSet(e);return}e=e.substring(r+1)}else i=this;s=i.getProperty(e),s&&Array.isArray(s)?Array.isArray(i)?(o=parseInt(e,10),isNaN(o)?i[e]=t:(i.length<o&&(i[o]=null),i.splice(o,1,t))):i[e]=t:Array.isArray(i)?(o=parseInt(e,10),isNaN(o)||i.length<o&&(i[o]=null),i.splice(o,1,t)):i[e]=t},writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"parentProperty",{value:null,writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"undefinedGet",{value:function(e){console.warn("get undefined property -"+e+"-")},writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"undefinedSet",{value:function(e){console.warn("set undefined property -"+e+"-")},writable:!0,configurable:!0}),Object.defineProperty(Object,"getPropertyDescriptor",{value:function(e,t){var n=e,r;do r=Object.getOwnPropertyDescriptor(n,t);while(!r&&(n=n.__proto__||Object.getPrototypeOf(n)));return r},writable:!0,configurable:!0}),Object.defineProperty(Object,"getPrototypeAndDescriptorDefiningProperty",{value:function(e,t){var n=e,r;if(t){do r=Object.getOwnPropertyDescriptor(n,t);while(!r&&(n=n.__proto__||Object.getPrototypeOf(n)));return{prototype:n,propertyDescriptor:r}}},writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"clear",{value:function(){var e=Object.keys(this),t=e.length;while(t)t--,delete this[e[t]];return this},writable:!0,configurable:!0})}})