// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

import inquirer from "inquirer";

let continueprocess = true;

while(continueprocess){

let question = await inquirer.prompt({
name: "age",
type: "number",
message: "What is your age?"

}
);


if (question.age < 2) {
  console.log("The person is a baby");
} else if (question.age >= 2 && question.age < 4) {
  console.log("The person is a toddler");
} else if (question.age >= 4 && question.age < 13) {
  console.log("The person is a Kid");
} else if (question.age >= 13 && question.age < 20) {
  console.log("The person is a Teenager");
} else if (question.age >= 20 && question.age < 65) {
  console.log("The person is an adult");
}
else {console.log("The person is a elder")
    
} 


const replay = await inquirer.prompt({
    name: "replay",
    type: "confirm",
    message: ("Do you want to continue?"),
    default: true,
  });

  continueprocess = replay.replay;

}
  
