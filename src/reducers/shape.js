
const shapeReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_SHAPE':
            return action.payload;
            break;

        default:
            return state;
    }
};


export default shapeReducer;