import './style.css'
//import three
import * as THREE from 'three';
//import orbit controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Loader, Material } from 'three';
// import gltf loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// add orbit controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 10;
controls.maxDistance = 10;
controls.autoRotatespeed = 30;
controls.autoRotate = true;


// add ambient light


const ambientLight = new THREE.AmbientLight(0xee00ff, 1);
ambientLight.position.set(1, -1, 1);
scene.add(ambientLight);

// add directional light
const directionalLight = new THREE.DirectionalLight(0xee00ff, 0.6);
directionalLight.position.set(0, -10, -100);
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xee00ff, 0.6);
directionalLight2.position.set(0, 10, 100);
scene.add(directionalLight2);


const loader = new GLTFLoader();


loader.load("/assets/huitfois2.glb", (gltf) => {
  const huitfois = gltf.scene;
  huitfois.scale.set(1, 1, 1);
  scene.add(huitfois);
});



camera.position.z = 10;



function animate() {
  

  requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
};

	animate();