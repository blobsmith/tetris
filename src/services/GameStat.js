/**
 * Manage Game statistics.
 */
class GameStat {

  constructor() {
    this.linesRemoved = [];
  }


  lineRemoved = (lineNumber) => {
    this.linesRemoved.push(lineNumber);
  };

  getPoints = () => {
    let points;
    let lineNumbers = 0;
    let lastNumber;
    for (const key in this.linesRemoved) {
      let number = this.linesRemoved[key];

      lastNumber = number;
    }


    return points;
  };

}

const gameStat = new GameStat();

export default gameStat;

