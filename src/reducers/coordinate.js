
const initCoordinate = {
    x: 120,
    y: 20
};

const moveInterval = 20;

const coordinateReducer = (state = initCoordinate, action) => {
    switch(action.type) {

        case 'NEW_SHAPE':
            return initCoordinate;
            break;

        case 'GO_DOWN':
            return {
                x: state.x,
                y: state.y + moveInterval
            };
            break;

        case 'GO_RIGHT':
            return {
                x: state.x + moveInterval,
                y: state.y
            };
            break;

        case 'GO_LEFT':
            return {
                x: state.x - moveInterval,
                y: state.y
            };
            break;

        default:
            return state;
    }
};


export default coordinateReducer;