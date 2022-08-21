// $ Write a recursive JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

let x = 0;
const findGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return findGCD(b, a % b);
};

console.log('GCD: ', findGCD(50, 20));
