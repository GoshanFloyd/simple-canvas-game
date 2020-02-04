import './app.css';
import {drawTable} from "./utils/drawTable";
import {clearCanvas} from "./utils/clearCanvas";
import {context, width, height, MAX_FRAMES_PER_SECONDS} from "./utils/initCanvas";

const render = (context) => {
    clearCanvas(context, {width, height});
    drawTable(context, {width, height});
};

const setKeyPressHandler = (callback) => {
    document.addEventListener('keydown', (e) => {
        callback(e);
    });
};

const gameLoop = (startDate) => {
    const currentDate = new Date().getTime();

    if ((currentDate - startDate) > MAX_FRAMES_PER_SECONDS) {
        render(context);
    }

    requestAnimationFrame(() => gameLoop(currentDate));
};

requestAnimationFrame(() => {
    setKeyPressHandler(e => {});
    gameLoop(new Date().getTime());
});