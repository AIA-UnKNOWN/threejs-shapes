import './index.scss';
import renderCube from './components/cube';
import renderCircle from './components/circle';
import renderSphere from './components/sphere';
import renderCone from './components/cone';
import renderCylinder from './components/cylinder';

function renderObjects() {
	renderCube();
	renderCircle();
	renderSphere();
	renderCone();
	renderCylinder();
}

renderObjects();