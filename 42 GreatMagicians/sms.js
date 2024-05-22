"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase 
//  the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians_names = ["Rock", "Salt", "Pepper"];
function show_magicians(megicians) {
    megicians.forEach(megicain => {
        console.log(magicians_names);
    });
}
function make_great(megicians) {
    for (let i = 0; i < magicians_names.length; i++) {
        magicians_names[i] = magicians_names[i] + " the Great";
    }
}
show_magicians(magicians_names);
