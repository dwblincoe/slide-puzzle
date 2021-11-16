import { useContext } from 'react';

import Board from './components/Board';
import Startup from './components/Startup';

import { PuzzleContext } from './common/PuzzleContext';

import './App.css';

const App = () => {
  const { imageUrl, isStarted } = useContext(PuzzleContext);

  return (
    <div className="App">
      <h1>Slide Puzzle</h1>
      {imageUrl && isStarted ? <Board /> : <Startup />}
    </div>
  );
};

export default App;
