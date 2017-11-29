import StandardShape from '../StandardShape';

class SquareShape extends StandardShape {

    getCoordinates() {
        return [
            [-20, -20],
            [-20, 20],
            [20, 20],
            [20, -20],
        ]
    }

    getColour() {
        return '#00FF00';
    }

    isRotatable() {
        return false;
    }
}

export default SquareShape;