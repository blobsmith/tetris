import StandardShape from '../StandardShape';

class LShape extends StandardShape {

    getCoordinates() {
        return [
            [-30, -10],
            [-30, 50],
            [10, 50],
            [10, 30],
            [-10, 30],
            [-10, -10],
        ]
    }

    getColour() {
        return '#FFA500';
    }
}

export default LShape;