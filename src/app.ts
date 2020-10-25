type StringOrNumber = string | number;   

let functionSignature: (a: number, b: number, c?: string) => number;

functionSignature = (numOne: number, numTwo: number, action?: string) => {
    if(action === 'add'){
        return numOne + numTwo;
    }
    else{
        return numOne - numTwo;
    }
}

console.log(functionSignature(5, 100, 'add'));
console.log(functionSignature(1000,1));

const adder = (a: number, b:number, c: StringOrNumber = 'jason') => {
    console.log(a + b);
    console.log(c)
}

adder(1, 5);
adder(1, 5, 'jack');

const subtracter = (initial: number, newNumber: number, thirdNumber?: number) => {
    thirdNumber ? console.log(initial - newNumber - thirdNumber) : console.log(initial - newNumber);
}

subtracter(5, 2, 10);

const sayHello = (greeting: StringOrNumber) => {
    console.log(greeting);
}

sayHello('hi')