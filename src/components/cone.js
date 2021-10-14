import {
	Scene, WebGLRenderer, PerspectiveCamera,
	ConeGeometry, MeshPhongMaterial, Mesh,
	DirectionalLight
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { needResizeToDisplaySize } from './utils/functions';

function renderCone() {
	const canvas = document.querySelector( '#cone' );
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

	const radius = 1;
	const height = 3;
	const radialSegments = 40;
	const coneGeometry = new ConeGeometry( radius, height, radialSegments );
	const material = new MeshPhongMaterial({ color: 'blue' });
	const cone = new Mesh( coneGeometry, material );
	scene.add( cone );

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

export default renderCone