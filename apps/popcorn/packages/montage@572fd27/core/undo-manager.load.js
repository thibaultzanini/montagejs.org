montageDefine("572fd27","core/undo-manager",{dependencies:["montage","core/promise","collections/weak-map","collections/list"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/promise").Promise,s=e("collections/weak-map"),o=e("collections/list"),u=0,a=1,f=t.UndoManager=r.create(r,{_operationQueue:{value:null},_promiseOperationMap:{value:null},didCreate:{value:function(){this._operationQueue=[],this._promiseOperationMap=new s,this._undoStack=new o,this._redoStack=new o,Object.defineBinding(this,"undoCount",{boundObject:this._undoStack,boundObjectPropertyPath:"length",oneway:!0}),Object.defineBinding(this,"redoCount",{boundObject:this._redoStack,boundObjectPropertyPath:"length",oneway:!0})}},_maxUndoCount:{enumerable:!1,value:null},maxUndoCount:{get:function(){return this._maxUndoCount},set:function(e){if(e===this._maxUndoCount)return;this._maxUndoCount=e,this._maxUndoCount!=null&&this._trimStacks()}},_undoStack:{value:null},undoCount:{value:0},_redoStack:{value:null},redoCount:{value:0},_trimStacks:{enumerable:!1,value:function(){var e=this._undoStack.length-this._maxUndoCount,t=this._redoStack.length-this._maxUndoCount;e>0&&this._undoStack.splice(0,e),t>0&&this._redoStack.splice(0,t)}},register:{value:function(e,t){if(!i.isPromiseAlike(t))throw new Error("UndoManager expected a promise");if(0===this._maxUndoCount)return i.resolve(null);var n={label:e};return this._promiseOperationMap.set(t,n),this.isUndoing?(this._redoStack.length===this._maxUndoCount&&this._redoStack.shift(),this._redoStack.push(t)):(this._undoStack.length===this._maxUndoCount&&this._undoStack.shift(),this._undoStack.push(t),!this.isRedoing&&this._redoStack.length>0&&this.clearRedo()),t.spread(this._resolveUndoEntry(this,n))}},_resolveUndoEntry:{value:function(e,t){return function(){var n,r,i,s;typeof arguments[0]=="string"?(n=arguments[0],r=arguments[1],i=arguments[2],s=3):(r=arguments[0],i=arguments[1],s=2),n&&(t.label=n),t.undoFunction=r,t.context=i,t.args=Array.prototype.slice.call(arguments,s),e._flushOperationQueue()}}},_flushOperationQueue:{value:function(){var e=this._operationQueue,t=e.length,n,r=[],i,s,o,u=this._promiseOperationMap;if(0===t)return;for(n=t-1;n>=0;n--){s=e[n],o=this._promiseOperationMap.get(s);if(typeof o.undoFunction!="function")break;this._performOperation(o),r.push(s)}i=r.length,i>0&&(e.splice(t-i,i),r.forEach(function(e){u.delete(e)}))}},_performOperation:{value:function(e){e.operationType===u?this.undoEntry=e:this.redoEntry=e,e.undoFunction.apply(e.context,e.args),this.undoEntry=null,this.redoEntry=null,e.deferredOperation.resolve(!0)}},clearUndo:{value:function(){this._undoStack.splice(0,this._undoStack.length)}},clearRedo:{value:function(){this._redoStack.splice(0,this._redoStack.length)}},isUndoing:{dependencies:["undoEntry"],get:function(){return!!this.undoEntry}},isRedoing:{dependencies:["redoEntry"],get:function(){return!!this.redoEntry}},undoEntry:{enumerable:!1,value:null},redoEntry:{enumerable:!1,value:null},undo:{value:function(){return 0===this.undoCount?i.resolve(null):this._scheduleOperation(this._undoStack.pop(),u)}},redo:{value:function(){return 0===this.redoCount?i.resolve(null):this._scheduleOperation(this._redoStack.pop(),a)}},_scheduleOperation:{value:function(e,t){var n=i.defer(),r=this._promiseOperationMap.get(e);return r.deferredOperation=n,r.operationType=t,this._operationQueue.push(e),this._flushOperationQueue(),n.promise}},canUndo:{dependencies:["_undoStack.length"],get:function(){return!!this._undoStack.length}},canRedo:{dependencies:["_redoStack.length"],get:function(){return!!this._redoStack.length}},undoLabel:{dependencies:["_undoStack.length"],get:function(){var e;return this.canUndo&&(e=this._promiseOperationMap.get(this._undoStack.one()).label),e}},redoLabel:{dependencies:["_redoStack.length"],get:function(){var e;return this.canRedo&&(e=this._promiseOperationMap.get(this._redoStack.one()).label),e}}}),l=null;r.defineProperty(t,"defaultUndoManager",{get:function(){return l||(l=f.create()),l}})}})