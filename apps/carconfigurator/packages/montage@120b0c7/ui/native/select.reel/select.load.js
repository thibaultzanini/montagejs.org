montageDefine("120b0c7","ui/native/select.reel/select",{dependencies:["montage","ui/component","ui/controller/array-controller","ui/native-control","ui/composer/press-composer"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/controller/array-controller").ArrayController,o=e("ui/native-control").NativeControl,u=e("ui/composer/press-composer").PressComposer,a=t.Select=r.create(o,{_fromInput:{value:null},_synching:{value:null},__selectedIndexes:{value:null,enumerable:!1},_selectedIndexes:{set:function(e){this.__selectedIndexes=e,this.needsDraw===!1&&(this.needsDraw=this._synching||!this._fromInput)},get:function(){return this.__selectedIndexes}},_content:{value:null,enumerable:!1},content:{set:function(e){Array.isArray(e)||(e=[e]),this._content=e;if(!this.contentController){var t=s.create();t.content=e,this.contentController=t}this.needsDraw=!0},get:function(){return this._content}},valuePropertyPath:{value:null},textPropertyPath:{value:null},_contentController:{value:null},contentController:{get:function(){return this._contentController},set:function(e){if(this._contentController===e)return;this._contentController&&Object.deleteBinding(this,"_selectedIndexes"),this._contentController=e,this._contentController&&(this._bindingDescriptors&&Object.deleteBinding(this,"content"),Object.defineBinding(this,"content",{boundObject:this._contentController,boundObjectPropertyPath:"organizedObjects",oneway:!0}),Object.defineBinding(this,"_selectedIndexes",{boundObject:this._contentController,boundObjectPropertyPath:"selectedIndexes"}))}},_getSelectedValuesFromIndexes:{value:function(){var e=this.contentController?this.contentController.selectedObjects:null,t=[];if(e&&e.length>0){var n=0,r=e.length,i;for(;n<r;n++)i=this.valuePropertyPath||"value",e[n][i]&&t.push(e[n][i])}return t}},_synchValues:{value:function(){this._synching||(this._synching=!0,this.values=this._getSelectedValuesFromIndexes(),this.value=this.values&&this.values.length>0?this.values[0]:null,this._synching=!1)}},_values:{value:null},values:{get:function(){return this._values},set:function(e){var t=this.contentController?this.contentController.content:null;if(e&&t){this._values=e;if(!this._synching){var n=[],r=0,i=this._values.length,s;for(;r<i;r++)s=this._indexOf(this._values[r]),s>=0&&n.push(s);this._synching=!0,this.contentController.selectedIndexes=n,this._synching=!1}}}},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value=e,this._synching||(e==null?this.values=[]:this.values=[e])}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},_addOptionsFromMarkup:{value:function(){var e=this.element,t=e.querySelectorAll("option");if(!this.contentController){var n=s.create(),r=[];n.content=[];if(t&&t.length>0){var i=0,o=t.length,u;for(;i<o;i++)u=t[i].getAttribute("selected"),u&&r.push(i),n.addObjects({value:t[i].value,text:t[i].textContent});this.contentController=n,r.length===0&&o>0&&(r=[0]),this._fromInput=!0,this.contentController.selectedIndexes=r}}}},deserializedFromTemplate:{value:function(){this._addOptionsFromMarkup()}},_removeAll:{value:function(e){while(e.firstChild)e.removeChild(e.firstChild)}},_refreshOptions:{value:function(){var e=this.content||[],t=e.length,n,r,i,s;for(n=0;n<t;n++)r=document.createElement("option"),String.isString(e[n])?i=s=e[n]:(i=e[n][this.textPropertyPath||"text"],s=e[n][this.valuePropertyPath||"value"]),r.value=s,r.textContent=i||s,this._selectedIndexes&&this._selectedIndexes.length>0&&this._selectedIndexes.indexOf(n)>=0&&r.setAttribute("selected","true"),this.element.appendChild(r)}},prepareForDraw:{value:function(){this.element.addEventListener("focus",this),this.element.addEventListener("change",this)}},prepareForActivationEvents:{value:function(){var e=u.create();this.addComposer(e)}},draw:{enumerable:!1,value:function(){var e=this.element;this._fromInput=!1,this._synching=!1,this._removeAll(e),this._refreshOptions();var t=Object.getPrototypeOf(a).draw;t.call(this)}},didDraw:{value:function(){this._synchValues()}},_indexOf:{value:function(e){var t=this.content||[],n=t.length,r,i,s;for(r=0;r<n;r++){String.isString(t[r])?s=t[r]:s=t[r][this.valuePropertyPath||"value"];if(s&&s===e)return r}return-1}},_getSelectedOptions:{value:function(e){var t=e.querySelectorAll("option"),n,r=t.length,i=[];for(n=0;n<r;n++)t[n].selected&&i.push(t[n]);return i}},_getSelectedOptionsIndices:{value:function(e){var t=e.querySelectorAll("option"),n,r=t.length,i=[];for(n=0;n<r;n++)t[n].selected&&i.push(n);return i}},handleChange:{value:function(e){var t=this._getSelectedOptionsIndices(this.element);t.length>0&&(this._fromInput=!0,this._synching=!1,this.contentController.selectedIndexes=t,this._synchValues())}}});a.addAttributes({autofocus:{dataType:"boolean"},disabled:{dataType:"boolean"},form:null,multiple:{dataType:"boolean"},name:null,required:{dataType:"boolean"},size:{dataType:"number",value:"1"}})}})