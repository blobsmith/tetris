import { isInArea } from '../utils/Utils'

const initCoordinate = {
    x: 120,
    y: 40
};

const moveInterval = 20;

const coordinateReducer = (state = initCoordinate, action) => {
    switch(action.type) {

        case 'NEW_SHAPE':
            return initCoordinate;
            break;

        case 'GO_DOWN':
            const coordinateAfterGoDown = {
                x: state.x,
                y: state.y + moveInterval
            };
            if (isInArea(action.shapeCoordinate, coordinateAfterGoDown, action.area)) {
                return coordinateAfterGoDown;
            }
            return state;
            break;

        case 'GO_RIGHT':
            const coordinateAfterGoRight = {
                x: state.x + moveInterval,
                y: state.y
            };
            if (isInArea(action.shapeCoordinate, coordinateAfterGoRight, action.area)) {
                return coordinateAfterGoRight;
            }
            return state;
            return {
                x: state.x + moveInterval,
                y: state.y
            };
            break;

        case 'GO_LEFT':
            const coordinateAfterGoLeft = {
                x: state.x - moveInterval,
                y: state.y
            };
            if (isInArea(action.shapeCoordinate, coordinateAfterGoLeft, action.area)) {
                return coordinateAfterGoLeft;
            }
            return state;
            return {
                x: state.x + moveInterval,
                y: state.y
            };
            break;

        default:
            return state;
    }
};


export default coordinateReducer;