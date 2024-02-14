// TASK 1
// let inputOne = prompt("First Input In Numbers");
// let inputTwo = prompt("Second Input In Numbers");
// if (inputOne >= inputTwo) {
//     console.log("first input " + inputOne  + " is greater then second input " + inputTwo );
// } else {
//     console.log("second input " + inputTwo  + " is greater then first input " + inputOne );
// }


// TASK2
// let numberInput = prompt("Input In Numbers");
// if (numberInput >= 0) {
//     console.log("The sign is +");
// } else {
//     console.log("The sign is -");
// }


// TASK 3
let inputOne = prompt("First Input In Numbers");
let inputTwo = prompt("Second Input In Numbers");
let inputThree = prompt("Third Input In Numbers");
let inputFour = prompt("Fourth Input In Numbers");
let inputFive = prompt("Fifth Input In Numbers");

let findGreater = [inputOne, inputTwo, inputThree, inputFour, inputFive];

let largest = findGreater[0];

for (let i = 0; i < findGreater.length; i++) {
    if (largest < findGreater[i] ) {
        largest = findGreater[i];
    }
}
console.log(largest);


// Task 4
for (var x=0; x<=15; x++) {
        if (x === 0) {
			console.log(x + " is even number");
        }
        else if (x % 2 === 0) {
			console.log(x + " is even number");   
        }
        else {
			console.log(x + " is odd number");
        }
}


// TASK 6
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 ) {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) {
    console.log(i+ " Buzz" );
  }
  else {
    console.log(i);
  }
}


// TASK 7
for(var i=1; i<=5; i++){
       console.log("* ".repeat(i));
 }