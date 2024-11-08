require("runtime/dependencies/gl-matrix");var Utilities=require("runtime/utilities").Utilities;exports.Primitive=Object.create(Object.prototype,{_mesh:{value:0,writable:!0},mesh:{enumerable:!0,get:function(){return this._mesh},set:function(e){this._mesh=e}},_indicesBuffer:{value:null,writable:!0},indicesBuffer:{enumerable:!0,get:function(){return this._indicesBuffer},set:function(e){this._indicesBuffer=e}},_step:{value:0,writable:!0},step:{enumerable:!0,get:function(){return this._step},set:function(e){this._step=e}},init:{value:function(){return this.step=0,this.vertexAttributes=null,this}},_vertexAttributes:{enumerable:!1,value:null,writable:!0},vertexAttributes:{enumerable:!0,get:function(){return this._vertexAttributes||(this._vertexAttributes=[]),this._vertexAttributes},set:function(e){this._vertexAttributes=e}},addVertexAttribute:{enumerable:!1,value:function(e){if(e.semantic==="VERTEX"){var t=null,n=e.accessor;n.min&&n.max&&(t=[n.min,n.max]),this.boundingBox=t}this.vertexAttributes.push(e)}},getAccessorAssociatedWithSemanticAndSet:{enumerable:!1,value:function(e,t){for(var n=0;n<this.vertexAttributes.length;n++){var r=this.vertexAttributes[n];if(r.semantic===e&&r.set===t)return r.accessor}}},_computeBBOXIfNeeded:{enumerable:!1,value:function(){if(!this._boundingBox&&this.mesh&&this.indicesBuffer){var e=this.indicesBuffer;if(!e)return;var t=vec3.create(),n=vec3.create(),r=vec3.create();for(var i=0;i<e.length;i++){var s=e[i];t[0]=verticesBuffer[s*3],t[1]=verticesBuffer[s*3+1],t[2]=verticesBuffer[s*3+2],Utilities.vec3Min(n,t),Utilities.vec3Max(r,t)}this.boundingBox=[n,r]}}},_boundingBox:{value:null,writable:!0},boundingBox:{enumerable:!0,get:function(){return this._computeBBOXIfNeeded(),this._boundingBox},set:function(e){this._boundingBox=e}},_indices:{enumerable:!1,value:null,writable:!0},indices:{get:function(){return this._indices},set:function(e){this._indices=e}},_material:{enumerable:!1,value:null,writable:!0},material:{get:function(){return this._material},set:function(e){this._material=e}}})