export class Color {
  red: number;
  green: number;
  blue: number;


  constructor(red: number, green: number, blue: number) {
    this.red = red;
    this.blue = blue;
    this.green = green;
  }

  public toString = (): string => {
    return 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
  }
}
