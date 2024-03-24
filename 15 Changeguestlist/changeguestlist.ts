console.log('\t"Invitation List send to Guests"');

let guestList = ["Yasir", "Shariq", "Zubair", "Umair", "Ammad"];

guestList.forEach(guestList => console.log(`${guestList}, you are cordialy invited to the dinner.`));

let cancelguest = "Zubair";

console.log('\n\t"The Guest which were invited in the previous invitations can not come"');

console.log(`Oh no! ${cancelguest} can't make it to the dinner.\n`);

let newguest = "Rafeeq";

console.log('\t"The Additional guest invited due to cancelation of one guest"');

guestList[guestList.indexOf(cancelguest)] = newguest;

guestList.forEach(guest => console.log(`Dear ${guest}, you are invited to the dinner.`));
