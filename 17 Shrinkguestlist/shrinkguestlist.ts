let guestList = ["Yasir", "Shariq", "Zubair", "Umair", "Ammad"];
console.log("Oh no! i can only invite two persons to the dinner.");

while (guestList.length > 2) {let removedguests = guestList.pop();
console.log(`Sorry ${removedguests} i cant invite you to the dinner`)};

guestList.forEach(guestList => {console.log(`Dear ${guestList} your are still invited to the dinner`)});

guestList.splice(0, guestList.length);
console.log(guestList);

