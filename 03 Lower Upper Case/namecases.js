var personname = "Ayaz ahmed";
var lowercasename = personname.toLowerCase();
var uppercasename = personname.toUpperCase();
var titlecasename = personname.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("lowercasename:", lowercasename);
console.log("uppercasename:", uppercasename);
console.log("titlecasename:", titlecasename);
