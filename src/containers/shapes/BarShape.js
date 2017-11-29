import StandardShape from '../StandardShape';

class BarShape extends StandardShape {

    getCoordinates() {
        return [
            [0, -60],
            [0, 20],
            [20, 20],
            [20, -60],
        ]
    }

    getColour() {
        return '#00FFFF';
    }
}

export default BarShape;