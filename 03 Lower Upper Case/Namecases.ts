let personname = "Ayaz ahmed";
let lowercasename = personname.toLowerCase();
let uppercasename = personname.toUpperCase();
let titlecasename = personname.replace(/\b\w/g, char => char.toUpperCase());
console.log("lowercasename:", lowercasename);
console.log("uppercasename:", uppercasename);
console.log("titlecasename:", titlecasename);
