import blockManagement from '../utils/BlockManagement'

const initCoordinate = {
    x: 6,
    y: 2
};

const coordinateReducer = (state = initCoordinate, action) => {
    switch(action.type) {

        case 'NEW_SHAPE':
            return initCoordinate;
            break;

        case 'GO_DOWN':
            const coordinateAfterGoDown = {
                x: state.x,
                y: state.y + 1
            };
            if (blockManagement.blocksAreInArea(action.shapeCoordinate, coordinateAfterGoDown, action.area)) {
                return coordinateAfterGoDown;
            }
            return state;
            break;

        case 'GO_RIGHT':
            const coordinateAfterGoRight = {
                x: state.x + 1,
                y: state.y
            };
            if (blockManagement.blocksAreInArea(action.shapeCoordinate, coordinateAfterGoRight, action.area)) {
                return coordinateAfterGoRight;
            }
            return state;
            break;

        case 'GO_LEFT':
            const coordinateAfterGoLeft = {
                x: state.x - 1,
                y: state.y
            };
            if (blockManagement.blocksAreInArea(action.shapeCoordinate, coordinateAfterGoLeft, action.area)) {
                return coordinateAfterGoLeft;
            }
            return state;
            break;

        case 'FALL_DOWN':
            const downCoordinate = blockManagement.findLastDownPosition(action.shape.blocks, action.coordinate, action.area);
            console.log(downCoordinate);
            if (downCoordinate !== false) {
                return downCoordinate;
            }
            return state;
            break;

        default:
            return state;
    }
};


export default coordinateReducer;