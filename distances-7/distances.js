const NUM = 7;

function getDist(p1, p2) {
  const d1 = Math.abs(p1[0] - p2[0]);
  const d2 = Math.abs(p1[1] - p2[1]);
  const dist = Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2));
  return Math.round(dist*1000) / 1000;
}

function verifyPointAndGetNewDistances(newP, knownPoints, knownDistances) {
  const newDistances = []
  for (const p of knownPoints) {
    const d = getDist(p, newP);
    if (knownDistances.includes(d) || newDistances.includes(d)) {
      return false;
    }
    newDistances.push(d);
  }
  return newDistances;
}

function placeXthToken(x, knownPoints, knownDistances, startI, startJ, N) {
  let dists;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i < startI || (i === startI && j < startJ)) {
        continue;
      }
      const p = [i,j];
      dists = verifyPointAndGetNewDistances(p, knownPoints, knownDistances);
      if (!dists) {
        continue;
      }
      const newDistances = knownDistances.concat(dists);
      const newPoints = knownPoints.concat([p]);
      if (x === N) {
        // we've placed all tokens!
        return {
          knownDistances: newDistances,
          knownPoints: newPoints,
        }
      }
      const newStartI = startI;
      const newStartJ = startJ + 1;
      if (newStartJ >= N) {
        newStartJ = 0;
        newStartI = startI + 1;
      }
      if (newStartI >= N) {
        return false;
      }
      const res = placeXthToken(x+1, newPoints, newDistances, newStartI, newStartJ, N);
      if (res) {
        return res;
      }
    }
  }
  return false;
}

function run(N) {
  return placeXthToken(1, [], [], 0, 0, N);
}

function print(N, knownPoints, knownDistances) {
  let pointsMap = {};
  for (const p of knownPoints) {
    pointsMap[`${p[0]},${p[1]}`] = true;
  }
  console.log(`\n\nArrangement for ${N} tokens on a ${N}x${N} grid:`);
  if (knownPoints.length < N) {
    console.log('Failed - couldn\'t find space for all tokens');
    return;
  }
  console.log('---------------------');
  for (let i = 0; i < N; i++) {
    let row = '\n';
    for (let j = 0; j < N; j++) {
      row += pointsMap[`${i},${j}`] ? ' * ' : ' - ';
    }
    console.log(`${row}\n`);
  }
  console.log('---------------------');
  console.log('Known distances:');
  for (const kd of knownDistances) {
    console.log(kd);
  }
}

for (let n = 1; n <= NUM; n++) {
  const result = run(n);
  print(n, result.knownPoints, result.knownDistances.sort());
}