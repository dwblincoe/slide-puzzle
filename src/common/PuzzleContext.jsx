import { createContext, useEffect, useState } from 'react';

export const PuzzleContext = createContext();

export const PuzzleProvider = (props) => {
  const [imageUrl, setImageUrl] = useState();
  const [boardSize, setBoardSize] = useState(400);
  const [gridSize, setGridSize] = useState(3);
  const [tileCount, setTileCount] = useState();
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    setTileCount(gridSize * gridSize);
    setBoardSize(100 * gridSize);
  }, [gridSize]);

  const resetState = () => {
    setIsStarted(false);
    setImageUrl(undefined);
    setGridSize(3);
  };

  const selectImage = (size) => {
    setImageUrl(`http://placekitten.com/${size}/${size}`);
  };

  return (
    <PuzzleContext.Provider
      value={{
        imageUrl,
        selectImage,
        boardSize,
        tileCount,
        gridSize,
        setGridSize,
        setIsStarted,
        isStarted,
        resetState,
      }}
    >
      {props.children}
    </PuzzleContext.Provider>
  );
};
