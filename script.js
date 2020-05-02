function sayHello() {
  console.log('hello');
}

function sayName(name) {
  console.log(name)
}

let myName = 'yamada';
sayHello();
sayName(myName);

function calc(num1, num2) {
  return num1 * num2;
}

let num1 = 3;
let num2 = 4;
console.log(calc(num1, num2));

let hello = function () {
  console.log('hello');
}
hello();
