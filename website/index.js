//variables

//declaration then assign
let firstName = "Yash";
let age = 23;
let student = false;



console.log(firstName);
console.log(age);
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are  " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

//makes windwo promt
//let username = window.promt("What's your name?");
//console.log(username);

let username;

document.getElementById("myButton").onclick = function(){

  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Hello " + username;
}

//type conversion
/*
let x;
let y;
let z;

x = Number("3.14"); turns string into number
y = String(3.14); turns number into string
z = Boolean(""); Empty is false anythign else is true

typeof tells type of whatever variable comes after;

/*using const and practice with window prompt
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompy("Ente the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;
console.log("the circumference is:", circumference");
*/

/*
math functions
let x;
let y = 5;
let z = 9;
let maximum;
let minimum;

x = Math.round(x); rounds var
x = Math.floor(x); round down
x = Math.ceil(x); round up
x = Math.pow(x, 2) exponents
x = Math.sqrt(x) squareroot
x = Math.abs(x) absolute val
maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);
x = Math.PI;
*/

/* finding hypotenuse of triangle

let a;
let b;
let c;

a = window.prompt("enter side A");
a = Number(a);

b = window.prolmt("Enter side b");
b = Number(b);

c = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));

console.log("side c:", c);

*/

document.getElementById("submitButton").onclick = function(){

  a = document.getElementById("aTextBox").value;
  a = Number(a);

  b = document.getElementById("bTextBox").value;
  b = Number(b);

  c = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));

  document.getElementById("cLabel").innerHTML = "Side c " + c;
}

let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
  count -=1;
  document.getElementById("countLabel").innerHTML = count;
}


document.getElementById("resetBtn").onclick = function(){
  count = 0;
  document.getElementById("countLabel").innerHTML = count;

}


document.getElementById("increaseBtn").onclick = function(){
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
}

//Math.floor(Math.random() *6) + 1 generates random 
//number between 1 and 6

let x, y, z;

document.getElementById("rollBtn").onclick = function(){
  
  x = Math.floor(Math.random()* 20) + 1;
  y = Math.floor(Math.random()* 20) + 1;
  z = Math.floor(Math.random()* 20) + 1;

  document.getElementById("xLabel").innerHTML = x;
  document.getElementById("yLabel").innerHTML = y;
  document.getElementById("zLabel").innerHTML = z;

}

/* useful string properties
username.length num of character in a string
username.charAt(0); gives char at index 0 of string
username.indexOf("o"); gives first occurence of character o in string
username.lastIndexOf("o") gives last occurence of o in string
username.trim(); gets rid of spaces
username.toUpperCase(); makes all char uppercase
username.toLowerCase(); makes all char lowercase
phoneNumber.replaceAll("-",""); will replace first arg with second
*/

//slice() extract section of string and returns as new string
//doesn't modify original string

let fullName = "Snoop Dogg"
let fName;
let lName;

//fName = fullName.slice(0, 5);
//lName = fullName.slice(6);

fName = fullName.slice(0, fullName.indexOf(" "));
lName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(fName);
console.log(lName);

//method chaining caling one method after another in 1 line of code
// username.charAt(0).toUpperCase().trim();

//if statements

document.getElementById(("myBtn")).onclick = function(){

  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");


  if(myCheckBox.checked){
    console.log("You are subscribed");
  }else{
    console.log("You are not subscribed");
  }

  if(visaBtn.checked){
    console.log("You are paying with Visa");
  }else if(mastercardBtn.checked){
    console.log("You are paying with MasterCard");
  }else if(paypalBtn.checked){
    console.log("You are paying with Paypal");
  } else {
    console.log("YOu must select a payment type");
  }
}

//continue skips iteration of for loop

//nested loop
/*
let symbol = window.prompt("Enter a symbol");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for(let i = 0; i <= rows; i++){
  for(let j = 0; j <= columns; j++){
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}
*/
let userName = "Yash";
let items = 3;
let total = 75;
/*
console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);
*/
//template literals don't need double quotes can add variable 
//and expressions in strings
 let text = 
`Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;

// console.log(text);

document.getElementById("myLabel2").innerHTML = text;

//toLocaleString()

//let myNUm = 123456.789;

//myNUm = myNUm.toLocaleString("en-US"); //US English
//myNUm = myNUm.toLocaleString("hi-IN"); //hindi
//myNUm = myNUm.toLocaleString("de-DE"); //standard german

//myNUm = myNUm.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNUm = myNUm.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNUm = myNUm.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//myNUm = myNUm.toLocaleString(undefined, {style: "percent"});

//myNUm = myNUm.toLocaleString(undefined, {style: "unit", unit:"celsius"});

//console.log("myNUm");

const answer = Math.floor(Math.random()* 10 +1);
let guesses = 0;

document.getElementById("submitBUTTON").onclick = function(){

  let guess = document.getElementById("guessField").value;
  guesses++;

  if(guess == answer){
    alert(`${answer} is the #. It took you ${guesses}`);
  }else if(guess < answer){
    alert("too small");
  }else{
    alert("Too large")
  }
}

document.getElementById("submitBUT").onclick = function(){

  let temp;
  
  if(document.getElementById("cbutton").checked){ 
    temp = document.getElementById("textBOX").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°C";
  }else if(document.getElementById("fbutton").checked){
    temp = document.getElementById("textBOX").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + temp + "°F";
  }else{
    document.getElementById("tempLabel").innerHTML = "No button is Checked";
  }
}


/*
let temp = 32;
temp = toFahrenheit(temp);
console.log(temp);
*/
function toCelsius(temp){
  return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
  return temp* 9 / 5 + 32;
}

/*
let fruits = ["apple", "orange", "banana"];
fruits [2] = "coconut";

fruits.push("lemon") add an element
fruits.pop(); removes last element
fruits.unshift("mango"); ad element to the beginnning
fruits.shift(); removes elemnt from the beginning

let length = fruits.length; returns how many elements in array
let index = fruits.indexOf("kiwi"); //if not found return -1
if found returns where the elemnt is located in array

*/

/*let prices = [5, 10, 15, 20 , 25];

for(let price of prices){
  console.log(price);
}

for(let list of grocerylist){
  for(let food of list){

  }
}
*/

//sorting an array of strings use sort(); will sort in 
//alphabetical order reverse(); will reverse array

/*spread operator array or string can be expanded where 0 or more 
arguments are expected
...

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max - Math.max(...numbers); spread op separates each individual
value in the array and put into the method

can be used to push elements of an arraya into another one 
class1.push(...class2); 

*/
 
//rest parameter ... allows infinite numebr of parameter. doing this 
//makes functions work with any amount of paramater 

/*
let a = 1;
let b = 1;
let c = 1;
let d = 1;
let e = 1;

console.log(sum(a,b,c,d,e));

function sum(...numbers){
  let total = 0;
  for(let number of numbers){
    total += number;
  }
  return total;
}
 callback function passed in as an argument for another function

 */

let students = ["spongebob", "patrick", "squidwar"];

students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
 array[index] = element[0].toUpperCase() + element.substring(1);
//makes first letter upper then combines rest of string with the uppercase letter
//somehow knows what array and index are
}

function print(element){
  console.log(element);
}

//.map takes each element in array and applies a method to them and makes a new array 
/*
let numbers =[1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

function square(element){
  return Math.pow(element, 2);
}

function cube(element){
  return Math.pow(element, 3);
}
*/

//array.filter() makes new array when element in array passes a function test.

/*
let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filer(checkAge);

adults.forEach(print);

function checkAge(element){
  return element >= 18;
}

function print(element){
  console.log(element);
}
*/

/*array.reduce() = reduce an array to a single value

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total});

function checkOut(total, elemnt){
  return total + element;
}

*/
/*
let grades = [100, 50, 90, 60 ,80, 70];

grades = grades.sort(decendingSort);

grades.forEach(print);

function decendingSort(x , y){//basically buble sort. Two val of array compared. If returned num is negative 
  return y - x; //negative x before y positive y before x

}

function ascendingSort(x , y){
  return x - y;
}

function print(element){
  console.log(element);
}


//function expression function without name 
const greeting = function(){
  console.log("Hello!");
}
*/
let counts1 = 0;

document.getElementById("decBut").onclick = function(){
  counts1 -= 1;
  document.getElementById("myLabel3").innerHTML = counts1;
}

document.getElementById("incBut").onclick = function(){
  counts1 += 1;
  document.getElementById("myLabel3").innerHTML = counts1;
}

//arrow function compact alt of writing function expressions

/*
grades.sort((x, y) => y - x); dont need to call a function, dont need to write function, dont to write return
grades.forEach((element) => console.log(element));

*/
//shuffle an array
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

cards.forEach(card => console.log(card));

function shuffle(array){
  let currentIndex = array.length;

  while(currentIndex != 0){
    let randomIndex =  Math.floor(Math.random() * array.length);
    currentIndex -= 1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

//nested functions function in a nother function
//any function within a function can not be seen by anything else

//Map an object with Key -Value pairs of any type

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]
]);

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
store.set("hat", 40);
store.delete("hat");
console.log(store.has("hat"));

store.forEach((value, key) => console.log(`${value} ${key}`));

//objects a group of properties and methods
//properties are what object has 
//methods are what objects can do
/*
const car = {
  model: "mustang",
  color:"red",
  year: "2023",

  drive : function(){
    console.log("You drive the car");
  },
  brake: function(){
    console.log("You step on the brake");
  }
}

const car2 = {
  model: "corvette",
  color:"blue",
  year: "2024",

  drive : function(){
    console.log(`You drive the ${this.model}`);
  },
  brake: function(){
    console.log("You step on the brake");
  }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);

car2.drive();
car2.brake();
*/
//this - reference to a particular object depedning on immediate context

//class a blueprint for creating objects 
 class Player{

  score = 0;

  puase(){
    console.log("You paused the game");
  }

  exit(){
    console.log("You exited the game");
  }
 }

 const player1 = new Player;
 const player2 = new Player;

 player1.puase();
 player2.exit();

 class Student{

  constructor(name, age, gpa){
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }

  study(){
    console.log(`${this.name} is studying`);
  }
 }
 
 const student1 = new Student("SpongeBob", 30, 3.2);
 const student2 = new Student("Patrick", 35, 1.5);


 console.log(student1.name);
 console.log(student1.age);
 console.log(student1.gpa);

 student1.study();
 
 
 console.log(student2.name);
 console.log(student2.age);
 console.log(student2.gpa);

 student2.study();
 
//static belongs to class not objects
/*
class Car{

  static numberOfCars = 0;

  constructor(model){
    this.model = model;
    Car.numberOfCars++;
  }

  static startRace(){
    console.log("3 2 1 GO");
  }
}


Car.startRace();
*/
//inheritance child class inherits method and properties from another class
//super refers to parent class
//get binds an object porperty to a function
//set edit object property

class Animal{

  alive = true;
  constructor(name, age){
    this.name = name;
    this.age = age;
  }


  eat(){
    console.log(`${this.name} is eating`);
  }

  sleep(){
    console.log(`${this.name} is sleeping`);
  }
}

class rabbit extends Animal{
  
  constructor(name, age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run(){
    console.log(`${this.name} is running`);
  }
}

class Car{
  constructor(power, gas){
    this._gas = 25;
    this._power = power;
  }

  get power(){
    return `${this._power}hp`;
  }

  get gas(){
    return `${this._gas}L (${this._gas/ 50 * 100}%)`;
  }
  set gas(value){
    if(value > 50){
      value = 50;
    }else if(value < 0){
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car(400);

console.log(car.power);

//pass in objects lieka variable
//access properties with whatever attribute is used in function
//function getsomething(car){
//  car.power;  
//}can set too

//accesing specific object and its porperty in array cars[0].power
/*
startRace()

function startRace(cars){
  for(const car of cars){
    car.drive();
  }
}*/

//anonymous objects objects without name cant be referenced diractly but can be written quicker and dont require unique names

/*
let cards = [new Card("A", "Hearts"),
             new Card("A", "Diamonds"),
             new Card("A", "Spades"),
             new Card("A", "Clubs")];
cards.forEach(card => console.log(`${card.value} ${card.suit}`));
*/

//error object with a desc of something went wrong
// throw = excutes a user-defined error
/*
try{
  let x = window.prompt("Enter a #");
  x = NUmber(x);

  if(isNaN(x)) throw "That wasn't a number!";
  if(x == "") throw "That was empty!";

  console.log(`${x} is a number`);
}
catch(error){//follows try and takes in an error
  console.log(error);//ddisplays error
}
finally{
  console.log("This always executes");
}*/

//setTimeout()  invokes a function after num of millliseconds
/*
let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
  alert(`Buy this ${item} for $${price}!`);
}
function secondMessage(){
  alert(`This is not a scam!`);
}
function thirdMessage(){
  alert(`DO IT!`);
}

document.getElementById("buy").onclick = function(){
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  alert(`Thanks for buying`);
}
*/
//setInteval invokes function repeatedly after a num of milliseconds
/*
let counter = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);

const myTimer = setInterval(countUp, 1000, max);

function countUp(max){
  counter +=1;
  console.log(counter);
  if(counter >= max){
    clearInterval(myTimer)
  }
}

let date = new Date();
//let date = new Date(year, months start at 0, day, hour, minutes, seconds, milliseconds);
//let date = new Date("January 1, 20203 00:00:00");
/*
let year = date.getFullYear();
let dayOfMonth = date.getDtae();
let dayOfWeek = date.getDay(); sunday is 0
let hour = date.getHours();
let minutes  = date.getMinutes;
let seconds = date.getSeconds();
let ms = date.getMilliseconds();

date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);


date = date.toLocaleString();
document.getElementById("date").innerHTML = date;
*/

/*function formatDate(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;// makes monht number normal
  let day = date.getDate();

  return `${month}/${day}/${year}`
}

function formatTime(date){
let hours = date.getHOurs();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let amOrPM = hours >= 12 ? "pm" : "am";

hours = (hours %12) || 12; // hours mod 12 will show remainder if its 12 or 24 mod will be 0 so 12 will be put into hours 0 is false

return `${hours}:${minutes}:${seconds} ${amOrPM}`;
}

*/

const clock = document.getElementById("clock");

update();
setInterval(update, 1000);

function update(){

  let date = new Date();
  clock.innerHTML = formatTime(date);

  function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours}:${minutes}:${seconds}`;
  }

  function formatZeroes(time){
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}

//synchronous code in ordered sequence step by step linear instructions start now finish now 
//asynchronous code out of sequence ex. tasks that take time access database, fetch file start now finish sometime later

console.log("start");
setTimeout(() => console.log("This is asynchronous"), 5000);
console.log("End");

//console.time starts a timer you can use to track how long an operation takes 

console.time("response time");

setTimeout(() => console.log("HELLO!"), 3000);

console.timeEnd("Response time");//tracks how long synchronous operation 

//promise object that encapsulates the result of an asynchronous operatoin
/* let asynchronous methods return calues like synchronous methods
*/


const promise = new Promise((resolve, reject) => {

  let fileLoaded = true;

  if(fileLoaded){
    resolve("File loaded");
  }
  else{
    reject("File NOT loaded");
  }
});

promise.then((value) => {console.log(value)})
              .catch((error) => console.log(error));

/* const wait = time => new Promise(resolve => {
  setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting"));
*/

//async make function return promise


async function loadFile(){
  let fileLoaded = true;

  if(fileLoaded){
    return "File loaded";
  }
  else{
    throw"File NOT loaded";
  }
}

loadFile().then((value) => {console.log(value)})
              .catch((error) => console.log(error));

//await makes an async function wait for a promise
/*
async function startProcess(){
  try{
  let message = await loadFile();
  console.lof(message);
}
catch(error){
  console.loge(error);
}
}*/

import {PI, getCircumference, getArea} from "./math_util.js";

console.log(PI);

//import * as MathUtil from "./math_util.js"; import all functions dont need to write down
//console.log(MathUtil.PI); to call anythign imported need to use name then . 

//DOM = document object model changes content of page

//module prewritten code gooffor reusability

/*let fruits = document.getElementByName("fruits");

fruits.forEach(fruits =>{
  if(fruits.checked){
    console.log(fruits.value);
  }
});

let vegetables = document.getElementsByTagName("li");

vegetables[0].style.backgroundColor = "lightgreen";

document.getElementsByClassName change element with the class naem

document.querySelector can select id, name, tag or class if selecting id use # infront #cars class precede class name with . .class1
id: #myID
class: .myClass
attribute: [for], [name], [type]
tags: dont need to add anything
selects first element of any group 

document.querySelectorAll("li")

*/

//DOM traversal
/*
//html is like a hierarchy body is parent any tag within is a child tags within those tags are children of those children
//.firstElementChild selects first child
let element = document.body;
let child = element.firstElementChild;
//lastElementChild selects last element script would be the last element of body
let element = document.body;
let child = element.lastElementChild;
// selects parent of element
let element = document.querySelector("#vegetables");
let parent = element.parentElement;
//nextElementSibling
//previousElementSibling
//.children[] elements work like arrayscan choose children 
//to choose all children Array.from(.children)
*/

//add/change HTML elemnets
//use .textContent instead of innerHTML
/*
const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("ENter Your Name");
document.body.append(nameTag);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
//myLIst.append(listItem); add element 
//myList.prepend(listItem); Add at beginning of list
myList.insertBefore(listItem, myList.getElementsByTagName("li")[0]); choose where to insert 
*/
/*
//styling CSS with Javascript 
const title = document.getElementById("myTitle");

title.style.backgroundColor = "white";
title.style.color = "rgb(50, 156, 210";
title.style.fontFamily = "consolas";
title.style.textAlign = "center";
title.style.border = "2px solid";
title.style.display = "block";
*/
//events 
/*
.onclick when click on a button can perform a function
.onload when loading into page will do something
.onchange when chaninging something will do something 
.onmouseover basically :hover except makes it stay changed
.onmouseout when moving mouse away will allow something to Happen
.onmousedown when clicking down 
.onmouseup when lifting mouse button
*/

//.addEventListener(event, function, useCapture);
//events click, mouseover, mouseout, resize, 
//useCapture adds priority

//show and hide html elements
/*
const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myIMg");

myButton.addEventListener("click", () => {
  if(myImg.style.display == "none"){
    myImg.style.display == "block";
  }else{
    myImg.style.display == "none";
  }
});
if img is hidden doesnt work right first time need to add inline style to html style = "display: none;"
if elements chouldnt be shifted up use visibility instead of display still use inline html style for making sure first toglgle will work if img is already hidden

myButton.addEventListener("click", () => {
  if(myImg.style.visibility == "hidden"){
    myImg.style.visibility == "visible";
  }else{
    myImg.style.visibility == "hidden";
  }
});
*/
//detect key presses
/*
const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);

let hori = 0;
let vert = 0;

function move(event){

  switch(event.key){
    case "ArrowUp":
      vert+=5;
      myDiv.style.top = vert + "px";
      break;
    case "ArrowDown":
      vert-=5;
      myDiv.style.top = vert + "px";
      break;
    case "ArrowLeft":
      hori-=5;
      myDiv.style.left = hori + "px";
      break;
    case "ArrowRight":
      hori+=5;
      myDiv.style.left = hori + "px";
      break;
  }
}
*/
//animations 

const beginButton = document.getElementById("begin");
const myAnimation = document.getElementById("box");

beginButton.addEventListener("click", begin);

function begin(){
  let timerID = null;
  let x = 0;
  let y =0;
  let degrees = 0;

  setInterval(frame, 5);

  function frame(){
    if(x >= 200 || y > 200){//sets limit of move distance
      clearInterval(timerID);
    }else{
      degrees+=5;
      x+1;//move right x-1 move left
      myAnimation.style.left = x +"px";
      y+1;//move down y-1 move up
      myAnimation.style.top = y +"px";
      myAnimation.style.transform = "rotateZ("+degrees+"deg)";
    }
  }
}

  /* scale
  
  function begin(){
  let timerID = null;
  let scaleX = 1;
  let scaleY = 1;
  

  setInterval(frame, 5);

  function frame(){
    if(scaleX >= 200 || scaleY > 200){//sets limit of scale
      clearInterval(timerID);
    }else{
      
      scaleX+=.01;
      scaleY+=.01;
      myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
    }
  }
}
  
  
  */

//canvas api
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

/*
context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0,0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/
//draw triangle
/*
context.fillStyle = "yellow";
context.lineWidth = 10;
context.strokeStyle = "grey";
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();
*/
//draw rectangle

context.fillStyle = "black";
context.fillRect(0, 0, 250, 250);
context.strokeStyle= "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.fillRect(0, 250, 250, 500);
context.strokeStyle= "black";
context.strokeRect(0, 250, 250, 500);

context.fillStyle = "green";
context.fillRect(250, 250, 500, 500);
context.strokeStyle= "black";
context.strokeRect(250, 250, 500, 500);

context.fillStyle = "blue";
context.fillRect(250, 0, 500, 250);
context.strokeStyle= "black";
context.strokeRect(250, 0, 500, 250);
