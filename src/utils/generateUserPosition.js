const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
};

const generateUserPosition = (cellsPerRow) => {
    return [getRandomArbitrary(0, cellsPerRow - 1), getRandomArbitrary(0, cellsPerRow - 1)]
};

export default generateUserPosition;