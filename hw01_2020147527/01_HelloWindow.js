// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// Set canvas size: 초기 500x500
canvas.width = 500;
canvas.height = 500;

// scissor 설정
gl.enable(gl.SCISSOR_TEST);

// Initialize WebGL settings: viewport and clear color
gl.viewport(0, 0, canvas.width, canvas.height);

gl.clearColor(0.1, 0.2, 0.3, 1.0);

// Start rendering
render();

// Render loop
function render() {

    gl.clear(gl.COLOR_BUFFER_BIT);   

    const width = canvas.width / 2;
    const height = canvas.height / 2;

    // 1사분면 (초)
    gl.viewport(width, height, width, height);
    gl.scissor(width, height, width, height);
    gl.clearColor(0.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 2사분면 (빨)
    gl.viewport(0, height, width, height);
    gl.scissor(0, height, width, height);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 3사분면 (파)
    gl.viewport(0, 0, width, height);
    gl.scissor(0, 0, width, height);
    gl.clearColor(0.0, 0.0, 1.0, 1.0); 
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 4사분면 (노)
    gl.viewport(width, 0, width, height);
    gl.scissor(width, 0, width, height);
    gl.clearColor(1.0, 1.0, 0.0, 1.0); 
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.addEventListener('resize', () => {
    const minSize = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = minSize;
    canvas.height = minSize;
    render();
});


