
import * as THREE from 'three';
import images from './images'

const container = document.querySelector('.three_bg');
const loader = new THREE.TextureLoader();
const scene = new THREE.Scene();


const video = document.getElementById('bgvid');
const texture = new THREE.VideoTexture(video);
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
scene.background = texture;


const camera = new THREE.PerspectiveCamera(
    100, 
    window.innerWidth / window.innerHeight,
    0.2,
    1300,
);


const renderer = new THREE.WebGL1Renderer({
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Responsiveness
window.addEventListener('resize',()=> {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)

});

// Shapes
const flatSphere = new THREE.SphereGeometry(12, 52, 16);
const sphereOnly = new THREE.SphereGeometry(4, 22, 8);

// Textures
const whiteLiquidMarble = new THREE.MeshBasicMaterial({
    map:loader.load(images.txt1),
    wireframe: true,
});

const redMarble = new THREE.MeshBasicMaterial({
    map:loader.load(images.txt2),
    wireframe: true,
});

// Objects
const mainWebObject = new THREE.Mesh(flatSphere, whiteLiquidMarble);
const giantSphere = new THREE.Mesh(sphereOnly, redMarble);

// Add Object to scene
scene.add(mainWebObject);
scene.add(giantSphere);


camera.position.z =  0;

const count = flatSphere.attributes.position.count;
const clock = new THREE.Clock();

function animate() {

    moveObjectOne();
    render();
}

function moveObjectOne() {
    const time = clock.getElapsedTime();
    for(let i=0; i < count; i++) {
        const x = flatSphere.attributes.position.getX(i);
        const y = flatSphere.attributes.position.getY(i);
        const x2 = sphereOnly.attributes.position.getX(i);
        const y2 = sphereOnly.attributes.position.getY(i);

        // Animations
        const anim1 = 0.75 * Math.sin(x * 2 + time * 0.4);
        const anim2 = 0.25 * Math.sin(x + time * 0.3);
        const anim3 = 0.01 * Math.sin(y * 15 + time * 0.5);

        const anim5 = 0.55 * Math.sin(x * 32 + time * 0.4);
        const anim6 = 0.15 * Math.sin(x + time * 0.3);
        const anim7 = 0.01 * Math.sin(y * 2 + time * 0.5);
        
        flatSphere.attributes.position.setZ(i,anim1 + anim2 + anim3)
        // geometery.computeVertexNormals();
        flatSphere.attributes.position.needsUpdate=true;

        sphereOnly.attributes.position.setZ(i,anim5 + anim6 + anim7)
        // geometery.computeVertexNormals();
        sphereOnly.attributes.position.needsUpdate=true;
        camera.position.z =  time * 0.1;
        
    }
    //
    mainWebObject.rotation.x += 0.0013;
    mainWebObject.rotation.y += 0.0012;
    giantSphere.rotation.x -= 0.00013;
    giantSphere.rotation.y -= 0.00014;
    requestAnimationFrame(animate);
}





function render() {
    renderer.render(scene, camera);
}


animate();
