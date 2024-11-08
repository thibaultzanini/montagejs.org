montageDefine("e665f61","test/simple/test-stream2-writable",{dependencies:["../common.js","../../lib/_stream_writable","../../lib/_stream_duplex","assert","util"],factory:function(e){function t(){i.apply(this,arguments),this.buffer=[],this.written=0}function n(e,t){h++,c.push([e,t])}function r(){var e=c.shift();if(!e)return console.error("ok");var t=e[0],n=e[1];console.log("# %s",t),n({same:o.deepEqual,equal:o.equal,end:function(){h--,r()}})}e("../common.js");var i=e("../../lib/_stream_writable"),a=e("../../lib/_stream_duplex"),o=e("assert"),s=e("util");s.inherits(t,i),t.prototype._write=function(e,t,n){setTimeout(function(){this.buffer.push(""+e),this.written+=e.length,n()}.bind(this),Math.floor(10*Math.random()))};for(var l=Array(50),u=0;l.length>u;u++)l[u]=Array(u+1).join("x");var c=[],h=0;process.on("exit",function(){o.equal(h,0)}),process.nextTick(r),n("write fast",function(e){var n=new t({highWaterMark:100});n.on("finish",function(){e.same(n.buffer,l,"got chunks in the right order"),e.end()}),l.forEach(function(e){n.write(e)}),n.end()}),n("write slow",function(e){var n=new t({highWaterMark:100});n.on("finish",function(){e.same(n.buffer,l,"got chunks in the right order"),e.end()});var r=0;(function i(){n.write(l[r++]),l.length>r?setTimeout(i,10):n.end()})()}),n("write backpressure",function(e){var n=new t({highWaterMark:50}),r=0;n.on("finish",function(){e.same(n.buffer,l,"got chunks in the right order"),e.equal(r,17),e.end()}),n.on("drain",function(){r++});var i=0;(function a(){do var e=n.write(l[i++]);while(e!==!1&&l.length>i);l.length>i?(o(n._writableState.length>=50),n.once("drain",a)):n.end()})()}),n("write bufferize",function(e){var n=new t({highWaterMark:100}),r=["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le",void 0];n.on("finish",function(){e.same(n.buffer,l,"got the expected chunks")}),l.forEach(function(e,t){var i=r[t%r.length];e=new Buffer(e),n.write(e.toString(i),i)}),e.end()}),n("write no bufferize",function(e){var n=new t({highWaterMark:100,decodeStrings:!1});n._write=function(e,n,r){return o("string"==typeof e),e=new Buffer(e,n),t.prototype._write.call(this,e,n,r)};var r=["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le",void 0];n.on("finish",function(){e.same(n.buffer,l,"got the expected chunks")}),l.forEach(function(e,t){var i=r[t%r.length];e=new Buffer(e),n.write(e.toString(i),i)}),e.end()}),n("write callbacks",function(e){var n=l.map(function(e,t){return[t,function(){n._called[t]=e}]}).reduce(function(e,t){return e["callback-"+t[0]]=t[1],e},{});n._called=[];var r=new t({highWaterMark:100});r.on("finish",function(){process.nextTick(function(){e.same(r.buffer,l,"got chunks in the right order"),e.same(n._called,l,"called all callbacks"),e.end()})}),l.forEach(function(e,t){r.write(e,n["callback-"+t])}),r.end()}),n("end callback",function(e){var n=new t;n.end(function(){e.end()})}),n("end callback with chunk",function(e){var n=new t;n.end(new Buffer("hello world"),function(){e.end()})}),n("end callback with chunk and encoding",function(e){var n=new t;n.end("hello world","ascii",function(){e.end()})}),n("end callback after .write() call",function(e){var n=new t;n.write(new Buffer("hello world")),n.end(function(){e.end()})}),n("encoding should be ignored for buffers",function(e){var t=new i,n="018b5e9a8f6236ffe30e31baf80d2cf6eb";t._write=function(t){e.equal(t.toString("hex"),n),e.end()};var r=new Buffer(n,"hex");t.write(r,"binary")}),n("writables are not pipable",function(e){var t=new i;t._write=function(){};var n=!1;t.on("error",function(){n=!0}),t.pipe(process.stdout),o(n),e.end()}),n("duplexes are pipable",function(e){var t=new a;t._read=function(){},t._write=function(){};var n=!1;t.on("error",function(){n=!0}),t.pipe(process.stdout),o(!n),e.end()}),n("end(chunk) two times is an error",function(e){var t=new i;t._write=function(){};var n=!1;t.on("error",function(t){n=!0,e.equal(t.message,"write after end")}),t.end("this is the end"),t.end("and so is this"),process.nextTick(function(){o(n),e.end()})})}});