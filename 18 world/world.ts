let world = ["London", "England", "Bangladesh", "Dubai", "America"]; // Store the locations in a array. Make sure the array is not in alphabetical order.
console.log("Orignal Order", world); // Print your array in its original order.
console.log("Alphabetical Order", [...world].sort()); //Print your array in alphabetical order without modifying the actual list.
console.log("Orignal Order", world); // Show that your array is still in its original order by printing it.
console.log("Reverse Alphabetical Order", [...world].sort().reverse()); //  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Orignal Order", world); // Show that your array is still in its original order by printing it again.
world.reverse(); // Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed Order", world);
world.reverse(); // • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Orignal Order", world);
world.sort(); // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical Order", world);
world.reverse(); //  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse Alphabetical Order", world);
