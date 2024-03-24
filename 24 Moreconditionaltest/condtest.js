// Tests for equality and inequality with strings
console.log("Testing equality with strings:");
let vegetable1 = "carrot";
let vegetable2 = "carrot";
let vegetable3 = "Carrot";
console.log(vegetable1 == vegetable2);
console.log(vegetable1 == vegetable3);
console.log("Tests using the lower case function");
console.log("MANGO".toLocaleLowerCase() == "mango");
let x = 10;
let y = 10;
console.log(`\n"Numerical tests involving equality and inequality"`);
console.log("Equality", x == y, " ", "Inequality", x !== y);
let b = 10;
let c = 15;
console.log(`\n"Numerical tests involving greater than and less than"`);
console.log("Greater than", c > b, " ", "Less than", b < c);
let d = 10;
let e = 15;
console.log(`\n"Numerical tests involving greater than or equal to"`);
console.log("Greater than or equal to", e >= d);
console.log(`\n"Numerical tests involving less than or equal to"`);
console.log("Less than or equal to", d <= e);
// Tests using "and" and "or" operators
console.log("\n Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
console.log(`\n "Test whether an item is in a array"`);
let fruits = ["apple", "sweet potato", "red cabbage"];
console.log("check for sweet potato in array", fruits.includes("sweet potato"));
console.log(`\n "Test whether an item is not in a array"`);
let vege = ["onion", "sweet potato", "red cabbage"];
console.log("check for green chilli is not in array", fruits.includes("green chilli"));
export {};
