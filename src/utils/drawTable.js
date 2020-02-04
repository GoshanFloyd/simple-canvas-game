import {DEFAULT_CELLS_COUNT} from "./initCanvas";

export const drawTable = (context, {xSize, ySize}) => {
    for (let i = 0; i < DEFAULT_CELLS_COUNT; i++) {
        for (let j = 0; j < DEFAULT_CELLS_COUNT; j++) {
            context.strokeStyle = '#adadad';
            context.strokeRect(j * xSize, i * ySize, xSize, ySize);
        }
    }
};