import { combineReducers } from 'redux'
import coordinateReducer from './coordinate'
import shapeCoordinateReducer from './shapeCoordinate'

const tetrisReducers = combineReducers({
  coordinate: coordinateReducer,
  shapeCoordinate: shapeCoordinateReducer
});

export default tetrisReducers;