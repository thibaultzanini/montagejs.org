(function(e){function t(){}var n=require("./reviver").Reviver,r=require("./context").Context;Object.defineProperties(t.prototype,{instantiate:{value:function(e,t){var i=new n,a=new r(e,i,t);return a.getObjects()}}}),e.Interpreter=t})(exports);