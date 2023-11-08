import { Texture, BaseTexture, Rectangle, SCALE_MODES } from 'pixi.js';
import { width, height } from './Board';
import { BoardCell, TetraColor } from './types';
import skin from './assets/TetrisPlusClassic.png';

// TODO: add input functionality
export function getPieces(pieces: string): BoardCell[][] {
  const rowStrings = pieces.split("/")
  return rowStrings.map((string, y) => {
    y = height / 2 - y - 1
    const cells: BoardCell[] = [];
    if (string == ".") return Array.from({ length: width }, (_, x) =>
      ({ coords: { y, x }, color: TetraColor.NONE }));

    while (string) {
      const char = string[0];
      string = string.slice(1);
      const number = char.match(/([0-9])/);
      if (number) {
        for (let x = 0; x < parseInt(number[0]); x++) {
          cells.push({
            coords: { y, x: cells.length },
            color: TetraColor.NONE
          })
        }
        continue;
      }
      const [color] = char.match(/([ZSLJIOT])/)!;
      cells.push({
        coords: { y, x: cells.length },
        color: getColor(color)
      })
    }
    return cells;
  });
}

function getColor(color: string): TetraColor {
  return {
    Z: TetraColor.RED,
    S: TetraColor.GREEN,
    L: TetraColor.ORANGE,
    J: TetraColor.BLUE,
    I: TetraColor.CYAN,
    O: TetraColor.YELLOW,
    T: TetraColor.PURPLE
  }[color] ?? TetraColor.NONE;
}

export function getTexture(color: TetraColor) {
  const texture = color == TetraColor.NONE ?
    Texture.EMPTY :
    new Texture(BaseTexture.from(skin), new Rectangle(31 * color, 0, 30, 30))
  texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;
  return texture;
}