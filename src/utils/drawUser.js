import calculateSizeOfCell from "./calculateSizeOfCell";

const drawUser = (context, user, xSize, ySize) => {
    context.fillStyle = 'red';
    context.fillRect(user.getX(), user.getY(), xSize, ySize);
};

export default drawUser;