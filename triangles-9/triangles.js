const POINT_LIMIT = 100; // how far will you run the point numbers
const WAIT_LIMIT = 200; // how long before giving up and trying a new set

function takeaway(triangle) {
  return [
    Math.abs(triangle[0] - triangle[1]),
    Math.abs(triangle[1] - triangle[2]),
    Math.abs(triangle[2] - triangle[0]),
  ]
}

function fourteen(triangle) {
  return (triangle[0] + triangle[1] + triangle[2]) === 14;
}

const seen = {};

let maxX = 0;
let maxTriangle;
for (let i = -1*POINT_LIMIT; i < POINT_LIMIT; i++) {
  for (let j = i; j < POINT_LIMIT; j++) {
    for (let k = j; k < POINT_LIMIT; k++) {
      const originalTriangle = [i,j,k].sort();
      let triangle = [i,j,k].sort();
      const otStr = `${triangle[0]},${triangle[1]},${triangle[2]}`
      if (seen[otStr]) {
        continue;
      }
      seen[otStr] = true;
      if (fourteen(triangle)) {
        continue;
      }
      for (let x = 0; x < WAIT_LIMIT; x++) {
        triangle = takeaway(triangle);
        const tStr = `${triangle[0]},${triangle[1]},${triangle[2]}`
        if (tStr === `0,7,7`) {
          console.log(`[${originalTriangle}] reached [0,7,7] in ${x+1} moves`);
          if (x > maxX) {
            maxX = x;
            maxTriangle = otStr;
          }
          break;
        }
      }
    }
  }
}
console.log(`From -${POINT_LIMIT} to ${POINT_LIMIT}, the longest path to [0,7,7] was [${maxTriangle}] which took ${maxX} steps`);