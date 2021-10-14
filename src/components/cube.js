import {
	BoxGeometry, MeshPhongMaterial, Mesh,
	Scene, PerspectiveCamera, WebGLRenderer,
	DirectionalLight
} from 'three';

import { needResizeToDisplaySize } from './utils/functions';

function renderCube() {
	const canvas = document.querySelector( '#cube' );
	const alpha = true;
	const renderer = new WebGLRenderer({ canvas, alpha });

	const scene = new Scene();

	const fov = 75;
	const aspect = window.innerWidth / window.innerHeight;
	const near = 0.1;
	const far = 5;
	const camera = new PerspectiveCamera( fov, aspect, near, far );
	camera.position.z = 1.5;

	const color = 0xffffff;
	const intensity = 1;
	const light = new DirectionalLight( color, intensity );
	light.position.set( -2, 2, 4 );
	scene.add( light );

	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const boxGeometry = new BoxGeometry( boxWidth, boxHeight, boxDepth );
	const material = new MeshPhongMaterial({ color: 'blue' });
	const cube = new Mesh( boxGeometry, material );

	scene.add( cube );

	function render() {
		if ( needResizeToDisplaySize( renderer ) ) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		renderer.render( scene, camera );
		requestAnimationFrame( render );
	}

	render();
}

export default renderCube;