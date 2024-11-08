"use strict";function MapChanges(){throw new Error("Can't construct. MapChanges is a mixin.")}var WeakMap=require("weak-map"),List=require("../list");module.exports=MapChanges;var object_owns=Object.prototype.hasOwnProperty,mapChangeDescriptors=new WeakMap;MapChanges.prototype.getAllMapChangeDescriptors=function(){var e=require("../dict");return mapChangeDescriptors.has(this)||mapChangeDescriptors.set(this,e()),mapChangeDescriptors.get(this)},MapChanges.prototype.getMapChangeDescriptor=function(e){var t=this.getAllMapChangeDescriptors();return e=e||"",t.has(e)||t.set(e,{willChangeListeners:new List,changeListeners:new List}),t.get(e)},MapChanges.prototype.addMapChangeListener=function(e,t,n){!this.isObservable&&this.makeObservable&&this.makeObservable();var r=this.getMapChangeDescriptor(t),i;n?i=r.willChangeListeners:i=r.changeListeners,i.push(e),this.dispatchesMapChanges=!0;var s=this;return function(){if(!s)return;s.removeMapChangeListener(e,t,n),s=null}},MapChanges.prototype.removeMapChangeListener=function(e,t,n){var r=this.getMapChangeDescriptor(t),i;n?i=r.willChangeListeners:i=r.changeListeners;var s=i.findLast(e);if(!s)throw new Error("Can't remove listener: does not exist.");s["delete"]()},MapChanges.prototype.dispatchMapChange=function(e,t,n){var r=this.getAllMapChangeDescriptors(),i="Map"+(n?"WillChange":"Change");r.forEach(function(r,s){if(r.isActive)return;r.isActive=!0;var o;n?o=r.willChangeListeners:o=r.changeListeners;var u="handle"+(s.slice(0,1).toUpperCase()+s.slice(1))+i;try{o.forEach(function(n){if(n[u])n[u](t,e,this);else{if(!n.call)throw new Error("Handler "+n+" has no method "+u+" and is not callable");n.call(n,t,e,this)}},this)}finally{r.isActive=!1}},this)},MapChanges.prototype.addBeforeMapChangeListener=function(e,t){return this.addMapChangeListener(e,t,!0)},MapChanges.prototype.removeBeforeMapChangeListener=function(e,t){return this.removeMapChangeListener(e,t,!0)},MapChanges.prototype.dispatchBeforeMapChange=function(e,t){return this.dispatchMapChange(e,t,!0)}