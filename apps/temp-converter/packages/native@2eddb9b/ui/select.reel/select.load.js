montageDefine("2eddb9b","ui/select.reel/select",{dependencies:["montage/core/bindings","montage/core/range-controller","ui/native-control","montage/composer/press-composer"],factory:function(e,t){var n=e("montage/core/bindings").Bindings,r=e("montage/core/range-controller").RangeController,i=e("ui/native-control").NativeControl,a=e("montage/composer/press-composer").PressComposer,o=t.Select=i.specialize({_fromInput:{value:null},_synching:{value:null},_selectedIndexes:{value:null},selectedIndexes:{get:function(){return this._selectedIndexes},set:function(e){for(var t=this.content,n=[],r=0,i=e.length;i>r;r++)n.push(t[e[r]][this.valuePropertyPath||"value"]);1>=e.length?this.value=n[0]:this.values=n}},constructor:{value:function o(){this.super(),this._selectedIndexes=[],this._selectedIndexes.addRangeChangeListener(this,"selectedIndexes")}},handleSelectedIndexesRangeChange:{value:function(){this.needsDraw===!1&&(this.needsDraw=this._synching||!this._fromInput)}},_setContentControllerSelectedIndexes:{value:function(e){for(var t,n=this.content,r=this._contentController.selection,i=0,a=n.length;a>i;i++)e.indexOf(i)>=0?-1===r.indexOf(n[i])&&r.push(n[i]):(t=r.indexOf(n[i]),t>=0&&r.splice(t,1))}},_content:{value:null,enumerable:!1},content:{set:function(e){if(this._content=e,!this.contentController){var t=new r;t.content=e,this.contentController=t}this.needsDraw=!0},get:function(){return this._content}},valuePropertyPath:{value:null},textPropertyPath:{value:null},_contentController:{value:null},contentController:{get:function(){return this._contentController},set:function(e){this._contentController!==e&&(this._contentController=e,e.multiSelect=this.multiple,n.defineBindings(this,{content:{"<-":"_contentController.organizedContent"},_selection:{"<-":"_contentController.selection"},"_selectedIndexes.rangeContent()":{"<-":"content.enumerate().filter{$_selection.has(.1)}.map{.0}"}}))}},_getSelectedValuesFromIndexes:{value:function(){var e,t,n=this._selectedIndexes,r=this._content,i=n.length;if(i>0){e=[],t=this.valuePropertyPath||"value";for(var a=0;i>a;a++)r[n[a]][t]&&e.push(r[n[a]][t])}return e}},_synchValues:{value:function(){this._synching||(this._synching=!0,this.values=this._getSelectedValuesFromIndexes(),this.value=this.values&&this.values.length>0?this.values[0]:null,this._synching=!1)}},_values:{value:null},values:{get:function(){return this._values},set:function(e){var t=this.content;if(e&&t&&(this._values=e,!this._synching)){for(var n,r=[],i=0,a=this._values.length;a>i;i++)n=this._indexOf(this._values[i]),n>=0&&r.push(n);this._synching=!0,this._setContentControllerSelectedIndexes(r),this._synching=!1}}},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value=e,this._synching||(this.values=null==e?[]:[e])}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},_addOptionsFromMarkup:{value:function(){var e=this.element,t=e.querySelectorAll("option");if(!this.contentController){var n=new r,i=[],a=[];if(t&&t.length>0){for(var o,s=0,l=t.length;l>s;s++){o=t[s].getAttribute("selected");var u={value:t[s].value,text:t[s].textContent};o&&i.push(u),a.push(u)}0===i.length&&l>0&&i.push(a[0]),this._fromInput=!0,this.contentController=n,n.content=a,n.selection=i}}}},deserializedFromTemplate:{value:function(){this._addOptionsFromMarkup()}},_removeAll:{value:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}},_refreshOptions:{value:function(){var e,t,n,r,i=this.content||[],a=i.length;for(e=0;a>e;e++)t=document.createElement("option"),"string"==typeof i[e]?n=r=i[e]:(n=i[e][this.textPropertyPath||"text"],r=i[e][this.valuePropertyPath||"value"]),t.value=r,t.textContent=n||r,this._selectedIndexes&&this._selectedIndexes.length>0&&this._selectedIndexes.indexOf(e)>=0&&t.setAttribute("selected","true"),this.element.appendChild(t);0===this._selectedIndexes.length&&this.element.selectedIndex>=0&&(this._selectedIndexes[0]=this.element.selectedIndex)}},enterDocument:{value:function(e){e&&(this.element.addEventListener("focus",this),this.element.addEventListener("change",this))}},prepareForActivationEvents:{value:function(){var e=new a;this.addComposer(e)}},draw:{enumerable:!1,value:function(){var e=this.element;this._fromInput=!1,this._synching=!1,this._removeAll(e),this._refreshOptions(),this.super()}},didDraw:{value:function(){this._synchValues()}},_indexOf:{value:function(e){var t,n,r=this.content||[],i=r.length;for(t=0;i>t;t++)if(n="string"==typeof r[t]?r[t]:r[t][this.valuePropertyPath||"value"],n&&n===e)return t;return-1}},_getSelectedOptions:{value:function(e){var t,n=e.querySelectorAll("option"),r=n.length,i=[];for(t=0;r>t;t++)n[t].selected&&i.push(n[t]);return i}},_getSelectedOptionsIndexes:{value:function(e){var t,n=e.querySelectorAll("option"),r=n.length,i=[];for(t=0;r>t;t++)n[t].selected&&i.push(t);return i}},handleChange:{value:function(){var e=this._getSelectedOptionsIndexes(this.element);e.length>0&&(this._fromInput=!0,this._synching=!1,this._setContentControllerSelectedIndexes(e),this._synchValues()),this._dispatchActionEvent()}}});o.addAttributes({autofocus:{dataType:"boolean"},disabled:{dataType:"boolean"},form:null,multiple:{dataType:"boolean"},name:null,required:{dataType:"boolean"},size:{dataType:"number",value:"1"}})}});