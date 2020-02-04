const canvas = document.getElementById('main-canvas');
const context = canvas.getContext('2d');
const width = canvas.offsetWidth;
const height = canvas.offsetHeight;
const MAX_FRAMES_PER_SECONDS = 1000 / 60;
const DEFAULT_CELLS_COUNT = 20;

export {canvas, context, width, height, MAX_FRAMES_PER_SECONDS, DEFAULT_CELLS_COUNT};