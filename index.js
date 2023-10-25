// Code your solution here
// Function that takes in array of drivers and a string argument
// returns the matching list of drivers

function findMatching(drivers, name) {
    let result = drivers.filter(value => value.toLowerCase() === name.toLowerCase());
    return result;
}

function fuzzyMatch(drivers, name) {
    let result = drivers.filter(value => value.toLowerCase().substring(0, 2) === name.toLowerCase().substring(0, 2));
    return result;
}

function matchName(driverObjs, nameString) {
    let result = driverObjs.filter(value => value.name.toLowerCase() === nameString.toLowerCase());
    return result;
}