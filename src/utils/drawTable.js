export const drawTable = (context, {height, width}, cellsPerRow = 20) => {
    const sizeByWidth = width / cellsPerRow;
    const sizeByHeight = height / cellsPerRow;

    for (let i = 0; i < cellsPerRow; i++) {
        for (let j = 0; j < cellsPerRow; j++) {
            context.strokeStyle = '#adadad';
            context.strokeRect(j * sizeByWidth, i * sizeByHeight, sizeByWidth, sizeByHeight);
        }
    }
};