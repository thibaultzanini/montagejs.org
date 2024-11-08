montageDefine("572fd27","core/selector/property-language",{dependencies:["./abstract-language","./parser","./semantics","./language"],factory:function(e,t,n){var r=e("./abstract-language").AbstractLanguage,i=e("./parser").Parser,s=e("./semantics").Semantics,o=e("./language"),u="value",a="literal",f="get",l="begin",c="end",h="map",p="comma",d="it",v=".",m="array",g="sorted",y=t.PropertyLanguage=r.create(r,{semantics:{value:s},stringToToken:{value:{"(":{type:l},")":{type:c},"*":{type:h},",":{type:p}}},tokenRe:{value:/\(|\)|\d+|\w[\w\d]*|,|\*|\.|./g},termStartRe:{value:/[\(\w\d\*]/},separatorsRe:{value:/[\(\)\.,]/},tokenize:{value:function(e,t){var n;t||(n=[],t=function(e){n.push(e)});var r=this,i=!1,s=!0,o="";return e.replace(r.tokenRe,function(n){if(i){if(!r.separatorsRe.test(n))throw new Error("Expected punctuation after: "+JSON.stringify(o)+", got: "+JSON.stringify(e.slice(o.length)));i=!1}if(s&&!r.termStartRe.test(n))throw new Error("Expected term after: "+JSON.stringify(o)+", got: "+JSON.stringify(e.slice(o.length)));if(n===v)s=!0;else if(r.stringToToken[n])t(r.stringToToken[n]),s=!1;else if(/^\d+$/.test(n))t({type:a,value:+n}),i=!0,s=!1;else{if(!/^\w[\w\d]*$/.test(n))throw new Error("Unexpected character: "+JSON.stringify(n));t({type:a,value:n}),i=!0,s=!1}o+=n}),n}},parse:{value:function(e){var t=this,n,r=i.newWithLanguage(t,function(e){n=e});return t.tokenize(e,function(e){r.emit(e)}),r.emit(o.Language.tokens.eof),n}},grammar:{value:function(){var e=this;e.primary=e.parsePrimary(function(t){return e.parseExpression(t)});var t=e.parseTuple();e.parseExpression=e.precedence()}},parseTerm:{value:function(e,t){var n=this;return function(r){return r.type===a?n.optional(l,function(t){return t?n.primary(function(t){return n.expect(c,function(){return e({call:!0,type:r.value,arg:t})})}):e({type:f,arg:r})}):r.type===h?n.parseTerm(function(t){return e({type:h,arg:{type:t.type,args:[{type:u},t.arg]}})},function(){return e({type:d,arg:{type:u}})}):r.type===l?n.parseExpression(function(t){return n.expect(c,function(){return e({type:d,arg:t})})}):t()(r)}}},parsePrimary:{value:function(e){var t=this,n=t.precedence(function(e){return function(e,r){return r=r||{type:u},t.parseTerm(function(t){var i;return t.call?(t.arg.type!==u&&(r={type:h,args:[r,t.arg]}),i={type:t.type,args:[r,{type:"value"}]}):i={type:t.type,args:[r,t.arg]},i.type===g&&i.args.push({type:"literal",value:!1}),i.type===d&&i.args[0].type===u&&(i=i.args[1]),n(e,i)},function(){return e(r||o.Language.tokens.value)})}});return n}},parseTuple:{value:function(){var e=this;e.requireTokens([p]);var t=e.precedence(function(n){return function(r,i){return e.optional(c,function(s,o){return s?o(r({type:m,terms:i||[]})):n(function(n){return e.optional(p,function(e,s){return e?t(r,(i||[]).concat([n])):i?r({type:m,terms:i.concat([n])}):r(n)})})})}});return t}},reemit:{value:function(e,t,n){n=n||o.Language.tokens;if(e.type!==u)if(e.type===f)this.reemit(e.args[0],t),t(n.get),t(e.args[1]);else if(e.type===m){t(n.array);var r=e.terms,i=r.length-1;r.forEach(function(e,r){this.reemit(e,t),(r!==i||r===0)&&t(n.comma)},this),t(n.end)}else e.type===g?(t(n.begin),this.reemit(e.args[0],t),t(n.sorted),t(n.by),this.reemit(e.args[1],t),t(n.end)):(t(n.begin),this.reemit(e.args[0],t),t(n[e.type]),this.reemit(e.args[1],t),t(n.end))}},compile:{value:function(e){var t=this.parse(e);return this.semantics.compile(t)}},evaluate:{value:function(e,t){return this.compile(e)(t)}}})}})