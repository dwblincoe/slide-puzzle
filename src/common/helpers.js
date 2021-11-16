export function isSolvable(tiles, tileCount) {
  let product = 1;
  for (let i = 1, l = tileCount; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (tiles[i - 1] - tiles[j - 1]) / (i - j);
    }
  }

  return Math.round(product) === 1;
}

export function isSolved(tiles) {
  for (let i = 0, l = tiles.length; i < l; i++) {
    if (tiles[i] !== i) {
      return false;
    }
  }

  return true;
}

export function getMatrixPosition(index, gridSize) {
  return {
    row: Math.floor(index / gridSize),
    col: index % gridSize,
  };
}

export function shuffle(tiles) {
  const shuffledTiles = [
    ...tiles
      .filter((t) => t !== tiles.length - 1)
      .sort(() => Math.random() - 0.5),
    tiles.length - 1,
  ];

  return isSolvable(shuffledTiles) && !isSolved(shuffledTiles)
    ? shuffledTiles
    : shuffle(shuffledTiles);
}

export function canSwap(srcIndex, destIndex, gridSize) {
  const { row: srcRow, col: srcCol } = getMatrixPosition(srcIndex, gridSize);
  const { row: destRow, col: destCol } = getMatrixPosition(destIndex, gridSize);

  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
}

export function swap(tiles, src, dest) {
  const tilesResult = [...tiles];

  [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src]];

  return tilesResult;
}
