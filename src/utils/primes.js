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

export function findPreviousPrime(n) {
  const originalN = n;
  n = Math.floor(n);

  if (n === originalN) {
    n -= 1;
  }

  while (n > 1) {
    if (isPrime(n)) {
      return n;
    }
    n -= 1;
  }

  return 'NULL';
}

export function findNextPrimeNumber(n) {
  n = Math.floor(n + 1)

  while (true) {
    if (isPrime(n)) {
      return n;
    }
    n += 1
  }
}

export function findPrimeNumbersInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
