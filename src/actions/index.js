export const newShapeAction = (shapeCoordinate) => ({
  type: 'NEW_SHAPE',
  payload: shapeCoordinate
});

export const rotateAction = () => ({
  type: 'ROTATE'
});

export const fallDownAction = () => ({
  type: 'FALL_DOWN'
});

export const goRightAction = () => ({
  type: 'GO_RIGHT'
});

export const goLeftAction = () => ({
  type: 'GO_LEFT'
});

export const goDownAction = () => ({
  type: 'GO_DOWN'
});

