// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

let magicians_names: string[] = ["Rock", "Salt", "Pepper"];

function showmagicians() {
    for (let i = 0; i < 3; i++) {
        console.log(magicians_names[i])
    }
};

showmagicians()