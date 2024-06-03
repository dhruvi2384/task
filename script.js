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
if (ans > 0) 
{
  root1 = -b + Math.sqrt(ans) / (2 * a);
  root1 = -b - Math.sqrt(ans) / (2 * a);
  document.write(root1);
} 
else if (ans == 0) 
{
  root1 = root2 - b / (2 * a);
  document.write(root1);
} 
else 
{
  let result = (-b / (2 * a)).toFixed(2);
  let result2 = (Math.sqrt(-result) / (2 * a)).toFixed(2);
  document.write(result2);
}

// km to mile
let km = prompt("Enter killo-meter")
const MIlE = 0.621371
let totalmile = km * MIlE
document.write("<br/>" + km + "km is =" + totalmile)

// Javascript Program to Convert Celsius to Fahrenheit
let cels = prompt("Enter celsius")
let fahrenheit = (9/5) * cels + 32 
document.write("<br/>" + fahrenheit +"F")

// generate rendom number
