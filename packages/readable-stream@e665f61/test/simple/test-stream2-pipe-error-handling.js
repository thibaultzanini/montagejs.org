var common=require("../common"),assert=require("assert"),stream=require("../../readable");(function(){var e=1e3,t=new stream.Readable;t._read=function(n){n=Math.min(e,n),e-=n,t.push(new Buffer(n))};var n;t.unpipe=function(e){n=e,stream.Readable.prototype.unpipe.call(this,e)};var r=new stream.Writable;r._write=function(e,t,n){n()},t.pipe(r);var i=null;r.on("error",function(e){i=e});var a;r.on("unpipe",function(e){a=e});var o=Error("This stream turned into bacon.");r.emit("error",o),assert.strictEqual(i,o),assert.strictEqual(a,t),assert.strictEqual(n,r)})(),function(){var e=1e3,t=new stream.Readable;t._read=function(n){n=Math.min(e,n),e-=n,t.push(new Buffer(n))};var n;t.unpipe=function(e){n=e,stream.Readable.prototype.unpipe.call(this,e)};var r=new stream.Writable;r._write=function(e,t,n){n()},t.pipe(r);var i;r.on("unpipe",function(e){i=e});var a=Error("This stream turned into bacon."),o=null;try{r.emit("error",a)}catch(s){o=s}assert.strictEqual(o,a),assert.strictEqual(i,t),assert.strictEqual(n,r)}();