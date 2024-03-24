var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var world = ["London", "England", "Bangladesh", "Dubai", "America"];
console.log("Orignal Order", world);
console.log("Alphabetical Order", __spreadArray([], world, true).sort());
console.log("Orignal Order", world);
console.log("Reverse Alphabetical Order", __spreadArray([], world, true).sort().reverse());
console.log("Orignal Order", world);
world.reverse();
console.log("Reversed Order", world);
world.reverse();
console.log("Orignal Order", world);
world.sort();
console.log("Alphabetical Order", world);
world.reverse();
console.log("Reverse Alphabetical Order", world);
