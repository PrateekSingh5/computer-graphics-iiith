var scene = new THREE.Scene();

var heightScreen =510;
var widthScreen = 510;
var camera = new THREE.PerspectiveCamera( 60, widthScreen/heightScreen, 0.001, 100000 );

var camera2 = new THREE.OrthographicCamera(	widthScreen / -900, 
											widthScreen / 900, 
											heightScreen / 900, 
											heightScreen / -900,
											0.001,100000 );

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('mainCanvas'), antialias: true});
renderer.setSize( 510,510);

var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");



window.addEventListener( 'resize' , function () {
	var width = widthScreen;
	var height = heightScreen;
	renderer.setSize( width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.maxAzimuthAngle = Math.PI / 2;
controls.enableKeys = true;

function camera2D() {
	
	var condition = document.getElementById('2DCamera').checked;
	if( condition == true) {
		scene.remove(camera2);
		scene.add(camera);
		controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.enableRotate = true;
		controls.maxPolarAngle = Math.PI / 2;
		controls.maxAzimuthAngle = Math.PI / 2;
		camera.position.set(0.5,-0.25,2.2);
		controls.enableKeys = true;
		camera.rotation.x = 0;
		camera.rotation.y = 0;
		camera.rotation.z = 0;
		light.position.set( 0, 0.2, -0.5 );
	} else {
		scene.remove(camera);
		scene.add(camera2);
		controls = new THREE.OrbitControls(camera2, renderer.domElement);
		camera2.position.set(0,0,2.2);
		controls.maxPolarAngle = Math.PI / 2;
		controls.maxAzimuthAngle = 0;
		controls.enableKeys = true;
		controls.enableRotate = false;
		camera2.rotation.x = 0;
		camera2.rotation.y = 0;
		camera2.rotation.z = 0;
	}
}




// create the shape
var geometry = new THREE.BoxGeometry(0.1, 0.4, 0.1);
var geometry2 = new THREE.BoxGeometry(0.7, 0.1, 0.1);
var geometry3 = new THREE.BoxGeometry(0.4, 0.1, 0.4);
// create a material, color, or image structure
var material = new THREE.MeshLambertMaterial( { color: 0x099556, flatShading: true, wireframe: false} );
			
var exmple1 = new THREE.Mesh( geometry, material);
var exmpl2 = new THREE.Mesh( geometry2, material);
var exmple3 = new THREE.Mesh( geometry3, material);


	
//scene.add( exmple1, exmpl2, exmple3);

//To change the background color of the scene
scene.background = new THREE.Color( 0x4F4F4F);

//To set the position of objects,camera and lightSource		
exmple1.position.set(0.05,-0.2,0);
exmpl2.position.set(0.35,-0.35,0);
exmple3.position.set(0.9,-0.35,0);

var sg = new THREE.SphereGeometry( 0.008, 32, 32 );
var sm = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var s1 = new THREE.Mesh( sg, sm );
var s2 = new THREE.Mesh( sg, sm );
var s3 = new THREE.Mesh( sg, sm );
var s4 = new THREE.Mesh( sg, sm );
var s5 = new THREE.Mesh( sg, sm );
var s6 = new THREE.Mesh( sg, sm );
var s7 = new THREE.Mesh( sg, sm );
var s8 = new THREE.Mesh( sg, sm );
var s9 = new THREE.Mesh( sg, sm );
var s10 = new THREE.Mesh( sg, sm );
var s11 = new THREE.Mesh( sg, sm );
var s12 = new THREE.Mesh( sg, sm );
var s13 = new THREE.Mesh( sg, sm );
var s14 = new THREE.Mesh( sg, sm );
var s15 = new THREE.Mesh( sg, sm );
var s16 = new THREE.Mesh( sg, sm );
var s17 = new THREE.Mesh( sg, sm );
var s18 = new THREE.Mesh( sg, sm );
var s19 = new THREE.Mesh( sg, sm );
var s20 = new THREE.Mesh( sg, sm );
var s21 = new THREE.Mesh( sg, sm );
var s22 = new THREE.Mesh( sg, sm );
var s23 = new THREE.Mesh( sg, sm );
var s24 = new THREE.Mesh( sg, sm );
var s25 = new THREE.Mesh( sg, sm );
var s26 = new THREE.Mesh( sg, sm );
var s27 = new THREE.Mesh( sg, sm );
var s28 = new THREE.Mesh( sg, sm );
var s29 = new THREE.Mesh( sg, sm );
var s30 = new THREE.Mesh( sg, sm );
var s31 = new THREE.Mesh( sg, sm );
var s32 = new THREE.Mesh( sg, sm );
var s33 = new THREE.Mesh( sg, sm );
var s34 = new THREE.Mesh( sg, sm );
var s35 = new THREE.Mesh( sg, sm );
var s36 = new THREE.Mesh( sg, sm );
var s37 = new THREE.Mesh( sg, sm );
var s38 = new THREE.Mesh( sg, sm );
var s39 = new THREE.Mesh( sg, sm );
var s40 = new THREE.Mesh( sg, sm );
var s41 = new THREE.Mesh( sg, sm );
var s42 = new THREE.Mesh( sg, sm );
var s43 = new THREE.Mesh( sg, sm );


function lockV() {
	var condition = document.getElementById('lockVertices').checked;
	if( condition == true ) {
		exmple1.position.set(0.05,-0.2,0);
		exmpl2.position.set(0.35,-0.35,0);
		exmple3.position.set(0.9,-0.35,0);
		
		s1.position.set(0.7, -0.3, 0.2);
		s2.position.set(1.1, -0.3, 0.2);
		s3.position.set(1.1, -0.3, -0.2);
		s4.position.set(0.7, -0.3, -0.2);
		s5.position.set(0.7, -0.4, 0.2);
		s6.position.set(1.1, -0.4, 0.2);
		s7.position.set(1.1, -0.4, -0.2);
		s8.position.set(0.7, -0.4, -0.2);
		s9.position.set(0.1, -0.3, 0.05);
		s10.position.set(0.1, -0.3, -0.05);
		s11.position.set(0, -0.4, 0.05);
		s12.position.set(0, -0.4, -0.05);
		s13.position.set(0, 0, 0.05);
		s14.position.set(0, 0, -0.05);
		s15.position.set(0.1, 0, 0.05);
		s16.position.set(0.1, 0, -0.05);
		s17.position.set(0.7, -0.3, 0.05);
		s18.position.set(0.7, -0.3, -0.05);
		
	} else {
		scene.remove(s1);
		scene.remove(s2);
		scene.remove(s3);
		scene.remove(s4);
		scene.remove(s5);
		scene.remove(s6);
		scene.remove(s7);
		scene.remove(s8);
		scene.remove(s9);
		scene.remove(s10);
		scene.remove(s11);
		scene.remove(s12);
		scene.remove(s13);
		scene.remove(s14);
		scene.remove(s15);
		scene.remove(s16);
		scene.remove(s17);
		scene.remove(s18);
	}
}


var geomDodec=new THREE.Geometry();
var vertice = [
  new THREE.Vector3(-0.058,-0.058,0.058), 
  new THREE.Vector3(0.093,0.036,0),  
  new THREE.Vector3(0.093,-0.036,0),  
  new THREE.Vector3(-0.093,0.036,0),  
  new THREE.Vector3(-0.093,-0.036,0),  
  new THREE.Vector3(0,0.093,0.036),  
  new THREE.Vector3(0,0.093,-0.036),  
  new THREE.Vector3(0.036,0,-0.093),
  new THREE.Vector3(-0.036,0,-0.093), 
  new THREE.Vector3(0,-0.093,-0.036),  
  new THREE.Vector3(0,-0.093,0.036),  
  new THREE.Vector3(0.036,0,0.093),  
  new THREE.Vector3(-0.036,0,0.093),  
  new THREE.Vector3(0.058,0.058,-0.058),  
  new THREE.Vector3(0.058,0.058,0.058),  
  new THREE.Vector3(-0.058,0.058,-0.058),
  new THREE.Vector3(-0.058,0.058,0.058), 
  new THREE.Vector3(0.058,-0.058,-0.058),  
  new THREE.Vector3(0.058,-0.058,0.058),  
  new THREE.Vector3(-0.058,-0.058,-0.058),  
        ];

 geomDodec.vertices = vertice;
        var face=[
  new THREE.Face3(1,2,18),
  new THREE.Face3(1,18,11),
  // right
  new THREE.Face3(1,11,14),
  new THREE.Face3(1,13,7),
  // back
  new THREE.Face3(1,7,17),
  new THREE.Face3(1,17,2),
  // left
  new THREE.Face3(3,4,19),
  new THREE.Face3(3,19,8),
  // top
  new THREE.Face3(3,8,15),
  new THREE.Face3(3,16,12),
  // bottom
  new THREE.Face3(3,12,0),
  new THREE.Face3(3,0,4),
  new THREE.Face3(3,15,6),
  new THREE.Face3(3,6,5),
  // right
  new THREE.Face3(3,5,16),
  new THREE.Face3(1,14,5),
  // back
  new THREE.Face3(1,5,6),
  new THREE.Face3(1,6,13),
  // left
  new THREE.Face3(2,17,9),
  new THREE.Face3(2,9,10),
  // top
  new THREE.Face3(2,10,18),
  new THREE.Face3(4,0,10),
  // bottom
  new THREE.Face3(4,10,9),
  new THREE.Face3(4,9,19),
  new THREE.Face3(7,8,19),
  new THREE.Face3(7,19,9),
  // right
  new THREE.Face3(7,9,17),
  new THREE.Face3(6,15,8),
  // back
  new THREE.Face3(6,8,7),
  new THREE.Face3(6,7,13),
  // left
  new THREE.Face3(5,14,11),
  new THREE.Face3(5,11,12),
  // top
  new THREE.Face3(5,12,16),
  new THREE.Face3(10,0,12),
  // bottom
  new THREE.Face3(10,12,11),
  new THREE.Face3(10,11,18),

];
geomDodec.faces = face;
geomDodec.computeFaceNormals();
geomDodec.computeVertexNormals();



//var dodecahedronGeometry = new THREE.DodecahedronGeometry(0.1618);
//dodecahedronGeometry.rotateX(11/7);  flatShading: true, wireframe: false,
var material = new THREE.MeshBasicMaterial({color: 0x099556});
var dodecahedron = new THREE.Mesh(geomDodec, material);

//dodecahedron.position.x = 25;
dodecahedron.position.set(0,0,0);


		
function DrawDodecahedron() {
	
	var condition = document.getElementById('DodecahedronDraw').checked;
	if( condition == true) {
		scene.add(dodecahedron);
		addScale();
	} else {
		scene.remove(dodecahedron);

		document.getElementById('DodecahedronActive').checked = false;
		ActiveDodecahedron();
	}
}



function ActiveDodecahedron() {

	var condition1 = document.getElementById('DodecahedronDraw').checked;
	var condition2 = document.getElementById('DodecahedronActive').checked;

	if( (condition1 == true) && (condition2 == true) ) {
		//dodecahedron.position.set(0.05,0.25,0);
		//20 vertices :(
		s9.position.set(0.1, 0.1, 0.1);
		s10.position.set(0.1, 0.1, -0.1);
		s11.position.set(0.1, -0.1, 0.1);
		s12.position.set(0.1, -0.1, -0.1);
		s13.position.set(-0.1, -0.1, -0.1);
		s14.position.set(-0.1, 0.1, -0.1);
		s15.position.set(-0.1, -0.1, 0.1);
		s16.position.set(-0.1, 0.1, 0.1);

		s17.position.set(0, 0.1618, 0.0618);
		s18.position.set(0, -0.1618, -0.0618);
		s19.position.set(0, 0.1618, -0.0618);
		s20.position.set(0, -0.1618, 0.0618);

		s21.position.set(0.0618, 0, 0.1618);
		s22.position.set(-0.0618, 0, -0.1618);
		s23.position.set(-0.0618, 0, 0.1618);
		s24.position.set(0.0618, 0, -0.1618);

		s25.position.set(0.1618,0.0618,0);
		s26.position.set(-0.1618,-0.0618,0);
		s27.position.set(0.1618,-0.0618,0);
		s28.position.set(-0.1618,0.0618,0);
		
		
		scene.add(s9);
		scene.add(s10);
		scene.add(s11);
		scene.add(s12);
		scene.add(s13);
		scene.add(s14);
		scene.add(s15);
		scene.add(s16);
		scene.add(s17);
		scene.add(s18);
		scene.add(s19);
		scene.add(s20);
		scene.add(s21);
		scene.add(s22);
		scene.add(s23);
		scene.add(s24);
		scene.add(s25);
		scene.add(s26);
		scene.add(s27);
		scene.add(s12);
		scene.add(s28);
		
		DodecTActive();
	} else {
		scene.remove(s9);
		scene.remove(s10);
		scene.remove(s11);
		scene.remove(s12);
		scene.remove(s13);
		scene.remove(s14);
		scene.remove(s15);
		scene.remove(s16);
		scene.remove(s17);
		scene.remove(s18);
		scene.remove(s19);
		scene.remove(s20);
		scene.remove(s21);
		scene.remove(s22);
		scene.remove(s23);
		scene.remove(s24);
		scene.remove(s25);
		scene.remove(s26);
		scene.remove(s27);
		scene.remove(s28);
	}
}


function DodecTActive()
{		
	var dx = Number(document.getElementById('DodecX').value);
	var dy = Number(document.getElementById('DodecY').value);
	var dz = Number(document.getElementById('DodecZ').value);

	var sx=    Number(document.getElementById('sliderStatus').innerHTML);

	var dix1 = Number(document.getElementById('DodecahedroniX1').value);
	var diy1 = Number(document.getElementById('DodecahedroniY1').value);
	var diz1 = Number(document.getElementById('DodecahedroniZ1').value);

	var dix2 = Number(document.getElementById('DodecahedroniX2').value);
	var diy2 = Number(document.getElementById('DodecahedroniY2').value);
	var diz2 = Number(document.getElementById('DodecahedroniZ2').value);

	var dix3 = Number(document.getElementById('DodecahedroniX3').value);
	var diy3 = Number(document.getElementById('DodecahedroniY3').value);
	var diz3 = Number(document.getElementById('DodecahedroniZ3').value);

	var dix4 = Number(document.getElementById('DodecahedroniX4').value);
	var diy4 = Number(document.getElementById('DodecahedroniY4').value);
	var diz4 = Number(document.getElementById('DodecahedroniZ4').value);

	var dix5 = Number(document.getElementById('DodecahedroniX5').value);
	var diy5 = Number(document.getElementById('DodecahedroniY5').value);
	var diz5 = Number(document.getElementById('DodecahedroniZ5').value);

	var dix6 = Number(document.getElementById('DodecahedroniX6').value);
	var diy6 = Number(document.getElementById('DodecahedroniY6').value);
	var diz6 = Number(document.getElementById('DodecahedroniZ6').value);

	var dix7 = Number(document.getElementById('DodecahedroniX7').value);
	var diy7 = Number(document.getElementById('DodecahedroniY7').value);
	var diz7 = Number(document.getElementById('DodecahedroniZ7').value);

	var dix8 = Number(document.getElementById('DodecahedroniX8').value);
	var diy8 = Number(document.getElementById('DodecahedroniY8').value);
	var diz8 = Number(document.getElementById('DodecahedroniZ8').value);

	var dix9 = Number(document.getElementById('DodecahedroniX9').value);
	var diy9 = Number(document.getElementById('DodecahedroniY9').value);
	var diz9 = Number(document.getElementById('DodecahedroniZ9').value);

	var dix10 = Number(document.getElementById('DodecahedroniX10').value);
	var diy10 = Number(document.getElementById('DodecahedroniY10').value);
	var diz10 = Number(document.getElementById('DodecahedroniZ10').value);

	var dix11 = Number(document.getElementById('DodecahedroniX11').value);
	var diy11 = Number(document.getElementById('DodecahedroniY11').value);
	var diz11 = Number(document.getElementById('DodecahedroniZ11').value);

	var dix12 = Number(document.getElementById('DodecahedroniX12').value);
	var diy12 = Number(document.getElementById('DodecahedroniY12').value);
	var diz12 = Number(document.getElementById('DodecahedroniZ12').value);

	var dix13 = Number(document.getElementById('DodecahedroniX13').value);
	var diy13 = Number(document.getElementById('DodecahedroniY13').value);
	var diz13 = Number(document.getElementById('DodecahedroniZ13').value);

	var dix14 = Number(document.getElementById('DodecahedroniX14').value);
	var diy14 = Number(document.getElementById('DodecahedroniY14').value);
	var diz14 = Number(document.getElementById('DodecahedroniZ14').value);

	var dix15 = Number(document.getElementById('DodecahedroniX15').value);
	var diy15 = Number(document.getElementById('DodecahedroniY15').value);
	var diz15 = Number(document.getElementById('DodecahedroniZ15').value);

	var dix16 = Number(document.getElementById('DodecahedroniX16').value);
	var diy16 = Number(document.getElementById('DodecahedroniY16').value);
	var diz16 = Number(document.getElementById('DodecahedroniZ16').value);

	var dix17 = Number(document.getElementById('DodecahedroniX17').value);
	var diy17 = Number(document.getElementById('DodecahedroniY17').value);
	var diz17 = Number(document.getElementById('DodecahedroniZ17').value);

	var dix18 = Number(document.getElementById('DodecahedroniX18').value);
	var diy18 = Number(document.getElementById('DodecahedroniY18').value);
	var diz18 = Number(document.getElementById('DodecahedroniZ18').value);

	var dix19 = Number(document.getElementById('DodecahedroniX19').value);
	var diy19 = Number(document.getElementById('DodecahedroniY19').value);
	var diz19 = Number(document.getElementById('DodecahedroniZ19').value);

	var dix20 = Number(document.getElementById('DodecahedroniX20').value);
	var diy20 = Number(document.getElementById('DodecahedroniY20').value);
	var diz20 = Number(document.getElementById('DodecahedroniZ20').value);
		 s9.position.set(0.1*dix1*sx+ 0.1*dx, 0.1*diy1*sx+0.1*dy,0.1*diz1*sx+0.1*dz);
		s10.position.set(0.1*dix2*sx+ 0.1*dx, 0.1*diy2*sx+0.1*dy,0.1*diz2*sx+0.1*dz);
		s11.position.set(0.1*dix3*sx+ 0.1*dx, 0.1*diy3*sx+0.1*dy,0.1*diz3*sx+0.1*dz);
		s12.position.set(0.1*dix4*sx+ 0.1*dx, 0.1*diy4*sx+0.1*dy,0.1*diz4*sx+0.1*dz);
		s13.position.set(0.1*dix5*sx+ 0.1*dx, 0.1*diy5*sx+0.1*dy,0.1*diz5*sx+0.1*dz);
		s14.position.set(0.1*dix6*sx+ 0.1*dx, 0.1*diy6*sx+0.1*dy,0.1*diz6*sx+0.1*dz);
		s15.position.set(0.1*dix7*sx+ 0.1*dx, 0.1*diy7*sx+0.1*dy,0.1*diz7*sx+0.1*dz);
		s16.position.set(0.1*dix8*sx+ 0.1*dx, 0.1*diy8*sx+0.1*dy,0.1*diz8*sx+0.1*dz);

		s17.position.set(0.1*dix9*sx+ 0.1*dx, 0.1*diy9*sx+0.1*dy,0.1*diz9*sx+0.1*dz);
		s18.position.set(0.1*dix10*sx+ 0.1*dx, 0.1*diy10*sx+0.1*dy,0.1*diz10*sx+0.1*dz);
		s19.position.set(0.1*dix11*sx+ 0.1*dx, 0.1*diy11*sx+0.1*dy,0.1*diz11*sx+0.1*dz);
		s20.position.set(0.1*dix12*sx+ 0.1*dx, 0.1*diy12*sx+0.1*dy,0.1*diz12*sx+0.1*dz);

		s21.position.set(0.1*dix13*sx+ 0.1*dx, 0.1*diy13*sx+0.1*dy,0.1*diz13*sx+0.1*dz);
		s22.position.set(0.1*dix14*sx+ 0.1*dx, 0.1*diy14*sx+0.1*dy,0.1*diz14*sx+0.1*dz);
		s23.position.set(0.1*dix15*sx+ 0.1*dx, 0.1*diy15*sx+0.1*dy,0.1*diz15*sx+0.1*dz);
		s24.position.set(0.1*dix16*sx+ 0.1*dx, 0.1*diy16*sx+0.1*dy,0.1*diz16*sx+0.1*dz);

		s25.position.set(0.1*dix17*sx+ 0.1*dx, 0.1*diy17*sx+0.1*dy,0.1*diz17*sx+0.1*dz);
		s26.position.set(0.1*dix18*sx+ 0.1*dx, 0.1*diy18*sx+0.1*dy,0.1*diz18*sx+0.1*dz);
		s27.position.set(0.1*dix19*sx+ 0.1*dx, 0.1*diy19*sx+0.1*dy,0.1*diz19*sx+0.1*dz);
		s28.position.set(0.1*dix20*sx+ 0.1*dx, 0.1*diy20*sx+0.1*dy,0.1*diz20*sx+0.1*dz);
		
		scene.add(s9);
		scene.add(s10);
		scene.add(s11);
		scene.add(s12);
		scene.add(s13);
		scene.add(s14);
		scene.add(s15);
		scene.add(s16);
		scene.add(s17);
		scene.add(s18);
		scene.add(s19);
		scene.add(s20);
		scene.add(s21);
		scene.add(s22);
		scene.add(s23);
		scene.add(s24);
		scene.add(s25);
		scene.add(s26);
		scene.add(s27);
		scene.add(s12);
		scene.add(s28);

		document.getElementById('DodecahedronActive').checked = true;

}




function DodecaInput(){
	var dix1 = Number(document.getElementById('DodecahedroniX1').value);
	var diy1 = Number(document.getElementById('DodecahedroniY1').value);
	var diz1 = Number(document.getElementById('DodecahedroniZ1').value);

	var dix2 = Number(document.getElementById('DodecahedroniX2').value);
	var diy2 = Number(document.getElementById('DodecahedroniY2').value);
	var diz2 = Number(document.getElementById('DodecahedroniZ2').value);

	var dix3 = Number(document.getElementById('DodecahedroniX3').value);
	var diy3 = Number(document.getElementById('DodecahedroniY3').value);
	var diz3 = Number(document.getElementById('DodecahedroniZ3').value);

	var dix4 = Number(document.getElementById('DodecahedroniX4').value);
	var diy4 = Number(document.getElementById('DodecahedroniY4').value);
	var diz4 = Number(document.getElementById('DodecahedroniZ4').value);

	var dix5 = Number(document.getElementById('DodecahedroniX5').value);
	var diy5 = Number(document.getElementById('DodecahedroniY5').value);
	var diz5 = Number(document.getElementById('DodecahedroniZ5').value);

	var dix6 = Number(document.getElementById('DodecahedroniX6').value);
	var diy6 = Number(document.getElementById('DodecahedroniY6').value);
	var diz6 = Number(document.getElementById('DodecahedroniZ6').value);

	var dix7 = Number(document.getElementById('DodecahedroniX7').value);
	var diy7 = Number(document.getElementById('DodecahedroniY7').value);
	var diz7 = Number(document.getElementById('DodecahedroniZ7').value);

	var dix8 = Number(document.getElementById('DodecahedroniX8').value);
	var diy8 = Number(document.getElementById('DodecahedroniY8').value);
	var diz8 = Number(document.getElementById('DodecahedroniZ8').value);

	var dix9 = Number(document.getElementById('DodecahedroniX9').value);
	var diy9 = Number(document.getElementById('DodecahedroniY9').value);
	var diz9 = Number(document.getElementById('DodecahedroniZ9').value);

	var dix10 = Number(document.getElementById('DodecahedroniX10').value);
	var diy10 = Number(document.getElementById('DodecahedroniY10').value);
	var diz10 = Number(document.getElementById('DodecahedroniZ10').value);

	var dix11 = Number(document.getElementById('DodecahedroniX11').value);
	var diy11 = Number(document.getElementById('DodecahedroniY11').value);
	var diz11 = Number(document.getElementById('DodecahedroniZ11').value);

	var dix12 = Number(document.getElementById('DodecahedroniX12').value);
	var diy12 = Number(document.getElementById('DodecahedroniY12').value);
	var diz12 = Number(document.getElementById('DodecahedroniZ12').value);

	var dix13 = Number(document.getElementById('DodecahedroniX13').value);
	var diy13 = Number(document.getElementById('DodecahedroniY13').value);
	var diz13 = Number(document.getElementById('DodecahedroniZ13').value);

	var dix14 = Number(document.getElementById('DodecahedroniX14').value);
	var diy14 = Number(document.getElementById('DodecahedroniY14').value);
	var diz14 = Number(document.getElementById('DodecahedroniZ14').value);

	var dix15 = Number(document.getElementById('DodecahedroniX15').value);
	var diy15 = Number(document.getElementById('DodecahedroniY15').value);
	var diz15 = Number(document.getElementById('DodecahedroniZ15').value);

	var dix16 = Number(document.getElementById('DodecahedroniX16').value);
	var diy16 = Number(document.getElementById('DodecahedroniY16').value);
	var diz16 = Number(document.getElementById('DodecahedroniZ16').value);

	var dix17 = Number(document.getElementById('DodecahedroniX17').value);
	var diy17 = Number(document.getElementById('DodecahedroniY17').value);
	var diz17 = Number(document.getElementById('DodecahedroniZ17').value);

	var dix18 = Number(document.getElementById('DodecahedroniX18').value);
	var diy18 = Number(document.getElementById('DodecahedroniY18').value);
	var diz18 = Number(document.getElementById('DodecahedroniZ18').value);

	var dix19 = Number(document.getElementById('DodecahedroniX19').value);
	var diy19 = Number(document.getElementById('DodecahedroniY19').value);
	var diz19 = Number(document.getElementById('DodecahedroniZ19').value);

	var dix20 = Number(document.getElementById('DodecahedroniX20').value);
	var diy20 = Number(document.getElementById('DodecahedroniY20').value);
	var diz20 = Number(document.getElementById('DodecahedroniZ20').value);

  geomDodec.vertices[0].set(0.1*dix1, 0.1*diy1,  0.1*diz1),  // 0
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[1].set( 0.1*dix2, 0.1*diy2,  0.1*diz2),  // 1
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[2].set(0.1*dix3,  0.1*diy3,  0.1*diz3),  // 2
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[3].set( 0.1*dix4,  0.1*diy4,  0.1*diz4),  // 3
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[4].set(0.1*dix5, 0.1*diy5, 0.1*diz5),  // 4
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[5].set( 0.1*dix6, 0.1*diy6, 0.1*diz6),  // 5
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[6].set(0.1*dix7,  0.1*diy7, 0.1*diz7),  // 6
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[7].set( 0.1*dix8, 0.1*diy8, 0.1*diz8),
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[8].set(0.1*dix9,  0.1*diy9, 0.1*diz9), 
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[9].set( 0.1*dix10,0.1*diy10, 0.1*diz10),
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[10].set(0.1*dix11,  0.1*diy11,  0.1*diz11),  // 0
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[11].set( 0.1*dix12, 0.1*diy12,  0.1*diz12),  // 1
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[12].set(0.1*dix13,  0.1*diy13,  0.1*diz13),  // 2
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[13].set( 0.1*dix14, 0.1*diy14,  0.1*diz14),  // 3
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[14].set(0.1*dix15,  0.1*diy15,  0.1*diz15),  // 4
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[15].set( 0.1*dix16, 0.1*diy16,  0.1*diz16),  // 5
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[16].set(0.1*dix17,  0.1*diy17,  0.1*diz17),  // 6
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[17].set( 0.1*dix18, 0.1*diy18,  0.1*diz18),
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[18].set(0.1*dix19,  0.1*diy19,  0.1*diz19), 
  geomDodec.verticesNeedUpdate=true;
  geomDodec.vertices[19].set( 0.1*dix20, 0.1*diy20,0.1*diz20),
  geomDodec.verticesNeedUpdate=true;
  }


function DodecaFaceInput(){
	var dex1 = Number(document.getElementById('DodecahedroneX1').value);
	var dey1 = Number(document.getElementById('DodecahedroneY1').value);
	var dez1 = Number(document.getElementById('DodecahedroneZ1').value);

	var dex2 = Number(document.getElementById('DodecahedroneX2').value);
	var dey2 = Number(document.getElementById('DodecahedroneY2').value);
	var dez2 = Number(document.getElementById('DodecahedroneZ2').value);

	var dex3 = Number(document.getElementById('DodecahedroneX3').value);
	var dey3 = Number(document.getElementById('DodecahedroneY3').value);
	var dez3 = Number(document.getElementById('DodecahedroneZ3').value);

	var dex4 = Number(document.getElementById('DodecahedroneX4').value);
	var dey4 = Number(document.getElementById('DodecahedroneY4').value);
	var dez4 = Number(document.getElementById('DodecahedroneZ4').value);

	var dex5 = Number(document.getElementById('DodecahedroneX5').value);
	var dey5 = Number(document.getElementById('DodecahedroneY5').value);
	var dez5 = Number(document.getElementById('DodecahedroneZ5').value);

	var dex6 = Number(document.getElementById('DodecahedroneX6').value);
	var dey6 = Number(document.getElementById('DodecahedroneY6').value);
	var dez6 = Number(document.getElementById('DodecahedroneZ6').value);

	var dex7 = Number(document.getElementById('DodecahedroneX7').value);
	var dey7 = Number(document.getElementById('DodecahedroneY7').value);
	var dez7 = Number(document.getElementById('DodecahedroneZ7').value);

	var dex8 = Number(document.getElementById('DodecahedroneX8').value);
	var dey8 = Number(document.getElementById('DodecahedroneY8').value);
	var dez8 = Number(document.getElementById('DodecahedroneZ8').value);

	var dex9 = Number(document.getElementById('DodecahedroneX9').value);
	var dey9 = Number(document.getElementById('DodecahedroneY9').value);
	var dez9 = Number(document.getElementById('DodecahedroneZ9').value);

	var dex10 = Number(document.getElementById('DodecahedroneX10').value);
	var dey10 = Number(document.getElementById('DodecahedroneY10').value);
	var dez10 = Number(document.getElementById('DodecahedroneZ10').value);

	var dex11 = Number(document.getElementById('DodecahedroneX11').value);
	var dey11 = Number(document.getElementById('DodecahedroneY11').value);
	var dez11 = Number(document.getElementById('DodecahedroneZ11').value);

	var dex12 = Number(document.getElementById('DodecahedroneX12').value);
	var dey12 = Number(document.getElementById('DodecahedroneY12').value);
	var dez12 = Number(document.getElementById('DodecahedroneZ12').value);

	var dex13 = Number(document.getElementById('DodecahedroneX13').value);
	var dey13 = Number(document.getElementById('DodecahedroneY13').value);
	var dez13 = Number(document.getElementById('DodecahedroneZ13').value);

	var dex14 = Number(document.getElementById('DodecahedroneX14').value);
	var dey14 = Number(document.getElementById('DodecahedroneY14').value);
	var dez14 = Number(document.getElementById('DodecahedroneZ14').value);

	var dex15 = Number(document.getElementById('DodecahedroneX15').value);
	var dey15 = Number(document.getElementById('DodecahedroneY15').value);
	var dez15 = Number(document.getElementById('DodecahedroneZ15').value);

	var dex16 = Number(document.getElementById('DodecahedroneX16').value);
	var dey16 = Number(document.getElementById('DodecahedroneY16').value);
	var dez16 = Number(document.getElementById('DodecahedroneZ16').value);

	var dex17 = Number(document.getElementById('DodecahedroneX17').value);
	var dey17 = Number(document.getElementById('DodecahedroneY17').value);
	var dez17 = Number(document.getElementById('DodecahedroneZ17').value);

	var dex18 = Number(document.getElementById('DodecahedroneX18').value);
	var dey18 = Number(document.getElementById('DodecahedroneY18').value);
	var dez18 = Number(document.getElementById('DodecahedroneZ18').value);

	var dex19 = Number(document.getElementById('DodecahedroneX19').value);
	var dey19 = Number(document.getElementById('DodecahedroneY19').value);
	var dez19 = Number(document.getElementById('DodecahedroneZ19').value);

	var dex20 = Number(document.getElementById('DodecahedroneX20').value);
	var dey20 = Number(document.getElementById('DodecahedroneY20').value);
	var dez20 = Number(document.getElementById('DodecahedroneZ20').value);

	var dex21 = Number(document.getElementById('DodecahedroneX21').value);
	var dey21 = Number(document.getElementById('DodecahedroneY21').value);
	var dez21 = Number(document.getElementById('DodecahedroneZ21').value);

	var dex22 = Number(document.getElementById('DodecahedroneX22').value);
	var dey22 = Number(document.getElementById('DodecahedroneY22').value);
	var dez22 = Number(document.getElementById('DodecahedroneZ22').value);

	var dex23 = Number(document.getElementById('DodecahedroneX23').value);
	var dey23 = Number(document.getElementById('DodecahedroneY23').value);
	var dez23 = Number(document.getElementById('DodecahedroneZ23').value);

	var dex24 = Number(document.getElementById('DodecahedroneX24').value);
	var dey24 = Number(document.getElementById('DodecahedroneY24').value);
	var dez24 = Number(document.getElementById('DodecahedroneZ24').value);

	var dex25 = Number(document.getElementById('DodecahedroneX25').value);
	var dey25 = Number(document.getElementById('DodecahedroneY25').value);
	var dez25 = Number(document.getElementById('DodecahedroneZ25').value);

	var dex26 = Number(document.getElementById('DodecahedroneX26').value);
	var dey26 = Number(document.getElementById('DodecahedroneY26').value);
	var dez26 = Number(document.getElementById('DodecahedroneZ26').value);

	var dex27 = Number(document.getElementById('DodecahedroneX27').value);
	var dey27 = Number(document.getElementById('DodecahedroneY27').value);
	var dez27 = Number(document.getElementById('DodecahedroneZ27').value);

	var dex28 = Number(document.getElementById('DodecahedroneX28').value);
	var dey28 = Number(document.getElementById('DodecahedroneY28').value);
	var dez28 = Number(document.getElementById('DodecahedroneZ28').value);

	var dex29 = Number(document.getElementById('DodecahedroneX29').value);
	var dey29 = Number(document.getElementById('DodecahedroneY29').value);
	var dez29 = Number(document.getElementById('DodecahedroneZ29').value);

	var dex30 = Number(document.getElementById('DodecahedroneX30').value);
	var dey30 = Number(document.getElementById('DodecahedroneY30').value);
	var dez30 = Number(document.getElementById('DodecahedroneZ30').value);

	var dex31 = Number(document.getElementById('DodecahedroneX31').value);
	var dey31 = Number(document.getElementById('DodecahedroneY31').value);
	var dez31 = Number(document.getElementById('DodecahedroneZ31').value);

	var dex32 = Number(document.getElementById('DodecahedroneX32').value);
	var dey32 = Number(document.getElementById('DodecahedroneY32').value);
	var dez32 = Number(document.getElementById('DodecahedroneZ32').value);

	var dex33 = Number(document.getElementById('DodecahedroneX33').value);
	var dey33 = Number(document.getElementById('DodecahedroneY33').value);
	var dez33 = Number(document.getElementById('DodecahedroneZ33').value);

	var dex34 = Number(document.getElementById('DodecahedroneX34').value);
	var dey34 = Number(document.getElementById('DodecahedroneY34').value);
	var dez34 = Number(document.getElementById('DodecahedroneZ34').value);

	var dex35 = Number(document.getElementById('DodecahedroneX35').value);
	var dey35 = Number(document.getElementById('DodecahedroneY35').value);
	var dez35 = Number(document.getElementById('DodecahedroneZ35').value);

	var dex36 = Number(document.getElementById('DodecahedroneX36').value);
	var dey36 = Number(document.getElementById('DodecahedroneY36').value);
	var dez36 = Number(document.getElementById('DodecahedroneZ36').value);


  geomDodec.faces[0].set(0.1*dex1,    0.1*dey1,   0.1*dez1),  // 0
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[1].set( 0.1*dex2,   0.1*dey2,   0.1*dez2),  // 1
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[2].set(0.1*dex3,    0.1*dey3,   0.1*dez3),  // 2
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[3].set( 0.1*dex4,   0.1*dey4,   0.1*dez4),  // 3
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[4].set(0.1*dex5,    0.1*dey5,   0.1*dez5),  // 4
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[5].set( 0.1*dex6,   0.1*dey6,   0.1*dez6),  // 5
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[6].set(0.1*dex7,    0.1*dey7,   0.1*dez7),  // 6
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[7].set( 0.1*dex8,   0.1*dey8,   0.1*dez8),
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[8].set(0.1*dex9,    0.1*dey9,   0.1*dez9), 
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[9].set( 0.1*dex10,  0.1*dey10,  0.1*dez10),
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[10].set(0.1*dex11,  0.1*dey11,  0.1*dez11),  // 0
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[11].set( 0.1*dex12, 0.1*dey12,  0.1*dez12),  // 1
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[12].set(0.1*dex13,  0.1*dey13,  0.1*dez13),  // 2
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[13].set( 0.1*dex14, 0.1*dey14,  0.1*dez14),  // 3
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[14].set(0.1*dex15,  0.1*dey15,  0.1*dez15),  // 4
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[15].set( 0.1*dex16, 0.1*dey16,  0.1*dez16),  // 5
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[16].set(0.1*dex17,  0.1*dey17,  0.1*dez17),  // 6
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[17].set( 0.1*dex18, 0.1*dey18,  0.1*dez18),
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[18].set(0.1*dex19,  0.1*dey19,  0.1*dez19), 
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[19].set( 0.1*dex20, 0.1*dey20,  0.1*dez20),
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[20].set(0.1*dex21,    0.1*dey21,   0.1*dez21),  // 0
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[21].set( 0.1*dex22,   0.1*dey22,   0.1*dez22),  // 1
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[22].set(0.1*dex23,    0.1*dey23,   0.1*dez23),  // 2
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[23].set( 0.1*dex24,   0.1*dey24,   0.1*dez24),  // 3
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[24].set(0.1*dex25,    0.1*dey25,   0.1*dez25),  // 4
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[25].set( 0.1*dex26,   0.1*dey26,   0.1*dez26),  // 5
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[26].set(0.1*dex27,    0.1*dey27,   0.1*dez27),  // 6
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[27].set( 0.1*dex28,   0.1*dey28,   0.1*dez28),
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[28].set(0.1*dex29,    0.1*dey29,   0.1*dez29), 
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[29].set( 0.1*dex30,  0.1*dey30,  0.1*dez30),
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[30].set(0.1*dex31,  0.1*dey31,  0.1*dez31),  // 0
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[31].set( 0.1*dex32, 0.1*dey32,  0.1*dez32),  // 1
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[32].set(0.1*dex33,  0.1*dey33,  0.1*dez33),  // 2
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[33].set( 0.1*dex34, 0.1*dey34,  0.1*dez34),  // 3
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[34].set(0.1*dex35,  0.1*dey35,  0.1*dez35),  // 4
  geomDodec.elementsNeedUpdate=true;
  geomDodec.faces[35].set( 0.1*dex36, 0.1*diy16,  0.1*dez36),  // 5
  geomDodec.elementsNeedUpdate=true;
  }


var geomIcosa=new THREE.Geometry();
var verticei = [
  new THREE.Vector3(0,-0.053,0.085), 
  new THREE.Vector3(0.085,0,0.053),  
  new THREE.Vector3(0.085,0,-0.053),  
  new THREE.Vector3(-0.085,0,-0.053),  
  new THREE.Vector3(-0.085,0,0.053),  
  new THREE.Vector3(-0.053,0.085,0),  
  new THREE.Vector3(0.053,0.085,0),  
  new THREE.Vector3(0.053,-0.085,0),
  new THREE.Vector3(-0.053,-0.085,0), 
  new THREE.Vector3(0,-0.053,-0.085),  
  new THREE.Vector3(0,0.053,-0.085),  
  new THREE.Vector3(0,0.053,0.085),  
  
        ];

 geomIcosa.vertices = verticei;
        var facei=[
  new THREE.Face3(6,2,1),
  new THREE.Face3(2,7,1),
  // right
  new THREE.Face3(5,4,3),
  new THREE.Face3(8,3,4),
  // back
  new THREE.Face3(11,5,6),
  new THREE.Face3(10,6,5),
  // left
  new THREE.Face3(2,10,9),
  new THREE.Face3(3,9,10),
  // top
  new THREE.Face3(9,8,7),
  new THREE.Face3(0,7,8),
  // bottom
  new THREE.Face3(1,0,11),
  new THREE.Face3(4,11,0),
  new THREE.Face3(10,2,6),
  new THREE.Face3(11,6,1),
  // right
  new THREE.Face3(10,5,3),
  new THREE.Face3(11,4,5),
  // back
  new THREE.Face3(9,7,2),
  new THREE.Face3(0,1,7),
  // left
  new THREE.Face3(8,9,3),
  new THREE.Face3(0,8,4),

];
geomIcosa.faces = facei;
geomIcosa.computeFaceNormals();
geomIcosa.computeVertexNormals();
//geomIcosa.rotateX(11/7);

//var icosahedronGeometry = new THREE.IcosahedronGeometry(0.1);
//icosahedronGeometry.rotateX(11/7);
var material = new THREE.MeshBasicMaterial({color: 0xFF250E});
var icosahedron = new THREE.Mesh(geomIcosa, material);
//dodecahedron.position.x = 25;

icosahedron.position.set(0,0,0);
var light = new THREE.PointLight( 0xffffff, 3, 100 );
light.position.set(0,0,0);

		
function DrawIcosahedron() {
	
	var condition = document.getElementById('IcosahedronDraw').checked;
	if( condition == true) {
		scene.add(icosahedron);
		scene.add(light);
		addScale();
	} else {
		scene.remove(icosahedron);
		scene.remove(light);
		document.getElementById('IcosahedronActive').checked = false;
		ActiveIcosahedron();
	}
}



function ActiveIcosahedron() {
	var condition1 = document.getElementById('IcosahedronDraw').checked;
	var condition2 = document.getElementById('IcosahedronActive').checked;

	if( (condition1 == true) && (condition2 == true) ) {
	

		  s29.position.set(0,-0.053,0.085);
		  s30.position.set(0.085,0,0.053);
		  s31.position.set(0.085,0,-0.053) ;
		  s32.position.set(-0.085,0,-0.053) ;
		  s33.position.set(-0.085,0,0.053);
		  s34.position.set(-0.053,0.085,0) ;
		  s35.position.set(0.053,0.085,0) ;
		  s36.position.set(0.053,-0.085,0);
		  s37.position.set(-0.053,-0.085,0);
		  s38.position.set(0,-0.053,-0.085) ;
		  s39.position.set(0,0.053,-0.085) ;
		  s40.position.set(0,0.053,0.085);



		scene.add(s29);
		scene.add(s30);
		scene.add(s31);
		scene.add(s32);
		scene.add(s33);
		scene.add(s34);
		scene.add(s35);
		scene.add(s36);
		scene.add(s37);
		scene.add(s38);
		scene.add(s39);
		scene.add(s40);
		IcosaTActive();

	} else {
		scene.remove(s29);
		scene.remove(s30);
		scene.remove(s31);
		scene.remove(s32);
		scene.remove(s33);
		scene.remove(s34);
		scene.remove(s35);
		scene.remove(s36);
		scene.remove(s37);
		scene.remove(s38);
		scene.remove(s39);
		scene.remove(s40);
	}
}

function IcosaTActive()
{
	var ix = Number(document.getElementById('IcoX').value);
	var iy = Number(document.getElementById('IcoY').value);
	var iz = Number(document.getElementById('IcoZ').value);
	var sx=Number(document.getElementById('sliderStatus').innerHTML);
	
	var icosx1 = Number(document.getElementById('IcosahedroniX1').value);
	var icosy1 = Number(document.getElementById('IcosahedroniY1').value);
	var icosz1 = Number(document.getElementById('IcosahedroniZ1').value);

	var icosx2 = Number(document.getElementById('IcosahedroniX2').value);
	var icosy2 = Number(document.getElementById('IcosahedroniY2').value);
	var icosz2 = Number(document.getElementById('IcosahedroniZ2').value);

	var icosx3 = Number(document.getElementById('IcosahedroniX3').value);
	var icosy3 = Number(document.getElementById('IcosahedroniY3').value);
	var icosz3 = Number(document.getElementById('IcosahedroniZ3').value);

	var icosx4 = Number(document.getElementById('IcosahedroniX4').value);
	var icosy4 = Number(document.getElementById('IcosahedroniY4').value);
	var icosz4 = Number(document.getElementById('IcosahedroniZ4').value);

	var icosx5 = Number(document.getElementById('IcosahedroniX5').value);
	var icosy5 = Number(document.getElementById('IcosahedroniY5').value);
	var icosz5 = Number(document.getElementById('IcosahedroniZ5').value);

	var icosx6 = Number(document.getElementById('IcosahedroniX6').value);
	var icosy6 = Number(document.getElementById('IcosahedroniY6').value);
	var icosz6 = Number(document.getElementById('IcosahedroniZ6').value);

	var icosx7 = Number(document.getElementById('IcosahedroniX7').value);
	var icosy7 = Number(document.getElementById('IcosahedroniY7').value);
	var icosz7 = Number(document.getElementById('IcosahedroniZ7').value);

	var icosx8 = Number(document.getElementById('IcosahedroniX8').value);
	var icosy8 = Number(document.getElementById('IcosahedroniY8').value);
	var icosz8 = Number(document.getElementById('IcosahedroniZ8').value);

	var icosx9 = Number(document.getElementById('IcosahedroniX9').value);
	var icosy9 = Number(document.getElementById('IcosahedroniY9').value);
	var icosz9 = Number(document.getElementById('IcosahedroniZ9').value);

	var icosx10 = Number(document.getElementById('IcosahedroniX10').value);
	var icosy10 = Number(document.getElementById('IcosahedroniY10').value);
	var icosz10 = Number(document.getElementById('IcosahedroniZ10').value);

	var icosx11 = Number(document.getElementById('IcosahedroniX11').value);
	var icosy11 = Number(document.getElementById('IcosahedroniY11').value);
	var icosz11 = Number(document.getElementById('IcosahedroniZ11').value);

	var icosx12 = Number(document.getElementById('IcosahedroniX12').value);
	var icosy12 = Number(document.getElementById('IcosahedroniY12').value);
	var icosz12 = Number(document.getElementById('IcosahedroniZ12').value);
	
	

		s29.position.set(0.1*icosx1 *sx+ 0.1*ix, 0.1*icosy1 *sx+0.1*iy,0.1*icosz1 *sx+0.1*iz);
		s30.position.set(0.1*icosx2 *sx+ 0.1*ix, 0.1*icosy2 *sx+0.1*iy,0.1*icosz2 *sx+0.1*iz);
		s31.position.set(0.1*icosx3 *sx+ 0.1*ix, 0.1*icosy3 *sx+0.1*iy,0.1*icosz3 *sx+0.1*iz);
		s32.position.set(0.1*icosx4 *sx+ 0.1*ix, 0.1*icosy4 *sx+0.1*iy,0.1*icosz4 *sx+0.1*iz);
		s33.position.set(0.1*icosx5 *sx+ 0.1*ix, 0.1*icosy5 *sx+0.1*iy,0.1*icosz5 *sx+0.1*iz);
		s34.position.set(0.1*icosx6 *sx+ 0.1*ix, 0.1*icosy6 *sx+0.1*iy,0.1*icosz6 *sx+0.1*iz);
		s35.position.set(0.1*icosx7 *sx+ 0.1*ix, 0.1*icosy7 *sx+0.1*iy,0.1*icosz7 *sx+0.1*iz);
		s36.position.set(0.1*icosx8 *sx+ 0.1*ix, 0.1*icosy8 *sx+0.1*iy,0.1*icosz8 *sx+0.1*iz);

		s37.position.set(0.1*icosx9 *sx+ 0.1*ix, 0.1*icosy9 *sx+0.1*iy,0.1*icosz9 *sx+0.1*iz);
		s38.position.set(0.1*icosx10*sx+ 0.1*ix, 0.1*icosy10*sx+0.1*iy,0.1*icosz10*sx+0.1*iz);
		s39.position.set(0.1*icosx11*sx+ 0.1*ix, 0.1*icosy11*sx+0.1*iy,0.1*icosz11*sx+0.1*iz);
		s40.position.set(0.1*icosx12*sx+ 0.1*ix, 0.1*icosy12*sx+0.1*iy,0.1*icosz12*sx+0.1*iz);

		scene.add(s29);
		scene.add(s30);
		scene.add(s31);
		scene.add(s32);
		scene.add(s33);
		scene.add(s34);
		scene.add(s35);
		scene.add(s36);
		scene.add(s37);
		scene.add(s38);
		scene.add(s39);
		scene.add(s40);
		document.getElementById('IcosahedronActive').checked = true;
}







function IcosaInput(){
	var icosx1 = Number(document.getElementById('IcosahedroniX1').value);
	var icosy1 = Number(document.getElementById('IcosahedroniY1').value);
	var icosz1 = Number(document.getElementById('IcosahedroniZ1').value);

	var icosx2 = Number(document.getElementById('IcosahedroniX2').value);
	var icosy2 = Number(document.getElementById('IcosahedroniY2').value);
	var icosz2 = Number(document.getElementById('IcosahedroniZ2').value);

	var icosx3 = Number(document.getElementById('IcosahedroniX3').value);
	var icosy3 = Number(document.getElementById('IcosahedroniY3').value);
	var icosz3 = Number(document.getElementById('IcosahedroniZ3').value);

	var icosx4 = Number(document.getElementById('IcosahedroniX4').value);
	var icosy4 = Number(document.getElementById('IcosahedroniY4').value);
	var icosz4 = Number(document.getElementById('IcosahedroniZ4').value);

	var icosx5 = Number(document.getElementById('IcosahedroniX5').value);
	var icosy5 = Number(document.getElementById('IcosahedroniY5').value);
	var icosz5 = Number(document.getElementById('IcosahedroniZ5').value);

	var icosx6 = Number(document.getElementById('IcosahedroniX6').value);
	var icosy6 = Number(document.getElementById('IcosahedroniY6').value);
	var icosz6 = Number(document.getElementById('IcosahedroniZ6').value);

	var icosx7 = Number(document.getElementById('IcosahedroniX7').value);
	var icosy7 = Number(document.getElementById('IcosahedroniY7').value);
	var icosz7 = Number(document.getElementById('IcosahedroniZ7').value);

	var icosx8 = Number(document.getElementById('IcosahedroniX8').value);
	var icosy8 = Number(document.getElementById('IcosahedroniY8').value);
	var icosz8 = Number(document.getElementById('IcosahedroniZ8').value);

	var icosx9 = Number(document.getElementById('IcosahedroniX9').value);
	var icosy9 = Number(document.getElementById('IcosahedroniY9').value);
	var icosz9 = Number(document.getElementById('IcosahedroniZ9').value);

	var icosx10 = Number(document.getElementById('IcosahedroniX10').value);
	var icosy10 = Number(document.getElementById('IcosahedroniY10').value);
	var icosz10 = Number(document.getElementById('IcosahedroniZ10').value);

	var icosx11 = Number(document.getElementById('IcosahedroniX11').value);
	var icosy11 = Number(document.getElementById('IcosahedroniY11').value);
	var icosz11 = Number(document.getElementById('IcosahedroniZ11').value);

	var icosx12 = Number(document.getElementById('IcosahedroniX12').value);
	var icosy12 = Number(document.getElementById('IcosahedroniY12').value);
	var icosz12 = Number(document.getElementById('IcosahedroniZ12').value);


  geomIcosa.vertices[0].set(0.1*icosx1, 0.1*icosy1,  0.1*icosz1),  // 0
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[1].set( 0.1*icosx2,0.1*icosy2,  0.1*icosz2),  // 1
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[2].set(0.1*icosx3, 0.1*icosy3,  0.1*icosz3),  // 2
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[3].set( 0.1*icosx4,0.1*icosy4,  0.1*icosz4),  // 3
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[4].set(0.1*icosx5, 0.1*icosy5, 0.1*icosz5),  // 4
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[5].set( 0.1*icosx6, 0.1*icosy6, 0.1*icosz6),  // 5
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[6].set(0.1*icosx7,  0.1*icosy7, 0.1*icosz7),  // 6
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[7].set( 0.1*icosx8, 0.1*icosy8, 0.1*icosz8),
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[8].set(0.1*icosx9,  0.1*icosy9, 0.1*icosz9), 
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[9].set( 0.1*icosx10,0.1*icosy10, 0.1*icosz10),
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[10].set(0.1*icosx11,  0.1*icosy11,  0.1*icosz11),  // 0
  geomIcosa.verticesNeedUpdate=true;
  geomIcosa.vertices[11].set( 0.1*icosx12, 0.1*icosy12,  0.1*icosz12),  // 1
  geomIcosa.verticesNeedUpdate=true;

  }


function IcosaFaceInput(){
	var iex1 = Number(document.getElementById('IcosahedroneX1').value);
	var iey1 = Number(document.getElementById('IcosahedroneY1').value);
	var iez1 = Number(document.getElementById('IcosahedroneZ1').value);

	var iex2 = Number(document.getElementById('IcosahedroneX2').value);
	var iey2 = Number(document.getElementById('IcosahedroneY2').value);
	var iez2 = Number(document.getElementById('IcosahedroneZ2').value);

	var iex3 = Number(document.getElementById('IcosahedroneX3').value);
	var iey3 = Number(document.getElementById('IcosahedroneY3').value);
	var iez3 = Number(document.getElementById('IcosahedroneZ3').value);

	var iex4 = Number(document.getElementById('IcosahedroneX4').value);
	var iey4 = Number(document.getElementById('IcosahedroneY4').value);
	var iez4 = Number(document.getElementById('IcosahedroneZ4').value);

	var iex5 = Number(document.getElementById('IcosahedroneX5').value);
	var iey5 = Number(document.getElementById('IcosahedroneY5').value);
	var iez5 = Number(document.getElementById('IcosahedroneZ5').value);

	var iex6 = Number(document.getElementById('IcosahedroneX6').value);
	var iey6 = Number(document.getElementById('IcosahedroneY6').value);
	var iez6 = Number(document.getElementById('IcosahedroneZ6').value);

	var iex7 = Number(document.getElementById('IcosahedroneX7').value);
	var iey7 = Number(document.getElementById('IcosahedroneY7').value);
	var iez7 = Number(document.getElementById('IcosahedroneZ7').value);

	var iex8 = Number(document.getElementById('IcosahedroneX8').value);
	var iey8 = Number(document.getElementById('IcosahedroneY8').value);
	var iez8 = Number(document.getElementById('IcosahedroneZ8').value);

	var iex9 = Number(document.getElementById('IcosahedroneX9').value);
	var iey9 = Number(document.getElementById('IcosahedroneY9').value);
	var iez9 = Number(document.getElementById('IcosahedroneZ9').value);

	var iex10 = Number(document.getElementById('IcosahedroneX10').value);
	var iey10 = Number(document.getElementById('IcosahedroneY10').value);
	var iez10 = Number(document.getElementById('IcosahedroneZ10').value);

	var iex11 = Number(document.getElementById('IcosahedroneX11').value);
	var iey11 = Number(document.getElementById('IcosahedroneY11').value);
	var iez11 = Number(document.getElementById('IcosahedroneZ11').value);

	var iex12 = Number(document.getElementById('IcosahedroneX12').value);
	var iey12 = Number(document.getElementById('IcosahedroneY12').value);
	var iez12 = Number(document.getElementById('IcosahedroneZ12').value);

	var iex13 = Number(document.getElementById('IcosahedroneX13').value);
	var iey13 = Number(document.getElementById('IcosahedroneY13').value);
	var iez13 = Number(document.getElementById('IcosahedroneZ13').value);

	var iex14 = Number(document.getElementById('IcosahedroneX14').value);
	var iey14 = Number(document.getElementById('IcosahedroneY14').value);
	var iez14 = Number(document.getElementById('IcosahedroneZ14').value);

	var iex15 = Number(document.getElementById('IcosahedroneX15').value);
	var iey15 = Number(document.getElementById('IcosahedroneY15').value);
	var iez15 = Number(document.getElementById('IcosahedroneZ15').value);

	var iex16 = Number(document.getElementById('IcosahedroneX16').value);
	var iey16 = Number(document.getElementById('IcosahedroneY16').value);
	var iez16 = Number(document.getElementById('IcosahedroneZ16').value);

	var iex17 = Number(document.getElementById('IcosahedroneX17').value);
	var iey17 = Number(document.getElementById('IcosahedroneY17').value);
	var iez17 = Number(document.getElementById('IcosahedroneZ17').value);

	var iex18 = Number(document.getElementById('IcosahedroneX18').value);
	var iey18 = Number(document.getElementById('IcosahedroneY18').value);
	var iez18 = Number(document.getElementById('IcosahedroneZ18').value);

	var iex19 = Number(document.getElementById('IcosahedroneX19').value);
	var iey19 = Number(document.getElementById('IcosahedroneY19').value);
	var iez19 = Number(document.getElementById('IcosahedroneZ19').value);

	var iex20 = Number(document.getElementById('IcosahedroneX20').value);
	var iey20 = Number(document.getElementById('IcosahedroneY20').value);
	var iez20 = Number(document.getElementById('IcosahedroneZ20').value);



  geomIcosa.faces[0].set(0.1*iex1,    0.1*iey1,   0.1*iez1),  // 0
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[1].set( 0.1*iex2,   0.1*iey2,   0.1*iez2),  // 1
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[2].set(0.1*iex3,    0.1*iey3,   0.1*iez3),  // 2
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[3].set( 0.1*iex4,   0.1*iey4,   0.1*iez4),  // 3
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[4].set(0.1*iex5,    0.1*iey5,   0.1*iez5),  // 4
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[5].set( 0.1*iex6,   0.1*iey6,   0.1*iez6),  // 5
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[6].set(0.1*iex7,    0.1*iey7,   0.1*iez7),  // 6
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[7].set( 0.1*iex8,   0.1*iey8,   0.1*iez8),
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[8].set(0.1*iex9,    0.1*iey9,   0.1*iez9), 
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[9].set( 0.1*iex10,  0.1*iey10,  0.1*iez10),
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[10].set(0.1*iex11,  0.1*iey11,  0.1*iez11),  // 0
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[11].set( 0.1*iex12, 0.1*iey12,  0.1*iez12),  // 1
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[12].set(0.1*iex13,  0.1*iey13,  0.1*iez13),  // 2
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[13].set( 0.1*iex14, 0.1*iey14,  0.1*iez14),  // 3
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[14].set(0.1*iex15,  0.1*iey15,  0.1*iez15),  // 4
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[15].set( 0.1*iex16, 0.1*iey16,  0.1*iez16),  // 5
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[16].set(0.1*iex17,  0.1*iey17,  0.1*iez17),  // 6
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[17].set( 0.1*iex18, 0.1*iey18,  0.1*iez18),
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[18].set(0.1*iex19,  0.1*iey19,  0.1*iez19), 
  geomIcosa.elementsNeedUpdate=true;
  geomIcosa.faces[19].set( 0.1*iex20, 0.1*iey20,  0.1*iez20),
  geomIcosa.elementsNeedUpdate=true;

}




var geomTriangle = new THREE.Geometry();

geomTriangle.vertices.push(new THREE.Vector3(0.4,0.3,0),
new THREE.Vector3(0,0.4,0),
new THREE.Vector3(0.2,0.1,0),);


geomTriangle.faces.push( new THREE.Face3( 0, 1, 2 ) );

var material = new THREE.MeshBasicMaterial( { color: 0x099556 } );
var triangle = new THREE.Mesh( geomTriangle, material );


function DrawTriangle(){
	
	var condition = document.getElementById('TriangleDraw').checked;
	if( condition == true) {

		scene.add(triangle );
		addScale();


	} else {
		scene.remove(triangle);
		document.getElementById('TriangleActive').checked = false;
		ActiveTriangle();
	}

}
function ActiveTriangle(){

	var condition1 = document.getElementById('TriangleActive').checked;
	var condition2 = document.getElementById('TriangleDraw').checked;
	if( condition1 == true && condition2 == true) {
		//cube.position.set(0,0,0);

		s41.position.set(0.4,0.3,0);
		s42.position.set(0,0.4,0);
		s43.position.set(0.2,0.1,0);
		
		
		scene.add(s41);
		scene.add(s42);
		scene.add(s43);

		TriTActive();
	} else {
		scene.remove(s41);
		scene.remove(s42);
		scene.remove(s43);

	}	

}



function TriTActive()
{
	var tx = Number(document.getElementById('TriX').value);
	var ty = Number(document.getElementById('TriY').value);
	var tz = Number(document.getElementById('TriZ').value);
	var sx=  Number(document.getElementById('sliderStatus').innerHTML);
	var tix1 = Number(document.getElementById('TriangleiX1').value);
	var tiy1 = Number(document.getElementById('TriangleiY1').value);
	var tiz1 = Number(document.getElementById('TriangleiZ1').value);

	var tix2 = Number(document.getElementById('TriangleiX2').value);
	var tiy2 = Number(document.getElementById('TriangleiY2').value);
	var tiz2 = Number(document.getElementById('TriangleiZ2').value);

	var tix3 = Number(document.getElementById('TriangleiX3').value);
	var tiy3 = Number(document.getElementById('TriangleiY3').value);
	var tiz3 = Number(document.getElementById('TriangleiZ3').value);
	s41.position.set(tx*0.1+0.1*tix1*sx, ty*0.1+ 0.1*tiy1*sx, tz*0.1+0.1*tiz1*sx);
	s42.position.set(tx*0.1 +0.1*tix2*sx,ty*0.1 +0.1*tiy2*sx, tz*0.1+0.1*tiz2*sx);
	s43.position.set(tx*0.1+0.1*tix3*sx, ty*0.1+0.1*tiy3*sx, tz*0.1+0.1*tiz3*sx);

	scene.add(s41);
	scene.add(s42);
	scene.add(s43);

	document.getElementById('TriangleActive').checked = true;
}



function TriInput(){
	var tix1 = Number(document.getElementById('TriangleiX1').value);
	var tiy1 = Number(document.getElementById('TriangleiY1').value);
	var tiz1 = Number(document.getElementById('TriangleiZ1').value);

	var tix2 = Number(document.getElementById('TriangleiX2').value);
	var tiy2 = Number(document.getElementById('TriangleiY2').value);
	var tiz2 = Number(document.getElementById('TriangleiZ2').value);

	var tix3 = Number(document.getElementById('TriangleiX3').value);
	var tiy3 = Number(document.getElementById('TriangleiY3').value);
	var tiz3 = Number(document.getElementById('TriangleiZ3').value);

	

  geomTriangle.vertices[0].set(0.1*tix1, 0.1*tiy1,  0.1*tiz1),  // 0
  geomTriangle.verticesNeedUpdate=true;
  geomTriangle.vertices[1].set( 0.1*tix2, 0.1*tiy2,  0.1*tiz2),  // 1
  geomTriangle.verticesNeedUpdate=true;
  geomTriangle.vertices[2].set(0.1*tix3,  0.1*tiy3,  0.1*tiz3),  // 2
  geomTriangle.verticesNeedUpdate=true;
 
  }


function TriFaceInput(){
	var tex1 = Number(document.getElementById('TriangleeX').value);
	var tey1 = Number(document.getElementById('TriangleeY').value);
	var tez1 = Number(document.getElementById('TriangleeZ').value);

  geomTriangle.faces[0].set(0.1*tex1, 0.1*tey1,  0.1*tez1),  // 0
  geomTriangle.elementsNeedUpdate=true; 
 
  }




var geomcube = new THREE.Geometry();
var vertices = [
 new THREE.Vector3( -0.1, -0.1,  0.1),  // 0
  new THREE.Vector3( 0.1, -0.1,  0.1),  // 1
  new THREE.Vector3(-0.1,  0.1,  0.1),  // 2
  new THREE.Vector3( 0.1,  0.1,  0.1),  // 3
  new THREE.Vector3(-0.1, -0.1, -0.1),  // 4
  new THREE.Vector3( 0.1, -0.1, -0.1),  // 5
  new THREE.Vector3(-0.1,  0.1, -0.1),  // 6
  new THREE.Vector3( 0.1,  0.1, -0.1),
        ];
 geomcube.vertices = vertices;
var color = new THREE.Color( 0xFF250E );
var normal=new THREE.Vector3(0,1,0);
 var materialIndex = 0;
 var faces=[
  new THREE.Face3(0, 3, 2),
  new THREE.Face3(0, 1, 3),
  // right
  new THREE.Face3(1, 7, 3),
  new THREE.Face3(1, 5, 7),
  // back
  new THREE.Face3(5, 6, 7),
  new THREE.Face3(5, 4, 6),
  // left
  new THREE.Face3(4, 2, 6),
  new THREE.Face3(4, 0, 2),
  // top
  new THREE.Face3(2, 7, 6),
  new THREE.Face3(2, 3, 7),
  // bottom
  new THREE.Face3(4, 1, 0),
  new THREE.Face3(4, 5, 1),
];
geomcube.faces = faces;
geomcube.computeFaceNormals();
geomcube.computeVertexNormals();
var material = new THREE.MeshBasicMaterial( { color: 0x099556 } );

var cube = new THREE.Mesh( geomcube, material );
cube.position.set(0,0,0);

function DrawCube() {

	
	var condition = document.getElementById('CubeDraw').checked;
	if( condition == true) {


		scene.add( cube );
		//scene.add(newWP1);
		addScale();

  

	} else {
		scene.remove(cube);
		document.getElementById('CubeActive').checked = false;
		ActiveCube();
	}
}



// Vertices of the figures in the world
function ActiveCube() {
	var condition1 = document.getElementById('CubeActive').checked;
	var condition2 = document.getElementById('CubeDraw').checked;
	if( condition1 == true && condition2 == true) {
		//cube.position.set(0,0,0);

		s1.position.set(0.1, 0.1, -0.1);
		s2.position.set(0.1, 0.1, 0.1);
		s3.position.set(-0.1, 0.1, -0.1);
		s4.position.set(0.1, -0.1, 0.1);
		s5.position.set(0.1, -0.1, -0.1);
		s6.position.set(-0.1, -0.1, 0.1);
		s7.position.set(-0.1, 0.1, 0.1);
		s8.position.set(-0.1, -0.1, -0.1);
		
		scene.add(s1);
		scene.add(s2);
		scene.add(s3);
		scene.add(s4);
		scene.add(s5);
		scene.add(s6);
		scene.add(s7);
		scene.add(s8);
		CubeTActive();
	} else {
		scene.remove(s1);
		scene.remove(s2);
		scene.remove(s3);
		scene.remove(s4);
		scene.remove(s5);
		scene.remove(s6);
		scene.remove(s7);
		scene.remove(s8);
	}
}


function CubeTrans() {
	var condition1 = document.getElementById('CubeDraw').checked;
	if(condition1==true){
	document.getElementById('CubeActive').checked = false;
	ActiveCube();

	var cx = Number(document.getElementById('CubeX').value);
	var cy = Number(document.getElementById('CubeY').value);
	var cz = Number(document.getElementById('CubeZ').value);
	
	cube.position.x = cx*0.1;
	cube.position.y = cy*0.1;
	cube.position.z = cz*0.1;

}
	// body...
}

function CubeTActive(){
	

	var cx = Number(document.getElementById('CubeX').value);
	var cy = Number(document.getElementById('CubeY').value);
	var cz = Number(document.getElementById('CubeZ').value);
	var sx=(document.getElementById('sliderStatus').innerHTML);
	var cix1 = Number(document.getElementById('CubeiX1').value);
	var ciy1 = Number(document.getElementById('CubeiY1').value);
	var ciz1 = Number(document.getElementById('CubeiZ1').value);

	var cix2 = Number(document.getElementById('CubeiX2').value);
	var ciy2 = Number(document.getElementById('CubeiY2').value);
	var ciz2 = Number(document.getElementById('CubeiZ2').value);

	var cix3 = Number(document.getElementById('CubeiX3').value);
	var ciy3 = Number(document.getElementById('CubeiY3').value);
	var ciz3 = Number(document.getElementById('CubeiZ3').value);

	var cix4 = Number(document.getElementById('CubeiX4').value);
	var ciy4 = Number(document.getElementById('CubeiY4').value);
	var ciz4 = Number(document.getElementById('CubeiZ4').value);

	var cix5 = Number(document.getElementById('CubeiX5').value);
	var ciy5 = Number(document.getElementById('CubeiY5').value);
	var ciz5 = Number(document.getElementById('CubeiZ5').value);

	var cix6 = Number(document.getElementById('CubeiX6').value);
	var ciy6 = Number(document.getElementById('CubeiY6').value);
	var ciz6 = Number(document.getElementById('CubeiZ6').value);

	var cix7 = Number(document.getElementById('CubeiX7').value);
	var ciy7 = Number(document.getElementById('CubeiY7').value);
	var ciz7 = Number(document.getElementById('CubeiZ7').value);

	var cix8 = Number(document.getElementById('CubeiX8').value);
	var ciy8 = Number(document.getElementById('CubeiY8').value);
	var ciz8 = Number(document.getElementById('CubeiZ8').value);
	s1.position.set(0.1*cix1*sx +cx*0.1, 0.1*ciy1*sx+cy*0.1,0.1*ciz1*sx+cz*0.1);
	s2.position.set(0.1*cix2*sx +cx*0.1, 0.1*ciy2*sx+cy*0.1,0.1*ciz2*sx+cz*0.1);
	s3.position.set(0.1*cix3*sx +cx*0.1, 0.1*ciy3*sx+cy*0.1,0.1*ciz3*sx+cz*0.1);
	s4.position.set(0.1*cix4*sx +cx*0.1, 0.1*ciy4*sx+cy*0.1,0.1*ciz4*sx+cz*0.1);
	s5.position.set(0.1*cix5*sx +cx*0.1, 0.1*ciy5*sx+cy*0.1,0.1*ciz5*sx+cz*0.1);
	s6.position.set(0.1*cix6*sx +cx*0.1, 0.1*ciy6*sx+cy*0.1,0.1*ciz6*sx+cz*0.1);
	s7.position.set(0.1*cix7*sx +cx*0.1, 0.1*ciy7*sx+cy*0.1,0.1*ciz7*sx+cz*0.1);
	s8.position.set(0.1*cix8*sx +cx*0.1, 0.1*ciy8*sx+cy*0.1,0.1*ciz8*sx+cz*0.1)
		scene.add(s1);
		scene.add(s2);
		scene.add(s3);
		scene.add(s4);
		scene.add(s5);
		scene.add(s6);
		scene.add(s7);
		scene.add(s8);
	document.getElementById('CubeActive').checked = true;
}





function CubeInput(){
	var cix1 = Number(document.getElementById('CubeiX1').value);
	var ciy1 = Number(document.getElementById('CubeiY1').value);
	var ciz1 = Number(document.getElementById('CubeiZ1').value);

	var cix2 = Number(document.getElementById('CubeiX2').value);
	var ciy2 = Number(document.getElementById('CubeiY2').value);
	var ciz2 = Number(document.getElementById('CubeiZ2').value);

	var cix3 = Number(document.getElementById('CubeiX3').value);
	var ciy3 = Number(document.getElementById('CubeiY3').value);
	var ciz3 = Number(document.getElementById('CubeiZ3').value);

	var cix4 = Number(document.getElementById('CubeiX4').value);
	var ciy4 = Number(document.getElementById('CubeiY4').value);
	var ciz4 = Number(document.getElementById('CubeiZ4').value);

	var cix5 = Number(document.getElementById('CubeiX5').value);
	var ciy5 = Number(document.getElementById('CubeiY5').value);
	var ciz5 = Number(document.getElementById('CubeiZ5').value);

	var cix6 = Number(document.getElementById('CubeiX6').value);
	var ciy6 = Number(document.getElementById('CubeiY6').value);
	var ciz6 = Number(document.getElementById('CubeiZ6').value);

	var cix7 = Number(document.getElementById('CubeiX7').value);
	var ciy7 = Number(document.getElementById('CubeiY7').value);
	var ciz7 = Number(document.getElementById('CubeiZ7').value);

	var cix8 = Number(document.getElementById('CubeiX8').value);
	var ciy8 = Number(document.getElementById('CubeiY8').value);
	var ciz8 = Number(document.getElementById('CubeiZ8').value);

  geomcube.vertices[0].set(0.1*cix1, 0.1*ciy1,  0.1*ciz1),  // 0

  geomcube.verticesNeedUpdate=true;
  geomcube.vertices[1].set( 0.1*cix2, 0.1*ciy2,  0.1*ciz2),  // 1
  geomcube.verticesNeedUpdate=true;
  geomcube.vertices[2].set(0.1*cix3,  0.1*ciy3,  0.1*ciz3),  // 2
  geomcube.verticesNeedUpdate=true;
  geomcube.vertices[3].set( 0.1*cix4,  0.1*ciy4,  0.1*ciz4),  // 3
  geomcube.verticesNeedUpdate=true;
  geomcube.vertices[4].set(0.1*cix5, 0.1*ciy5, 0.1*ciz5),  // 4
  geomcube.verticesNeedUpdate=true;
  geomcube.vertices[5].set( 0.1*cix6, 0.1*ciy6, 0.1*ciz6),  // 5
  geomcube.verticesNeedUpdate=true;
  geomcube.vertices[6].set(0.1*cix7,  0.1*ciy7, 0.1*ciz7),  // 6
  geomcube.verticesNeedUpdate=true;
  geomcube.vertices[7].set( 0.1*cix8,  0.1*ciy8, 0.1*ciz8),
  geomcube.verticesNeedUpdate=true;
  }



function CubeFaceInput(){
	var cex1 = Number(document.getElementById('CubeeX1').value);
	var cey1 = Number(document.getElementById('CubeeY1').value);
	var cez1 = Number(document.getElementById('CubeeZ1').value);

	var cex2 = Number(document.getElementById('CubeeX2').value);
	var cey2 = Number(document.getElementById('CubeeY2').value);
	var cez2 = Number(document.getElementById('CubeeZ2').value);

	var cex3 = Number(document.getElementById('CubeeX3').value);
	var cey3 = Number(document.getElementById('CubeeY3').value);
	var cez3 = Number(document.getElementById('CubeeZ3').value);

	var cex4 = Number(document.getElementById('CubeeX4').value);
	var cey4 = Number(document.getElementById('CubeeY4').value);
	var cez4 = Number(document.getElementById('CubeeZ4').value);

	var cex5 = Number(document.getElementById('CubeeX5').value);
	var cey5 = Number(document.getElementById('CubeeY5').value);
	var cez5 = Number(document.getElementById('CubeeZ5').value);

	var cex6 = Number(document.getElementById('CubeeX6').value);
	var cey6 = Number(document.getElementById('CubeeY6').value);
	var cez6 = Number(document.getElementById('CubeeZ6').value);

	var cex7 = Number(document.getElementById('CubeeX7').value);
	var cey7 = Number(document.getElementById('CubeeY7').value);
	var cez7 = Number(document.getElementById('CubeeZ7').value);

	var cex8 = Number(document.getElementById('CubeeX8').value);
	var cey8 = Number(document.getElementById('CubeeY8').value);
	var cez8 = Number(document.getElementById('CubeeZ8').value);

	var cex9 = Number(document.getElementById('CubeeX9').value);
	var cey9 = Number(document.getElementById('CubeeY9').value);
	var cez9 = Number(document.getElementById('CubeeZ9').value);

	var cex10 = Number(document.getElementById('CubeeX10').value);
	var cey10 = Number(document.getElementById('CubeeY10').value);
	var cez10 = Number(document.getElementById('CubeeZ10').value);

	var cex11 = Number(document.getElementById('CubeeX11').value);
	var cey11 = Number(document.getElementById('CubeeY11').value);
	var cez11 = Number(document.getElementById('CubeeZ11').value);

	var cex12 = Number(document.getElementById('CubeeX12').value);
	var cey12 = Number(document.getElementById('CubeeY12').value);
	var cez12 = Number(document.getElementById('CubeeZ12').value);

  geomcube.faces[0].set(0.1*cex1, 0.1*cey1,  0.1*cez1),  // 0

  geomcube.elementsNeedUpdate=true;
  geomcube.faces[1].set( 0.1*cex2, 0.1*cey2,  0.1*cez2),  // 1
  geomcube.elementsNeedUpdate=true;
  geomcube.faces[2].set(0.1*cex3,  0.1*cey3,  0.1*cez3),  // 2
  geomcube.elementsNeedUpdate=true;
  geomcube.faces[3].set( 0.1*cex4,  0.1*cey4,  0.1*cez4),  // 3
  geomcube.elementsNeedUpdate=true;
  geomcube.faces[4].set(0.1*cex5, 0.1*ciy5, 0.1*cez5),  // 4
  geomcube.elementsNeedUpdate=true;
  geomcube.faces[5].set( 0.1*cex6, 0.1*cey6, 0.1*cez6),  // 5
  geomcube.elementsNeedUpdate=true;
  geomcube.faces[6].set(0.1*cex7,  0.1*cey7, 0.1*cez7),  // 6
  geomcube.elementsNeedUpdate=true;
  geomcube.faces[7].set( 0.1*cex8,  0.1*cey8, 0.1*cez8),
  geomcube.elementsNeedUpdate=true;
  geomcube.faces[8].set(0.1*cex9, 0.1*cey5, 0.1*cez9),  // 4
  geomcube.elementsNeedUpdate=true;
  geomcube.faces[9].set( 0.1*cex10, 0.1*cey10, 0.1*cez10),  // 5
  geomcube.elementsNeedUpdate=true;
  geomcube.faces[10].set(0.1*cex11,  0.1*cey11, 0.1*cez11),  // 6
  geomcube.elementsNeedUpdate=true;
  geomcube.faces[11].set( 0.1*cex12,  0.1*cey12, 0.1*cez12),
  geomcube.elementsNeedUpdate=true;
  }







function sliderChange(val){
    document.getElementById('sliderStatus').innerHTML=val; 
}


function addScale(){
	var conditionAnimation = document.getElementById('animation').checked;
	if(conditionAnimation==true){
    
	var condition= document.getElementById('CubeDraw').checked;
	var condition2= document.getElementById('DodecahedronDraw').checked;
	var condition1= document.getElementById('IcosahedronDraw').checked;
	var condition3=document.getElementById('TriangleDraw').checked;
    var sx=(document.getElementById('sliderStatus').innerHTML);
    var sy=(document.getElementById('sliderStatus').innerHTML);
    //XScale = Number(document.getElementById('ScaleX').value);
	//YScale = Number(document.getElementById('ScaleY').value);
	//ZScale = Number(document.getElementById('ScaleZ').value);
	
   
				if(condition){
					frame = Number(document.getElementById('fscc').value);
				coms=frame/1000;
    
				XScale = Number(document.getElementById('ScalecX').value);
				YScale = Number(document.getElementById('ScalecY').value);
				ZScale = Number(document.getElementById('ScalecZ').value);
				
				if(sx<=coms+1){
				
				if(sx<=XScale&&sy<=YScale&&sx<=ZScale){
					cube.scale.set(sx,sy,sx);
				}
				else if(sy<=YScale && sx>XScale && sx>ZScale){
					cube.scale.set(XScale,sy,ZScale);
				}
				else if(sy<=YScale && sx>XScale && sx<=ZScale){
					cube.scale.set(XScale,sy,sx);
				}
				else if(sy>YScale && sx>XScale && sx<=ZScale){
					cube.scale.set(XScale,YScale,sx);
				}
				else if(sy>YScale && sx<=XScale && sx>ZScale){
					cube.scale.set(sx,YScale,ZScale);
				}
				else if(sy>YScale && sx>=XScale && sx<=ZScale){
					cube.scale.set(XScale,YScale,sz);
				}
				else if(sy<=YScale && sx<=XScale && sx>ZScale){
					cube.scale.set(sx,sy,ZScale);
				}
				else{
					cube.scale.set(XScale,YScale,ZScale);
				}

   				}
   				framet = Number(document.getElementById('ftlc').value);
				comt=framet/1000;
    if((sx>(coms+1))&&(sx<=(1+coms+comt)))
    {			XScale = Number(document.getElementById('xtlc').value);
				YScale = Number(document.getElementById('ytlc').value);
				ZScale = Number(document.getElementById('ztlc').value);
				
    	cube.position.x=0.1*(sx-(coms+1))*XScale;
    	cube.position.y= 0.1*(sx-(coms+1))*YScale;
    	cube.position.z=0.1*(sx-(coms+1))*ZScale;


    }
    framesr = Number(document.getElementById('frtc').value);
	comr=framesr/1000;
     if(sx>(1+coms+comt)&&sx<=(1+coms+comt+comr))
    {	Rotavaluec = document.getElementById('Rotavaluec').value;
		Rotac = document.getElementById('Rotac').value;
    	if(Rotac=="X")
    	cube.rotation.x=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    	if(Rotac=="Y")
    	cube.rotation.y=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    	if(Rotac=="Z")
    	cube.rotation.z=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    }
    frame1c = Number(document.getElementById('ftl1c').value);
				comt1=frame1c/1000;
     if(sx>(1+coms+comt+comr)&&sx<=(1+coms+comt+comr+comt1))
    {			XScale = Number(document.getElementById('xtl1c').value);
				YScale = Number(document.getElementById('ytl1c').value);
				ZScale = Number(document.getElementById('ztl1c').value);
				
    	cube.position.x= 0.1*(sx-(1+coms+comt+comr))*XScale;
    	cube.position.y= 0.1*(sx-(1+coms+comt+comr))*YScale;
    	cube.position.z= 0.1*(sx-(1+coms+comt+comr))*ZScale;

    }

				document.getElementById('CubeActive').checked = false;
				ActiveCube();
				CubeCoord();
			}

			if(condition1){
					frame = Number(document.getElementById('fsch').value);
				coms=frame/1000;
    
				XScale = Number(document.getElementById('ScalehX').value);
				YScale = Number(document.getElementById('ScalehY').value);
				ZScale = Number(document.getElementById('ScalehZ').value);
				if(sx<=coms+1){
				
				if(sx<=XScale&&sy<=YScale&&sx<=ZScale){
					icosahedron.scale.set(sx,sy,sx);
				}
				else if(sy<=YScale && sx>XScale && sx>ZScale){
					icosahedron.scale.set(XScale,sy,ZScale);
				}
				else if(sy<=YScale && sx>XScale && sx<=ZScale){
					icosahedron.scale.set(XScale,sy,sx);
				}
				else if(sy>YScale && sx>XScale && sx<=ZScale){
					icosahedron.scale.set(XScale,YScale,sx);
				}
				else if(sy>YScale && sx<=XScale && sx>ZScale){
					icosahedron.scale.set(sx,YScale,ZScale);
				}
				else if(sy>YScale && sx>=XScale && sx<=ZScale){
					icosahedron.scale.set(XScale,YScale,sz);
				}
				else if(sy<=YScale && sx<=XScale && sx>ZScale){
					icosahedron.scale.set(sx,sy,ZScale);
				}
				else{
					icosahedron.scale.set(XScale,YScale,ZScale);
				}

   				}
   				framet = Number(document.getElementById('ftli').value);
				comt=framet/1000;
    if((sx>(coms+1))&&(sx<=(1+coms+comt)))
    {			XScale = Number(document.getElementById('xtli').value);
				YScale = Number(document.getElementById('ytli').value);
				ZScale = Number(document.getElementById('ztli').value);
				
    	icosahedron.position.x=0.1*(sx-(coms+1))*XScale;
    	icosahedron.position.y= 0.1*(sx-(coms+1))*YScale;
    	icosahedron.position.z=0.1*(sx-(coms+1))*ZScale;


    }
    framesr = Number(document.getElementById('frti').value);
	comr=framesr/1000;
     if(sx>(1+coms+comt)&&sx<=(1+coms+comt+comr))
    {	Rotavaluec = document.getElementById('Rotavaluei').value;
		Rotac = document.getElementById('Rotai').value;
    	if(Rotac=="X")
    	icosahedron.rotation.x=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    	if(Rotac=="Y")
    	icosahedron.rotation.y=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    	if(Rotac=="Z")
    	icosahedron.rotation.z=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    }
    frame1c = Number(document.getElementById('ftl1i').value);
				comt1=frame1c/1000;
     if(sx>(1+coms+comt+comr)&&sx<=(1+coms+comt+comr+comt1))
    {			XScale = Number(document.getElementById('xtl1i').value);
				YScale = Number(document.getElementById('ytl1i').value);
				ZScale = Number(document.getElementById('ztl1i').value);
				
    	icosahedron.position.x= 0.1*(sx-(1+coms+comt+comr))*XScale;
    	icosahedron.position.y= 0.1*(sx-(1+coms+comt+comr))*YScale;
    	icosahedron.position.z= 0.1*(sx-(1+coms+comt+comr))*ZScale;

    }

				document.getElementById('IcosahedronActive').checked = false;
				ActiveIcosahedron();
				IcosaCoord();
			}





			if(condition3){
					frame = Number(document.getElementById('fsct').value);
				coms=frame/1000;
    
				XScale = Number(document.getElementById('ScaletX').value);
				YScale = Number(document.getElementById('ScaletY').value);
				ZScale = Number(document.getElementById('ScaletZ').value);
				
				if(sx<=coms+1){

						if(sx<=XScale&&sy<=YScale&&sx<=ZScale){
					triangle.scale.set(sx,sy,sx);
				}
				else if(sy<=YScale && sx>XScale && sx>ZScale){
					triangle.scale.set(XScale,sy,ZScale);
				}
				else if(sy<=YScale && sx>XScale && sx<=ZScale){
					triangle.scale.set(XScale,sy,sx);
				}
				else if(sy>YScale && sx>XScale && sx<=ZScale){
					triangle.scale.set(XScale,YScale,sx);
				}
				else if(sy>YScale && sx<=XScale && sx>ZScale){
					triangle.scale.set(sx,YScale,ZScale);
				}
				else if(sy>YScale && sx>=XScale && sx<=ZScale){
					triangle.scale.set(XScale,YScale,sz);
				}
				else if(sy<=YScale && sx<=XScale && sx>ZScale){
					triangle.scale.set(sx,sy,ZScale);
				}
				else{
					triangle.scale.set(XScale,YScale,ZScale);
				}

					
				
				   				}
   				framet = Number(document.getElementById('ftlt').value);
				comt=framet/1000;
    if((sx>(coms+1))&&(sx<=(1+coms+comt)))
    {			XScale = Number(document.getElementById('xtlt').value);
				YScale = Number(document.getElementById('ytlt').value);
				ZScale = Number(document.getElementById('ztlt').value);
				
    	triangle.position.x=0.1*(sx-(coms+1))*XScale;
    	triangle.position.y= 0.1*(sx-(coms+1))*YScale;
    	triangle.position.z=0.1*(sx-(coms+1))*ZScale;


    }
    framesr = Number(document.getElementById('frtt').value);
	comr=framesr/1000;
     if(sx>(1+coms+comt)&&sx<=(1+coms+comt+comr))
    {	Rotavaluec = document.getElementById('Rotavaluet').value;
		Rotac = document.getElementById('Rotat').value;
    	if(Rotac=="X")
    	triangle.rotation.x=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    	if(Rotac=="Y")
    	triangle.rotation.y=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    	if(Rotac=="Z")
    	triangle.rotation.z=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    }
    frame1c = Number(document.getElementById('ftl1t').value);
				comt1=frame1c/1000;
     if(sx>(1+coms+comt+comr)&&sx<=(1+coms+comt+comr+comt1))
    {			XScale = Number(document.getElementById('xtl1t').value);
				YScale = Number(document.getElementById('ytl1t').value);
				ZScale = Number(document.getElementById('ztl1t').value);
				
    	triangle.position.x= 0.1*(sx-(1+coms+comt+comr))*XScale;
    	triangle.position.y= 0.1*(sx-(1+coms+comt+comr))*YScale;
    	triangle.position.z= 0.1*(sx-(1+coms+comt+comr))*ZScale;

    }

				document.getElementById('TriangleActive').checked = false;
				ActiveTriangle();
				TriCoord();
			}


			if(condition3){
					frame = Number(document.getElementById('fsdc').value);
				coms=frame/1000;
    
				XScale = Number(document.getElementById('ScaledX').value);
				YScale = Number(document.getElementById('ScaledY').value);
				ZScale = Number(document.getElementById('ScaledZ').value);
				
				if(sx<=coms+1){
				
				if(sx<=XScale&&sy<=YScale&&sx<=ZScale){
					dodecahedron.scale.set(sx,sy,sx);
				}
				else if(sy<=YScale && sx>XScale && sx>ZScale){
					dodecahedron.scale.set(XScale,sy,ZScale);
				}
				else if(sy<=YScale && sx>XScale && sx<=ZScale){
					dodecahedron.scale.set(XScale,sy,sx);
				}
				else if(sy>YScale && sx>XScale && sx<=ZScale){
					dodecahedron.scale.set(XScale,YScale,sx);
				}
				else if(sy>YScale && sx<=XScale && sx>ZScale){
					dodecahedron.scale.set(sx,YScale,ZScale);
				}
				else if(sy>YScale && sx>=XScale && sx<=ZScale){
					dodecahedron.scale.set(XScale,YScale,sz);
				}
				else if(sy<=YScale && sx<=XScale && sx>ZScale){
					dodecahedron.scale.set(sx,sy,ZScale);
				}
				else{
					dodecahedron.scale.set(XScale,YScale,ZScale);
				}

   				}
   				framet = Number(document.getElementById('ftld').value);
				comt=framet/1000;
    if((sx>(coms+1))&&(sx<=(1+coms+comt)))
    {			XScale = Number(document.getElementById('xtld').value);
				YScale = Number(document.getElementById('ytld').value);
				ZScale = Number(document.getElementById('ztld').value);
				
    	dodecahedron.position.x=0.1*(sx-(coms+1))*XScale;
    	dodecahedron.position.y= 0.1*(sx-(coms+1))*YScale;
    	dodecahedron.position.z=0.1*(sx-(coms+1))*ZScale;


    }
    framesr = Number(document.getElementById('frtd').value);
	comr=framesr/1000;
     if(sx>(1+coms+comt)&&sx<=(1+coms+comt+comr))
    {	Rotavaluec = document.getElementById('Rotavalued').value;
		Rotac = document.getElementById('Rotad').value;
    	if(Rotac=="X")
    	dodecahedron.rotation.x=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    	if(Rotac=="Y")
    	dodecahedron.rotation.y=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    	if(Rotac=="Z")
    	dodecahedron.rotation.z=(sx-(1+coms+comt))*Rotavaluec*Math.PI/180;
    }
    frame1c = Number(document.getElementById('ftl1d').value);
				comt1=frame1c/1000;
     if(sx>(1+coms+comt+comr)&&sx<=(1+coms+comt+comr+comt1))
    {			XScale = Number(document.getElementById('xtl1d').value);
				YScale = Number(document.getElementById('ytl1d').value);
				ZScale = Number(document.getElementById('ztl1d').value);
				
    	dodecahedron.position.x= 0.1*(sx-(1+coms+comt+comr))*XScale;
    	dodecahedron.position.y= 0.1*(sx-(1+coms+comt+comr))*YScale;
    	dodecahedron.position.z= 0.1*(sx-(1+coms+comt+comr))*ZScale;

    }

				document.getElementById('DodecahedronActive').checked = false;
				ActiveDodecahedron();
				DodecCoord();
			}

}
}


function DodecTrans(){
	var condition1 = document.getElementById('DodecahedronDraw').checked;
	if(condition1==true){
	document.getElementById('DodecahedronActive').checked = false;
	ActiveDodecahedron();


	var dx = Number(document.getElementById('DodecX').value);
	var dy = Number(document.getElementById('DodecY').value);
	var dz = Number(document.getElementById('DodecZ').value);

	dodecahedron.position.x = dx*0.1;
	dodecahedron.position.y = dy*0.1;
	dodecahedron.position.z = dz*0.1;

		
}

}

function IcosaTrans() {
	var condition1 = document.getElementById('IcosahedronDraw').checked;
	if(condition1==true){
	document.getElementById('IcosahedronActive').checked = false;
	ActiveIcosahedron();
	
	var ix = Number(document.getElementById('IcoX').value);
	var iy = Number(document.getElementById('IcoY').value);
	var iz = Number(document.getElementById('IcoZ').value);

	icosahedron.position.x = ix*0.1;
	icosahedron.position.y = iy*0.1;
	icosahedron.position.z = iz*0.1;


}
}
function TriTrans(){
	var condition1 = document.getElementById('TriangleDraw').checked;
	if(condition1==true){
	document.getElementById('TriangleActive').checked = false;
	ActiveTriangle();

	var tx = Number(document.getElementById('TriX').value);
	var ty = Number(document.getElementById('TriY').value);
	var tz = Number(document.getElementById('TriZ').value);
	triangle.position.x = tx*0.1;
	triangle.position.y = ty*0.1;
	triangle.position.z = tz*0.1;

}}





function IXScale() {
	var six = Number(document.getElementById('ScaleIX').value);
	if(six>5){
		document.getElementById('Xlimit').innerHTML = " Limit to scale by X axis is 5. Please enter value less than 5";
	}
	else{document.getElementById('Xlimit').innerHTML = "";}

var conditionAnimation = document.getElementById('animation').checked;
	if(conditionAnimation==true){
	var condition= document.getElementById('CubeDraw');
	var condition1= document.getElementById('DodecahedronDraw');
	var condition2= document.getElementById('IcosahedronDraw');
	var condition3=document.getElementById('TriangleDraw');
 
   // XScale = Number(document.getElementById('ScaleX').value);
	//YScale = Number(document.getElementById('ScaleY').value);
	//ZScale = Number(document.getElementById('ScaleZ').value);
   XScale=5;
   YScale=5;
   ZScale=5;

    if(condition)
			{	if(six<=XScale){
					cube.scale.x=six
				}
				document.getElementById('CubeActive').checked = false;
				ActiveCube();
			}
		if(condition1)
			{if(six<=XScale){
					icosahedron.scale.x=six;
				}
				
				
				document.getElementById('IcosahedronActive').checked = false;
				ActiveIcosahedron();
			}
		if(condition2)
			{	if(six<=XScale){
					dodecahedron.scale.x=six;
				}
				document.getElementById('DodecahedronActive').checked = false;
				ActiveDodecahedron();
			}
		if(condition3)
		{	if(six<=XScale){
					triangle.scale.x=six;
				}
			document.getElementById('TriangleActive').checked = false;
			ActiveTriangle();
		}
}
}


function IYScale() {
	var siy = Number(document.getElementById('ScaleIY').value);
	if(siy>5){
		document.getElementById('Ylimit').innerHTML = " Limit to scale by Y axis is 5. Please enter value less than 5";
	}
	else{document.getElementById('Ylimit').innerHTML = "";}
	var conditionAnimation = document.getElementById('animation').checked;
	if(conditionAnimation==true){

	var condition= document.getElementById('CubeDraw');
	var condition1= document.getElementById('DodecahedronDraw');
	var condition2= document.getElementById('IcosahedronDraw');
	var condition3=document.getElementById('TriangleDraw');
 
    // XScale = Number(document.getElementById('ScaleX').value);
	//YScale = Number(document.getElementById('ScaleY').value);
	//ZScale = Number(document.getElementById('ScaleZ').value);
   XScale=5;
   YScale=5;
   ZScale=5;

    if(condition)
			{	if(siy<=YScale){
					cube.scale.y=siy
				}
				document.getElementById('CubeActive').checked = false;
				ActiveCube();
			}
		if(condition1)
			{if(siy<=YScale){
					icosahedron.scale.y=siy;
				}
				
				
				document.getElementById('IcosahedronActive').checked = false;
				ActiveIcosahedron();
			}
		if(condition2)
			{	if(sy<=YScale){
					dodecahedron.scale.y=siy;
				}
				document.getElementById('DodecahedronActive').checked = false;
				ActiveDodecahedron();
			}
		if(condition3)
		{	if(sy<=YScale){
					triangle.scale.y=siy;
				}
			document.getElementById('TriangleActive').checked = false;
			ActiveTriangle();
		}
}}



function IZScale() {	
	var siz = Number(document.getElementById('ScaleIZ').value);
	if(siz>5){
		document.getElementById('Zlimit').innerHTML = " Limit to scale by Z axis is 5. Please enter value less than 5";
	}
	else{document.getElementById('Zlimit').innerHTML = "";}

	var conditionAnimation = document.getElementById('animation').checked;
	if(conditionAnimation==true){
	var condition= document.getElementById('CubeDraw');
	var condition1= document.getElementById('DodecahedronDraw');
	var condition2= document.getElementById('IcosahedronDraw');
	var condition3=document.getElementById('TriangleDraw');
 
     // XScale = Number(document.getElementById('ScaleX').value);
	//YScale = Number(document.getElementById('ScaleY').value);
	//ZScale = Number(document.getElementById('ScaleZ').value);
   XScale=5;
   YScale=5;
   ZScale=5;

    if(condition)
			{	if(siz<=ZScale){
					cube.scale.z=siz
				}
				document.getElementById('CubeActive').checked = false;
				ActiveCube();
			}
		if(condition1)
			{if(siz<=ZScale){
					icosahedron.scale.z=siz;
				}
				
				
				document.getElementById('IcosahedronActive').checked = false;
				ActiveIcosahedron();
			}
		if(condition2)
			{	if(siz<=ZScale){
					dodecahedron.scale.z=siz;
				}
				document.getElementById('DodecahedronActive').checked = false;
				ActiveDodecahedron();
			}
		if(condition3)
		{	if(siz<=ZScale){
					triangle.scale.z=siz;
				}
			document.getElementById('TriangleActive').checked = false;
			ActiveTriangle();
		}
}}







//camera.position.set(0.5,-0.25,1.5)
camera.position.set(0.5,-0.25,2.2);

var ambientLight = new THREE.AmbientLight(0x099556, 0.7);
scene.add(ambientLight);

var light = new THREE.PointLight( 0xffffff, 3, 100 );
light.position.set( 0, 0.2, -0.5 );
scene.add( light );

// Moving Light by using arrows
var xSpeed = 2;
var ySpeed = 2;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 40) {
        light.position.y += ySpeed;
    } else if (keyCode == 38) {
        light.position.y -= ySpeed;
    } else if (keyCode == 39) {
        light.position.x -= xSpeed;
    } else if (keyCode == 37) {
        light.position.x += xSpeed;
    }
};


function WdrawXY() {

	// Vertical lines
	var x = 2, y = 2;
	var i = 0;
	for(i = -20; i < 20; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( x, y, 0));
		grid.vertices.push(new THREE.Vector3( x, -y, 0));
		var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(verticalyz);
		x = x - 0.1;
	}

	//Horizontal lines
	var x = 2, y = 2;
	var i = 0;
	for(i = -19; i < 20; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( x, y, 0));
		grid.vertices.push(new THREE.Vector3( -x, y, 0));
		var horizontalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(horizontalyz);
		y = y - 0.1;
	}
}


//X-axis red line 
var X = new THREE.Geometry();
var x_material = new THREE.LineBasicMaterial({color: 'red'});
X.vertices.push(new THREE.Vector3( -0.6, 0, 0));
X.vertices.push(new THREE.Vector3(0.6, 0, 0));
var X_direction = new THREE.Line(X, x_material, THREE.LineSegments);
scene.add(X_direction);

//Y-axis green line 
var Y = new THREE.Geometry();
var y_material = new THREE.LineBasicMaterial({color: 0x3EF70F});
Y.vertices.push(new THREE.Vector3( 0, 0.6, 0));
Y.vertices.push(new THREE.Vector3(0, -0.6, 0));
var Y_direction = new THREE.Line(Y, y_material, THREE.LineSegments);
scene.add(Y_direction);

//Z-axis blue line
var Z = new THREE.Geometry();
var z_material = new THREE.LineBasicMaterial({color: 0x3CEFF1});
Z.vertices.push(new THREE.Vector3( 0, 0, -0.6));
Z.vertices.push(new THREE.Vector3(0, 0, 0.6));
var Z_direction = new THREE.Line(Z, z_material, THREE.LineSegments);
scene.add(Z_direction);

//Arrow +x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 'red'} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0.55,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 270*(Math.PI / 180);
scene.add( cone );

//Arrow -x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 'red'} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(-0.55,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 90*(Math.PI / 180);
scene.add( cone );

//Arrow +y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,0.55,0);
scene.add( cone );

//Arrow -y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,-0.55,0);
cone.rotation.x = 180*(Math.PI / 180);
scene.add( cone );

//Arrow +z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, 0.55);
cone.rotation.x = 90*(Math.PI / 180);
scene.add( cone );

//Arrow -z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, -0.55);
cone.rotation.x = -90*(Math.PI / 180);
scene.add( cone );

									//   EXTRA ARROWS

//Arrow +x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0XF7FF00} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0.15,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 270*(Math.PI / 180);
scene.add( cone );

//Arrow -x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0XF7FF00} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(-0.15,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 90*(Math.PI / 180);
scene.add( cone );

//Arrow +y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,0.15,0);
scene.add( cone );

//Arrow -y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,-0.15,0);
cone.rotation.x = 180*(Math.PI / 180);
scene.add( cone );

//Arrow +z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, 0.15);
cone.rotation.x = 90*(Math.PI / 180);
scene.add( cone );

//Arrow -z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, -0.15);
cone.rotation.x = -90*(Math.PI / 180);
scene.add( cone );

//Dynamic JavaScript part taking inputs from checkBox

// YZ Grid
var horizontalyz = [];
var verticalyz = [];
var z = 2, y = 2;
var i = 0;
for(i = -20; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( 0, y, z));
	grid.vertices.push(new THREE.Vector3( 0, -y, z));
	verticalyz[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	z = z - 0.1;
}

var z = 2, y = 2;
var i = 0;
for(i = -19; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( 0, y, z));
	grid.vertices.push(new THREE.Vector3( 0, y, -z));
	horizontalyz[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	y = y - 0.1;
}
function drawYZ() {
	var condition = document.getElementById('yzAxis').checked;
	if( condition == true) {

		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.add(verticalyz[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.add(horizontalyz[i]);
			y = y - 0.1;
		}
	}
	
	if( condition == false) {
		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.remove(verticalyz[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.remove(horizontalyz[i]);
			y = y - 0.1;
		}
	}
}

// ZX Grid
var horizontalzx = [];
var verticalzx = [];
var z = 2, x = 2;
var i = 0;
for(i = -20; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, 0, z));
	grid.vertices.push(new THREE.Vector3( -x, 0, z));
	verticalzx[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	z = z - 0.1;
}

var z = 2, x = 2;
var i = 0;
for(i = -19; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, 0, z));
	grid.vertices.push(new THREE.Vector3( x, 0, -z));
	horizontalzx[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	x = x - 0.1;
}
function drawZX() {
	var condition = document.getElementById('zxAxis').checked;
	if( condition == true) {

		// Vertical lines
		var z = 2, x = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.add(verticalzx[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, x = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.add(horizontalzx[i]);
			x = x - 0.1;
		}
	}
	
	if( condition == false) {
		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.remove(verticalzx[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, x = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.remove(horizontalzx[i]);
			x = x - 0.1;
		}
	}
}

// XY Grid
var horizontalxy = [];
var verticalxy = [];
var x = 2, y = 2;
var i = 0;
for(i = -20; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, y, 0));
	grid.vertices.push(new THREE.Vector3( x, -y, 0));
	verticalxy[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	x = x - 0.1;
}

var x = 2, y = 2;
var i = 0;
for(i = -19; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, y, 0));
	grid.vertices.push(new THREE.Vector3( -x, y, 0));
	horizontalxy[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	y = y - 0.1;
}
function drawXY() {
	var condition = document.getElementById('xyAxis').checked;
	if( condition == true) {

		// Vertical lines
		var x = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.add(verticalxy[i]);
			x = x - 0.1;
		}

		//Horizontal lines
		var x = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.add(horizontalxy[i]);
			y = y - 0.1;
		}
	}
	
	if( condition == false) {
		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.remove(verticalxy[i]);
			x = x - 0.1;
		}

		//Horizontal lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.remove(horizontalxy[i]);
			y = y - 0.1;
		}
	}
}

var xd = 0, yd = 0, zd = 0;
function startTransistion() {

	document.getElementById('lockVertices').checked = false;
	lockV();

	xd = Number(document.getElementById('xco').value);
	yd = Number(document.getElementById('yco').value);
	zd = Number(document.getElementById('zco').value);

	xd = xd*0.1;
	yd = yd*0.1;
	zd = zd*0.1;
	
	exmple1.position.set(0.05+xd,-0.2+yd,0+zd);
	exmpl2.position.set(0.35+xd,-0.35+yd,0+zd);
	exmple3.position.set(0.9+xd,-0.35+yd,0+zd);
}
	/*var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
        color: 0xffffff
    }));

    mesh.position.set(0, 0, 0);
    mesh.scale.set(0.5, 0.5, 1);
    mesh.castShadow = true;*/
  
function startAnimation() {

	var conditionAnimation = document.getElementById('animation').checked;

	if(conditionAnimation == false) {
		document.getElementById('lockVertices').checked = false;
		   // XScale = Number(document.getElementById('ScaleX').value);
	//YScale = Number(document.getElementById('ScaleY').value);
	//ZScale = Number(document.getElementById('ScaleZ').value);
   XScale=5;
   YScale=5;
   ZScale=5;


		var condition = document.getElementById('CubeDraw').checked;
		var condition1 = document.getElementById('IcosahedronDraw').checked;
		var condition2 = document.getElementById('DodecahedronDraw').checked;
		var condition3 = document.getElementById('TriangleDraw').checked;
		if(condition)
			{
				cube.scale.set(XScale,YScale,ZScale);
				document.getElementById('CubeActive').checked = false;
				ActiveCube();

			}
		if(condition1)
			{
				icosahedron.scale.set(XScale,YScale,ZScale);
				document.getElementById('IcosahedronActive').checked = false;
				ActiveIcosahedron();
			}
		if(condition2)
		{
			dodecahedron.scale.set(XScale.YScale,ZScale);
			document.getElementById('DodecahedronActive').checked = false;
			ActiveDodecahedron();
		}
		if(condition3)
		{
			triangle.scale.set(XScale,YScale,ZScale);
			document.getElementById('TriangleActive').checked = false;
			ActiveTriangle();
		}


	} else {
		document.getElementById('lockVertices').checked = true;
		lockV();

		var condition = document.getElementById('CubeDraw').checked;
		var condition1 = document.getElementById('IcosahedronDraw').checked;
		var condition2 = document.getElementById('DodecahedronDraw').checked;
		var condition3 = document.getElementById('TriangleDraw').checked;
		if(condition3)
		{	
			triangle.scale.set(1,1,1);

		}
		if(condition)
			{
				cube.scale.set(1,1,1);
			}
		if(condition1)
			{
				icosahedron.scale.set(1,1,1);
			}
		if(condition2)
			{
				dodecahedron.scale.set(1,1,1);
			}
	}
}

scene.add(triangle);




function openFig(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("wrldcontent");
   
    tablinks = document.getElementsByClassName("wrldlinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var prev_state_display = document.getElementById(cityName).style.display;
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    if( prev_state_display === "none"){
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    } else {
        document.getElementById(cityName).style.display = "none";
        evt.currentTarget.className.replace(" active", "");
    }
}


function openCord(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("cordcontent");
   
    tablinks = document.getElementsByClassName("cordlinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var prev_state_display = document.getElementById(cityName).style.display;

    if( prev_state_display === "none"){
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    } else {
        document.getElementById(cityName).style.display = "none";
        evt.currentTarget.className.replace(" active", "");
    }
}

function openTab(evt, TabName) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}


function TriCoord(){
	var condition= document.getElementById('TriangleDraw').checked;
	if(condition==true){
	var tx = Number(document.getElementById('TriX').value);
	var ty = Number(document.getElementById('TriY').value);
	var tz = Number(document.getElementById('TriZ').value);
	var sx=(document.getElementById('sliderStatus').innerHTML);
	var tix1 = Number(document.getElementById('TriangleiX1').value);
	var tiy1 = Number(document.getElementById('TriangleiY1').value);
	var tiz1 = Number(document.getElementById('TriangleiZ1').value);

	var tix2 = Number(document.getElementById('TriangleiX2').value);
	var tiy2 = Number(document.getElementById('TriangleiY2').value);
	var tiz2 = Number(document.getElementById('TriangleiZ2').value);

	var tix3 = Number(document.getElementById('TriangleiX3').value);
	var tiy3 = Number(document.getElementById('TriangleiY3').value);
	var tiz3 = Number(document.getElementById('TriangleiZ3').value);

	
	document.getElementById('coordTrix1').innerHTML=(tix1*sx +tx);
	document.getElementById('coordTriy1').innerHTML=(tiy1*sx +ty);
	document.getElementById('coordTriz1').innerHTML=(tiz1*sx +tz);

	document.getElementById('coordTrix2').innerHTML=(tix2*sx +tx);
	document.getElementById('coordTriy2').innerHTML=(tiy2*sx +ty);
	document.getElementById('coordTriz2').innerHTML=(tiz2*sx +tz);

	document.getElementById('coordTrix3').innerHTML=(tix3*sx +tx);
	document.getElementById('coordTriy3').innerHTML=(tiy3*sx +ty);
	document.getElementById('coordTriz3').innerHTML=(tiz3*sx +tz);

	}
}

function CubeCoord(){
	var condition= document.getElementById('CubeDraw').checked;
	if(condition==true){
	var cx = Number(document.getElementById('CubeX').value);
	var cy = Number(document.getElementById('CubeY').value);
	var cz = Number(document.getElementById('CubeZ').value);
	var sx=(document.getElementById('sliderStatus').innerHTML);
	var cix1 = Number(document.getElementById('CubeiX1').value);
	var ciy1 = Number(document.getElementById('CubeiY1').value);
	var ciz1 = Number(document.getElementById('CubeiZ1').value);

	var cix2 = Number(document.getElementById('CubeiX2').value);
	var ciy2 = Number(document.getElementById('CubeiY2').value);
	var ciz2 = Number(document.getElementById('CubeiZ2').value);

	var cix3 = Number(document.getElementById('CubeiX3').value);
	var ciy3 = Number(document.getElementById('CubeiY3').value);
	var ciz3 = Number(document.getElementById('CubeiZ3').value);

	var cix4 = Number(document.getElementById('CubeiX4').value);
	var ciy4 = Number(document.getElementById('CubeiY4').value);
	var ciz4 = Number(document.getElementById('CubeiZ4').value);

	var cix5 = Number(document.getElementById('CubeiX5').value);
	var ciy5 = Number(document.getElementById('CubeiY5').value);
	var ciz5 = Number(document.getElementById('CubeiZ5').value);

	var cix6 = Number(document.getElementById('CubeiX6').value);
	var ciy6 = Number(document.getElementById('CubeiY6').value);
	var ciz6 = Number(document.getElementById('CubeiZ6').value);

	var cix7 = Number(document.getElementById('CubeiX7').value);
	var ciy7 = Number(document.getElementById('CubeiY7').value);
	var ciz7 = Number(document.getElementById('CubeiZ7').value);

	var cix8 = Number(document.getElementById('CubeiX8').value);
	var ciy8 = Number(document.getElementById('CubeiY8').value);
	var ciz8 = Number(document.getElementById('CubeiZ8').value);
	document.getElementById('coordCubex1').innerHTML=(cix1*sx +cx);
	document.getElementById('coordCubey1').innerHTML=(ciy1*sx +cy);
	document.getElementById('coordCubez1').innerHTML=(ciz1*sx +cz);

	document.getElementById('coordCubex2').innerHTML=(cix2*sx +cx);
	document.getElementById('coordCubey2').innerHTML=(ciy2*sx +cy);
	document.getElementById('coordCubez2').innerHTML=(ciz2*sx +cz);

	document.getElementById('coordCubex3').innerHTML=(cix3*sx +cx);
	document.getElementById('coordCubey3').innerHTML=(ciy3*sx +cy);
	document.getElementById('coordCubez3').innerHTML=(ciz3*sx +cz);

	document.getElementById('coordCubex4').innerHTML=(cix4*sx +cx);
	document.getElementById('coordCubey4').innerHTML=(ciy4*sx +cy);
	document.getElementById('coordCubez4').innerHTML=(ciz4*sx +cz);

	document.getElementById('coordCubex5').innerHTML=(cix5*sx +cx);
	document.getElementById('coordCubey5').innerHTML=(ciy5*sx +cy);
	document.getElementById('coordCubez5').innerHTML=(ciz5*sx +cz);

	document.getElementById('coordCubex6').innerHTML=(cix6*sx +cx);
	document.getElementById('coordCubey6').innerHTML=(ciy6*sx +cy);
	document.getElementById('coordCubez6').innerHTML=(ciz6*sx +cz);

	document.getElementById('coordCubex7').innerHTML=(cix7*sx +cx);
	document.getElementById('coordCubey7').innerHTML=(ciy7*sx +cy);
	document.getElementById('coordCubez7').innerHTML=(ciz7*sx +cz);

	document.getElementById('coordCubex8').innerHTML=(cix8*sx +cx);
	document.getElementById('coordCubey8').innerHTML=(ciy8*sx +cy);
	document.getElementById('coordCubez8').innerHTML=(ciz8*sx +cz);
}
}

function DodecCoord(){
	var condition= document.getElementById('DodecahedronDraw').checked;
	if(condition==true){
	var dx = Number(document.getElementById('DodecX').value);
	var dy = Number(document.getElementById('DodecY').value);
	var dz = Number(document.getElementById('DodecZ').value);
	var sx=document.getElementById('sliderStatus').innerHTML;
	var dix1 = Number(document.getElementById('DodecahedroniX1').value);
	var diy1 = Number(document.getElementById('DodecahedroniY1').value);
	var diz1 = Number(document.getElementById('DodecahedroniZ1').value);

	document.getElementById('coordDodecx1').innerHTML=(dix1*sx +dx);
	document.getElementById('coordDodecy1').innerHTML=(diy1*sx +dy);
	document.getElementById('coordDodecz1').innerHTML=(diz1*sx +dz);

	var dix2 = Number(document.getElementById('DodecahedroniX2').value);
	var diy2 = Number(document.getElementById('DodecahedroniY2').value);
	var diz2 = Number(document.getElementById('DodecahedroniZ2').value);

	document.getElementById('coordDodecx2').innerHTML=(dix2*sx +dx);
	document.getElementById('coordDodecy2').innerHTML=(diy2*sx +dy);
	document.getElementById('coordDodecz2').innerHTML=(diz2*sx +dz);


	var dix3 = Number(document.getElementById('DodecahedroniX3').value);
	var diy3 = Number(document.getElementById('DodecahedroniY3').value);
	var diz3 = Number(document.getElementById('DodecahedroniZ3').value);


	document.getElementById('coordDodecx3').innerHTML=(dix3*sx +dx);
	document.getElementById('coordDodecy3').innerHTML=(diy3*sx +dy);
	document.getElementById('coordDodecz3').innerHTML=(diz3*sx +dz);

	

	var dix4 = Number(document.getElementById('DodecahedroniX4').value);
	var diy4 = Number(document.getElementById('DodecahedroniY4').value);
	var diz4 = Number(document.getElementById('DodecahedroniZ4').value);

	document.getElementById('coordDodecx4').innerHTML=(dix4*sx +dx);
	document.getElementById('coordDodecy4').innerHTML=(diy4*sx +dy);
	document.getElementById('coordDodecz4').innerHTML=(diz4*sx +dz);


	var dix5 = Number(document.getElementById('DodecahedroniX5').value);
	var diy5 = Number(document.getElementById('DodecahedroniY5').value);
	var diz5 = Number(document.getElementById('DodecahedroniZ5').value);

	document.getElementById('coordDodecx5').innerHTML=(dix5*sx +dx);
	document.getElementById('coordDodecy5').innerHTML=(diy5*sx +dy);
	document.getElementById('coordDodecz5').innerHTML=(diz5*sx +dz);

	

	var dix6 = Number(document.getElementById('DodecahedroniX6').value);
	var diy6 = Number(document.getElementById('DodecahedroniY6').value);
	var diz6 = Number(document.getElementById('DodecahedroniZ6').value);

	document.getElementById('coordDodecx6').innerHTML=(dix6*sx +dx);
	document.getElementById('coordDodecy6').innerHTML=(diy6*sx +dy);
	document.getElementById('coordDodecz6').innerHTML=(diz6*sx +dz);

	
	var dix7 = Number(document.getElementById('DodecahedroniX7').value);
	var diy7 = Number(document.getElementById('DodecahedroniY7').value);
	var diz7 = Number(document.getElementById('DodecahedroniZ7').value);

	document.getElementById('coordDodecx7').innerHTML=(dix7*sx +dx);
	document.getElementById('coordDodecy7').innerHTML=(diy7*sx +dy);
	document.getElementById('coordDodecz7').innerHTML=(diz7*sx +dz);


	var dix8 = Number(document.getElementById('DodecahedroniX8').value);
	var diy8 = Number(document.getElementById('DodecahedroniY8').value);
	var diz8 = Number(document.getElementById('DodecahedroniZ8').value);


	document.getElementById('coordDodecx8').innerHTML=(dix8*sx +dx);
	document.getElementById('coordDodecy8').innerHTML=(diy8*sx +dy);
	document.getElementById('coordDodecz8').innerHTML=(diz8*sx +dz);

	
	var dix9 = Number(document.getElementById('DodecahedroniX9').value);
	var diy9 = Number(document.getElementById('DodecahedroniY9').value);
	var diz9 = Number(document.getElementById('DodecahedroniZ9').value);

	document.getElementById('coordDodecx9').innerHTML=(dix9*sx +dx);
	document.getElementById('coordDodecy9').innerHTML=(diy9*sx +dy);
	document.getElementById('coordDodecz9').innerHTML=(diz9*sx +dz);


	var dix10 = Number(document.getElementById('DodecahedroniX10').value);
	var diy10 = Number(document.getElementById('DodecahedroniY10').value);
	var diz10 = Number(document.getElementById('DodecahedroniZ10').value);

	document.getElementById('coordDodecx10').innerHTML=(dix10*sx +dx);
	document.getElementById('coordDodecy10').innerHTML=(diy10*sx +dy);
	document.getElementById('coordDodecz10').innerHTML=(diz10*sx +dz);


	var dix11 = Number(document.getElementById('DodecahedroniX11').value);
	var diy11 = Number(document.getElementById('DodecahedroniY11').value);
	var diz11 = Number(document.getElementById('DodecahedroniZ11').value);

	var dix12 = Number(document.getElementById('DodecahedroniX12').value);
	var diy12 = Number(document.getElementById('DodecahedroniY12').value);
	var diz12 = Number(document.getElementById('DodecahedroniZ12').value);

	var dix13 = Number(document.getElementById('DodecahedroniX13').value);
	var diy13 = Number(document.getElementById('DodecahedroniY13').value);
	var diz13 = Number(document.getElementById('DodecahedroniZ13').value);

	var dix14 = Number(document.getElementById('DodecahedroniX14').value);
	var diy14 = Number(document.getElementById('DodecahedroniY14').value);
	var diz14 = Number(document.getElementById('DodecahedroniZ14').value);

	var dix15 = Number(document.getElementById('DodecahedroniX15').value);
	var diy15 = Number(document.getElementById('DodecahedroniY15').value);
	var diz15 = Number(document.getElementById('DodecahedroniZ15').value);

	var dix16 = Number(document.getElementById('DodecahedroniX16').value);
	var diy16 = Number(document.getElementById('DodecahedroniY16').value);
	var diz16 = Number(document.getElementById('DodecahedroniZ16').value);

	var dix17 = Number(document.getElementById('DodecahedroniX17').value);
	var diy17 = Number(document.getElementById('DodecahedroniY17').value);
	var diz17 = Number(document.getElementById('DodecahedroniZ17').value);

	var dix18 = Number(document.getElementById('DodecahedroniX18').value);
	var diy18 = Number(document.getElementById('DodecahedroniY18').value);
	var diz18 = Number(document.getElementById('DodecahedroniZ18').value);

	var dix19 = Number(document.getElementById('DodecahedroniX19').value);
	var diy19 = Number(document.getElementById('DodecahedroniY19').value);
	var diz19 = Number(document.getElementById('DodecahedroniZ19').value);

	var dix20 = Number(document.getElementById('DodecahedroniX20').value);
	var diy20 = Number(document.getElementById('DodecahedroniY20').value);
	var diz20 = Number(document.getElementById('DodecahedroniZ20').value);

	

	document.getElementById('coordDodecx11').innerHTML=(dix11*sx +dx);
	document.getElementById('coordDodecy11').innerHTML=(diy11*sx +dy);
	document.getElementById('coordDodecz11').innerHTML=(diz11*sx +dz);

	document.getElementById('coordDodecx12').innerHTML=(dix12*sx +dx);
	document.getElementById('coordDodecy12').innerHTML=(diy12*sx +dy);
	document.getElementById('coordDodecz12').innerHTML=(diz12*sx +dz);

	document.getElementById('coordDodecx13').innerHTML=(dix13*sx +dx);
	document.getElementById('coordDodecy13').innerHTML=(diy13*sx +dy);
	document.getElementById('coordDodecz13').innerHTML=(diz13*sx +dz);

	document.getElementById('coordDodecx14').innerHTML=(dix14*sx +dx);
	document.getElementById('coordDodecy14').innerHTML=(diy14*sx +dy);
	document.getElementById('coordDodecz14').innerHTML=(diz14*sx +dz);

	document.getElementById('coordDodecx15').innerHTML=(dix15*sx +dx);
	document.getElementById('coordDodecy15').innerHTML=(diy15*sx +dy);
	document.getElementById('coordDodecz15').innerHTML=(diz15*sx +dz);

	document.getElementById('coordDodecx16').innerHTML=(dix16*sx +dx);
	document.getElementById('coordDodecy16').innerHTML=(diy16*sx +dy);
	document.getElementById('coordDodecz16').innerHTML=(diz16*sx +dz);

	document.getElementById('coordDodecx17').innerHTML=(dix17*sx +dx);
	document.getElementById('coordDodecy17').innerHTML=(diy17*sx +dy);
	document.getElementById('coordDodecz17').innerHTML=(diz17*sx +dz);

	document.getElementById('coordDodecx18').innerHTML=(dix18*sx +dx);
	document.getElementById('coordDodecy18').innerHTML=(diy18*sx +dy);
	document.getElementById('coordDodecz18').innerHTML=(diz18*sx +dz);

	document.getElementById('coordDodecx19').innerHTML=(dix19*sx +dx);
	document.getElementById('coordDodecy19').innerHTML=(diy19*sx +dy);
	document.getElementById('coordDodecz19').innerHTML=(diz19*sx +dz);

	document.getElementById('coordDodecx20').innerHTML=(dix20*sx +dx);
	document.getElementById('coordDodecy20').innerHTML=(diy20*sx +dy);
	document.getElementById('coordDodecz20').innerHTML=(diz20*sx +dz);
	
	

}
}
function IcosaCoord(){
	var condition= document.getElementById('IcosahedronDraw').checked;
	if(condition==true){
	var ix = Number(document.getElementById('IcoX').value);
	var iy = Number(document.getElementById('IcoY').value);
	var iz = Number(document.getElementById('IcoZ').value);

	var sx=    Number(document.getElementById('sliderStatus').innerHTML);
	var icosx1 = Number(document.getElementById('IcosahedroniX1').value);
	var icosy1 = Number(document.getElementById('IcosahedroniY1').value);
	var icosz1 = Number(document.getElementById('IcosahedroniZ1').value);

	var icosx2 = Number(document.getElementById('IcosahedroniX2').value);
	var icosy2 = Number(document.getElementById('IcosahedroniY2').value);
	var icosz2 = Number(document.getElementById('IcosahedroniZ2').value);

	var icosx3 = Number(document.getElementById('IcosahedroniX3').value);
	var icosy3 = Number(document.getElementById('IcosahedroniY3').value);
	var icosz3 = Number(document.getElementById('IcosahedroniZ3').value);

	var icosx4 = Number(document.getElementById('IcosahedroniX4').value);
	var icosy4 = Number(document.getElementById('IcosahedroniY4').value);
	var icosz4 = Number(document.getElementById('IcosahedroniZ4').value);

	var icosx5 = Number(document.getElementById('IcosahedroniX5').value);
	var icosy5 = Number(document.getElementById('IcosahedroniY5').value);
	var icosz5 = Number(document.getElementById('IcosahedroniZ5').value);

	var icosx6 = Number(document.getElementById('IcosahedroniX6').value);
	var icosy6 = Number(document.getElementById('IcosahedroniY6').value);
	var icosz6 = Number(document.getElementById('IcosahedroniZ6').value);

	var icosx7 = Number(document.getElementById('IcosahedroniX7').value);
	var icosy7 = Number(document.getElementById('IcosahedroniY7').value);
	var icosz7 = Number(document.getElementById('IcosahedroniZ7').value);

	var icosx8 = Number(document.getElementById('IcosahedroniX8').value);
	var icosy8 = Number(document.getElementById('IcosahedroniY8').value);
	var icosz8 = Number(document.getElementById('IcosahedroniZ8').value);

	var icosx9 = Number(document.getElementById('IcosahedroniX9').value);
	var icosy9 = Number(document.getElementById('IcosahedroniY9').value);
	var icosz9 = Number(document.getElementById('IcosahedroniZ9').value);

	var icosx10 = Number(document.getElementById('IcosahedroniX10').value);
	var icosy10 = Number(document.getElementById('IcosahedroniY10').value);
	var icosz10 = Number(document.getElementById('IcosahedroniZ10').value);

	var icosx11 = Number(document.getElementById('IcosahedroniX11').value);
	var icosy11 = Number(document.getElementById('IcosahedroniY11').value);
	var icosz11 = Number(document.getElementById('IcosahedroniZ11').value);

	var icosx12 = Number(document.getElementById('IcosahedroniX12').value);
	var icosy12 = Number(document.getElementById('IcosahedroniY12').value);
	var icosz12 = Number(document.getElementById('IcosahedroniZ12').value);

	
	document.getElementById('coordIcosax1').innerHTML=(icosx1*sx +ix);
	document.getElementById('coordIcosay1').innerHTML=(icosy1*sx +iy);
	document.getElementById('coordIcosaz1').innerHTML=(icosz1*sx +iz);

	document.getElementById('coordIcosax2').innerHTML=(icosx2*sx +ix);
	document.getElementById('coordIcosay2').innerHTML=(icosy2*sx +iy);
	document.getElementById('coordIcosaz2').innerHTML=(icosz2*sx +iz);

	document.getElementById('coordIcosax3').innerHTML=(icosx3*sx +ix);
	document.getElementById('coordIcosay3').innerHTML=(icosy3*sx +iy);
	document.getElementById('coordIcosaz3').innerHTML=(icosz3*sx +iz);

	document.getElementById('coordIcosax4').innerHTML=(icosx4*sx +ix);
	document.getElementById('coordIcosay4').innerHTML=(icosy4*sx +iy);
	document.getElementById('coordIcosaz4').innerHTML=(icosz4*sx +iz);

	document.getElementById('coordIcosax5').innerHTML=(icosx5*sx +ix);
	document.getElementById('coordIcosay5').innerHTML=(icosy5*sx +iy);
	document.getElementById('coordIcosaz5').innerHTML=(icosz5*sx +iz);

	document.getElementById('coordIcosax6').innerHTML=(icosx6*sx +ix);
	document.getElementById('coordIcosay6').innerHTML=(icosy6*sx +iy);
	document.getElementById('coordIcosaz6').innerHTML=(icosz6*sx +iz);

	document.getElementById('coordIcosax7').innerHTML=(icosx7*sx +ix);
	document.getElementById('coordIcosay7').innerHTML=(icosy7*sx +iy);
	document.getElementById('coordIcosaz7').innerHTML=(icosz7*sx +iz);

	document.getElementById('coordIcosax8').innerHTML=(icosx8*sx +ix);
	document.getElementById('coordIcosay8').innerHTML=(icosy8*sx +iy);
	document.getElementById('coordIcosaz8').innerHTML=(icosz8*sx +iz);

	document.getElementById('coordIcosax9').innerHTML=(icosx9*sx +ix);
	document.getElementById('coordIcosay9').innerHTML=(icosy9*sx +iy);
	document.getElementById('coordIcosaz9').innerHTML=(icosz9*sx +iz);

	document.getElementById('coordIcosax10').innerHTML=(icosx10*sx +ix);
	document.getElementById('coordIcosay10').innerHTML=(icosy10*sx +iy);
	document.getElementById('coordIcosaz10').innerHTML=(icosz10*sx +iz);

	document.getElementById('coordIcosax11').innerHTML=(icosx11*sx +ix);
	document.getElementById('coordIcosay11').innerHTML=(icosy11*sx +iy);
	document.getElementById('coordIcosaz11').innerHTML=(icosz11*sx +iz);

	document.getElementById('coordIcosax12').innerHTML=(icosx12*sx +ix);
	document.getElementById('coordIcosay12').innerHTML=(icosy12*sx +iy);
	document.getElementById('coordIcosaz12').innerHTML=(icosz12*sx +iz);

	
}
}









													//GAME LOGIC

var update = function() {
};
//draw scene
var render = function() {
	var someCondition = document.getElementById('2DCamera').checked;
	if( someCondition == false) {
		renderer.render(scene, camera2);
	} else {
		renderer.render( scene, camera);
	}
};

//run game loop (update, render, repeat)
var GameLoop = function() {
	requestAnimationFrame(GameLoop);
	update();
	render();
};

GameLoop();
