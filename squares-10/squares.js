function countOnes(n) {
  let count = 0;
  while(n !== 0){
    n = n & (n - 1);
    count++;
  }
  return count;
}

function generateAllBoards() {
  const boards = [];
  for (let i = 0; i < 33546240; i++) {
    if (countOnes(i) !== 12) {
      continue;
    }
    let str = `${i.toString(2)}`;
    while (str.length < 25) {
      str = `0${str}`;
    }
    boards.push(str);
  }
  return boards;
}

function getValueAt(board, i, j) {
  if (i >= 5 || i < 0 || j >= 5 || j < 0) {
    return false;
  }
  return parseInt(board[j * 5 + i]);
}

function isPointInSquareOfSlope(board, i, j, x, y) {
  const relevantValue = getValueAt(board, i,j);
  const value2 = getValueAt(board, i+x, j+y);
  const value3 = getValueAt(board, i+x-y, j+y+x);
  const value4 = getValueAt(board, i-y, j+x);
  if (value2 !== relevantValue ||
      value3 !== relevantValue ||
      value4 !== relevantValue) {
    return false;
  }
  return true;
}

function isPointInSquare(board, i, j) {
  for (let x = 1; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      if (isPointInSquareOfSlope(board, i, j, x, y)) {
        return true;
      }
    }
  }
  return false;
}

function doesBoardHaveSquare(board) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {  
      if (isPointInSquare(board, i, j)) {
        return true;
      }
    }
  }
  return false;
}

function printBoard() {
  for (let i = 0; i < 5; i++) {
    let str = '';
    for (let j = 0; j < 5; j++) {  
      str += getValueAt(board, i, j) ? ' X ' : ' O ';
    }
    console.log(str);
  }
  console.log('\n\n');
}

let d1 = new Date();
const boards = generateAllBoards();
let d2 = new Date();
console.error(`Generated all ${boards.length} boards in ${(d2.getTime() - d1.getTime())/1000}s`);

d1 = new Date();
let foundOne = false;
for (board of boards) {
  if (doesBoardHaveSquare(board)) {
    continue;
  }
  if (!foundOne) {
    d2 = new Date();
    console.error(`Found first tie board in ${(d2.getTime() - d1.getTime())/1000}s`);
    foundOne = true;
  }
  printBoard(board);
}
d2 = new Date();
console.error(`Found all tie boards in ${(d2.getTime() - d1.getTime())/1000}s`);