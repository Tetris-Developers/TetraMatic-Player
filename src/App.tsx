import Board from './Board';
import { Meta, TetraColor } from './types';

export default function App() {
  const meta: Meta = {
    pieces: "././././././././././././././././././././",
    hold: TetraColor.RED,
    next: [],
    incoming: 2,
    b2b: 1,
    combo: 7
  }
  
  return <div className="grid">
    <Board meta={meta}/>
    <Board meta={meta}/>
  </div>
}