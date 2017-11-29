import StandardShape from '../StandardShape';

class TriangleShape extends StandardShape {

    getCoordinates() {
        return [
            [-20, -20],
            [-20, 0],
            [-40, 0],
            [-40, 20],
            [20, 20],
            [20, 0],
            [0, 0],
            [0, -20],
        ]
    }

    getColour() {
        return '#BB00BB';
    }
}

export default TriangleShape;