function countDown(number) {
  if (number === 0) return;

  countDown(number - 1)
}

// countDown(5)

const factotial = (n) => n === 0 ? 1 : n * factotial(n - 1);

// console.log(factotial(5));



