console.log('\t"Invitation List send to Guests"');
var guestList = ["Yasir", "Shariq", "Zubair", "Umair", "Ammad"];
guestList.forEach(function (guestList) { return console.log("".concat(guestList, ", you are cordialy invited to the dinner.")); });
var cancelguest = "Zubair";
console.log('\n\t"The Guest which were invited in the previous invitations can not come"');
console.log("Oh no! ".concat(cancelguest, " can't make it to the dinner.\n"));
var newguest = "Rafeeq";
console.log('\t"The Additional guest invited due to cancelation of one guest"');
guestList[guestList.indexOf(cancelguest)] = newguest;
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to the dinner.")); });