var Montage=require("montage").Montage,Component=require("ui/component").Component,Slot=require("ui/slot.reel").Slot,logger=require("core/logger").logger("substitution");exports.Substitution=Montage.create(Slot,{hasTemplate:{enumerable:!1,value:!1},switchComponents:{distinct:!0,value:{}},_switchValue:{value:null},switchValue:{get:function(){return this._switchValue},set:function(e){if(this._switchValue===e||this._isSwitchingContent)return;this._switchValue=e,this.switchComponents&&(this.content=this.switchComponents[this.switchValue])}},transition:{value:null}})