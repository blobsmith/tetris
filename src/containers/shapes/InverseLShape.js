import StandardShape from '../StandardShape';

class InverseLShape extends StandardShape {

    getCoordinates() {
        return [
            [30, -10],
            [30, 50],
            [-10, 50],
            [-10, 30],
            [10, 30],
            [10, -10],
        ]
    }

    getColour() {
        return '#0000FF';
    }
}

export default InverseLShape;