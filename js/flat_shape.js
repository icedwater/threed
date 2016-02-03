// These are the main components of a scene:
var scene, renderer, camera;

function define_sphere(radius, colour) {
    // sphere example
    var radius = radius,
        segments = 16,
        rings = 16;

    // set the geometry of the sphere
    var sampleSphereGeometry =
        new THREE.SphereGeometry(
            radius,
            segments,
            rings);

    // use a Lambert material
    var sphereMaterial = new THREE.MeshLambertMaterial(colour);

    // create a mesh with the sphere geometry and material
    var sphere = new THREE.Mesh(sampleSphereGeometry, sphereMaterial);

    return sphere;
}

function init() {
    scene = new THREE.Scene();
    // scene size
    var WIDTH = 400,
        HEIGHT = 300;

    // define and start renderer!
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(WIDTH, HEIGHT);

    // also set the background colour of renderer
    renderer.setClearColor(0xCCCCFF, 1);

    // attach to DOM element
    var container = document.getElementById("3d");
    container.appendChild(renderer.domElement);

    // camera attributes
    var VIEW_ANGLE = 45,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 10000;

    // WebGL: renderer, camera, scene
    camera = new THREE.PerspectiveCamera(
                    VIEW_ANGLE,
                    ASPECT,
                    NEAR,
                    FAR);

    // pull back camera sufficiently far away
    camera.position.set(0, 0, 300);
    
    // add the camera to the scene
    scene.add(camera);

    // If camera settings change, remember to update
    // camera.aspect = ...
    // camera.updateProjectionMatrix()

    // define a new pointlight and add to scene
    var pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.set(10, 50, 250)
    scene.add(pointLight);

    // define and add sphere to scene
    var sample_sphere = define_sphere(50, { color: 0xCC00BB });
    scene.add(sample_sphere);

    // If a predefined mesh is to be loaded, use loader
    // loader.load( mesh_path, function (geometry) { ... });
}

function animate() {
    
    // Note: check out http://paulirish.com/2011/requestanimationframe-for-smart-animating
    requestAnimationFrame(animate);

    // Do the rendering here!
    renderer.render(scene, camera);
}

init();
animate();
