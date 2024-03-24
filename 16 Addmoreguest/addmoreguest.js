var guestList = ["Yasir", "Shariq", "Zubair", "Umair", "Ammad"];
console.log("I found a bigger dinner table yeaah!");
guestList.unshift("Maaz");
guestList.splice(guestList.length / 2, 0, "Raheel");
guestList.push("Azmat");
guestList.forEach(function (guestList) { console.log("Dear ".concat(guestList, " i would like to invite you to the dinner")); });
