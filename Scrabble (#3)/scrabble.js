const tileValues = {
  '': 0,
  'A': 1,
  'E': 1,
  'I': 1,
  'O': 1,
  'U': 1,
  'L': 1,
  'N': 1,
  'S': 1,
  'T': 1,
  'R': 1,
  'D': 2,
  'G': 2,
  'B': 3,
  'C': 3,
  'M': 3,
  'P': 3,
  'F': 4,
  'H': 4,
  'V': 4,
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q': 10,
  'Z': 10,
};

const tileAmounts = {
  '': 2,
  'A': 9,
  'E': 12,
  'I': 9,
  'O': 8,
  'U': 4,
  'L': 4,
  'N': 6,
  'S': 4,
  'T': 6,
  'R': 6,
  'D': 4,
  'G': 3,
  'B': 2,
  'C': 2,
  'M': 2,
  'P': 2,
  'F': 2,
  'H': 2,
  'V': 2,
  'W': 2,
  'Y': 2,
  'K': 1,
  'J': 1,
  'X': 1,
  'Q': 1,
  'Z': 1,
};

// Don't trust Object.keys to give any specific ordering - sort it
const alphabet = Object.keys(tileAmounts).sort();

const rack = [];
const scores = {};
const seen = {}; // avoid duplicates
// recursively generate every possible rack of tiles
function addNextLetters(rack, nextLetterInd) {
  if (rack.length >= 7 || nextLetterInd > alphabet.length) {
    score(rack.slice(0,7));
    return;
  }
  const nextLetter = alphabet[nextLetterInd];
  const amounts = tileAmounts[nextLetter];
  for (let i = 0; i < amounts; i++) {
    let nextRack = [...rack].concat(new Array(i).fill(nextLetter));
    if (seen[nextRack.join('')]) {
      continue;
    }
    addNextLetters(nextRack, nextLetterInd+1);
  }
}
addNextLetters([], 0);

function score(rack) {
  seen[rack.join('')] = true;
  total = 0;
  for (letter of rack) {
    total += tileValues[letter];
  }
  console.log(`${rack} scores ${total}`);
  if (scores[total]) {
    scores[total]++;
  } else {
    scores[total] = 1;
  }
}
