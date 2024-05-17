// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
const names = ["Raheel", "Naveed", "Danish", "Admin"];
function checkusers(userlist) {
    if (userlist.length === 0) {
        console.log("We need to find some users");
    }
    else {
        console.log("We have users in the list");
    }
}
console.log("Checks the name array when it contains names\n");
checkusers(names);
names.length = 0;
console.log("\n Checks the name array after making it empty\n");
checkusers(names);
export {};
