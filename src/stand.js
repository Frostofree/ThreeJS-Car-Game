import * as THREE from "three";

const trackRadius = 400;
const trackWidth = 90;
const trackLength = 800;
const barrierWidth = 60
const innerTrackRadius = trackRadius - trackWidth;
const outerTrackRadius = trackRadius + trackWidth;


export default function Stand() {

    const stand = new THREE.Group();

    const texture = new THREE.TextureLoader().load(
        './crowd.png'
    )

    const box = new THREE.Mesh(
        new THREE.BoxGeometry(200,2*trackLength,300),
        new THREE.MeshLambertMaterial({map: texture})
    )

    stand.add(box)
    return stand;

}
