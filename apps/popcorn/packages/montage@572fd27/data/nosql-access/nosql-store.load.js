montageDefine("572fd27","data/nosql-access/nosql-store",{dependencies:["montage","data/store","data/nosql-access/nosql-mapping","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("data/store").Store,s=e("data/nosql-access/nosql-mapping").NoSqlBinderMapping,o=e("data/nosql-access/nosql-mapping").NoSqlBlueprintMapping,u=e("data/nosql-access/nosql-mapping").NoSqlAttributeMapping,a=e("data/nosql-access/nosql-mapping").NoSqlAssociationMapping,f=e("core/logger").logger("nosql-store"),l=t.NoSqlStore=r.create(i,{createBinderMapping:{get:function(){return s.create()}},createBlueprintMapping:{get:function(){return o.create()}},createAttributeMapping:{get:function(){return u.create()}},createAssociationMapping:{get:function(){return a.create()}},pledgeForObjectId$Implementation:{value:function(e,t,n){return null}},pledgeForSourceObjectAssociation$Implementation:{value:function(e,t,n,r){return null}}})}})