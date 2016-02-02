// scene size
var WIDTH = 400,
    HEIGHT = 300;

// camera attributes
var VIEW_ANGLE = 45,
ASPECT = WIDTH / HEIGHT,
NEAR = 0.1,
FAR = 10000;

// WebGL: renderer, camera, scene
var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(
                    VIEW_ANGLE,
                    ASPECT,
                    NEAR,
                    FAR);
var scene = new THREE.Scene();

// add the camera to the scene
scene.add(camera);

// pull back camera sufficiently far away
camera.position.z = 300;

// start renderer!
renderer.setSize(WIDTH, HEIGHT);

// attach to DOM element
var container = document.getElementById("3d");
container.appendChild(renderer.domElement);

// define sphereMaterial
var sphereMaterial = new THREE.MeshLambertMaterial(
                        {
                            color: 0xCC0099
                        });

// sphere example
var radius = 50,
    segments = 16,
    rings = 16;

var sampleSphereGeometry =
    new THREE.SphereGeometry(
        radius,
        segments,
        rings);

// mesh with the sphere geometry
var sphere = new THREE.Mesh(sampleSphereGeometry, sphereMaterial);

// define a new pointlight
var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 100;

// add sphere to scene
scene.add(sphere);

// add light to scene
scene.add(pointLight);

renderer.render(scene, camera);
