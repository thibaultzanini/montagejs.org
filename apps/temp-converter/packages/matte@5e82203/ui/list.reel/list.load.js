montageDefine("5e82203","ui/list.reel/list",{dependencies:["montage/ui/component","montage/frb/observers"],factory:function(e,t){var n=e("montage/ui/component").Component,i=e("montage/frb/observers").observeProperty;t.List=n.specialize({constructor:{value:function(){this.super(),this.defineBinding("_repetition.content",{"<-":"content"}),this.defineBinding("content.defined() ? null : _repetition.contentController",{"<-":"contentController"})}},_repetition:{value:null},delegate:{value:null},content:{value:null},contentController:{value:null},axis:{value:null},isSelectionEnabled:{value:null},observeProperty:{value:function(e,t,n,r,a){return"objectAtCurrentIteration"!==e&&"currentIteration"!==e?i(this,e,t,n,r,a):this._repetition?this._repetition.observeProperty(e,t,n,r,a):void 0}}})}});