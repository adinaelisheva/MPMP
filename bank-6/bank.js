let bestLen = 0;
let best = [];

let goalAmt = 1000000;

function tryDeposit(a, b) {
  b = a+b;
  let sum = 0;
  let c = 2; // a and b count for the first 2 days
  for (; sum < goalAmt; c++) {
    sum = a + b;
    [a,b] = [b,sum];
  }
  if (sum === goalAmt) {
    return c;
  }
  return -1;
}

const startTime = new Date();
let oldPctStr = '';
// Note: if i is half the goal, this will never work, as i + (i + j) will be over the goal no matter what j is
for (let i = 1; i < goalAmt/2; i++) {
  let pct = ((i-1) / (goalAmt/2)) * 100;
  let pctStr = pct.toFixed(3);
  if (pctStr !== oldPctStr) {
    console.warn(`${pctStr}% (${i})`);
    oldPctStr = pctStr;
  }

  for (let j = 1; j < goalAmt; j++) {
    const res = tryDeposit(i,j);
    if (res > bestLen) {
      bestLen = res;
      best = [i,j];
      console.log(`${i}, ${j} is better - reaches \$${goalAmt} in ${bestLen} days`);
      console.warn(`${i}, ${j} is better - reaches \$${goalAmt} in ${bestLen} days`);
    }
  }
}
const endTime = new Date();
console.log('\n'+(endTime.getTime() - startTime.getTime())/1000 + 's');