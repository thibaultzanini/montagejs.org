function makeTrie(e){var t=Object.keys(e),n={value:void 0,children:{}},i={};t.forEach(function(t){if(0===t.length)n.value=e[t];else{var r=t[0];i[r]||(i[r]={});var a=t.slice(1);i[r][a]=e[t]}});var r=Object.keys(i);return r.forEach(function(e){n.children[e]=makeTrie(i[e])}),n}module.exports=makeTrie;