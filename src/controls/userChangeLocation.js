const userChangeLocation = (user, {xSize, ySize}) => {
    switch (user.getDirection()) {
        case 'ArrowLeft': {
            user.setX(user.getX() - xSize);
            break;
        }
        case 'ArrowUp': {
            user.setY(user.getY() - ySize);
            break;
        }
        case 'ArrowRight': {
            user.setX(user.getX() + xSize);
            break;
        }
        case 'ArrowDown': {
            user.setY(user.getY() + ySize);
            break;
        }
    }
};

export default userChangeLocation;