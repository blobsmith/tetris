

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
            return action.payload;
            break;

        case 'ROTATE':
            // action.payload.id = Date.now();
            // return [...state, action.payload];
            console.log('ROTATE', state);


            return rotate(action.payload);
            break;

        default:
            return state;
    }
};


export default shapeCoordinateReducer;