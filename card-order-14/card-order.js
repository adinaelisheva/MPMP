function hasAscending(cards) {
  return (cards[0] < cards[1] && cards[1] < cards[3]) ||
         (cards[0] < cards[1] && cards[1] < cards[2]) ||
         (cards[0] < cards[2] && cards[2] < cards[3]) ||
         (cards[1] < cards[2] && cards[2] < cards[3]);
}
function hasDescending(cards) {
  return (cards[0] > cards[1] && cards[1] > cards[3]) ||
         (cards[0] > cards[1] && cards[1] > cards[2]) ||
         (cards[0] > cards[2] && cards[2] > cards[3]) ||
         (cards[1] > cards[2] && cards[2] > cards[3]);
}
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    if (j === i) { continue; }
    for (let k = 1; k <= 4; k++) {
      if (k === i || k === j) { continue; }
      const l = 10 - (i+j+k);
      if (!hasAscending([i,j,k,l]) && !hasDescending([i,j,k,l])) {
        console.log(`[${i},${j},${k},${l}]`);
      }
    }
  }
}