montageDefine("4fb5f6b","core/template",{dependencies:["montage","core/serialization","core/document-part","core/document-resources","core/serialization/serialization","core/serialization/serializer/montage-labeler","core/promise","core/mini-url","core/logger","core/event/event-manager","core/application"],factory:function(e,t){function n(e,t,n){var r,i,a=new d,s=e.documentElement.outerHTML,l=new o,u=e.documentElement;return r=a.createHtmlDocumentWithHtml(s,e.location.href),a.initWithDocument(r,t).then(function(){return a.setBaseUrl(e.location.href),i=a._createTemplateObjects(n),l.initWithTemplateAndFragment(a),a._instantiateObjects(i,u).then(function(e){return l.objects=e,a._invokeDelegates(l),l})})}var r,i=e("montage").Montage,a=e("core/serialization").Deserializer,o=e("core/document-part").DocumentPart,s=e("core/document-resources").DocumentResources,l=e("core/serialization/serialization").Serialization,u=e("core/serialization/serializer/montage-labeler").MontageLabeler,c=e("core/promise").Promise,h=e("core/mini-url");e("core/logger").logger("template"),e("core/event/event-manager").defaultEventManager;var d=i.specialize({_SERIALIZATON_SCRIPT_TYPE:{value:"text/montage-serialization"},_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},PARAM_ATTRIBUTE:{value:"data-param"},_require:{value:null},_resources:{value:null},document:{value:null},_baseUrl:{value:null},_instances:{value:null},_metadata:{value:null},_objectsString:{value:null},objectsString:{get:function(){return this._objectsString},set:function(e){this._objectsString=e,this._serialization&&this._serialization.initWithString(e),this.__deserializer=null}},__deserializer:{value:null},_deserializer:{get:function(){var e,t,n=this.__deserializer;if(!n){if(e=this._metadata){t=Object.create(null);for(var r in e)t[r]=e[r].require}n=(new a).init(this.objectsString,this._require,t),this.__deserializer=n}return n}},getDeserializer:{value:function(){return this._deserializer}},_serialization:{value:null},getSerialization:{value:function(){var e=this._serialization;return e||(e=this._serialization=new l,e.initWithString(this.objectsString)),e}},constructor:{value:function d(){this.super()}},initWithRequire:{value:function(e){return this._require=e,this.document=this.createHtmlDocumentWithHtml(""),this.objectsString="",this}},initWithDocument:{value:function(e,t){var n=this;return this._require=t,this.setDocument(e),this.getObjectsString(e).then(function(e){return n.objectsString=e,n})}},initWithHtml:{value:function(e,t){var n=this;return this._require=t,this.document=this.createHtmlDocumentWithHtml(e),this.getObjectsString(this.document).then(function(e){return n.objectsString=e,n})}},initWithObjectsAndDocumentFragment:{value:function(e,t,n){return this._require=n,this.document=this.createHtmlDocumentWithHtml(""),this.document.body.appendChild(this.document.importNode(t,!0)),this.setObjects(e),this}},initWithModuleId:{value:function(e,t){var n=this;return this._require=t,this.createHtmlDocumentWithModuleId(e,t).then(function(r){var i=t(e).directory;return n.document=r,n.setBaseUrl(i),n.getObjectsString(r).then(function(e){return n.objectsString=e,n})})}},clone:{value:function(){var e=new d;return e._require=this._require,e._baseUrl=this._baseUrl,e.setDocument(this.document),e.objectsString=this.objectsString,e._instances=Object.clone(this._instances,1),e}},instantiate:{value:function(e){return this.instantiateWithInstances(null,e)}},instantiateWithInstances:{value:function(e,t){var n,r,i,a=this,s=new o;return e=e||this._instances,n=this._createMarkupDocumentFragment(t),i=this._getParameters(n),s.initWithTemplateAndFragment(this,n),s.startActingAsTopComponent(),s.parameters=i,r=this._createTemplateObjects(e),this._instantiateObjects(r,n).then(function(n){var r;return s.objects=n,a._invokeDelegates(s,e),s.stopActingAsTopComponent(),r=a.getResources(),!r.resourcesLoaded()&&r.hasResources()&&r.loadResources(t),s})}},_objectsInstantiationOptimized:{value:!1},_optimizeObjectsInstantiationPromise:{value:null},_optimizeObjectsInstantiation:{value:function(){var e,t=this;return this._objectsInstantiationOptimized?void 0:(this._optimizeObjectsInstantiationPromise||(e=this._deserializer.preloadModules(),e?this._optimizeObjectsInstantiationPromise=e.then(function(){t._objectsInstantiationOptimized=!0}):this._objectsInstantiationOptimized=!0),this._optimizeObjectsInstantiationPromise)}},setBaseUrl:{value:function(e){this._baseUrl=e}},getBaseUrl:{value:function(){return this._baseUrl}},getResources:{value:function(){var e=this._resources;return e||(e=this._resources=new f,e.initWithTemplate(this)),e}},_createTemplateObjects:{value:function(t){var n=Object.create(t||null);return r===void 0&&(r=e("core/application").application),n.application=r,n.template=this,n}},_instantiateObjects:{value:function(e,t){var n,r=this._deserializer;return n=this._optimizeObjectsInstantiation(),n?n.then(function(){return r.deserialize(e,t)}):r.deserialize(e,t)}},_createMarkupDocumentFragment:{value:function(e){for(var t=e.createDocumentFragment(),n=this.document.body.childNodes,r=0,i=n.length;i>r;r++)t.appendChild(e.importNode(n[r],!0));return t}},getParameterName:{value:function(e){return e.getAttribute(this.PARAM_ATTRIBUTE)}},getParameters:{value:function(){return this._getParameters(this.document.body)}},_getParameters:{value:function(e){for(var t,n=e.querySelectorAll("*["+this.PARAM_ATTRIBUTE+"]"),r=n.length,i={},a=0;r>a;a++){t=n[a];var o=this.getParameterName(t);if(o in i)throw Error('The parameter "'+o+'" is'+" declared more than once in "+this.getBaseUrl()+".");i[o]=t}if("*"in i&&r>1)throw Error('The star "*" template parameter was declared when other parameters were also present in '+this.getBaseUrl()+": "+Object.keys(i)+".");return i}},hasParameters:{value:function(){return!!this.document.querySelector("*["+this.PARAM_ATTRIBUTE+"]")}},_invokeDelegates:{value:function(e,t){var n,r,i=e.objects,a=i.owner||t&&t.owner;for(var o in i)t&&o in t||(n=i[o],r=this._getObjectOwner(o,a),n&&("function"==typeof n._deserializedFromTemplate&&n._deserializedFromTemplate(r,o,e),"function"==typeof n.deserializedFromTemplate&&n.deserializedFromTemplate(r,o,e)));if(a){var s=this.getSerialization();s.isExternalObject("owner")||("function"==typeof a._templateDidLoad&&a._templateDidLoad(e),"function"==typeof a.templateDidLoad&&a.templateDidLoad(e))}}},setInstances:{value:function(e){this._instances=e}},getInstances:{value:function(){return this._instances}},setObjects:{value:function(e){this.objectsString=JSON.stringify(e,null,4)}},setObjectMetadata:{value:function(e,t,n,r){var i=this._metadata;i||(this._metadata=i=Object.create(null)),i[e]={require:t,label:n,owner:r},this.__deserializer=null}},getObjectMetadata:{value:function(e){var t=this._metadata;return t&&e in t?t[e]:{require:this._require,label:e}}},_getObjectOwner:{value:function(e,t){var n,r=this._metadata;return n=r&&e in r?r[e].owner:t}},setDocument:{value:function(e){var t=e.documentElement.innerHTML;this.document=this.createHtmlDocumentWithHtml(t,e.baseURI)}},getObjectsString:{value:function(e){var t;return t=this.getInlineObjectsString(e),null===t?this.getExternalObjectsString(e):c.resolve(t)}},getInlineObjectsString:{value:function(e){var t="script[type='"+this._SERIALIZATON_SCRIPT_TYPE+"']",n=e.querySelector(t);return n?n.textContent:null}},getExternalObjectsString:{value:function(e){var t,n,r,i,a=e.querySelector('link[rel="serialization"]');return a?(t=new XMLHttpRequest,n=a.getAttribute("href"),r=this.getBaseUrl()||"",/^https?:\/\/|^\//.test(n)?c.reject(Error("Relative link found for the objects file but the document URL is unknown: '"+n+"'.")):(n=r+n,i=c.defer(),t.open("GET",n),t.addEventListener("load",function(){200==t.status?i.resolve(t.responseText):i.reject(Error("Unable to retrive '"+n+"', code status: "+t.status))},!1),t.addEventListener("error",function(e){i.reject(Error("Unable to retrive '"+n+"' with error: "+e.error+"."))},!1),t.send(),i.promise)):c.resolve(null)}},createHtmlDocumentWithHtml:{value:function(e,t){var n=document.implementation.createHTMLDocument("");return n.documentElement.innerHTML=e,this.normalizeRelativeUrls(n,t),n}},createHtmlDocumentWithModuleId:{value:function(e,t){var n=this;return"function"!=typeof t?c.reject(Error("Missing 'require' function to load module '"+e+"'.")):t.async(e).then(function(e){return n.createHtmlDocumentWithHtml(e.content,e.directory)})}},_removeObjects:{value:function(e){var t="script[type='"+this._SERIALIZATON_SCRIPT_TYPE+"'], link[rel='serialization']";Array.prototype.forEach.call(e.querySelectorAll(t),function(e){e.parentNode.removeChild(e)})}},_addObjects:{value:function(e,t){if(t){var n=e.createElement("script");n.setAttribute("type",this._SERIALIZATON_SCRIPT_TYPE),n.textContent=JSON.stringify(JSON.parse(t),null,4),e.head.appendChild(n)}}},_templateFromElementContentsCache:{value:null},clearTemplateFromElementContentsCache:{value:function(){this._templateFromElementContentsCache=null}},createTemplateFromElementContents:{value:function(e){var t,n,r,i=this._templateFromElementContentsCache;return i||(i=Object.create(null),this._templateFromElementContentsCache=i),e in i?Object.create(i[e]):(t=this.getElementById(e),r=this.document.createRange(),r.selectNodeContents(t),n=this.createTemplateFromRange(r),i[e]=n,Object.create(n))}},createTemplateFromElement:{value:function(e){var t,n;return t=this.getElementById(e),n=this.document.createRange(),n.selectNode(t),this.createTemplateFromRange(n)}},createTemplateFromRange:{value:function(e){var t,n,r,i,a,o=new l;return t=e.cloneContents(),n=this._getChildrenElementIds(t),o.initWithString(this.objectsString),r=o.getSerializationLabelsWithElements(n),a=o.extractSerialization(r,["owner"]),i=new d,i.initWithObjectsAndDocumentFragment(null,t,this._require),i.objectsString=a.getSerializationString(),i._resources=this.getResources(),i}},_createSerializationWithElementIds:{value:function(e){var t,n,r=new l;return r.initWithString(this.objectsString),t=r.getSerializationLabelsWithElements(e),n=r.extractSerialization(t,["owner"])}},expandParameters:{value:function(e,t){var n,r,i,a,o,s,l=[],u={},c=this.getSerialization(),h={};n=this.getParameters();for(var d in n)if(a=n[d],o=t.getTemplateParameterArgument(e,d),l.push.apply(l,this._getElementIds(o)),r=this.replaceNode(o,a))for(var f in r)u[f]=r[f];return h.elementIds=l,h.elementIdsCollisions=u,s=e._createSerializationWithElementIds(l),s.renameElementReferences(u),i=c.mergeSerialization(s),this.objectsString=c.getSerializationString(),h.labels=s.getSerializationLabels(),h.labelsCollisions=i,h}},_resolveElementIdCollisions:{value:function(e){var t,n,r,i,a,o=new u;r=this.getElementIds();for(var s,l=0;s=r[l];l++)o.setObjectLabel(null,s);n=this._getElements(e);for(var s in n)this.getElementById(s)&&(i=n[s],a=o.getObjectLabel(i),this.setElementId(i,a),t||(t=Object.create(null)),t[s]=a);return t}},replaceNode:{value:function(e,t){var n;return n=this._resolveElementIdCollisions(e),this.normalizeRelativeUrls(e,this.getBaseUrl()),t.parentNode.replaceChild(e,t),n}},insertNodeBefore:{value:function(e,t){var n;return n=this._resolveElementIdCollisions(e),this.normalizeRelativeUrls(e,this.getBaseUrl()),t.parentNode.insertBefore(e,t),n}},appendNode:{value:function(e,t){var n;return n=this._resolveElementIdCollisions(e),this.normalizeRelativeUrls(e,this.getBaseUrl()),t.appendChild(e),n}},getElementId:{value:function(e){return e.getAttribute?e.getAttribute(this._ELEMENT_ID_ATTRIBUTE):void 0}},setElementId:{value:function(e,t){e.setAttribute(this._ELEMENT_ID_ATTRIBUTE,t)}},getElementIds:{value:function(){return this._getElementIds(this.document.body)}},_getElements:{value:function(e){var t,n,r="*["+this._ELEMENT_ID_ATTRIBUTE+"]",i={};t=e.querySelectorAll(r);for(var a,o=0;a=t[o];o++)n=this.getElementId(a),i[n]=a;return n=this.getElementId(e),n&&(i[n]=e),i}},_getChildrenElementIds:{value:function(e){var t,n="*["+this._ELEMENT_ID_ATTRIBUTE+"]",r=[];t=e.querySelectorAll(n);for(var i,a=0;i=t[a];a++)r.push(this.getElementId(i));return r}},_getElementIds:{value:function(e){var t,n=this._getChildrenElementIds(e);return t=this.getElementId(e),t&&n.push(t),n}},getElementById:{value:function(e){var t="*["+this._ELEMENT_ID_ATTRIBUTE+"='"+e+"']";return this.document.querySelector(t)}},html:{get:function(){var e=this.document;return this._removeObjects(e),this._addObjects(e,this.objectsString),this._getDoctypeString(e.doctype)+"\n"+e.documentElement.outerHTML}},_getDoctypeString:{value:function(e){return"<!DOCTYPE "+e.name+(e.publicId?' PUBLIC "'+e.publicId+'"':"")+(!e.publicId&&e.systemId?" SYSTEM":"")+(e.systemId?' "'+e.systemId+'"':"")+">"}},normalizeRelativeUrls:{value:function(e,t){if("string"==typeof t&&""!==t&&"about:blank"!==t)for(var n="http://www.w3.org/1999/xlink",r=/^[\w\-]+:|^\//,i=-1!==d._NORMALIZED_TAG_NAMES.indexOf(e.tagName)?[e]:e.querySelectorAll(d._NORMALIZED_TAG_NAMES_SELECTOR),a=0,o=i.length;o>a;a++){var s,l=i[a];"image"===l.tagName?(s=l.getAttributeNS(n,"href"),r.test(s)||l.setAttributeNS(n,"href",h.resolve(t,s))):(s=l.getAttribute("src"),r.test(s)||l.setAttribute("src",h.resolve(t,s)))}}}},{_templateCache:{value:{moduleId:Object.create(null)}},_getTemplateCacheKey:{value:function(e,t){return e=t.resolve(e),t.location+"#"+e}},getTemplateWithModuleId:{value:function(e,t){var n,r;return n=this._getTemplateCacheKey(e,t),r=this._templateCache.moduleId[n],r||(r=(new d).initWithModuleId(e,t),this._templateCache.moduleId[n]=r),r}},_NORMALIZED_TAG_NAMES:{value:["IMG","image","IFRAME"]},__NORMALIZED_TAG_NAMES_SELECTOR:{value:null},_NORMALIZED_TAG_NAMES_SELECTOR:{get:function(){return this.__NORMALIZED_TAG_NAMES_SELECTOR||(this.__NORMALIZED_TAG_NAMES_SELECTOR=this._NORMALIZED_TAG_NAMES.join(",")),this.__NORMALIZED_TAG_NAMES_SELECTOR}}}),f=i.specialize({_resources:{value:null},_resourcesLoaded:{value:!1},template:{value:null},rootUrl:{value:""},constructor:{value:function f(){this._resources=Object.create(null)}},initWithTemplate:{value:function(e){this.template=e}},hasResources:{value:function(){return this.getStyles().length>0||this.getScripts().length>0}},resourcesLoaded:{value:function(){return this._resourcesLoaded}},loadResources:{value:function(e){return this._resourcesLoaded=!0,c.all([this.loadScripts(e),this.loadStyles(e)])}},getScripts:{value:function(){var e,t,n,r=this._resources.scripts;if(!r){t=this.template,r=this._resources.scripts=[],n=t.document.querySelectorAll("script");for(var i=0,a=n.length;a>i;i++)e=n[i],e.type!==this.template._SERIALIZATON_SCRIPT_TYPE&&r.push(e)}return r}},loadScripts:{value:function(e){var t,n=[];t=this.getScripts();for(var r=0,i=t.length;i>r;r++)n.push(this.loadScript(t[r],e));return c.all(n)}},loadScript:{value:function(e,t){var n,r;return n=s.getInstanceForDocument(t),r=this._cloneScriptElement(e,t),n.addScript(r)}},_cloneScriptElement:{value:function(e,t){for(var n,r=t.createElement("script"),i=e.attributes,a=0,o=i.length;o>a;a++)n=i[a],r.setAttribute(n.name,n.value);return r}},getStyles:{value:function(){var e,t,n,r=this._resources.styles;return r||(n='link[rel="stylesheet"], style',e=this.template,t=e.document.querySelectorAll(n),r=Array.prototype.slice.call(t,0),this._resources.styles=r),r}},loadStyles:{value:function(e){var t,n=[];t=this.getStyles();for(var r=0,i=t.length;i>r;r++)n.push(this.loadStyle(t[r],e));return c.all(n)}},loadStyle:{value:function(e,t){var n,r,i=this.template.getBaseUrl();return n=e.getAttribute("href"),n?(r=s.getInstanceForDocument(t),n=r.normalizeUrl(n,i),r.preloadResource(n)):c.resolve()}},createStylesForDocument:{value:function(e){var t,n,r,i,a=this.getStyles(),o=[],l=this.template.getBaseUrl();n=s.getInstanceForDocument(e);for(var u,c=0;u=a[c];c++)r=u.getAttribute("href"),t=e.importNode(u,!0),o.push(t),r&&(i=n.normalizeUrl(r,l),t.setAttribute("href",i));return o}}});t.Template=d,t.TemplateResources=f,t.instantiateDocument=n}});