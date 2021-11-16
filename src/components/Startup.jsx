import { useContext } from 'react';
import { MenuItem, Select, Button } from '@material-ui/core';

import { PuzzleContext } from '../common/PuzzleContext';

const Startup = () => {
  const { selectImage, setGridSize, gridSize, imageUrl, setIsStarted } =
    useContext(PuzzleContext);

  return (
    <div className="startup">
      <div>
        <h4>Choose difficulty</h4>
        <Select
          value={gridSize}
          onChange={(evt) => setGridSize(evt.target.value)}
          variant="outlined"
        >
          <MenuItem value={3}>Easy (3 x 3)</MenuItem>
          <MenuItem value={4}>Medium (4 x 4)</MenuItem>
          <MenuItem value={6}>Hard (6 x 6)</MenuItem>
        </Select>
      </div>

      <h4>Choose an image</h4>
      <img
        src="http://placekitten.com/400/400"
        alt="kitten1"
        onClick={() => selectImage('400')}
        style={{
          border:
            imageUrl === 'http://placekitten.com/400/400'
              ? '4px solid white'
              : '',
        }}
      />
      <img
        src="http://placekitten.com/500/500"
        alt="kitten2"
        onClick={() => selectImage('500')}
        style={{
          border:
            imageUrl === 'http://placekitten.com/500/500'
              ? '4px solid white'
              : '',
        }}
      />
      <img
        src="http://placekitten.com/600/600"
        alt="kitten3"
        onClick={() => selectImage('600')}
        style={{
          border:
            imageUrl === 'http://placekitten.com/600/600'
              ? '4px solid white'
              : '',
        }}
      />

      <div style={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          disabled={!imageUrl}
          onClick={() => setIsStarted(true)}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default Startup;
