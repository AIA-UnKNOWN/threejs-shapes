import {
	Scene, MeshPhongMaterial, Mesh,
	DirectionalLight, PerspectiveCamera, WebGLRenderer,
	CylinderGeometry
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { needResizeToDisplaySize } from './utils/functions';

function renderCylinder() {
	const canvas = document.querySelector( '#cylinder' );
	const alpha = true;
	const renderer = new WebGLRenderer({ canvas, alpha });

	const scene = new Scene();

	const fov = 75;
	const aspect = 2;
	const near = 0.1;
	const far = 5;
	const camera = new PerspectiveCamera( fov, aspect, near, far );
	camera.position.set( 0, 0, 4 );

	const controls = new OrbitControls( camera, renderer.domElement );
	
	const color = 0xffffff;
	const intensity = 1;
	const light = new DirectionalLight( color, intensity );
	light.position.set( -2, 2, 4 );
	scene.add( light );

	const radiusTop = 1;
	const radiusBottom = 1;
	const height = 2;
	const radialSegments = 40;
	const cylinderGeometry = new CylinderGeometry( radiusTop, radiusBottom, height, radialSegments );
	const material = new MeshPhongMaterial({ color: 'blue' });
	const cylinder = new Mesh( cylinderGeometry, material );
	scene.add( cylinder );

	function render() {
		if ( needResizeToDisplaySize( renderer ) ) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		controls.update();
		renderer.render( scene, camera );
		requestAnimationFrame( render );
	}

	render();
}

export default renderCylinder