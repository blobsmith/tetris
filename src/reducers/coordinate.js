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
            return {
                x: state.x + 1,
                y: state.y
            };
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
            return {
                x: state.x + 1,
                y: state.y
            };
            break;

        default:
            return state;
    }
};


export default coordinateReducer;