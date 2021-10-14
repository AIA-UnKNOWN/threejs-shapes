/*
	These are the functions that can be imported to
	make the development easier
*/

function needResizeToDisplaySize( renderer ) {
	const canvas = renderer.domElement;
	const pixelRatio = window.devicePixelRatio;
	const width = canvas.clientWidth * pixelRatio | 0;
	const height = canvas.clientHeight * pixelRatio | 0;
	const needResize = canvas.width !== width || canvas.height !== height;

	if ( needResize ) renderer.setSize( width, height, false );

	return needResize;
}

export { needResizeToDisplaySize }