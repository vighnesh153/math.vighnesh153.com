export function isPrime(n) {
  if (Number.isInteger(n) === false) {
    return false;
  }

  if (n <= 3) {
    return n > 1;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

export function primeFactors(n) {
  const originalN = n;
  const factors = {};

  let factor = 2;
  while (factor * factor <= originalN) {
    if (n % factor === 0) {
      n /= factor;
      factors[factor] = (factors[factor] || 0) + 1;
    } else {
      factor += 1;
    }
  }

  if (n > 1) {
    factors[n] = (factors[n] || 0) + 1;
  }

  return factors;
}
