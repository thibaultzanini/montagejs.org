precision highp float;
varying vec3 v_normal;
varying vec2 v_texcoord;
uniform sampler2D u_diffuseTexture;
uniform float u_transparency;
varying vec4 v_vert;
uniform float u_shininess;
uniform vec3 u_light;
uniform vec3 u_specularColor;

 void main(void) { 
 	vec3 normal = normalize(v_normal);
 	float lambert = max(dot(normal,vec3(0.,0.,1.)), 0.);

 	vec3 e = normalize(v_vert.xyz);
	vec3 r = reflect(-u_light, normal);
	float specular = pow( max(dot(r, e), 0.0), u_shininess );

 	vec4 color = texture2D(u_diffuseTexture, v_texcoord);
 	gl_FragColor = vec4((u_specularColor * specular) +  (color.rgb * lambert), color.a * u_transparency); 
 }