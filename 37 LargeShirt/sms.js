"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "Large", message = "I love Typescript") {
    console.log(`Making a ${size} T-Shirt with the ${message} printed on it`);
}
make_shirt(); // with default message
make_shirt("Medium"); // with Medium Message 
make_shirt("Small", "Thank you Sir Zia, Sir Ameen"); // a shirt of any size with a different message.
