export const clearCanvas = (context, {height, width}) => {
    context.rect(0, 0 , width, height);
    context.fillStyle = 'white';
    context.fill();
};