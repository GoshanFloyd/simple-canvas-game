import './app.css';
import {drawTable} from "./utils/drawTable";
import {clearCanvas} from "./utils/clearCanvas";
import {context, height, MAX_FRAMES_PER_SECONDS, width} from "./utils/initCanvas";
import availableKeys from "./utils/availableKeys";
import generateUserPosition from "./utils/generateUserPosition";
import User from "./models/user";
import drawUser from "./utils/drawUser";
import calculateSizeOfCell from "./utils/calculateSizeOfCell";
import userChangeLocation from "./controls/userChangeLocation";

let user = null;

let xSize = 0;
let ySize = 0;

const render = (context) => {
    clearCanvas(context, {width, height});
    drawTable(context, {xSize, ySize});
    drawUser(context, user, xSize, xSize);
};

const update = () => {
    userChangeLocation(user, {xSize, ySize});
};

const setKeyPressHandler = (callback) => {
    document.addEventListener('keydown', (e) => {
        callback(e);
    });
};

const gameLoop = (startDate) => {
    const currentDate = new Date().getTime();

    if ((currentDate - startDate) > MAX_FRAMES_PER_SECONDS) {
        update();
        render(context);
    }

    requestAnimationFrame(() => gameLoop(currentDate));
};

(() => {
    [xSize, ySize] = calculateSizeOfCell({width, height});
    const [x, y] = generateUserPosition(width, height);
    user = new User(x, y);
    setKeyPressHandler(e => {
        if (availableKeys.includes(e.key)) {
            user.setDirection(e.key);
            user.setDirectionStartDate(new Date().getTime());
        } else {
            user.setDirection(null);
        }
    });

    requestAnimationFrame(() => {
        gameLoop(new Date().getTime());
    });
})();