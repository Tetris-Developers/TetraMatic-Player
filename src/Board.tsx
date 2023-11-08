import { Stage } from '@pixi/react';
import { Meta } from './types';
import BackgroundCells from './BackgroundCells';
import { BoardCells } from './BoardCells';
import { getPieces } from './util';

export const width = 10, height = 40, cellSize = 30, matrixBuffer = 1, renderedHeight = height / 2 + matrixBuffer

interface Props {
  meta: Meta
}
export default function Board({ meta: { pieces, hold, next, incoming, b2b, combo } }: Props) {
  const renderedHeight = height / 2 + 1;
  const cells = getPieces(pieces);
  
  return <Stage
    width={width * cellSize}
    height={renderedHeight * cellSize}>
    <BackgroundCells />
    {cells
      .filter((_, i) => i <= renderedHeight)
      .map((arr, y) => arr.map(({ color }, x) =>
        <BoardCells coords={{ x, y }} color={color} key={`${x} ${y}`} />
      ))}
  </Stage>
}