// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the
//   original names and one array with the Great added to each magician’s name.

let magicians: string[] = ["Rahim", "Rocky", "Pera"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}


function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }

return magicians

}

let greatmagicians = make_great(magicians.slice());  // creates a new modified array

console.log("Original magicians:");

show_magicians(magicians); // Shows Orignal names modified names

console.log("Great magicians:");

show_magicians(greatmagicians); // Shows Orignal names modified names
