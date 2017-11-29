import StandardShape from '../StandardShape';

class ZShape extends StandardShape {

    getCoordinates() {
        return [
            [0, -20],
            [0, 0],
            [-20, 0],
            [-20, 40],
            [0, 40],
            [0, 20],
            [20, 20],
            [20, -20],
        ]
    }

    getColour() {
        return '#FF0000';
    }
}

export default ZShape;