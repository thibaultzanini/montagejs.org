montageDefine("81833cd","ui/autocomplete/autocomplete.reel/autocomplete",{dependencies:["montage/ui/component","ui/text-input","montage/core/logger","ui/autocomplete/results-list.reel/results-list","ui/popup/popup.reel","montage/composer/press-composer","montage/core/range-controller"],factory:function(e,t){var n=(e("montage/ui/component").Component,e("ui/text-input").TextInput),i=e("montage/core/logger").logger("autocomplete"),r=e("ui/autocomplete/results-list.reel/results-list").ResultsList,a=e("ui/popup/popup.reel").Popup,o=e("montage/composer/press-composer").PressComposer,s=e("montage/core/range-controller").RangeController,l=38,u=40,c=13,h=function(e){var t=0,n=0,i=0,r=0;if(e.offsetParent)do t+=e.offsetLeft,n+=e.offsetTop,i+=e.offsetHeight,r+=e.offsetWidth;while(e=e.offsetParent);return{top:n,left:t,height:i,width:r}};t.Autocomplete=n.specialize({constructor:{value:function(){this.super(),this.delay=500,this.minLength=2,this.classList.add("matte-InputText")}},hasTemplate:{value:!0},delegate:{value:null},textPropertyPath:{value:null},separator:{value:",",distinct:!0},_delay:{value:null},delay:{get:function(){return this._delay},set:function(e){e!==this._delay&&("string"==typeof e&&(e=parseInt(e,10)),this._delay=e)}},minLength:{value:null},_tokens:{value:null},tokens:{get:function(){return this._tokens},set:function(e){this._tokens=e,this._valueSyncedWithInputField=!1,this.needsDraw=!0},modify:function(e){this._tokens=e}},value:{get:function(){return this._value},set:function(e,t){this._value=e?e.trim():"";var n=this._value;if(n){var r=n.split(this.separator).map(function(e){return e.trim()});this.activeTokenIndex=this._findActiveTokenIndex(this.tokens,r),this._tokens=n.split(this.separator).map(function(e){return e.trim()})}else this.activeTokenIndex=0,this._tokens=[];if(t){if(this._valueSyncedWithInputField=!0,this.showPopup=!1,this._tokens.length&&this._tokens.length>0){var a=this._tokens[this.activeTokenIndex];if(a=a?a.trim():"",a.length>=this.minLength){var o=this;clearTimeout(this.delayTimer),this.delayTimer=setTimeout(function(){o.delayTimer=null,i.isDebug&&i.debug("SEARCH for ",a),o.performSearch(a)},this.delay)}}}else this.showPopup=!1,this._valueSyncedWithInputField=!1,this.needsDraw=!0}},overlayWidth:{value:null,enumerable:!1},delayTimer:{value:null,enumerable:!1},_loadingStatus:{value:!1,enumerable:!1},loadingStatus:{enumerable:!1,get:function(){return this._loadingStatus},set:function(e){this._loadingStatus=e,"loading"===this._loadingStatus&&(this.showPopup=!1),this.needsDraw=!0}},activeTokenIndex:{value:null},_findActiveTokenIndex:{enumerable:!1,value:function(e,t){if(null==e||null==t)return 0;var n=0,i=t.length;for(n=0;i>n;n++)if(e.length>n){if(e[n]===t[n])continue;break}return n}},_activeIndexes:{value:null,enumerable:!1},activeItemIndex:{enumerable:!1,get:function(){return this._activeIndexes&&this._activeIndexes.length>0?this._activeIndexes[0]:null},set:function(e){this._activeIndexes=null==e?[]:[e]}},_suggestedValue:{value:null},suggestedValue:{enumerable:!1,get:function(){return this._suggestedValue},set:function(e){if(this._suggestedValue=e,e){var t,n=this.tokens||[];t="string"==typeof e?e:this.textPropertyPath?e[this.textPropertyPath]:"",n[this.activeTokenIndex]=t,this.tokens=n,this.showPopup=!1}}},popup:{enumerable:!1,value:null},_showPopup:{value:null},showPopup:{enumerable:!1,get:function(){return this._showPopup},set:function(e){e!=this._showPopup&&(this._showPopup=e,this.needsDraw=!0)}},_suggestions:{value:null},suggestions:{enumerable:!1,get:function(){return this._suggestions},set:function(e){i.isDebug&&i.debug("got suggestions: ",e),this.loadingStatus="complete",this._suggestions=e,this.showPopup=e&&e.length>0}},resultsController:{enumerable:!1,value:null},resultsList:{enumerable:!1,value:null},performSearch:{enumerable:!1,value:function(e){this.delegate&&(this.resultsController.selectedIndexes=[],this.activeItemIndex=0,this.loadingStatus="loading",this.callDelegateMethod("ShouldGetSuggestions",this,e))}},_addEventListeners:{enumerable:!1,value:function(){this.element.addEventListener("keyup",this),this.element.addEventListener("input",this)}},_removeEventListeners:{enumerable:!1,value:function(){this.element.removeEventListener("keyup",this),this.element.removeEventListener("input",this)}},_getPopup:{enumerable:!1,value:function(){var e=this.popup;return e||(e=new a,e.content=this.resultsList,e.anchor=this.element,e.delegate=this,e.focusOnShow=!1,this.popup=e),this.popup}},willPositionPopup:{value:function(e){var t=e.anchorElement,n=h(t);return{left:n.left,top:n.top+30}}},enterDocument:{value:function(e){e&&(this._addEventListeners(),this.element.classList.add("matte-Autocomplete"),this.resultsController=new s,this.defineBinding("resultsController.content",{"<-":"suggestions"}),this.defineBinding("suggestedValue",{"<-":"resultsController.selection[0]"}),this.resultsList=new r,this.defineBinding("resultsList.contentController",{"<-":"resultsController"}),this.defineBinding("resultsList.activeIndexes",{"<-":"_activeIndexes"}),this.defineBinding("resultsList.textPropertyPath",{"<-":"textPropertyPath"}),this._getPopup())}},prepareForActivationEvents:{value:function(){var e=new o;this.addComposer(e)}},draw:{value:function(){this.super(),this._valueSyncedWithInputField||(this.tokens&&(this.value=this.tokens.join(this.separator)),this.value&&this.value.charAt(this.value.length-1)!=this.separator&&(this.value+=this.separator),this.element.value=this.value,this._valueSyncedWithInputField=!0);var e=this.showPopup;""===this.value&&(e=!1),e?(this.popup.show(),this.activeItemIndex=0):this.popup&&this.popup.displayed&&this.popup.hide();var t="loading"===this.loadingStatus;this.element.classList[t?"add":"remove"]("matte-Autocomplete--loading")}},handleKeyup:{enumerable:!1,value:function(e){var t=e.keyCode,n=this._getPopup();switch(t){case u:if(n.displayed){var i=this.suggestions||[];i.length>0&&this.activeItemIndex<i.length-1?this.activeItemIndex++:this.activeItemIndex=0}else n.show(),this.activeItemIndex=0;break;case l:n.displayed===!0&&(this.activeItemIndex>0?this.activeItemIndex--:this.activeItemIndex=0);break;case c:n.displayed===!0?(this.resultsController.selection=[this.suggestions[this.activeItemIndex]],e.preventDefault()):this.suggestedValue=this.tokens[this.tokens.length-1]}this.element.focus()}}})}});