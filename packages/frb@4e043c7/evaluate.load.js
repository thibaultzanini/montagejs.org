montageDefine("4e043c7","evaluate",{dependencies:["./parse","./compile-evaluator","./scope"],factory:function(e,t,n){function i(e,t,n,i,s){var l;l="string"==typeof e?r(e):e;var u=a(l),c=new o(t);return c.parameters=n,c.document=i,c.components=s,u(c)}var r=e("./parse"),a=e("./compile-evaluator"),o=e("./scope");n.exports=i}});