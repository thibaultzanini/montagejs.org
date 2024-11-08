montageDefine("7b3db82","listen/map-changes",{dependencies:["weak-map","../list","../dict"],factory:function(e,t,n){"use strict";function s(){throw new Error("Can't construct. MapChanges is a mixin.")}var r=e("weak-map"),i=e("../list");n.exports=s;var o=Object.prototype.hasOwnProperty,u=new r;s.prototype.getAllMapChangeDescriptors=function(){var t=e("../dict");return u.has(this)||u.set(this,t()),u.get(this)},s.prototype.getMapChangeDescriptor=function(e){var t=this.getAllMapChangeDescriptors();return e=e||"",t.has(e)||t.set(e,{willChangeListeners:new i,changeListeners:new i}),t.get(e)},s.prototype.addMapChangeListener=function(e,t,n){!this.isObservable&&this.makeObservable&&this.makeObservable();var r=this.getMapChangeDescriptor(t),i;n?i=r.willChangeListeners:i=r.changeListeners,i.push(e),this.dispatchesMapChanges=!0;var s=this;return function(){if(!s)return;s.removeMapChangeListener(e,t,n),s=null}},s.prototype.removeMapChangeListener=function(e,t,n){var r=this.getMapChangeDescriptor(t),i;n?i=r.willChangeListeners:i=r.changeListeners;var s=i.findLast(e);if(!s)throw new Error("Can't remove listener: does not exist.");s["delete"]()},s.prototype.dispatchMapChange=function(e,t,n){var r=this.getAllMapChangeDescriptors(),i="Map"+(n?"WillChange":"Change");r.forEach(function(r,s){if(r.isActive)return;r.isActive=!0;var o;n?o=r.willChangeListeners:o=r.changeListeners;var u="handle"+(s.slice(0,1).toUpperCase()+s.slice(1))+i;try{o.forEach(function(n){if(n[u])n[u](t,e,this);else{if(!n.call)throw new Error("Handler "+n+" has no method "+u+" and is not callable");n.call(n,t,e,this)}},this)}finally{r.isActive=!1}},this)},s.prototype.addBeforeMapChangeListener=function(e,t){return this.addMapChangeListener(e,t,!0)},s.prototype.removeBeforeMapChangeListener=function(e,t){return this.removeMapChangeListener(e,t,!0)},s.prototype.dispatchBeforeMapChange=function(e,t){return this.dispatchMapChange(e,t,!0)}}})