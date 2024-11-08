precision highp float;
 attribute vec3 vert;
 attribute vec3 normal;
 attribute vec2 texcoord;
 varying vec3 v_normal;
 varying vec2 v_texcoord;
 uniform mat4 u_mvMatrix;
 uniform mat3 u_normalMatrix;
 uniform mat4 u_projMatrix;
 varying vec4 v_vert;
 
 void main(void) {
 	v_vert = u_mvMatrix * vec4(vert,1.0);
 	v_normal = u_normalMatrix * normal;
	v_texcoord = vec2(texcoord.x, 1. - texcoord.y);
 	gl_Position = u_projMatrix * v_vert;
 }