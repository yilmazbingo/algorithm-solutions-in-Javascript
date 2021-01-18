// this code has to be run browser. 'node maps.js' is not gonna execute
const map = {};
const firstElement = document.getElementById("firstElement");
const secondElement = document.getElementById("secondElement");
map[firstElement] = { data: "firstElement" };
map[secondElement] = { data: "secondElement" };

console.log(map[firstElement].data); // thsi will surprisingly print secondElement
// This happens because with objects,keys are stored as strings. This means when we try to use any non-string value, such as an HTML element, as a property of an object, that value is silently converted to a string by calling its toString method.
map[firstElement] = map["[object HTMLDivElement]"];
map[secondElement] = map["[object HTMLDivElement]"];

// also "constructor" property will always point to constructor of the object

const currentLocation = location.href;
console.log("Current-location", currentLocation);
const firstLink = new URL(currentLocation);
console.log("firstlink", firstLink);
const secondLink = new URL(currentLocation);
