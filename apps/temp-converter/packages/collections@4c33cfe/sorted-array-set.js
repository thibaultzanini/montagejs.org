"use strict";function SortedArraySet(e,t,n,i){return this instanceof SortedArraySet?(SortedArray.call(this,e,t,n,i),void 0):new SortedArraySet(e,t,n,i)}module.exports=SortedArraySet;var Shim=require("./shim"),SortedArray=require("./sorted-array"),GenericSet=require("./generic-set"),PropertyChanges=require("./listen/property-changes");SortedArraySet.SortedArraySet=SortedArraySet,SortedArraySet.prototype=Object.create(SortedArray.prototype),SortedArraySet.prototype.constructor=SortedArraySet,Object.addEach(SortedArraySet.prototype,GenericSet.prototype),Object.addEach(SortedArraySet.prototype,PropertyChanges.prototype),SortedArraySet.prototype.add=function(e){return this.has(e)?!1:(SortedArray.prototype.add.call(this,e),!0)},SortedArraySet.prototype.reduce=function(e,t){var n=this,i=arguments[2];return this.array.reduce(function(t,r,a){return e.call(i,t,r,a,n)},t)},SortedArraySet.prototype.reduceRight=function(e,t){var n=this,i=arguments[2];return this.array.reduceRight(function(t,r,a){return e.call(i,t,r,a,n)},t)};