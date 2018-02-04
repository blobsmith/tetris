import { getShapeRealCoordinate, setShapeInArea, convertPointsToblocks } from '../utils/Utils'

const areaReducer = (state = [], action) => {
    switch(action.type) {

        case 'NEW_GAME':
            let i = 0;
            let newMap = [];
            while(i < 25) {
                newMap.push([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
                i += 1;
            }
            newMap.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
            return  newMap;
            break;

        case 'INSERT_SHAPE_IN_AREA':
            const shapeRealCoordinate = getShapeRealCoordinate(action.shapeCoordinate, [action.coordinate.x, action.coordinate.y]);
            const blocks = convertPointsToblocks(shapeRealCoordinate);
            return setShapeInArea(blocks, state);
            break;

        default:
            return state;
    }
};


export default areaReducer;