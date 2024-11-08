montageDefine("1bfc0c5","ui/repetition.reel/repetition",{dependencies:["montage","ui/component","ui/template","core/logger","core/gate","core/change-notification"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/template").Template,o=e("core/logger").logger("repetition"),u=e("core/gate").Gate,a=e("core/change-notification").ChangeNotification,f=e("core/change-notification").PropertyChangeNotification,l=r.create(Object.prototype,{_repetition:{value:null},_fakeIndex:{value:null},_unusedIndexes:{value:null},initWithRepetition:{value:function(e){return this._repetition=e,this._fakeIndex=[],this._unusedIndexes=[],this}},automaticallyDispatchPropertyChangeListener:{value:function(){return!1}},undefinedGet:{value:function(e){if(this._repetition.objects)return this._repetition.objects[this._fakeIndex.indexOf(e)]}},0:{set:function(){throw'You cannot use a two-way binding on the "objectAtCurrentIteration" or "current" property.'},get:function(){if(this._repetition.objects)return this._repetition.objects[this._fakeIndex.indexOf("0")]}},addFakeObjectAtPosition:{value:function(e){var t;return this._unusedIndexes.length>0?t=this._unusedIndexes.pop():t=String(this._fakeIndex.length),this._fakeIndex.splice(e,0,t),t}},resetFakeObjects:{value:function(){var e=this._repetition.objects;this._fakeIndex.length=0;if(e)for(var t=0,n=e.length;t<n;t++)this._fakeIndex[t]=String(t)}},removeFakeObjectAtPosition:{value:function(e){var t;return this._unusedIndexes.unshift(this._fakeIndex.splice(e,1)[0]),this._unusedIndexes[0]}},_dispatchFakePropertyChange:{value:function(e,t){var n,r;n=a.getPropertyChangeDescriptor(this,e),n&&(r=Object.create(f),r.target=this,r.propertyPath=e,r.minus=t,r.plus=this.undefinedGet(e),t!==r.plus&&n.handleChange(r))}}}),c=t.Repetition=r.create(i,{hasTemplate:{value:!1},didCreate:{value:function(){this.addPropertyChangeListener("objects",this),this._fakeObjects=Object.create(l).initWithRepetition(this)}},clonesChildComponents:{value:!0},_emptyFunction:{value:function(){}},_updateItems:{value:function(e,t,n){var r=this._fakeObjects,i,s=e?e.length:0,o=t?t.length:0,u,a,f;u=Math.max(s,o),a=Math.min(s,o),f=o-s;for(var l=0;l<a;l++)r._dispatchFakePropertyChange(r._fakeIndex[n+l],e[n+l]);if(f>0){this._expectedChildComponentsCount+=(this._iterationChildComponentsCount||1)*f,this.canDrawGate.setField("iterationLoaded",!1);for(;l<u;l++)r.addFakeObjectAtPosition(n+l),this._addItem({index:n+l,insertionIndex:n+l})}else if(f<0){var c=n+a;for(;l<u;l++)i=r.removeFakeObjectAtPosition(c),r._dispatchFakePropertyChange(i,e[l]),this._deleteItem(c)}}},handleChange:{enumerable:!1,value:function(e){"objects"===e.currentPropertyPath&&this._isComponentExpanded&&this._updateItems(e.minus,e.plus,e.index||0)}},_fakeObjects:{value:null},_hasBeenDeserialized:{value:!1,enumerable:!1},_nextDeserializedItemIx:{enumerable:!1,value:0,distinct:!0},init:{enumerable:!1,value:function(){return this._items=[],this._itemsToAppend=[],this._nextDeserializedItemIx=0,this._itemsToRemove=[],this._deletedItems=[],this}},_contentController:{value:null},contentController:{get:function(){return this._contentController},set:function(e){if(this._contentController===e)return;this._contentController&&(Object.deleteBinding(this,"objects"),Object.deleteBinding(this,"selectedIndexes")),this._contentController=e;if(this._contentController){this._bindingDescriptors&&Object.deleteBinding(this,"objects");var t,n;t={boundObject:this._contentController,boundObjectPropertyPath:"organizedObjects",oneway:!0},n={boundObject:this._contentController,boundObjectPropertyPath:"selectedIndexes"},this._hasBeenDeserialized?(Object.defineBinding(this,"objects",t),Object.defineBinding(this,"selectedIndexes",n)):(this._controllerBindingsToInstall||(this._controllerBindingsToInstall={}),this._controllerBindingsToInstall.objects=t,this._controllerBindingsToInstall.selectedIndexes=n)}}},_objects:{enumerable:!1,value:null},_mappedObjects:{enumerable:!1,value:null},objects:{dependencies:["indexMap","indexMapEnabled"],enumerable:!1,serializable:!0,get:function(){return!this.indexMap||!this.indexMapEnabled?this._objects:(this._objects&&!this._mappedObjects&&(this._mappedObjects=this.indexMap.map(function(e){return isNaN(e)?undefined:this._objects.getProperty(e)},this)),this._mappedObjects)},set:function(e){o.isDebug&&o.debug(this," set objects:",e?e.length:null,e,"same objects?",e===this._objects),this._mappedObjects=null,this._objects=e,this.contentController||(this.selectedIndexes=null)}},_isSelectionEnabled:{enumerable:!1,value:!1},isSelectionEnabled:{get:function(){return this._isSelectionEnabled},set:function(e){if(e===this._isSelectionEnabled)return;this._isSelectionEnabled=e,this._isComponentExpanded&&this._refreshSelectionTracking()}},_childLoadedCount:{enumerable:!1,value:0},_iterationChildComponentsCount:{enumerable:!1,value:null},_expectedChildComponentsCount:{enumerable:!1,value:null},_indexMap:{enumerable:!1,value:null},indexMap:{get:function(){return this._indexMap}},_indexMapEnabled:{enumerable:!1,value:!1},indexMapEnabled:{get:function(){return this._indexMapEnabled},set:function(e){if(e===this._indexMapEnabled)return;!this._indexMap&&e&&(this._indexMap=[]),this._indexMapEnabled=e,this.refreshIndexMap()}},_drawnIndexMap:{enumerable:!1,value:null},drawnIndexMap:{get:function(){return this._drawnIndexMap}},mapIndexToIndex:{value:function(e,t,n){this._indexMap||(this._indexMap=[]);if(t===this._indexMap[e]||!isNaN(t)&&this._indexMap.indexOf(t)>-1)return;this._indexMap[e]=t,this._indexMapAffectedIndexes[e]=!0,this._indexMapChanged=!0,(n||typeof n=="undefined")&&this.refreshIndexMap()}},clearIndexMap:{value:function(){this._indexMap.clear()}},refreshIndexMap:{value:function(){var e=this._mappedObjects;this._mappedObjects=null,this._isComponentExpanded&&(this._updateItems(e,this.objects,0),this.needsDraw=!0)}},_indexMapChanged:{enumerable:!1,value:!1},_indexMapAffectedIndexes:{enumerable:!1,distinct:!0,value:{}},_dirtyIndexes:{enumerable:!1,distinct:!0,value:{}},_items:{enumerable:!1,value:[],distinct:!0},_itemsToAppend:{enumerable:!1,value:[],distinct:!0},_itemsToRemove:{enumerable:!1,value:[],distinct:!0},_deletedItems:{enumerable:!1,value:[],distinct:!0},_updatingItems:{value:!1},_refreshItems:{value:function(){if(this._updatingItems)return;this._updatingItems=!0;var e=this._objects?this._objects.length:0,t=this._items.length+this._itemsToAppend.length,n,r,i=this._addItem,s=this._deleteItem;this._objects&&this.indexMap&&this._indexMapEnabled&&(e=this.indexMap.length),n=e-t,0!==n&&(this.needsDraw=!0);if(n>0){this._expectedChildComponentsCount+=(this._iterationChildComponentsCount||1)*n,this.canDrawGate.setField("iterationLoaded",!1);for(r=0;r<n;r++)i.call(this)}else if(n<0)for(r=n;r<0;r++)s.call(this);this._updatingItems=!1}},_addItems:{value:function(e,t){var n=e.length;if(this._updatingItems)return;this._updatingItems=!0,this._expectedChildComponentsCount+=(this._iterationChildComponentsCount||1)*n,this.canDrawGate.setField("iterationLoaded",!1);for(var r=0;r<n;r++)this._addItem({index:t+r,insertionIndex:t+r});this._updatingItems=!1}},_addItem:{value:function(e){var t=this,n=this._items,r,i,s,o,u=this._itemsToAppend,a,f,l,c=t.canDrawGate,h;e||(e={}),a=u.push(e)-1,o=n.length+a;if("index"in e)for(h=0;h<a;h++){var p=u[h];p.index>=e.index&&p.index++}t._canDraw=!1,s=this._iterationChildComponentsCount,this._iterationTemplate.instantiateWithComponent(this,function(){if(s===0)++t._childLoadedCount===t._expectedChildComponentsCount&&(c.setField("iterationLoaded",!0),t.needsDraw=!0);else{r=t.childComponents,f=o*t._iterationChildComponentsCount,l=f+s;for(h=f;h<l;h++)i=r[h],i.needsDraw=!0,i.loadComponentTree(function(){++t._childLoadedCount===t._expectedChildComponentsCount&&(c.setField("iterationLoaded",!0),t.needsDraw=!0)})}})}},_deleteItem:{value:function(e){var t,n=e,r,i=this.childComponents,s=this._iterationChildComponentsCount,o=this._itemsToAppend,u=o.length,a=!1,f=0;for(var l=0;l<u;l++){var c=o[l];c.index>e?c.index--:c.index<e?f++:a=c.removed=!0}if(!a){if(!(this._items.length>0))throw"BUG: _deleteItem was called on the repetition but no elements exist to be removed";n=e-f,t=this._items.splice(n,1)[0],t.removalIndex=n,this._itemsToRemove.push(t),this._removeIterationChildComponents(t.childComponentsIndex)}this.needsDraw=!0}},_removeIterationChildComponents:{value:function(e){var t=this.childComponents,n=this._iterationChildComponentsCount,r,i,s;if(n>0){r=t.splice(e,n),this._childLoadedCount-=n,this._expectedChildComponentsCount-=n;for(var o=0,u=r.length;o<u;o++)r[o].cleanupDeletedComponentTree(!0);i=this._items;for(var o=0;s=i[o];o++)s.childComponentsIndex>e&&(s.childComponentsIndex-=n);i=this._itemsToAppend;for(var o=0;s=i[o];o++)s.childComponentsIndex>e&&(s.childComponentsIndex-=n)}else this._childLoadedCount--,this._expectedChildComponentsCount--}},_iterationTemplate:{enumerable:!1,value:null},expandComponent:{value:function(t){this._updatingItems||this._setupIterationTemplate(),this._isComponentExpanded=!0,t&&t()}},templateDidDeserializeObject:{value:null},_setupIterationTemplate:{value:function(){var e=this._element,t=this.childComponents,n;this.setupIterationSerialization(),this.setupIterationDeserialization(),this._iterationChildComponentsCount=t.length,this._iterationChildCount=e.childNodes.length,this._iterationChildElementCount=e.children.length,this._iterationChildComponentsCount>0?(this._templateId=t[0]._suuid||t[0].uuid,this._iterationTemplate=s.templateWithComponent(this,this._templateDelegate)):(this._iterationTemplate=s.create(),this._iterationTemplate.delegate=this._templateDelegate,this._iterationTemplate.initWithComponent(this)),this._iterationTemplate.optimize(),this._removeOriginalContent=!0,o.isDebug&&o.debug(this._iterationTemplate.exportToString()),this.removeIterationSerialization();while(n=t.shift())n.needsDraw=!1;this.objects&&this.objects.length!==this._items.length&&this._updateItems([],this.objects,0)}},_templateDelegate:{value:{serializeObjectProperties:function(e,t){e.set("ownerComponent",t.ownerComponent,"reference")}}},templateDidLoad:{value:function(){var e=this._deserializedItem,t;if(e){t=e.element.childNodes,e.fragment=document.createDocumentFragment(),e.childComponentsIndex=this.childComponents.length-this._iterationChildComponentsCount;while(t.length>0)e.fragment.appendChild(t[0]);delete e.element}}},contentWillChange:{value:function(e){this._updatingItems=!0,this.reset()}},contentDidChange:{value:function(){this._updatingItems=!1,this._setupIterationTemplate()}},reset:{value:function(){this._items.clear(),this._itemsToAppend.clear(),this._nextDeserializedItemIx=0,this._itemsToRemove.clear(),this._deletedItems.clear()}},deserializedFromTemplate:{value:function(){this._isComponentExpanded&&this.setupIterationSerialization();var t=this._controllerBindingsToInstall,n;if(t){for(n in t)Object.defineBinding(this,n,t[n]);delete this._controllerBindingsToInstall}this._hasBeenDeserialized=!0}},canDraw:{value:function(){var e=this.canDrawGate.value,t,n,r=this.childComponents.length;if(e)for(n=0;n<r;n++)if(!this.childComponents[n].canDraw()){e=!1;break}return e}},prepareForDraw:{value:function(){this._refreshSelectionTracking()}},_selectedIndexesToDeselectOnDraw:{value:null},_selectedIndexes:{value:null},selectedIndexes:{get:function(){return this._selectedIndexes},set:function(e){this._selectedIndexes=e,this._markIndexesDirty(e),this._isComponentExpanded&&(this.needsDraw=!0)}},_activeIndexes:{value:null},activeIndexes:{get:function(){return this._activeIndexes},set:function(e){this._activeIndexes=e,this._markIndexesDirty(e),this._isComponentExpanded&&(this.needsDraw=!0)}},_markIndexesDirty:{value:function(e){if(e)for(var t=0,n=e.length;t<n;t++)this._dirtyIndexes[this._indexMap?this._indexMap.indexOf(e[t]):e[t]]=!0}},_refreshSelectionTracking:{value:function(){this.isSelectionEnabled?window.Touch?this.element.addEventListener("touchstart",this,!0):this.element.addEventListener("mousedown",this,!0):window.Touch?this.element.removeEventListener("touchstart",this,!0):this.element.removeEventListener("mousedown",this,!0)}},_itemIndexOfElement:{value:function(e){var t=e,n=null,r,i;if(t===this.element)return n;while(t&&t.parentNode!==this.element)t=t.parentNode;return t?(i=this.element.ownerDocument.createRange(),i.setStart(this.element,0),i.setEndAfter(t),r=this._iterationChildCount>1?1:0,n=(i.endOffset+r)/this._iterationChildCount-1,this.indexMap?this.indexMap[n]:n):null}},captureTouchstart:{value:function(e){if(this._selectionPointer||0===this._selectionPointer)return;this._observeSelectionPointer(e.changedTouches[0].identifier);var t=this._itemIndexOfElement(e.target);null!==t?this.activeIndexes=[t]:this._ignoreSelectionPointer()}},handleTouchend:{value:function(e){var t=0,n;while(t<e.changedTouches.length&&e.changedTouches[t].identifier!==this._selectionPointer)t++;t<e.changedTouches.length&&(this.eventManager.isPointerClaimedByComponent(this._selectionPointer,this)&&(n=this._itemIndexOfElement(e.target),null!==n&&(this.selectedIndexes=[n])),this._ignoreSelectionPointer())}},handleTouchcancel:{value:function(){this._ignoreSelectionPointer()}},captureMousedown:{value:function(e){this._observeSelectionPointer("mouse");var t=this._itemIndexOfElement(e.target);null!==t?this.activeIndexes=[t]:this._ignoreSelectionPointer()}},handleMouseup:{value:function(e){var t=this._itemIndexOfElement(e.target);null!==t&&(this.selectedIndexes=[t]),this._ignoreSelectionPointer()}},surrenderPointer:{value:function(e,t){return this._ignoreSelectionPointer(),!0}},_selectionPointer:{value:null},_observeSelectionPointer:{value:function(e){this._selectionPointer=e,this.eventManager.claimPointer(e,this),window.Touch?(document.addEventListener("touchend",this,!1),document.addEventListener("touchcancel",this,!1)):document.addEventListener("mouseup",this,!1)}},_ignoreSelectionPointer:{value:function(){this.eventManager.forfeitPointer(this._selectionPointer,this),this._selectionPointer=null,this.activeIndexes=[],window.Touch?(document.removeEventListener("touchend",this,!1),document.removeEventListener("touchcancel",this,!1)):document.removeEventListener("mouseup",this,!1)}},_iterationChildCount:{value:null},_iterationChildElementCount:{value:null},draw:{value:function(){var e,t,n,r,i=this._items.length,s,o=this.element,u=o.ownerDocument,a,f,l,c,h,p,d,v,m=this._indexMapChanged,g,y,b=this._iterationChildCount,w;if(!this.canDrawGate.value)return;this._removeOriginalContent&&(this._removeOriginalContent=!1,o.innerHTML="");if(1===this._iterationChildElementCount){l=o.children;for(e=0;e<l.length;e++)d=l.item(e),d&&this._dirtyIndexes[e]&&(v=d.classList,v.remove("active"),v.remove("selected"),v.remove("no-transition"),m&&this._indexMapAffectedIndexes[e]&&(v.add("no-transition"),this._dirtyIndexes[e]=!1))}m&&(this._indexMapAffectedIndexes.clear(),this._indexMapChanged=!1,this.needsDraw=!0);var E;if(this._itemsToRemove.length>0){f=document.createRange();for(e=0;t=this._itemsToRemove[e];e++)E=t.removalIndex,f.setStart(o,E*b),f.setEnd(o,E*b+b),f.extractContents();this._itemsToRemove.clear()}var S;if(this._itemsToAppend.length>0){for(e=0;t=this._itemsToAppend[e];e++){if(t.removed){this._removeIterationChildComponents(t.childComponentsIndex);continue}n=t.fragment,S=t.insertionIndex,delete t.fragment,delete t.insertionIndex,delete t.index,isNaN(S)?o.appendChild(n):o.insertBefore(n,o.childNodes[S*this._iterationChildCount]),this._items.splice(S,0,t)}i=this._items.length,this._itemsToAppend.clear(),this._nextDeserializedItemIx=0}if(null!==this.selectedIndexes&&this.selectedIndexes.length>0&&1===this._iterationChildElementCount){l=o.children,a=this.selectedIndexes.length,c=Math.min(a,l.length);for(e=0;e<c;e++)y=this.indexMap?this.indexMap.indexOf(this.selectedIndexes[e]):this.selectedIndexes[e],d=l.item(y),d&&(d.classList.add("selected"),this._dirtyIndexes[y]=!0)}if(null!==this._activeIndexes&&this._activeIndexes.length>0&&1===this._iterationChildElementCount){l=this.element.children,h=this._activeIndexes.length,p=Math.min(h,l.length);for(e=0;e<p;e++)g=this.indexMap?this.indexMap.indexOf(this._activeIndexes[e]):this._activeIndexes[e],d=l.item(g),d&&(d.classList.add("active"),this._dirtyIndexes[g]=!0)}this._drawnIndexMap=this._indexMap?this.indexMap.slice(0):null}},setupIterationSerialization:{value:function(){r.defineProperty(this,"serializeSelf",{value:this.serializeIteration})}},setupIterationDeserialization:{value:function(){this.deserializeProperties=this.deserializeIteration}},removeIterationSerialization:{value:function(){delete this.serializeSelf}},propertyChangeBindingListener:{value:function(e,t,n,r,i,s,o){var u=o,a=e,f,l,c,h,p,d;if(o&&o.boundObjectPropertyPath.match(/objectAtCurrentIteration/)){if(!this._deserializedItem)return null;l=this._fakeObjects._fakeIndex[this._deserializedItem.index],u={},c=Object.keys(o),h=c.length;for(var v=0;v<h;v++)p=c[v],u[p]=o[p];d=o.boundObjectPropertyPath.replace(/objectAtCurrentIteration/,"_fakeObjects."+l),u.boundObjectPropertyPath=d,a=e.replace(/objectAtCurrentIteration/,"_fakeObjects."+l)}else if(o&&o.boundObjectPropertyPath.match(/selectionAtCurrentIteration/)){if(!this._deserializedItem)return null;l=this._fakeObjects._fakeIndex[this._deserializedItem.index],u={},c=Object.keys(o),h=c.length;for(var v=0;v<h;v++)p=c[v],u[p]=o[p];d=o.boundObjectPropertyPath.replace(/selectionAtCurrentIteration/,"contentController.selections."+l),u.boundObjectPropertyPath=d,a=e.replace(/selectionAtCurrentIteration/,"contentController.selections."+l)}return u.boundObject===this?Object.prototype.propertyChangeBindingListener.call(this,a,t,n,r,i,s,u):u.boundObject.propertyChangeBindingListener(a,t,n,r,i,s,u)}},serializeIteration:{value:function(e){e.setProperty("element",this.element);var t=this.childComponents,n=e.addObject,r,i=t.length;for(r=0;r<i;r++)n.call(e,t[r]);e.setProperty("_isComponentExpanded",!0)}},deserializeIteration:{value:function(e){var t=this._itemsToAppend[this._nextDeserializedItemIx++];t?(this._deserializedItem=t,t.element=e.get("element"),this.eventManager.registerEventHandlerForElement(this,t.element),o.debug&&o.debug(this._montage_metadata.objectName+":deserializeIteration","childNodes: ",t.element)):this._deserializedItem=null}}})}})