let bestLen = 0;
let best = [];

const goalAmt = 1000000;

function tryDeposit(a, b) {
  b = a+b;
  let sum = 0;
  let days = 2; // a and b count for the first 2 days
  for (; sum < goalAmt; days++) {
    sum = a + b;
    [a,b] = [b,sum];
  }
  if (sum === goalAmt) {
    return days;
  }
  return -1;
}

const startTime = new Date(); // to log how long this takes to run

// Note: if i is half the goal, this will never work, as i + (i + j) will be over the goal no matter what j is
for (let i = 1; i < goalAmt/2; i++) {

  // Short circuiting - if both i and j are above your current best attempt, there's no way they will beat it. 
  // So only run j up to the current best if i is already over it.
  let jLimit = goalAmt;
  if (i > best[0]) {
    jLimit = best[1];
  }
  
  for (let j = 1; j < jLimit; j++) {
    const res = tryDeposit(i,j);
    if (res > bestLen) {
      bestLen = res;
      best = [i,j];
      console.log(`[${i}, ${j}] is better - ${bestLen} days`);
    }
  }
}
const endTime = new Date();
console.log('\n'+(endTime.getTime() - startTime.getTime())/1000 + 's');
console.log(`Best starting deposits are ${best[0]} and ${best[1]} which take ${bestLen} days to reach \$${goalAmt}`);