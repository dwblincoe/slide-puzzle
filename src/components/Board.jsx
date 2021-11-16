import { useContext, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import { PuzzleContext } from '../common/PuzzleContext';
import { shuffle, isSolved } from '../common/helpers';

import Tile from './Tile';

const Board = () => {
  const { boardSize, tileCount, resetState } = useContext(PuzzleContext);
  const [tiles, setTiles] = useState([...Array(tileCount).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  const solved = isSolved(tiles);

  useEffect(() => {
    if (isStarted) {
      const shuffledTiles = shuffle(tiles);

      setTiles(shuffledTiles);
    }
  }, [isStarted]);

  const handleRestart = () => {
    setTiles([...Array(tileCount).keys()]);
    setIsStarted(false);
  };

  const handleStart = () => setIsStarted(true);

  const style = {
    height: boardSize,
    width: boardSize,
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={resetState}>
        Choose New Image
      </Button>
      <div style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            tiles={tiles}
            setTiles={setTiles}
          />
        ))}

        <Button
          variant="contained"
          color="primary"
          onClick={isStarted ? handleRestart : handleStart}
        >
          {isStarted ? 'Reset' : 'Start'}
        </Button>

        {solved && isStarted && (
          <h1 style={{ position: 'absolute', bottom: '50%' }}>
            YAYYYY YOU WON!!!!
          </h1>
        )}
      </div>
    </>
  );
};

export default Board;
