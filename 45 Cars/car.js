function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
console.log(make_car("Honda", "125", ["color", "red"], ["year", 2022]));
console.log(make_car("Honda", "City", ["color", "black"], ["Sunroof", "yes"]));
