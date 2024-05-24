function make_car(manufacturer: string, model: string, ...options: [string, any][]): { [key: string]: any } {
    let car: { [key: string]: any } = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

console.log(make_car("Honda", "125", ["color", "red"], ["year", 2022]));
console.log(make_car("Honda", "City", ["color", "black"], ["Sunroof", "yes"]));
