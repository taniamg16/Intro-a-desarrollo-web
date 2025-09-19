function multiply(a, b) {
    return a * b;
}

const multiplyArrow = (a, b) => a * b;

function square(n) {
    return multiply(n, n);
}

const squareArrow = (n) => multiplyArrow(n, n);
