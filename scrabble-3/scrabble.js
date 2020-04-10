const tileValues = {
  '_': 0,
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
  '_': 2,
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

const hand = [];
const scores = {};
const seen = {}; // avoid duplicates
const generated = {}; // for output assistance

// recursively generate every possible hand of tiles
function addNextLetters(hand, nextLetterInd) {
  if (hand.length >= 7) {
    score(hand.slice(0,7));
    return;
  }
  if (nextLetterInd >= alphabet.length) {
    return;
  }
  const nextLetter = alphabet[nextLetterInd];
  const amounts = tileAmounts[nextLetter];
  if (hand.length === 1 && !generated[hand[0]]) {
    const curLetter = hand[0];
    generated[curLetter] = true;
    console.error(`generating hands for ${curLetter}...`);
  }
  for (let i = 0; i <= amounts; i++) {
    let nextHand = [...hand].concat(new Array(i).fill(nextLetter));
    if (nextHand.length > 7 || seen[nextHand.join('')]) {
      continue;
    }
    addNextLetters(nextHand, nextLetterInd+1);
  }
}
function score(hand) {
  seen[hand.join('')] = true;
  total = 0;
  for (letter of hand) {
    total += tileValues[letter];
  }
  console.log(`${hand} scores ${total}`);
  if (scores[total]) {
    scores[total]++;
  } else {
    scores[total] = 1;
  }
}
// print this to a different output stream
const d1 = new Date();
addNextLetters([], 0);
const d2 = new Date();
console.error(`Ran in ${(d2.getTime() - d1.getTime())/1000}s`);
console.error(scores);