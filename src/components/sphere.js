import {
	SphereGeometry, MeshPhongMaterial, Mesh,
	Scene, PerspectiveCamera, WebGLRenderer,
	DirectionalLight
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { needResizeToDisplaySize } from './utils/functions';

function renderSphere() {
	const canvas = document.querySelector( '#sphere' );
	const alpha = true;
	const renderer = new WebGLRenderer({ canvas, alpha });

	const scene = new Scene();

	const fov = 75;
	const aspect = 2;
	const near = 0.1;
	const far = 5;
	const camera = new PerspectiveCamera( fov, aspect, near, far );
	camera.position.set( 0, 0, 2.5 );

	const controls = new OrbitControls( camera, renderer.domElement );

	const color = 0xffffff;
	const intensity = 1;
	const light = new DirectionalLight( color, intensity );
	light.position.set( -2, 2, 4 );
	scene.add( light );

	const radius = 1;
	const widthSegments = 20;
	const heightSegments = 20;
	const sphereGeometry = new SphereGeometry( radius, widthSegments, heightSegments );
	const material = new MeshPhongMaterial({ color: 'blue' });
	const sphere = new Mesh( sphereGeometry, material );
	scene.add( sphere );

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

export default renderSphere