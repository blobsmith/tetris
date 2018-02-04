
const shapeIsInArea = (shapeRealCoordinate, area) => {
  let inArea = true;
  const coordinates = shapeRealCoordinate.map(c => {
    return [c[0]/20, c[1]/20];
  });
  for(const key in coordinates) {
    const coordinate = coordinates[key];
    if (area[coordinate[1]][(coordinate[0])] !== 0) {
      inArea = false;
      break;
    }
  }
  return inArea;
};

/**
 * Shapes definitions
 *
 * @type {{BarShape, InverseLShape, InverseZShape, LShape, SquareShape, TriangleShape, ZShape}}
 */
export const Shapes = [
  require('../shapes/BarShape'),
  require('../shapes/InverseLShape'),
  require('../shapes/InverseZShape'),
  require('../shapes/LShape'),
  require('../shapes/SquareShape'),
  require('../shapes/TriangleShape'),
  require('../shapes/ZShape')
];

/**
 * Save the last shape coordinates in the game area (before new shape...)
 *
 * @param shapeRealCoordinate
 *    Real coordinate of a shape.
 * @param area
 *    Game area.
 *
 * @returns {*}
 *    New game area.
 */
export const setShapeInArea = (shapeRealCoordinate, area) => {
  let newArea = [];
  for (const key in area) {
    newArea.push(area[key]);
  }
  const coordinates = shapeRealCoordinate.map(c => {
    return [c[0]/20, c[1]/20];
  });

  for(const key in coordinates) {
    const coordinate = coordinates[key];
    newArea[coordinate[1]][(coordinate[0])] = 1;
  }
  return newArea;
};

function positionToString(point) {
  return point[0]+''+point[1]
}


function compareCoordinates(point, lastPoint, compareFunction) {
  let newPoint = [point[0], point[1]];

  if (lastPoint[0] != undefined) {
    for (const key in point) {
      let bestValue = lastPoint[key];
      if (compareFunction(point[key], lastPoint[key])) {
        bestValue = point[key];
      }
      newPoint[key] = bestValue;
    }
  }
  return newPoint;
}

function findBlocks(points, minPoint, maxPoint){
  let blocks = [];

  for(let x = minPoint[0]; x <= maxPoint[0]; x += 20) {
    for(let y = minPoint[1]; y <= maxPoint[1]; y += 20) {

      const point1 = positionToString([x-20, y]);
      const point2 = positionToString([x, y]);
      const point3 = positionToString([x-20, y+20]);
      const point4 = positionToString([x, y+20]);

      if (points[point1] !== undefined
        && points[point2] !== undefined
        && points[point3] !== undefined
        && points[point4] !== undefined
      ) {
        blocks.push([x, y]);
      }
    }
  }
  return blocks;
}

export const convertPointsToblocks =  (coordinates) => {
  let points = {};
  let minPoint = [];
  let maxPoint = [];
  let lastPoint = [];

  // Get all points
  for (const key in coordinates) {
    const point = coordinates[key];

    // Get Intermediate points between 2 consecutive points
    if (lastPoint.length > 0) {
    //   Coordinate variation is on X.
      let index = 0;
    //   Coordinate variation is on Y.
      if (point[1] !== lastPoint[1]){
        index = 1;
      }

      const diff = lastPoint[index] - point[index];
      if (Math.abs(diff) > 20) {
        let calculatePoint = [lastPoint[0], lastPoint[1]];

        for(let i=0; i < Math.abs(diff)/20; i++) {
          if (diff < 0) {
            calculatePoint[index] += 20;
          }
          else {
            calculatePoint[index] -= 20;
          }
          minPoint = compareCoordinates(calculatePoint, minPoint, (newCoordinate, lastCoordinate) => {return newCoordinate < lastCoordinate});
          maxPoint = compareCoordinates(calculatePoint, maxPoint, (newCoordinate, lastCoordinate) => {return newCoordinate > lastCoordinate});
          points[positionToString(calculatePoint)] = [calculatePoint[0], calculatePoint[1]];
        }
      }
    }
    minPoint = compareCoordinates(point, minPoint, (newCoordinate, lastCoordinate) => {return newCoordinate < lastCoordinate});
    maxPoint = compareCoordinates(point, maxPoint, (newCoordinate, lastCoordinate) => {return newCoordinate > lastCoordinate});
    points[positionToString(point)] = point;
    lastPoint = [point[0], point[1]];
  }
  return findBlocks(points, minPoint, maxPoint);
};


export const getShapeRealCoordinate = (shapeCoordinate = [], coordinates) => {
  let realCoordinates = [];
  if (coordinates !== undefined && coordinates[0] !== undefined && coordinates[1] !== undefined ) {
    for (const key in shapeCoordinate) {
      let point = shapeCoordinate[key];
      realCoordinates.push([parseInt(coordinates[0]) + parseInt(point[0]), parseInt(coordinates[1]) + parseInt(point[1])]);
    }
  }
  return realCoordinates;
};

export const isInArea = (shapeCoordinate, coordinate, area) => {
  if (coordinate !== undefined) {
    const realShapeCoordinate = getShapeRealCoordinate(shapeCoordinate, [coordinate.x, coordinate.y]);
    const blocks = convertPointsToblocks(realShapeCoordinate);
    return shapeIsInArea(blocks, area);
  }
  return true;
};