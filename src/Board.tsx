import { Stage, TilingSprite, Sprite } from '@pixi/react';
import { Point, Texture, BaseTexture, Rectangle, SCALE_MODES } from 'pixi.js'
import { BoardCell, TetraColor } from './types';
import empty from './assets/empty.png'
import skin from "./assets/TetrisPlusClassic.png";

const width = 10, height = 40, cellSize = 30
const renderedHeight = height / 2 + 1
export default function Board() {
  const renderedHeight = height / 2 + 1;
  const cells: BoardCell[][] = Array.from({ length: renderedHeight }, (_, y) =>
    Array.from({ length: width }, (_, x) => ({
      coords: { x, y },
      color: x + y < 5 ? TetraColor.RED : TetraColor.NONE
    })))

  return <Stage
    width={width * cellSize}
    height={renderedHeight * cellSize}>
    <BackgroundCells />
    {cells
      .filter((_, i) => i <= renderedHeight)
      .map((arr, y) => arr.map(({ color }, x) =>
        <BoardCell coords={{ x, y }} color={color} key={`${x} ${y}`} />
      ))}
  </Stage>
}

function BackgroundCells() {
  return <>
    <TilingSprite
      texture={Texture.from(empty)}
      width={cellSize * width}
      height={1}
      y={cellSize * (renderedHeight - 1 / 30)}
      alpha={0.5}
      tilePosition={{ x: 0, y: 0 }}
      tileScale={{ x: 1, y: 1 }}
    />
    <TilingSprite
      texture={Texture.from(empty)}
      width={30 * width}
      height={30 * (height - 1)}
      y={cellSize * renderedHeight}
      scale={new Point(cellSize / 30, cellSize / 30)}
      alpha={0.5}
      tilePosition={{ x: 0, y: 0 }}
      tileScale={{ x: 1, y: 1 }}
    />
  </>
}

export function BoardCell({ coords, color }: any) {
  return <Sprite
      texture={getTexture(color)}
      scale={new Point(cellSize / 30, cellSize / 30)}
      x={coords.x * cellSize}
      y={cellSize * (height - (20) - coords.y)}
      key={`cell ${coords.x} ${coords.y}`}
  />
}

export function getTexture(color: TetraColor) {
  const texture = color == TetraColor.NONE ?
      Texture.EMPTY :
      new Texture(BaseTexture.from(skin), new Rectangle(31 * color, 0, 30, 30))
  texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;
  return texture;
}