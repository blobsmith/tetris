import { isInArea } from '../utils/Utils'

/**
 * Rotate a shape.
 *
 * @param coordinates
 *      Coordinates of the shape to rotate.
 * @param reverse
 *      Rotate in other sens.
 */
const rotate = (coordinates, reverse = false) => {
    let newCoordinate = [];
    let rotateMatrix = [
        [0, -1],
        [1, 0]
    ];
    if (reverse) {
        rotateMatrix = [
            [0, 1],
            [-1, 0]
        ];
    }

    for (let key in coordinates) {
        const position = coordinates[key];

        // Dot product
        newCoordinate.push([
            position[0]*rotateMatrix[0][0] + position[1]*rotateMatrix[1][0],
            position[0]*rotateMatrix[0][1] + position[1]*rotateMatrix[1][1],
        ]);
    }
    return newCoordinate;
};

const shapeCoordinateReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_SHAPE':
            return action.payload.coordinates.map(c => {
                return [c[0] + action.payload.offset[0], c[1] + action.payload.offset[1]];
            });
            break;

        case 'ROTATE':
            const shapeCoordinateAfterRotate = rotate(state);
            if (isInArea(shapeCoordinateAfterRotate, action.coordinate, action.area)) {
                return shapeCoordinateAfterRotate;
            }
            return state;
            break;

        default:
            return state;
    }
};


export default shapeCoordinateReducer;