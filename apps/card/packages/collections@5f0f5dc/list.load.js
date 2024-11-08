montageDefine("5f0f5dc","list",{dependencies:["./shim","./generic-collection","./generic-order","./listen/property-changes"],factory:function(e,t,n){"use strict";function u(e,t,n){if(!(this instanceof u))return new u(e,t,n);var r=this.head=new this.Node;r.next=r,r.prev=r,this.contentEquals=t||Object.equals,this.getDefault=n||Function.noop,this.length=0,this.addEach(e)}function a(e){this.head=e,this.at=e.next}function f(e){this.value=e,this.prev=null,this.next=null}n.exports=u;var r=e("./shim"),i=e("./generic-collection"),s=e("./generic-order"),o=e("./listen/property-changes");Object.addEach(u.prototype,i.prototype),Object.addEach(u.prototype,s.prototype),Object.addEach(u.prototype,o.prototype),u.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.getDefault)},u.prototype.find=function(e,t){t=t||this.contentEquals;var n=this.head,r=n.next;while(r!==n){if(t(r.value,e))return r;r=r.next}},u.prototype.findLast=function(e,t){t=t||this.contentEquals;var n=this.head,r=n.prev;while(r!==n){if(t(r.value,e))return r;r=r.prev}},u.prototype.has=function(e,t){return!!this.find(e,t)},u.prototype.get=function(e,t){var n=this.find(e,t);return n?n.value:this.getDefault(e)},u.prototype["delete"]=function(e,t){var n=this.findLast(e,t);return n?(n["delete"](),this.length--,!0):!1},u.prototype.clear=function(){var e;this.head.next=this.head.prev=this.head,this.length=0},u.prototype.add=function(e){return this.head.addBefore(new this.Node(e)),this.length++,!0},u.prototype.push=function(){var e=this.head;for(var t=0;t<arguments.length;t++){var n=arguments[t],r=new this.Node(n);e.addBefore(r),this.length++}},u.prototype.unshift=function(){var e=this.head;for(var t=0;t<arguments.length;t++){var n=arguments[t],r=new this.Node(n);e.addAfter(r),this.length++,e=r}},u.prototype.pop=function(){var e,t=this.head;return t.prev!==t&&(e=t.prev.value,t.prev["delete"](),this.length--),e},u.prototype.shift=function(){var e,t=this.head;return t.prev!==t&&(e=t.next.value,t.next["delete"](),this.length--),e},u.prototype.peek=function(){if(this.head!==this.head.next)return this.head.next.value},u.prototype.poke=function(e){this.head!==this.head.next?this.head.next.value=e:this.push(e)},u.prototype.one=function(){return this.peek()},u.prototype.scan=function(e,t){var n=this.head;if(typeof e=="number"){var r=e;if(r>=0){e=n.next;while(r){r--,e=e.next;if(e==n)break}}else{e=n;while(r<0){r++,e=e.prev;if(e==n)break}}return e}return e||t},u.prototype.slice=function(e,t){var n=[],r=this.head;e=this.scan(e,r.next),t=this.scan(t,r);while(e!==t&&e!==r)n.push(e.value),e=e.next;return n},u.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},u.prototype.swap=function(e,t,n){var r=[],i=e;e=this.scan(e,this.head),t===undefined&&(t=Infinity);while(t--&&t>=0&&e!==this.head)r.push(e.value),e["delete"](),e=e.next,this.length--;if(n){i===null&&e===this.head&&(e=this.head.next);for(var s=0;s<n.length;s++){var o=new this.Node(n[s]);e.addBefore(o)}this.length+=n.length}return r},u.prototype.reverse=function(){var e=this.head;do{var t=e.next;e.next=e.prev,e.prev=t,e=e.next}while(e!==this.head);return this},u.prototype.reduce=function(e,t){var n=arguments[2],r=this.head,i=r.next;while(i!==r)t=e.call(n,t,i.value,i,this),i=i.next;return t},u.prototype.reduceRight=function(e,t){var n=arguments[2],r=this.head,i=r.prev;while(i!==r)t=e.call(n,t,i.value,i,this),i=i.prev;return t},u.prototype.iterate=function(){return new a(this.head)},a.prototype.next=function(){if(this.at===this.head)throw StopIteration;var e=this.at.value;return this.at=this.at.next,e},u.prototype.Node=f,f.prototype["delete"]=function(){this.prev.next=this.next,this.next.prev=this.prev},f.prototype.addBefore=function(e){var t=this.prev;this.prev=e,e.prev=t,t.next=e,e.next=this},f.prototype.addAfter=function(e){var t=this.next;this.next=e,e.next=t,t.prev=e,e.prev=this}}})