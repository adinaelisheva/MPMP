const NUM_ROWS = 128; //50000;

let total = 0
let numOdds = 0;

let row = [1];
let nextRow = [];
// console.log('Row,Percent Odd'); // For CSV output
for (let x = 0; x < NUM_ROWS; x++) {
  for (let i = 0; i < row.length; i++) {
    total++;
    if (row[i] % 2 === 1) {
      numOdds++;
    }
    if (i === 0) {
      nextRow.push(1);
    } else {
      // To avoid truncation issues, don't store the actual number, but just its parity
      const sum = (row[i] + row[i-1]) % 2;
      nextRow.push(sum);
    }
  }
  nextRow.push(1);
  const percent = (Math.round((numOdds / total) * 100000) / 1000);
  // console.log(`${x+1},${percent}`); // For CSV output
  console.log(`Row ${x+1}: ${percent}% odd`); 
  row = nextRow;
  nextRow = [];
}