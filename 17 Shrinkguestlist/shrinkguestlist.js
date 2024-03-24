var guestList = ["Yasir", "Shariq", "Zubair", "Umair", "Ammad"];
console.log("Oh no! i can only invite two persons to the dinner.");
while (guestList.length > 2) {
    var removedguests = guestList.pop();
    console.log("Sorry ".concat(removedguests, " i cant invite you to the dinner"));
}
;
guestList.forEach(function (guestList) { console.log("Dear ".concat(guestList, " your are still invited to the dinner")); });
guestList.splice(0, guestList.length);
console.log(guestList);
