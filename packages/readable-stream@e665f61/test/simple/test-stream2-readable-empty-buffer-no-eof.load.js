montageDefine("e665f61","test/simple/test-stream2-readable-empty-buffer-no-eof",{dependencies:["../common","assert","../../readable"],factory:function(e){function t(){function e(){for(var e;null!==(e=t.read());)o.push(e+"")}var t=new i,n=new Buffer(5);n.fill("x");var a=5;t._read=function(){switch(a--){case 0:return t.push(null);case 1:return t.push(n);case 2:return setTimeout(t.read.bind(t,0),10),t.push(new Buffer(0));case 3:return setTimeout(t.read.bind(t,0),10),process.nextTick(function(){return t.push(new Buffer(0))});case 4:return setTimeout(t.read.bind(t,0),10),setTimeout(function(){return t.push(new Buffer(0))});case 5:return setTimeout(function(){return t.push(n)});default:throw Error("unreachable")}};var o=[];t.on("readable",e),t.on("end",function(){o.push("EOF")}),e(),process.on("exit",function(){r.deepEqual(o,["xxxxx","xxxxx","EOF"]),console.log("ok")})}function n(){function e(){for(var e;null!==(e=t.read());)a.push(e+"")}var t=new i({encoding:"base64"}),n=5;t._read=function(){return n--?t.push(new Buffer("x")):t.push(null)};var a=[];t.on("readable",e),t.on("end",function(){a.push("EOF")}),e(),process.on("exit",function(){r.deepEqual(a,["eHh4","eHg=","EOF"]),console.log("ok")})}e("../common");var r=e("assert"),i=e("../../readable").Readable;t(),/^v0\.[0-8]\./.test(process.version)||n()}});