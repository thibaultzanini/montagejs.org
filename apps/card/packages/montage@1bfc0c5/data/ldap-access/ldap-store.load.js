montageDefine("1bfc0c5","data/ldap-access/ldap-store",{dependencies:["montage","data/store","data/ldap-access/ldap-mapping","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("data/store").Store,s=e("data/ldap-access/ldap-mapping").LdapBinderMapping,o=e("data/ldap-access/ldap-mapping").LdapBlueprintMapping,u=e("data/ldap-access/ldap-mapping").LdapAttributeMapping,a=e("data/ldap-access/ldap-mapping").LdapAssociationMapping,f=e("core/logger").logger("ldap-store"),l=t.LdapStore=r.create(i,{createBinderMapping:{get:function(){return s.create()}},createBlueprintMapping:{get:function(){return o.create()}},createAttributeMapping:{get:function(){return u.create()}},createAssociationMapping:{get:function(){return a.create()}}})}})