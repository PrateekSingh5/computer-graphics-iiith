var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 60, (0.7*window.innerWidth) / (0.95*window.innerHeight), 0.001, 100000 );


var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('maincanvas'), antialias: true});
var heightScreen = 400;
var widthScreen = 400;
renderer.setSize( 500, 500);




controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.maxAzimuthAngle = Math.PI / 2;
controls.enableKeys = true;

scene.background = new THREE.Color( 0x4F4F4F);

camera.position.set(0.5,-0.25,2.2);

var ambientLight = new THREE.AmbientLight(0x099556, 0.7);
scene.add(ambientLight);

var light = new THREE.PointLight( 0xffffff, 3, 100 );
light.position.set( 0, 0.2, -0.5 );
scene.add( light );

function drawXY() {

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


var X = new THREE.Geometry();
var x_material = new THREE.LineBasicMaterial({color: 'red'});
X.vertices.push(new THREE.Vector3( -0.6, 0, 0));
X.vertices.push(new THREE.Vector3(0.6, 0, 0));
var X_direction = new THREE.Line(X, x_material, THREE.LineSegments);
scene.add(X_direction);

var Y = new THREE.Geometry();
var y_material = new THREE.LineBasicMaterial({color: 0x3EF70F});
Y.vertices.push(new THREE.Vector3( 0, 0.6, 0));
Y.vertices.push(new THREE.Vector3(0, -0.6, 0));
var Y_direction = new THREE.Line(Y, y_material, THREE.LineSegments);
scene.add(Y_direction);

var Z = new THREE.Geometry();
var z_material = new THREE.LineBasicMaterial({color: 0x3CEFF1});
Z.vertices.push(new THREE.Vector3( 0, 0, -0.6));
Z.vertices.push(new THREE.Vector3(0, 0, 0.6));
var Z_direction = new THREE.Line(Z, z_material, THREE.LineSegments);
scene.add(Z_direction);


var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 'red'} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0.55,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 270*(Math.PI / 180);
scene.add( cone );


var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 'red'} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(-0.55,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 90*(Math.PI / 180);
scene.add( cone );


var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,0.55,0);
scene.add( cone );


var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,-0.55,0);
cone.rotation.x = 180*(Math.PI / 180);
scene.add( cone );


var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, 0.55);
cone.rotation.x = 90*(Math.PI / 180);
scene.add( cone );

var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, -0.55);
cone.rotation.x = -90*(Math.PI / 180);
scene.add( cone );

var update = function() {
};

var render = function() {

		renderer.render( scene, camera);

};

var GameLoop = function() {
	requestAnimationFrame(GameLoop);
	update();
	render();
};

GameLoop();









