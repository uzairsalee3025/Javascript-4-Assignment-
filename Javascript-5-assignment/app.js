// Chapter 21 (Changing Case)
// ===================================================================================================================================
// Answer No 1
var allLower = userInput.toLowerCase();
// ===================================================================================================================================
// Answer No 2
x = x.toLowerCase();
// ===================================================================================================================================
// Answer No 3
y = y.toUpperCase();
// ===================================================================================================================================
// Answer No 4
var originalString = "YourOriginalString";
var lowerCaseString = originalString.toLowerCase();
// ===================================================================================================================================
// Answer No 5
var myArray = ["YourOriginalString"]; 
var lowerCaseString = myArray[0].toLowerCase();
// ===================================================================================================================================
// Answer No 6
var myString = "yourOriginalString";

alert(myString.toUpperCase());
// ===================================================================================================================================
// Answer No 7
var cityName = "kaRacHi";
var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedName);
// ===================================================================================================================================


// Chapter 22 - 25 (Strings)
// ===================================================================================================================================
// Answer No 1
var sameWords = "captain";
var slicedString = sameWords.slice(0, 1) + sameWords.slice(3);

console.log(slicedString);
// ===================================================================================================================================
// Answer No 2
var sameWords = "captain";
var numberOfCharacters = sameWords.length;

console.log(numberOfCharacters);
// ===================================================================================================================================
// Answer No 3
var animal = "elephant";
var startIndex = Math.floor(animal.length / 2) - 2;
var seg = animal.slice(startIndex, startIndex + 4);

console.log(seg);
// ===================================================================================================================================
// Answer No 4
var myString = "Hello, World!";
var numberOfCharacters = myString.length;

console.log(numberOfCharacters);
// ===================================================================================================================================
// Answer No 5
var myString = "YourOriginalString";
var numberOfCharacters = myString.length;

var slicedString = myString.slice(1, -3);

console.log(numberOfCharacters);
console.log(slicedString);
// ===================================================================================================================================
// Answer No 6
// The value of indx will be 3
// ===================================================================================================================================
// Answer No 7
// The value of indx will be 13
// ===================================================================================================================================
// Answer No 8
var text = "Let's go to the beach and then go eat.";
var lastIndexOfGo = text.lastIndexOf("go");

if (lastIndexOfGo !== -1) {
    var indx = lastIndexOfGo;
} else {
}
console.log(indx); 
// ===================================================================================================================================
// Answer No 9
if (typeof yourString[indexNum] !== 'undefined') {
  }
   else {
  }
// ===================================================================================================================================
// Answer No 10
// In the string "abcde," the character at index 2 is "c."
// ===================================================================================================================================
// Answer No 11
var text = "This is a sample text.";
var cha = text.charAt(9);

console.log(cha);
// ===================================================================================================================================
// Answer No 12
var str = "Hello, World!";
var x = str.charAt(str.length - 1);

console.log(x);
// ===================================================================================================================================
// Answer No 13
var input = "YourString";
var cha = input.charAt(4);

console.log(cha);
// ===================================================================================================================================
// Answer No 14
if (yourString.charAt(2) === 'x') {
    
  } else {
    
  }  
// ===================================================================================================================================
// Answer No 15
var charArray = [];
var originalString = "This is a sample string.";
var revisedString = originalString;

for (var i = 0; i < originalString.length; i++) {
  charArray.push(originalString.charAt(i));
}

var reconstructedString = charArray.join('');

var reply = "No, thank you. I'm fine.";
var revisedReply = reply.replace("No", "Yes");

console.log(reconstructedString);
console.log(revisedReply);
// ===================================================================================================================================
// Answer No 16
var str = "A string with 1 occurrence of 1.";
var newStr = str.replace("1", "one");

console.log(newStr);
// ==================================================================================================================================
// Answer No 17
var y = x.replace(a/g, "z");


// ===================================================================================================================================
// Chapter 26 (Rounding Numbers)
// ===================================================================================================================================
// Answer No 1
var roundedNumber = Math.round(yourNumber);
// ===================================================================================================================================
// Answer No 2
var origNum = 7.3; // Replace with your actual number
var roundNum = Math.ceil(origNum);
// ===================================================================================================================================
// Answer No 3
var origNum = 7.8; // Replace with your actual number
var roundNum = Math.floor(origNum);
// ===================================================================================================================================
// Answer No 4
var originalNumber = 7.5; // Replace with your actual number
var roundedNumber = Math.round(originalNumber);
// ===================================================================================================================================
// Answer No 5
var originalNumber = 0.5;
var roundedNumber = Math.floor(originalNumber);

// ===================================================================================================================================
// Chapter 27 (Random Numbers)
// ===================================================================================================================================
// Answer No 1
var randomNumber = Math.random();
var scaledNumber = Math.floor(randomNumber * 50) + 1; 

console.log(scaledNumber);
// ===================================================================================================================================
// Answer No 2
var randomNumber = Math.random();
// ===================================================================================================================================
// Answer No 3
function rollDice() {
    var result = Math.floor(Math.random() * 6) + 1;
    return result;
  }
  var diceResult = rollDice();
  
  console.log("You rolled a " + diceResult);
// ===================================================================================================================================
// Answer No 4
function tossCoin() {
    var randomNumber = Math.floor(Math.random() * 2);
  
    var result = (randomNumber === 0) ? "Heads" : "Tails";
  
    return result;
  }
  var tossResult = tossCoin();
  console.log("The coin landed on: " + tossResult);
  
