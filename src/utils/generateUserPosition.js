const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
};

const generateUserPosition = (width, height, cellsPerRow = 20) => {

    const widthCellSize = width / cellsPerRow;
    const heightCellSize = height / cellsPerRow;

    return [
        Math.floor(getRandomArbitrary(0, cellsPerRow - 1)) * widthCellSize,
        Math.floor(getRandomArbitrary(0, cellsPerRow - 1)) * heightCellSize
    ]
};

export default generateUserPosition;