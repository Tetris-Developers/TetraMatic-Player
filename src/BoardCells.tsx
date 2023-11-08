import { Sprite } from '@pixi/react';
import { Point } from 'pixi.js';
import { cellSize, matrixBuffer } from './Board';
import { getTexture } from './util';

export function BoardCells({ coords, color }: any) {
  return <Sprite
    texture={getTexture(color)}
    scale={new Point(cellSize / 30, cellSize / 30)}
    x={coords.x * cellSize}
    y={cellSize * (coords.y + matrixBuffer)}
    key={`cell ${coords.x} ${coords.y}`}
  />
}