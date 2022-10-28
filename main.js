import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js";

import "./style.css";
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


const ambientLight = new THREE.AmbientLight(0x11ad3b, 1);
ambientLight.position.set(1, -1, 1);
scene.add(ambientLight);

// add directional light
const directionalLight = new THREE.DirectionalLight(0x11ad3b, 0.5);
directionalLight.position.set(0, -10, -50);
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0x11ad3b, 0.5);
directionalLight2.position.set(0, 10, 50);
scene.add(directionalLight2);


const loader = new GLTFLoader();


loader.load("/assets/huitfois.glb", (gltf) => {
  const huitfois = gltf.scene;
  huitfois.scale.set(2, 2, 2);
  scene.add(huitfois);
});



camera.position.z = 10;



function animate() {
  

  requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
};

	animate();