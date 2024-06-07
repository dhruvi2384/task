// write Hello world
document.write("<h1>" + "Hello World" + "</h1>");
// add two numbers
let num1 = 20;
let num2 = 20;
let total = num1 + num2;
document.write("<h2> Number Total is : " + total + "</h2>");
const sqrt = Math.sqrt(total);
document.write("<h3> Number Total is : " + sqrt + "</h3>");

// JavaScript Program to Calculate the Area of a Triangle
let base = 2;
let height = 5;
const area = (base * height) / 2;
document.write("<h4> Triangle is : " + area + "</h4>");

// JavaScript Program to Swap Two Variables
let swapNum = 20;
let swapNum2 = swapNum;
document.write("Number Two =", swapNum2);

// JavaScript Program to Solve Quadratic Equation
let root1;
let root2;
let a = 10;
let b = 44;
let c = 23;
const ans = a * a - 4 * a * c;
console.log(ans);
if (ans > 0) {
  root1 = -b + Math.sqrt(ans) / (2 * a);
  root1 = -b - Math.sqrt(ans) / (2 * a);
  document.write(root1);
} else if (ans == 0) {
  root1 = root2 - b / (2 * a);
  document.write(root1);
} else {
  let result = (-b / (2 * a)).toFixed(2);
  let result2 = (Math.sqrt(-result) / (2 * a)).toFixed(2);
  document.write(result2);
}

// km to mile
function mileKm() {
  let km = document.getElementById("num").value;
  const MIlE = 0.621371;
  let totalmile = km * MIlE;
  document.write("<br/>" + km + "km is =" + totalmile);
}
// Javascript Program to Convert Celsius to Fahrenheit
function checkCelsius() {
  let cels = document.getElementById("num").value;
  let fahrenheit = (9 / 5) * cels + 32;
  document.write("<br/>" + fahrenheit + "F");
}

// generate rendom number
const randomNum = Math.floor(Math.random() * 10000);
// console.log(randomNum)
document.write("<br/>" + "rendom number is :" + randomNum);

// Javascript Program to Check if a number is Positive, Negative, or Zero

function checkNumber() {
  let numberCheck = document.getElementById("num").value;
  const finalNum = Number(numberCheck);
  console.log(typeof finalNum);
  if (finalNum == 0) {
    document.write("Number is Zero");
  } else if (finalNum > 0) {
    document.write("Number is positive");
  } else if (finalNum < 0) {
    document.write("Number is negative");
  } else {
    document.write("This is not a number");
  }
}

// Javascript Program to Check if a Number is Odd or Even

function oddEven() {
  let oddEvenNum = document.getElementById("num").value;
  let checkNum = oddEvenNum % 2 == 0 ? "number is Even" : "number is Odd";
  document.write(checkNum);
}

// find lagest number
let number1 = 200;
let number2 = 300;
let number3 = 400;
let findMax = Math.max(number1, number2, number3);
document.write(`<br/> largest number is ${findMax}`);

// find a prime number
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

const number = 24;
if (isPrime(number)) {
  console.log(number + " is a prime number");
} else {
  console.log(number + " is not a prime number");
}

// factorial
let abc = 10;
let fact = 1;
for (i = 1; i <= abc; i++) {
  fact *= i;
}
console.log(`The factorial of ${abc} is ${fact}.`);

// table
let tableWant = 19;
let tables = 1;
for (i = 1; i <= 10; i++) {
  let table = i * tableWant;
  document.write(`<br/> ${tableWant} * ${i} = ${table}`);
}
// fibo series
let fibo = 20;
let numberOne = 0;
let numberTwo = 1;
console.log(numberOne);
console.log(numberTwo);
for (let i = 2; i <= fibo; i++) {
  let fiboSeries = numberOne + numberTwo;
  numberOne = numberTwo;
  numberTwo = fiboSeries;
  console.log(numberTwo);
}

// armstong number
let armstongNum = 370;
let length = armstongNum.toString().length;
let sum = 0;
let temp = armstongNum;

while (temp > 0) {
  let rem = temp % 10;
  sum += rem ** length;
  temp = parseInt(temp / 10);
  console.log(temp);
}

if (sum === armstongNum) {
  console.log("Number is an Armstrong number");
} else {
  console.log("Number is not an Armstrong number");
}

// do sum natural num
let num = 100;
let totalofNum = 0;
for (i = 1; i <= num; i++) {
  totalofNum += i;
}

console.log(`total of number is ${totalofNum}`);

// JavaScript Program to Check if the Numbers Have Same Last Digit
let lastDigitNum1 = 123320;
let lastDigitNum2 = 10321;
let lastTwoDigitsNum1 = lastDigitNum1 % 100;
let lastTwoDigitsNum2 = lastDigitNum2 % 100;
if (lastTwoDigitsNum1 === lastTwoDigitsNum2) {
  console.log("Last two digits are the same.");
} else {
  console.log("Last two digits are different.");
}

// JavaScript Program to Find HCF or GCD LCM

// let numberHG1 = prompt("Enetr number 1");
// let numberHG2 = prompt("Enetr number 2");
// let gcd;
// for (i = 1; i <= numberHG1 && i < i <= numberHG2; i++) {
//   if (numberHG1 % i == 0 && numberHG2 % i == 0) {
//     gcd = i;
//   }
// }
// console.log(gcd);
// let lcm = (numberHG1 * numberHG2) / gcd;
// console.log(lcm);

// find a factors}
let totalOfNumbers;
function totalOfNum(numbers) {
  if (numbers > 0) {
    return numbers + totalOfNum(numbers - 1);
  } else {
    return numbers;
  }
}
const factorsNumber = totalOfNum(5);
console.log(factorsNumber);

// guess the number
// let randomNumber = Math.floor(Math.random() * 10);
// let otp;
// console.log(randomNumber);
// do {
//   otp = prompt("Guess the number between 1 to 10....");
//   if (randomNumber == otp) {
//     console.log("Congratulation Number is match");
//     break;
//   }
// } while (randomNumber !== otp);

// program to convert decimal to binary
// const decimalNum = parseInt(prompt('Enter a decimal number: '));
// convert to binary
// const result = decimalNum.toString(2);
// console.log('Binary:' + ' ' + result);

// // asci value 
// let asci = 3;
// const asciValueOf = asci.toString().charCodeAt(0);
// console.log(asciValueOf);

// JavaScript Program to Check Whether a String is Palindrome or Not
let PalindromeNum1 = 123320;
let isPalindrome = true;
  
  let DigitsPalindromeNum1 = PalindromeNum1.toString();
  for (let i = 0; i < DigitsPalindromeNum1.length / 2; i++) {
      if (DigitsPalindromeNum1[i] !== DigitsPalindromeNum1[DigitsPalindromeNum1.length - 1 - i]) {
          isPalindrome = false;
          break;
      }
  }
   if (isPalindrome) {
      console.log("The number is a palindrome");
  } else {
      console.log("The number is not a palindrome");
  }
// JavaScript Program to Sort Words in Alphabetical Order
let string = "zxyshjwdhfkjwf"
let sortString = string.split("").sort()
let stringShort =sortString.join("")
console.log(stringShort)

// JavaScript Program to Replace Characters of a String
let stringCha = "Hello My name is Dhruvi Bhavsar Hello I am Dhruvi"
let replace = stringCha.replace(/Dhruvi/g , 'User')
console.log(replace)

// JavaScript Program to Reverse a String
let reverseString = "Hello"
let reverseStringText = reverseString.split("")
let stringjoin = reverseStringText.reverse()
console.log(stringjoin.join(""))

// JavaScript Program to Create Objects in Different Ways and remove js obj 
const obj = {
  fname : 'Dhruvi',
  lname : 'bhavsar',
  fullname : function ()
  {
    return this.fname +' '+ this.lname;
  }
}
console.log('User fullname :', obj.fullname())
delete obj.fname
console.log('Remove Fname',obj.fullname())
const checkKey = 'lname' in obj
console.log(checkKey)
if(checkKey == true)
  {
    console.log('lname is in the objact')
  }
else
{
  console.log("Objact ket is not match")
}
// JavaScript Program to Add Key/Value Pair to an Object
obj.favColor = "red"
console.log(obj)
// JavaScript Program to Check the Number of Occurrences of a Character in the String
const isChar = 'Dhruvi AtulKumar Bhavsar'
const isCharStr = isChar.match(/a/g).length;
console.log(isCharStr)

// JavaScript Program to Convert the First Letter of a String into UpperCase
const isCharUpper = 'upperCase'
const converUpper = isCharUpper.charAt(0).toUpperCase()
console.log(converUpper)

// JavaScript Program to Count the Number of Vowels in a String
const checkVowel = 'Dhruvi AtulKumar Bhavsar'
const checkVoewelarr = isChar.match(/['a','e','i','o','u']/g).length;
console.log(checkVoewelarr)

// JavaScript Program to Check Whether a String Starts and Ends With Certain Characters
const checkSe = "Dhruvi"
if(checkSe.startsWith('D'))
  {
    console.log("string start with  D")
  }
else if(checkSe.endsWith('i'))
  {
    console.log("String end with i")
  }  
else
{
  console.log("Sorry string is not match")
}  

// replace string 
const strReplace = "The apple is red and that red apple is not looks good";
const replaceStr = /red/g;
const newStr = strReplace.replace(replaceStr, "green");
console.log(newStr);

// generate rendom string
const result = Math.random().toString(36).substring(2,7);
console.log(result);

// trim space 
const strSpace = "    Dhruvi   Bhavsar"
const strTrim = strSpace.trim()
console.log(strTrim);

// find a substring
const enterMain = prompt("Enter Sting")
const findword = prompt("Enter a string you want to find in privious")
const serach = enterMain.includes(findword); //its true false
if(serach ==  true)
  {
    console.log("your string is match");
  }
else
{
  console.log('string is not match');
}  

// program to encode a string to Base64

const result12 = window.btoa(enterMain);
console.log("encoding", result12);

const result1 = window.atob(result12);
console.log(result1);