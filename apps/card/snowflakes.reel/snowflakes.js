var Montage=require("montage").Montage,Component=require("montage/ui/component").Component;exports.Snowflakes=Montage.create(Component,{_isAnimating:{enumerable:!1,value:!1},isAnimating:{get:function(){return this._isAnimating},set:function(e){this._previousTime=(new Date).getTime(),this._isAnimating=e,this.needsDraw=!0}},snowflakes:{enumerable:!1,value:[]},_previousTime:{enumerable:!1,value:null},_boundingRadius:{enumerable:!1,value:83},_width:{enumerable:!1,value:800},_height:{enumerable:!1,value:450},_perspective:{enumerable:!1,value:800},_ly:{enumerable:!1,value:null},_ty:{enumerable:!1,value:null},prepareForDraw:{enuemrable:!1,value:function(){var e=0,t=[],n=Math.sqrt(this._perspective*this._perspective+this._width*this._width*.25),r=Math.sqrt(this._perspective*this._perspective+this._height*this._height*.25),i=-this._perspective/n,s=this._width/(n*2),o=-this._perspective/r,u=this._height/(r*2),a=this._perspective+this._boundingRadius/s,f=i/s,l,c,h;this._ty=this._perspective+this._boundingRadius/u,this._ly=o/u;while(e<60)l=Math.random()*1600-800,c=Math.random()*1600-800,h=Math.random()*800-500,(l>0?h-l*f:h+l*f)<a&&(c>0?h-c*this._ly:h+c*this._ly)<this._ty&&(t[e]={},t[e].x=l,t[e].y=c,t[e].z=h,t[e].time=0,t[e].opacity=(Math.random()+.4)/1.4,e++);this.snowflakes=t,this._previousTime=(new Date).getTime(),this.snowflakeRepetition.addEventListener("firstDraw",this,!1)}},handleSnowflakeRepetitionFirstDraw:{enumerable:!1,value:function(e){this._isReadyToAnimate=!0,this.needsDraw=!0}},_isReadyToAnimate:{enumerable:!1,value:!1},_snowflakeElements:{enumerable:!1,value:null},setFlake:{enumerable:!1,value:function(e,t,n,r,i,s,o){var u,a,f,l=this._snowflakeElements[e],c;n>0&&r-n*this._ly>this._ty&&(this.snowflakes[e].y=-this.snowflakes[e].y,n=this.snowflakes[e].y),f=Math.abs(Math.floor(r/-10)),f<0?f=0:f>24&&(f=24),l.style.opacity!==o&&(l.style.opacity=o),this.snowflakes[e].blur!==f&&(l.style.backgroundPosition=f%5*-102+"px "+Math.floor(f/5)*-102+"px",this.snowflakes[e].blur=f),l.style.webkitTransform="translate3d("+t+"px,"+n+"px, "+r+"px) rotateY("+i+"rad) rotateZ("+s+"rad) scale3d("+1/(1-f*.02)+", "+1/(1-f*.02)+", 1)"}},draw:{enumerable:!1,value:function(){if(!this._isReadyToAnimate)return;var e=(new Date).getTime(),t=e-this._previousTime,n=this.snowflakes,r;t>200&&(t=200),this._previousTime=e,this._snowflakeElements||(this._snowflakeElements=this.snowflakeRepetition.element.querySelectorAll(".snowflake"));for(r=0;r<this._snowflakeElements.length;r++)n[r].time+=t,n[r].y+=t/60,this.setFlake(r,n[r].x+Math.sin((r+n[r].time)/(7e3+r*200))*60,n[r].y,n[r].z,Math.sin(r+n[r].time/2500)/3,r+n[r].time/7e3,n[r].opacity);this._isAnimating&&(this.needsDraw=!0)}}})