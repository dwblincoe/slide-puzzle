import { useContext } from 'react';

import { canSwap, swap } from '../common/helpers';

import { PuzzleContext } from '../common/PuzzleContext';

const Tile = ({ tile, index, tiles, setTiles }) => {
  const { imageUrl, boardSize, gridSize, tileCount } =
    useContext(PuzzleContext);

  const dimensions = Math.round(boardSize / gridSize);
  const tileNumber = tile + 1;

  const handleSwap = () => {
    const destIndex = tiles.indexOf(tileCount - 1);

    if (canSwap(index, destIndex, gridSize)) {
      const swappedTiles = swap(tiles, index, destIndex);
      setTiles(swappedTiles);
    }
  };

  return (
    <div
      className="tile"
      style={{
        width: dimensions,
        height: dimensions,
        background:
          tileNumber === tileCount ? 'transparent' : `url(${imageUrl})`,
        backgroundSize: `${boardSize * (1 + 1 / gridSize)}px`,
        backgroundPosition: `${
          (100 / gridSize) * Math.floor(tile % gridSize)
        }% ${(100 / gridSize) * Math.floor(tile / gridSize)}%`,
      }}
      onClick={handleSwap}
    >
      {tileNumber}
    </div>
  );
};

export default Tile;
