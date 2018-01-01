
const coordinate = {
    x: 120,
    y: 20
};

const moveInterval = 20;

const coordinateReducer = (state, action) => {
    switch(action.type) {

        case 'FALL_DOWN':
            return {
                x: state.x,
                y: state.y + moveInterval
            };
            break;

        default:
            return coordinate;
    }
};


export default coordinateReducer;