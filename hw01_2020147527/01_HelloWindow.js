// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// Set canvas size: 현재 window 전체를 canvas로 사용
canvas.width = 500;
canvas.height = 500;

// Enable scissor test to clear only specific areas
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

    // 1사분면 (오른쪽 위, 초록색)
    gl.viewport(width, height, width, height);
    gl.scissor(width, height, width, height);
    gl.clearColor(0.0, 1.0, 0.0, 1.0);  // 초록
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 2사분면 (왼쪽 위, 빨간색)
    gl.viewport(0, height, width, height);
    gl.scissor(0, height, width, height);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);  // 빨간색
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 3사분면 (왼쪽 아래, 파란색)
    gl.viewport(0, 0, width, height);
    gl.scissor(0, 0, width, height);
    gl.clearColor(0.0, 0.0, 1.0, 1.0);  // 파란색
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 4사분면 (오른쪽 아래, 노란색)
    gl.viewport(width, 0, width, height);
    gl.scissor(width, 0, width, height);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);  // 노란색
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.addEventListener('resize', () => {
    const minSize = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = minSize;
    canvas.height = minSize;
    render();
});


