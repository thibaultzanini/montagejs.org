montageDefine("e665f61","test/simple/test-stream2-unpipe-leak",{dependencies:["../common.js","assert","../../readable","util"],factory:function(e){function t(){i.Writable.call(this)}function n(){i.Readable.call(this,{highWaterMark:65536})}e("../common.js");var r=e("assert"),i=e("../../readable"),a=new Buffer("hallo"),o=e("util");o.inherits(t,i.Writable),t.prototype._write=function(e,t,n){n(null)};var s=new t;o.inherits(n,i.Readable),n.prototype._read=function(){this.push(a)};for(var l=new n,u=0;10>u;u++)l.pipe(s),l.unpipe(s);r.equal(l.listeners("end").length,0),r.equal(l.listeners("readable").length,0),r.equal(s.listeners("unpipe").length,0),r.equal(s.listeners("drain").length,0),r.equal(s.listeners("error").length,0),r.equal(s.listeners("close").length,0),r.equal(s.listeners("finish").length,0),console.error(l._readableState),process.on("exit",function(){r(l._readableState.length>=l._readableState.highWaterMark),l._readableState.buffer.length=0,console.error(l._readableState)})}});