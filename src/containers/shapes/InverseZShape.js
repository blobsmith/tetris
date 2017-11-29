import StandardShape from '../StandardShape';

class InverseZShape extends StandardShape {

    getCoordinates() {
        return [
            [-20, -20],
            [-20, 20],
            [0, 20],
            [0, 40],
            [20, 40],
            [20, 0],
            [0, 0],
            [0, -20],
        ]
    }

    getColour() {
        return '#0000FF';
    }
}

export default InverseZShape;