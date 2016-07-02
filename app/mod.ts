/**
 * Point
 */
class Point {
  x: number;
  y: number;

  constructor(x: number,y: number) {
    this.x = x;
    this.y = y;
  }
  display() {
      console.log(this.x,this.y)
  }
}

export default Point;