for (let i = 1; ; i++) {
  const root = Math.sqrt(i);
  let numFactors = 0;
  for (let f = 0; f <= root; f++) {
    if (i % f === 0) {
      if (f === root) {
        numFactors++;
      } else {
        numFactors += 2;
      }
    }
  }
  console.log(`${i}: ${numFactors} factors`)
  if (numFactors === 64) {
    console.error(`${i} has 64 factors`);
    break;
  }
}