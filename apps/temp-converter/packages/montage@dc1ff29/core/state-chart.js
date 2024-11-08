var Montage=require("montage").Montage,State=exports.State=Montage.specialize({_stateChart:{enumerable:!1,value:null},constructor:{value:function State(){this.super()}},init:{value:function(e){this.substates={},this.enterState=null,this.exitState=null;for(var t,n,r=Object.keys(e),i=0;t=r[i];i++)n=e[t],"object"==typeof n&&State.prototype.isPrototypeOf(n)&&(n.name=t,n.parentState=this,this.substates[t]=n),this[t]="string"==typeof n&&"initialSubstate"!==t?this._encloseGotoState(n):n;return this}},name:{enumerable:!1,value:null},_initialSubstate:{enumerable:!1,value:null},initialSubstate:{get:function(){return"string"==typeof this._initialSubstate&&(this._initialSubstate=this[this._initialSubstate]),this._initialSubstate},set:function(e){this._initialSubstate=e}},substates:{enumerable:!1,value:null},parentState:{enumerable:!1,value:null},_path:{enumerable:!1,value:null},path:{enumerable:!1,get:function(){return this._path||(this._path=this.parentState&&this.parentState.path?this.parentState.path+"."+this.name:this.name),this._path}},enterState:{enumerable:!1,value:null},exitState:{enumerable:!1,value:null},isInState:{enumerable:!1,value:function(e){return"string"!=typeof e&&(e=e.name),!!this.path.match(RegExp(".?"+e+".?"))}},_encloseGotoState:{value:function(e){return function(t,n){return this._stateChart._gotoState(e,n)}}},gotoState:{value:function(e,t){return this._stateChart._gotoState(e,t)}},_performAction:{enumerable:null,value:function(e,t,n){if(this[e])this[e](t,n);else{if(!this.parentState)throw"Action '"+e+"' not available";this.parentState._performAction(e,t,n)}}},toString:{enumerable:!1,value:function(){return"[State "+this.path+" ]"}}}),StateChart=exports.StateChart=Montage.specialize({delegate:{enumerable:!1,value:null},ownerStateProperty:{enumerable:!1,value:null},rootState:{enumerable:!1,value:null},_currentState:{enumerable:!1,value:null},currentState:{get:function(){return this.ownerStateProperty?null:this._currentState}},initWithState:{value:function(e){return this._states={},this.rootState=e,this.rootState._stateChart=this,this._prepareState(this.rootState),this.enterDefaultState(),this}},_defaultState:{enumerable:!1,value:null},defaultState:{enumerable:!1,get:function(){if(!this._defaultState){var e,t;for(e=t=this.rootState;t=t.initialSubstate;)e=t;this._defaultState=e}return this._defaultState}},enterDefaultState:{enumerable:!1,value:function(){if(this.ownerStateProperty&&!this.owner)throw"This stateChart has been configured to require an owner to execute this function";var e=this.ownerStateProperty?this.owner:this,t=this.ownerStateProperty?e["_"+this.ownerStateProperty]:e.currentState;if(t)throw"Cannot enter default state from '"+t.name+"'";var n,r;for(n=r=this.rootState;r=r.initialSubstate;)n.enterState&&n.enterState(this,e),n=r,r.initialSubstate&&n.exitState&&n.exitState(this,e);return this.ownerStateProperty?e["_"+this.ownerStateProperty]=this.defaultState:this._currentState=this.defaultState,this.defaultState}},_prepareState:{enumerable:!1,value:function(e){e._stateChart=this,e.name&&(this._states[e.name]=e);var t;for(t in e.substates)this._prepareState(e.substates[t])}},_states:{enumerable:!1,value:null},stateWithName:{enumerable:!1,value:function(e){return this._states[e]}},performAction:{value:function(e,t){if(this.ownerStateProperty&&!t)throw"This stateChart has been configured to require an owner to execute this function";t=this.ownerStateProperty?t:this;var n=this.ownerStateProperty?t[this.ownerStateProperty]:t.currentState;if(!n)throw"Cannot perform action '"+e+"' without a currentState";n._performAction(e,this,t),this.owner=null}},_gotoState:{value:function(e,t){if(this.ownerStateProperty&&!t)throw"This stateChart has been configured to require an owner to execute this function";t=this.ownerStateProperty?t:this;var n,r,i,a,o,s,l,u,c,d,h,p=this.ownerStateProperty?t[this.ownerStateProperty]:t.currentState,f=p.name,v=e,m=!1,g=!1,b=!1,y=!1;if("string"==typeof v?e=this._states[e]:v=e.name,v!==f&&(this.delegate&&(m="function"==typeof this.delegate.stateChartWillExitState,g="function"==typeof this.delegate.stateChartWillEnterState,b="function"==typeof this.delegate.stateChartDidExitState,y="function"==typeof this.delegate.stateChartDidEnterState),!this.delegate||"function"!=typeof this.delegate.stateChartShouldGoFromStateToState||this.delegate.stateChartShouldGoFromStateToState(this,p,e))){if(this.delegate&&"function"==typeof this.delegate.stateChartWillGoFromStateToState&&this.delegate.stateChartWillGoFromStateToState(this,p,e),n=p.path,r=e.path,RegExp(n).test(r))for(a=r.replace(RegExp(n+".?"),"").split("."),o=a.length,i=0;o>i;i++)d=this._states[a[i]],g&&this.delegate.stateChartWillEnterState(this,d),"function"==typeof d.enterState&&d.enterState(this,t),y&&this.delegate.stateChartDidEnterState(this,d);else{for(n=n.split("."),r=r.split("."),s=-1,u=r.length,c=Math.min(n.length,u);c>s&&(l=s+1,n[l]===r[l]);)s++;for(i=n.length-1;i>s;i--)d=this._states[n[i]],m&&this.delegate.stateChartWillExitState(this,d),"function"==typeof d.exitState&&d.exitState(this,t),b&&this.delegate.stateChartDidExitState(this,d);for(s=0>s?0:s,i=s;u>i;i++)d=this._states[r[i]],g&&this.delegate.stateChartWillEnterState(this,d),this.ownerStateProperty?t["_"+this.ownerStateProperty]=d:this._currentState=d,"function"==typeof d.enterState&&d.enterState(this,t),y&&this.delegate.stateChartDidEnterState(this,d)}h=p,this.delegate&&"function"==typeof this.delegate.stateChartDidGoFromStateToState&&this.delegate.stateChartDidGoFromStateToState(this,h,e),"function"==typeof t.transitionedFromStateToState&&t.transitionedFromStateToState(this,h,e)}}}});