// let js = "amaizing";
// if (js === "amaizing") alert("JavaScript is Fun");

// console.log('hello World')
// console.log("hello World")
// console.log(2463.25)
// console.log("My Favourite No: " + 9)
// console.log(9 + 9)
// console.log('9' + 9)

// 07.006 class practice -----  variables

// var myname = 'Md. Tanvir Hasan'
// var age = 22
// console.log(myname)
// console.log(age)

// console.log(myname + ' learn Javascript ')
// console.log('his age is ' + age)
// console.log('But he is only ' + age)

// 08.007 class practice ------ Reserved Words

// var mathNumber = 93
// var accountNumberDetailsId = 104    // camelcase
// var account_number_details_id = 104  //naming convention

// 9.008 class practice ---- Data Types
// 10.009 class practice ---- Basic Numbers

// var n = 1451
// var f = 3.14
// var nn = Number('45.45')
// console.log(nn)
// console.log(Number.parseInt(nn))
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log( 1 / 0 )
// console.log('abc' * 10)

// 11.0010 class practiace ------- Basic Strings

// var str = 'String'
// var str2 = "String"
// var str3 = String('asjdsjd')
// var str4 = String(156)
// var str5 = String(3.1416)

// console.log(str, str2, str3, str4, str5)

// Assignment practice

// let country = "Bangladesh";
// let continent = "Asia";
// let population = "10 millions";
// console.log(country)
// console.log(continent)
// console.log(population)

//  let age = 30;
//  age = 32;
//  console.log(age);

// coding challenge

// const xMarkmass = 78;
// const xMarkheight = 1.69;
// const yjohnmass = 92;
// const yJohnheight = 1.95;

// const bmimark = xMarkmass/(xMarkheight * xMarkheight);
// const bmijohn = yjohnmass/(yJohnheight * yJohnheight);
// console.log(bmimark, bmijohn);
// markHIGHERBMI =  bmimark > bmijohn;  // if this condition is appropiate then its show true
// console.log(markHIGHERBMI);

//Example
// const age = 15;

// if (age >= 18) {
//     console.log('Tanvir can start driving license');
// }
// else {
//     const yearsleft = 18-age;
//     console.log(`Tanvir is too young. Wait another ${yearsleft} years`);
//  }

// Example
//  const birthYear = 2001;
//  let century;
//  if(birthYear<= 2000) {
//      century = 20;
//  }
// else{
//     century = 21;
// }
// console.log(century);

// Coding Challenge 2
// const xMarkmass = 78;
// const xMarkheight = 1.69;
// const yjohnmass = 92;
// const yJohnheight = 1.95;
// const bmimark = xMarkmass/(xMarkheight * xMarkheight);
// const bmijohn = yjohnmass/(yJohnheight * yJohnheight);
// console.log(bmimark, bmijohn);

// if(bmimark > bmijohn) {
//     // console.log("Mark's BMI is higher than John's!");
//     console.log(`Mark's BMI ${bmimark} is higher than Jons's BMI
//     ${bmijohn}`);
// }
// else {
//     console.log(`John's BMI (${bmijohn}) is higher than Mark's! BMi (${bmimark})`);

// }

// type conversion
// const inputYear ='1991';
// console.log(Number(inputYear),inputYear );    // firstly convert number than another one is String
// console.log(inputYear + 18);  //not calculate yet
// console.log(Number(inputYear) +18 );     // here calculate those number and adding 18
// console.log(typeof NaN);
// console.log(Number('Tanvir'));
// console.log(String(23),23 );     // first output is string and second output is number

// // type coericon
// console.log("Hello World! ");

// Coding Challange 3
// First Part

// const dolphineScore = (96+108+89)/3;
// // const dolphineScore = (88+91+110)/3;
// const kolasScore = (88+91+110)/3;
// console.log(dolphineScore,kolasScore);

// if(dolphineScore > kolasScore) {
//     console.log("Team Dolphins Win this Game 🏆");
// }
// else if(dolphineScore < kolasScore) {
//     console.log("Team Kolas Win this Game 🏆");
// }
// else if(dolphineScore === kolasScore ) {
//     console.log("Both win the Trophy OR Draw the match");
// }

//Data BONUS 1 & 2

// const dolphineScore = (97+112+101)/3;
// const kolasScore = (109+95+106)/3;
// console.log(dolphineScore,kolasScore);

// if(dolphineScore > kolasScore && dolphineScore >= 100) {
//     console.log("Team Dolphins Win this Game 🏆");
// }
// else if(dolphineScore < kolasScore && kolasScore >=100) {
//     console.log("Team Kolas Win this Game 🏆");
// }
// else if(dolphineScore === kolasScore && dolphineScore>=100 && kolasScore>=100) {
//     console.log("Both win the Trophy OR Draw the match");
// }
// else {
//     console.log("No one wins the trophy");
// }

// coding challange 4
// Ternary syntex   =========>  variablename = (condition) ? value1:value2

//  const bill = 40;
//  const tip = bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
//  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Second Fundamental Start here //
// Strat here

// "use strict";
// console.log("Second Fundamental Start here");

// Example of Function 1

// function adder(a,b) {
//     console.log(a+b);
// }

// adder(10,20);

// // Example of Function 2 ------>

// function fruitprocessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     // console.log(juice);
//     return juice;
// }

// const applejuice = fruitprocessor(5,2);
// console.log(applejuice);

// const orangesJuice = fruitprocessor(6,3);
// console.log(orangesJuice);

// // function declearation ----------->
// // age calculate

// function ageCal(birthYear) {
//     const age = 2021 - birthYear;
//     // console.log(age);
//     return age;
// }
// // ageCal(2000);
// const result = ageCal(2000);
// console.log(result);

// // practice example
// function sum(a,b){
//     const summ = a+b;
//     return summ;
// }

// const sumresult = sum(7,8);
// console.log(sumresult);

// //  Function Expression ------->
// const ageCal2 = function(birthYear) {
//     return 2037-birthYear
//     // const age2 = 2037-birthYear;
//     // return age2;

//     // return oivabe na korte ciale eivabe korte pari amra
// }
// const result2 = ageCal2(2000)
// console.log(result2);

// // Functions calling another Function -------->>

// function cutFruitPieces(fruit) {
//     return fruit * 4;

// }
// function fruitprocessor(apples, oranges)
// {

//     const applePices = cutFruitPieces(apples)
//     const orangePices = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePices} apples and ${orangePices} oranges.`;
//     return juice;
// }

// console.log(fruitprocessor(2,3))

// //coding challange

// function calcAverage(a,b,c){
//    const average = (a+b+c)/3
//     return average;
// }
// const res1= calcAverage(3,4,5)
// console.log(res1) ;

// //test data 1

// let scoreDolphines = calcAverage(44,23,71)
// let scoreKoalas = calcAverage(65,54,49)
// console.log(scoreDolphines,scoreKoalas);

// function checkWinner(avgDolhins,avgkoalas){
//     if (avgDolhins >= 2*avgkoalas) {
//         console.log(`Dolphins Win 🏆(${avgDolhins} vs. ${avgkoalas})`);
//     }
//     else if (avgkoalas>= 2*avgDolhins){
//         console.log(`koalas Win 🏆(${avgkoalas} vs. ${avgDolhins})`);
//     }
//     else{
//         console.log("No teams Win...");
//     }
// }
// checkWinner(scoreDolphines, scoreKoalas);
// checkWinner(576,111);

// //test data 2

// scoreDolphines = calcAverage(85,54,41)
// scoreKoalas = calcAverage(23,34,27)
// console.log(scoreDolphines,scoreKoalas);
// checkWinner(scoreDolphines, scoreKoalas);

// // Introduction Array Start here:

// // coding challange

// function calcTip(bill){

//     return bill>=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

// const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(bills,tips,totals);

// // ascending order array by using compare function
// const points1 = [40, 100, 1, 5, 25, 10];
// points1.sort(function(a, b){return a - b});
// console.log(points1);

// // descending order array by using compare function

// const points2 = [40, 100, 1, 5, 25, 10];
// points2.sort(function(a, b){return b - a});
// console.log(points2);

// objects

// const tanvir = {
//     firstName: 'Tanvir',
//     lastName: 'Hasan',
//     age: 2022-  1999,
//     job: 'Student',
//     friends: ['Micheal','Shetu','Inam']
// };
// console.log(tanvir);
// console.log(tanvir.firstName);
// console.log(tanvir['lastName']);

// const namekey = 'Name';
// console.log(tanvir['first' + namekey]);
// console.log(tanvir['last' + namekey]);

// const interestedIn = prompt('What do you want to know about Tanvir?'); // popup message
// console.log(tanvir[interestedIn]);

// object Methods

//  const tanvir = {
//         firstName: 'Tanvir',
//         lastName: 'Hasan',
//         birthYear: 1999,
//         // age: 2022-  1999,
//         job: 'Student',
//         friends: ['Micheal','Shetu','Inam'],
//         hasDriverLicense: true,

//        calcAge: function(){          // function expression
//            this.age = 2022 - this.birthYear;
//            return this.age;
//        },

//        getSummary: function(){         // function expression
//            return `${this.firstName} is a ${this.calcAge()} -year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} drivers license .`
//        }

//     };

//     console.log(tanvir.calcAge());
//     console.log(tanvir.getSummary());
//     console.log(tanvir.age);

// coding challange practice

// const miller = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(miller.calcBMI(), john.calcBMI());
// // console.log(john.calcBMI());

// if (miller.bmi > john.bmi) {
//   console.log(`${miller.fullName}'s BMI ${miller.bmi} is higher than ${john.fullName}'s BMI ${john.bmi} `);
// } else if (john.bmi > miller.bmi) {
//   console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${miller.fullName}'s BMI ${miller.bmi} `);
// }

// string in javascript

// let l = 'Tanvir Hasan "191-15-2463"';

// console.log(l, l.length);

// let text = 'We are the so-called "Vikings" from the north.'; // special chracter Vikings
// console.log(text);

// let str = "Apple, Banana, Kiwi";
// console.log(str.slice(7, 13));
// console.log(str.slice(7));
// console.log(str.substring(7));  // slice kore felse eikhane
// console.log(str.substring(7,13));  // slice kore felse eikhane

// let rr = "Please visit Microsoft!";
// let newText = rr.replace("Microsoft", "W3Schools");
// console.log(newText); // replace

// scope start here....

// DOM and Events Fundamentals......
// Start here DOM......

// console.log(document.URL);  // URL show korbe, document er por . diye ja likhbo tai dekhte pabo
// console.log(typeof(document.head));
// console.dir(document.head);
// document.title = 'Play with dom'
// console.dir(document.getElementById('first_hader'));
// console.log('Hello World');

// console.log(document.getElementsByTagName('p'));   // p tag er shob kisu dekhabe
// console.log(document.getElementsByClassName("anchor")); // class dekhe define korbe
// console.log(document.querySelector(".paragraph"));

// console.log(document.querySelectorAll("anchor"));

// form validationm js code
// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

// another process

// function validateForm() {
//   let forms = document.forms["myForm"];
//   let value = forms["fname"].value;
//   if (value == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }

// css changing
// const a = document.querySelector('#paragraph');
// a.style.color = 'green';
// a.style.fontSize = '50px';

// setTimeout(function(){
// const a = document.querySelector('#paragraph');
// a.style.color = 'green';
// a.style.fontSize = '50px';
// },2000)   // function er jonno kisukkhn por show kortese style ta

// js annimation start
// function myMove() {
//   const animate = document.getElementById("animate");
//   let pos = 0;
//   const interval = setInterval(frame, 5);

//   function frame() {
//     if (pos < 350) {
//       pos++;
//       animate.style.top = pos + "px";
//       animate.style.left = pos + "px";
//     } else {
//       clearInterval(interval);
//     }
//   }
// }
// animate end

// const s = document.getElementById("date_time");
// s.innerHTML = `Today's date is : ${Date()}`; // date and time by calling date function

// dom events start

// function changeText() {
//   const change = document.querySelector("#change");
//   change.innerHTML = "Change the Title";
// }

// function onMouseOver() {
//   const cc = document.querySelector("#onmouseover_out");
//   cc.innerHTML = "Thank you ";
// }
// function onMouseOut() {
//   const cc = document.querySelector("#onmouseover_out");
//   cc.innerHTML = " Mouse Over Me";
// }

// function onMouseOver(x){
//   x.innerHTML = "changing"
// }

// function onMouseOut(x){
//   x.innerHTML = "Mouse Over Me"
// }

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//   console.log("Hello Add Event Listner");
// }); // add event listner

// btn.addEventListener("mouseover", function () {
//   console.log("mouse over Add Event Listner");
// }); // mouse over add event listner

// html dom nodes

// const para = document.createElement("p");

// const node = document.createTextNode("Hello World");
// para.appendChild(node);

// const divv = document.getElementById("div1");
// divv.appendChild(para);

// divv.insertBefore(para, p2);

// const pp = document.getElementById("p3");
// pp.remove();

// replacing method
// const para = document.createElement("p");
// const node = document.createTextNode("This is new replacing Paragraph");
// para.appendChild(node);

// const divv = document.getElementById("div1");
// const child = document.getElementById("p3");
// divv.replaceChild(para,child);

// dom collections

// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByTagName("p")[1]); //NOTE: array er moto mone holeu eta aray na


// js es6 start 
console.log("Hello World");
