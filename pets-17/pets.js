let numValidRows = 0;

function isValidRow(row) {
  let lastPet = '';
  for (const pet of row) {
    if (pet === 'C' && pet === lastPet) {
      return false;
    }
    lastPet = pet;
  }
  return true;
}

function checkAndCountRow(row) {
  const isValid = isValidRow(row);
  if (isValid) {
    numValidRows++;
  }
  console.log(`${row}: ${isValid ? 'T' : 'F'}`);
}
 
function generateCheckAndCountRows(row) {
  if (row.length >= 10) {
    checkAndCountRow(row);
  } else {
    generateCheckAndCountRows(row.concat(['C']));
    generateCheckAndCountRows(row.concat(['D']));
  }
}

generateCheckAndCountRows([]);
console.error(`10 cats and/or dogs can be arranged ${numValidRows} valid ways.`);