function countPrimeNumbers() {
    let primeCount = 0;
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeCount++;
        }
    }
    return primeCount;
}

const numIterations = 100;
const start = performance.now();

setTimeout(() => {
    for (let i = 0; i < numIterations; i++) {
        countPrimeNumbers();
    }

    const end = performance.now();
    console.log('Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.');
}, 0);