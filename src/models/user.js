export default class User {
    constructor(x, y) {
        this.__x = x;
        this.__y = y;
        this.__direction = null;
        this.__directionStartDate = new Date().getTime();
    }

    setDirectionStartDate(date) {
        this.__directionStartDate = date;
    }

    getDirectionStartDate() {
        return this.__directionStartDate;
    }

    setX(x) {
        this.__x = x;
    }

    getX() {
        return this.__x;
    }

    setY(y) {
        this.__y = y;
    }

    getY() {
        return this.__y;
    }

    setDirection(direction) {
        this.__direction = direction;
    }

    getDirection() {
        return this.__direction;
    }
}