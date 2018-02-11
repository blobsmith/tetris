import blockManagement from '../utils/BlockManagement'

/**
 * Rotate a shape.
 *
 * @param coordinates
 *      Coordinates of the shape to rotate.
 * @param reverse
 *      D.
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
            return action.payload.blocks;
            break;

        case 'ROTATE':
            if (action.shape.rotate === undefined || action.shape.rotate) {
                const blocksAfterRotate = rotate(state);
                if (blockManagement.blocksAreInArea(blocksAfterRotate, action.coordinate, action.area)) {
                    return blocksAfterRotate;
                }
            }
            return state;
            break;

        default:
            return state;
    }
};


export default shapeCoordinateReducer;