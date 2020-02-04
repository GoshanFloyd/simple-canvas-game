import {DEFAULT_CELLS_COUNT} from "./initCanvas";

const calculateSizeOfCell = ({width, height}) => {
    return [
        width / DEFAULT_CELLS_COUNT,
        height / DEFAULT_CELLS_COUNT
    ];
};

export default calculateSizeOfCell;