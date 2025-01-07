const { add, subtract } = require('./utils');

function main() {
  const a = 5;
  const b = 3;

  console.log(`Adding ${a} and ${b}:`, add(a, b));
  console.log(`Subtracting ${b} from ${a}:`, subtract(a, b));
}

main();
