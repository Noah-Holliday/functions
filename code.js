function sub(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}
console.log(add(2, 4));

function multiply(a, b) {
    let product = 0;
    for (let i = 1; i <= b; i++) {
        product = add(product, a);
    }
    return product;
}
console.log(multiply(6, 8))

function power(a, b) {
    let product1 = 1;
    for (let i = 1; i <= b; i++) {
        product1 = multiply(product1, a)
    }
    return product1;
}
console.log(power(2, 8));

function factorial(a) {
    product3 = 1;
    for (let i = 1; i <= a; i++) {
        product3 = multiply(product3, i)
    }
    return product3;
}
console.log(factorial(4));

function fibonacci(a) {
    first = 0;
    second = 1;
    next = 1;
    for (let i = 2; i <= a; i++) {
        next = add(first, second);
        second = first;
        first = next;
    }
    return next;
}
console.log(fibonacci(8));