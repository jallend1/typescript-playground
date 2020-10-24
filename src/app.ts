const inputs = document.querySelectorAll('input');
console.log(inputs);

const add = (a: number, b:number, c: number | string = 'jason') => {
    console.log(a + b);
    console.log(c)
}

const subtract = (initial: number, newNumber: number, thirdNumber?: number) => {
    thirdNumber ? console.log(initial - newNumber - thirdNumber) : console.log(initial - newNumber);
}
add(1, 5);
add(1, 5, 'jack')
subtract(5, 2, 10)
