montageDefine("fb87e57","gl-canvas.reel/gl-canvas",{dependencies:["montage/core/core","montage/ui/native-control"],factory:function(e,t,n){var r=e("montage/core/core").Montage,i=e("montage/ui/native-control").NativeControl,s=t.GLCanvas=r.create(i,{gl:{value:null},preserveDrawingBuffer:{value:!1},prepareForDraw:{value:function(){var e=this.preserveDrawingBuffer,t=this.gl=this.element.getContext("experimental-webgl",{preserveDrawingBuffer:e});this.gl.clearDepth(1),this.gl.enable(t.DEPTH_TEST),this.gl.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.viewport(0,0,this.width,this.height),t.clearColor(0,0,0,1);var n=document.createEvent("CustomEvent");n.initCustomEvent("glready",!0,!1,null),this.dispatchEvent(n)}},toDataURL:{value:function(){return this.element.toDataURL()}}});s.addAttributes({width:null,height:null})}})