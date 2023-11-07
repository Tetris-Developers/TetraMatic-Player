export enum TetraColor {
  NONE = -1,
  RED = 0,
  ORANGE = 1,
  YELLOW = 2,
  GREEN = 3,
  CYAN = 4,
  BLUE = 5,
  PURPLE = 6,
  GHOST = 7,
  GARBAGE = 8,
  HELD = 9,
  UNCLEARABLE = 10,
  WARNING = 11
}

export interface BoardCell {
  coords: { x: number, y: number };
  color: TetraColor;
}