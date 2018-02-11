import blockManagement from '../utils/BlockManagement'

const shapeCoordinateReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_SHAPE':
            return action.shape.blocks;
            break;

        case 'ROTATE':
            if (action.shape.rotate === undefined || action.shape.rotate) {
                const blocksAfterRotate = blockManagement.rotate(state);
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