// Chapter 17 - 20 (for Loops)
// ===================================================================================================================================
// Answer No 1
for( i = 0 ; i <= 10 ; i++){
    console.log("welcome User" , i)
}
// ===================================================================================================================================
// Answer No 2
for (let i = 0; i <= 12; i++) {
    console.log("Iteration " + i);
}
// ===================================================================================================================================
// Answer No 3
for(var i=0; i<=4;i++){}
// ===================================================================================================================================
// Answer No 4
for (let j = 0; j < 100; j++) {
    console.log("Iteration " + j);
}
// ===================================================================================================================================
// Answer No 5
for (let i = 3; i > 0; i--) {
    console.log("Iteration " + i);
}
// ===================================================================================================================================
// Answer No 6
var myArray = [1, 2, 3, 4, 5]; // Replace with your array
var numberOfElements = myArray.length;  

console.log("Number of elements in the array: " + numberOfElements);
// ===================================================================================================================================
// Answer No 7
// var flag = true;
// ===================================================================================================================================
// Answer No 8
var pets = ["cat", "dog", "fish", "bird"]; // Replace with your array
var numberOfElements = pets.length;

for (let i = 0; i < numberOfElements; i++) {
    console.log("Pet " + (i + 1) + ": " + pets[i]);
}
// ===================================================================================================================================
// Answer No 9
for (let i = 0; i < 10; i++) {
    if (i === 1) {
        alert("Counter is 1 on the second iteration.");
    }
}
// ===================================================================================================================================
// Answer No 10
var userNames = ["zerka", "Vikstar", "tobi", "Simon", "Harry"];

var firstName = prompt("Enter The Sideman Name");

for (let i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Welcome, " + firstName);
        break;
    }
    if (i === userNames.length - 1) {
        alert("Please write the correct Sideman name.");
    }
}
// ===================================================================================================================================
// Answer No 11
var matchFound = false;
var list = ["item1", "item2", "item3"];
var userInput = prompt("Enter an item");

for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (!matchFound) {
    alert("No match found");
}
// ===================================================================================================================================
// Answer No 12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}

// ================= THE END =================