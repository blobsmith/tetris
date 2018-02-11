/**
 * Manage blocks coordinates and blocks coordinates in area.
 */
class BlockManagement {

  /**
   * Save the last blocks coordinates in the game area (before new shape...)
   *
   * @param blocksRealCoordinate
   *    Real coordinate of blocks.
   * @param area
   *    Game area.
   *
   * @returns {*}
   *    New game area.
   */
  setBlocksInArea = (blocksRealCoordinate, area) => {
    const newArea = [];
    for (const key in area) {
      newArea.push(area[key]);
    }
    for(const key in blocksRealCoordinate) {
      const coordinate = blocksRealCoordinate[key];
      newArea[coordinate[1]][(coordinate[0])] = 1;
    }
    return newArea;
  };

  /**
   *  Convert a shape coordinate to real coordinate corresponding to blocks in area.
   * @param blocks
   *    Blocks coordinates of a shape.
   * @param coordinates
   *    Simple coordinate corresponding to fall position.
   * @param blockSize
   *    Simple coordinate corresponding to fall position. (block size equal 1 in area)
   *
   * @returns {Array}
   *    Coordinates of shape blocks in area.
   */
  getBlocksRealCoordinates = (blocks, coordinates, blockSize = 1) => {
    const realCoordinates = [];
    if (coordinates !== undefined && coordinates.x !== undefined && coordinates.y !== undefined ) {
      for (const key in blocks) {
        let block = blocks[key];
        realCoordinates.push([(parseInt(coordinates.x) + parseInt(block[0]))*blockSize, (parseInt(coordinates.y) + parseInt(block[1]))*blockSize]);
      }
    }
    return realCoordinates;
  };

  /**
   * Check whether or not coordinates of shape can be saved in area.
   *
   * @param blocks
   *    Blocks coordinates of a shape
   * @param coordinate
   *    Simple coordinate corresponding to fall position.
   * @param area
   *    Array corresponding to Area.
   * @returns {boolean}
   *    TRUE if shape can be save in the area.
   */
  blocksAreInArea = (blocks, coordinate, area) => {
    let inArea = true;
    if (coordinate !== undefined) {
      const blocksRealCoordinates = this.getBlocksRealCoordinates(blocks, coordinate);
      for(const key in blocksRealCoordinates) {
        const blockCoordinate = blocksRealCoordinates[key];
        if (area[blockCoordinate[1]][(blockCoordinate[0])] !== 0) {
          inArea = false;
          break;
        }
      }
    }
    return inArea;
  };
}

const blockMamgement = new BlockManagement();
export default blockMamgement;

