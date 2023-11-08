import { TilingSprite } from '@pixi/react';
import { Texture } from 'pixi.js';
import { cellSize, width, height, matrixBuffer } from './Board';
import empty from './assets/empty.png';

export default function BackgroundCells() {
  return <>
    <TilingSprite
      texture={Texture.from(empty)}
      width={cellSize * width}
      height={height / 2 * cellSize}
      y={matrixBuffer * cellSize}
      alpha={0.5}
      tilePosition={{ x: 0, y: 0 }}
      tileScale={{ x: 1, y: 1 }}
    />
    <TilingSprite
      texture={Texture.from(empty)}
      width={cellSize * width}
      height={1}
      y={matrixBuffer * cellSize + 1}
      alpha={0.5}
      tilePosition={{ x: 0, y: 0 }}
      tileScale={{ x: 1, y: 1 }}
    />
  </>
}