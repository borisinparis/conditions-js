// let age = prompt()
// if (age < 18 ) 
// {
//     console.log(age + " under age ");
// }
//  else if ( age === 21 || age > 21) {
//     console.log(age + " nastai can drink alchohol ");
    
//  } else if (age > 60) {
//     console.log("ondor nastain");
    
//  } else {
//     console.log("nothing come");
    
//  }

// exercuse 1
// <h3>Write a  which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>



//******** bodlogo */


// const giveNumber =  prompt("enter number")
// if (giveNumber % 3 === 0 ) {
//     console.log("fizz");
// } else if(giveNumber % 5 === 0){
//     console.log("buzz");
// } else if ( giveNumber % 3 === 0 || giveNumber % 5)
// {
//     console.log("fizzbuzz");
// }
// else if ( giveNumber % 3 != 0 || giveNumber % 5!= 0 )
// {
//     console.log("given input number/value");
// } 
// else {
//     console.log("nan - not a number");
    
// }



// Exercise 2
 
// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs
 
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0


// ******* bodlogo **********


// let array=[-5,-3,4,-5,2]
// console.log(Math.max(...array));

 
// Exercise 3
 
// Write a JavaScript program that accept two integers and display the larger.
 
// check input numbers are the type of number, if not console.log('Invalid inputs)
 
// Sample numbers : 2,5
// Output : 5


//*** bodlogo */
// let a = 2;
// let b = 5;
// if (a>b) {
//     console.log(a + " a utgiig b hariutsuulj a iig hewlej gargasan bna");
// } else if (a<b){
//     console.log(b + " a utgiig b hariutsuulj b iig hewlej gargasan bna");
    
// }
// Exercise 4
 
// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.
 
// Sample numbers : 3, -7, 2
// Output : The sign is -

// ********** bodlogo n

//  let a = 3;
//  let b = -7;
//  let c = 2;
//  if (a<0 && b<0 && c<0)
//  {
//     console.log("the sign is +");
//  }
//  else {
//     console.log("the sign is - ");
    
//  }


 
// Exercise 5
 
// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.

// ******** bodlogo


//  let x = prompt()
//  let y =prompt()
//  if ( x > y)
//  {
//     console.log("true");
//  }
//  else if (x===y) {
//     console.log("false");
    
//  }
//  else if ( x!= y) {
//     console.log("not sure");
    

//  }


// Exercise 6
 
// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.


// ************ bodlogo ********


// const score = prompt("dungeee oruulnuuu")
// if ( score >= 90 && score < 100 ) {
//     console.log("tanii dun A garsan bna");
// }
// else if ( score >= 80 && score < 90 ) {
//     console.log("tanii dun b garsan bna");

// }
// else if ( score >= 70 && score < 80 ) {
//     console.log("tanii dun c garsan bna");

// }
// else if ( score >= 60 && score < 70 ) {
//     console.log("tanii dun d garsan bna");

// }
// else {
//     console.log(" ta f garsan tul dahin sudalnuuu");
    
// }


 
// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character


// ****** bodlogo *******


// let text = ''
// if (text.length > 10 ) {
//     console.log("text more than 10 characterts");
// }
// else if (text.length > 5 ) {
//     console.log(" text is lower than 5");
// }
// else if ( text.length ===1) {
// console.log(" letter 1 tei tenstuuu");
    
// }
// else {
// console.log("less than 1 letter");
    
    
// }

// Exercise 7 j
 
//  3) Write conditional expressions to satisfy the following safety rules:
 
//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".

//********* bodlogo  */
// let crewStatus = true
// if (crewStatus === true ) {
//     console.log("crew ready");
// }
// else {
//     console.log("crew not ready");
    
// }

 
//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
///************ bodlogo  */

// let computerStatusCode = prompt("too oruulna uuu rebooting ")
//  if ( computerStatusCode === 200 ) {
//     console.log("Please stand by. Computer is rebooting.");
//  }
//  else if (computerStatusCode===400 ) {
//     console.log("Success! Computer online.");
    
//  }
//  else {
//     console.log("ALERT: Computer offline!");
    
//  }


//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
 
// ********* bodlogo

// let shuttleSpeed = prompt("shuttle speed ee oruulna uu 17500 aas ig too oruul" )
// if (shuttleSpeed > 17500)
// {
//     console.log("ALERT: Escape velocity reached!");
    
// }
// else if (shuttleSpeed < 8000 ) {
//     console.log("ALERT: Cannot maintain orbit!");
    
// }
// else {console.log("Stable speed");


// }
// Write If statement that takes number checks if the number is odd or even
 
//     if odd return "the number is odd"
//     if even return "the number is even"
// let numberChecks = prompt("odd even shalgah ");

// if(numberChecks%2 === 0 ) {
//     console.log("even number " + numberChecks);
// } else if ( numberChecks % 2 === 1 || numberChecks === 1) {
//     console.log( " odd number " + numberChecks);
    
// }

 
// Exercise 8 j
 
// Write if statement that takes role and return each role with greeting
 
//     if role is 'Employee' return 'Hello'
//     if role is 'Director' return 'Greetings'
//     if role is '' return 'Please provide role'
//     else return 'Hi'
 

// Exercise 8 j
 
// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
// var gonchig = 100000
// if (gonchig > 5000 && gonchig <= 30000) {
//     var nemeltTolber = (gonchig *(3/20)) + gonchig
//     console.log(nemeltTolber + " niit tolbor 5000-30000 hoorond");
// }
// else {
//     var nemeltTolber = gonchig * 1/5 + gonchig
//     console.log(nemeltTolber + " busad uyd 20% nemej tolson bna");
// }








// nemelt bodlogos ***************

// 1. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
//      let i = 4 > 3; //true
//      let iii = 4 < 3; //false
//      let ii = 4 >= 3; 
//      let iv = 4 <= 3;
    //  let v = 4 == "4";
    //  console.log(v);
     
    //  let vi = 4 === "4";
    //  console.log(vi);
     
// //      let vii = 4 != 4;
// //      let iix = 4 !== 4;
// //      let x = 4 == "4";
//      let xi = 4 === "4";
     

// 2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
//      let one = 4 > 3 && 10 < 12;
//      let two = 4 > 3 && 10 > 12;
//      let three = 4 > 3 || 10 < 12;
//      let four = 4 > 3 || 10 > 12;
//      let five = !(4 > 3);
//      console.log(five);
     
//      let six = !(4 < 3);
//      console.log(six);
     
// //      let eight = !(4 > 3 && 10 < 12);
// //      let nine = !(4 > 3 && 10 > 12);
// //      let ten = !(4 === "4");
 
// // 1. Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.
// // Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.

// let ondorJil = 2023
// if (ondorJil % 4 === 0 || ondorJil % 400 === 0)
// {
//     console.log(" ondor jil mon bna ");
// }
// else  {
//     console.log( " ondor jil bish ");
    
// }
// // 2. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
// // 3. Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
// //      1. Бат - 67 оноо, Онц Дүмд - 59 оноо авчээ.
// //      2. Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
// //          a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
// //          b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
// //          c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
// //          d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
// //          e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
// //      3. Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
// //          НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.

// const ner = "bat"
// const score = prompt("dungeee oruulnuuu")
// if ( score >= 90 && score < 100 ) {
//     console.log("tanii dun A garsan bna ner n: " + ner );
// }
// else if ( score >= 80 && score < 90 ) {
//     console.log("tanii dun b garsan bna");

// }
// else if ( score >= 70 && score < 80 ) {
//     console.log("tanii dun c garsan bna");

// }
// else if ( score >= 60 && score < 70 ) {
//     console.log("tanii dun d garsan bna");

// }
// else {
//     console.log(" ta f garsan tul dahin sudalnuuu");
    
// }


// 4. Өгөгдсөн 2 тооны ихийг олох функц бич.

// let a = Number(prompt("a too"))
// let b = Number(prompt("b too"))
// if (a>b) {
//     console.log(a + " a ih too");
// }
// else {
//     console.log(b + " b ih too");
    
// }

// // 5. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх

// let number = prompt("utasnii dugaar oruulna uu")
// let checkNumber= number.at(0)
// let lastCheckNumber = number.at(1)
// let finalCheck= checkNumber+ lastCheckNumber
// if (finalCheck == 99) {
//     console.log("mobicom");
    
// } else if (finalCheck == 88)  {
//     console.log("unitel");
    
// }
// else if (finalCheck == 86)  {
//     console.log("gmobile");
    
// }else if (finalCheck == 80)  {
//     console.log("skytel");
    
// }
// else {
//     console.log(" buruu dugaar oruullaa");
    
// }
// 6. Тэгш өнцөгт гурвалжны 2 суурын урт өгөгдсөн(a, b) бол тухайн гурвалжины налуугын уртыг( c ) ол

// let a = 2
// let b = 3 
// let c = a*a + b*b 
// console.log(Math.sqrt(c));

// 7. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
//      a=85 b=75 c=96 d=69
//      80-аас их тоонуудын нийлбэрийг: 181

// let arr = [85,75,96,69]
// let sum = 0
// for ( let i = 0 ; i < arr.length ; i++)
// {
//     if ( arr[i] > 80 ) {
//         sum= sum + arr[i];
//         console.log(sum);   
//     }
// }

// 8. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
//      a=3 b=7 c=2 d=4
//      5-аас бага тоонуудын үржвэр: 24

// let arr = [3,7,2,4]
// let sum = 1
// for ( let i = 0 ; i < arr.length ; i++)
// {
//     if ( arr[i] < 5 ) {
//         sum= sum * arr[i];
//         console.log(sum);   
//     }
// }

// 9. if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.
// 10. Тухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү
//      жишээ нь: Input: 120, 33, 10, 12 output: 10
// let array=[120,33,10,12]
// console.log(Math.min(...array));

// // 11. Өгөгдсөн эерэг тоо нь 3-ын үржвэр эсвэл 7-ын үржвэр эсэхийг шалгана уу
// let a= 21

// if ( a% 3 === 0 ) {
//     console.log("3 wiin urjver");
    
// } else if(a%7===0) {
//     console.log("7 iin urejver");
    

// } else {
//     console.log(" alinch bish");
    
// }
// // 12. n тооны утгын дагуу эерэг эсвэл сөрөгийг олж хэвлэнэ.
// //      negative
// //      positive
// let n = prompt("too oruulna uu")
// if (n <= 0 ) {
//     console.log("negative");
// } else {
//     console.log("positive");
    
// }
// 13. weight, height гэсэн 2 хувьсагчид утга оруулахад тухайн хэмжээнээс хамааран биеийн жингийн индексийг тооцож тухайн индекс-д харгалзах утгыг хэвлэнэ.
//      Жингийн дутагдалтай
//      Эрүүл
//      Илүүдэл жинтэй
//      Хэт таргаллалттай

// 14. Өгөгдсөн тооны тэгш эсвэл сондгой болохыг хэвлэж харуулна уу
// 15. Нас тооцоолох бодлого: yearOfBirth гэсэн хувьсагчид гараас төрсөн онийг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
//      0 <= old <= 1 үед "Infant"
//      1 < old <= 3 үед "Toddler"
//      3 < old <= 5 үед "Preschool"
//      5 < old <=12 үед "Gradeschooler"
//      12 <old <= 18 үед "Teen"
//      18 < old <=21 үед "Youngadult"



// bodlogo part3 ******************

// 1
 
//Write a JavaScript program that checks if a given number is positive, negative, or zero.
// Sample Input: let number = -5;
// Sample Output: "-5 is negative"




// let number = -5;
// number <=0 ? console.log(" -negative ") : console.log("positive")



 
// // 2
 
// // Write a JavaScript program to check if a given temperature in Celsius is
// //  considered freezing (below 0), normal (0-30), or hot (above 30).
// // Sample Input: let temperature = 15;
// // Sample Output: "15°C is normal"
// let temperature = 15;
// temperature <=30 || temperature >=0 ? console.log(" 15c is normal ") : console.log("below")

 
// 3
 
// Write a JavaScript program to determine whether a given character is a vowel or a consonant.
// Sample Input: let char = 'a';
// Sample Output: "a is a vowel"
 
// 4
 
// Write a JavaScript program to calculate the grade based on a given score:
 
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60
 
// Sample Input: let score = 85;
// Sample Output: "Your grade is B"
 
// 5
 
// Write a JavaScript program to determine if a person is an adult, teenager, or child based on their age.
 
// Child: Below 13
// Teenager: 13-19
// Adult: 20 and above
 
// Sample Input: let age = 16;
// Sample Output: "You are a teenager"
 
// 6
 
// Write a JavaScript program to check if a given number is divisible by 5 or 7.
// Sample Input: let number = 35;
// Sample Output: "35 is divisible by both 5 and 7"
//   let a = 35;
//   if (a%5===0 && a%7===0) {
//     console.log("35 is divided bot both");

    
//   }else {
//     console.log("niothing");
    
//   }

// 7
 
// Write a JavaScript program to determine whether
//  the given time is in the morning (0-11), afternoon (12-17), or evening (18-23).
// Sample Input: let hour = 14;
// Sample Output: "It's afternoon"
 
// 8
 
// Write a JavaScript program to check if a number is a single-digit, double-digit, or triple-digit number.
// Sample Input: let number = 25;
// Sample Output: "25 is a double-digit number"
 
// 9
 
// Write a JavaScript program to determine whether a number is a multiple of 4.
// Sample Input: let number = 16;
// Sample Output: "16 is a multiple of 4"
 
// 10
 
// Write a JavaScript program to check if a given character is uppercase or lowercase.
// Sample Input: let char = 'G';
// Sample Output: "G is uppercase"
// let letter = 'G';

// Check if uppercase
// if (letter >= 'A' && letter <= 'Z') {
//     console.log("Uppercase");
// }


// // Check if lowercase
// if (letter >= 'a' && letter <= 'z') {
//     console.log("Lowercase");
// }

// // ******** function ashiglah
// function checkCase(character) {
//     if (character === 
//     character.toUpperCase()) {
//         return 'Uppercase';
//     } else if (character === 
//     character.toLowerCase()) {
//         return 'Lowercase';
//     } else {
//         return 'Mixed case';
//     }
// }
// console.log(checkCase("G"));
// console.log(checkCase("g"));
// console.log(checkCase("GeeksforGeeks"));

 
// 11
 
// Write a JavaScript program to determine if a given day number corresponds to a weekday or a weekend (1 = Monday, ..., 7 = Sunday).
// Sample Input: let day = 6;
// Sample Output: "It's a weekend"
 
// 12
 
// You’re designing a coffee shop menu. Write a program to determine the price of a coffee based on size:
 
// Small: $2
// Medium: $3
// Large: $4
 
// Sample Input: let size = 'Medium';
// Sample Output: "A Medium coffee costs $3"

///// ******* switch case eer hiisennen
//  let size = "large"
// switch(size) {
//     case "medium" : console.log( size + " $3"); break;
//     case "large"  : console.log( size + " $2"); break;
// }

// let size = "medium"

// if ( size == "medium") {
//     console.log("medium 3 dollar"); 
// }




// 13
 
// You’re writing a program for a weather app.
// Display whether a person should take an umbrella, a jacket, or sunglasses based on the weather condition (Rainy, Cold, Sunny).
// Sample Input: let weather = 'Rainy';
// Sample Output: "Don't forget your umbrella!"



 
// 14
 
// You are creating a program for a theater. Based on a person's age, determine their ticket price:
 
// Below 5: Free
// 5 to 18: $10
// 19 to 60: $15
// Above 60: $12
 
// Sample Input: let age = 70;
// Sample Output: "Your ticket price is $12"
 
// 15
 
// You’re designing a program for a virtual pet. Determine if the pet is Happy, Hungry, or Sleepy based on its energy level:
 
// Energy > 70: Happy
// Energy between 30 and 70: Hungry
// Energy < 30: Sleepy
 
// Sample Input: let energy = 25;
// Sample Output: "Your pet is Sleepy"
 
// 16
 
// You’re developing a weightlifting app. Based on the weight lifted, classify the attempt as Beginner, Intermediate, or Advanced:
 
// Weight < 50 kg: Beginner
// 50-100 kg: Intermediate
// Weight > 100 kg: Advanced
 
// Sample Input: let weight = 75;
// Sample Output: "You are lifting at an Intermediate level"
 
// 17
 
// Create a discount program for a clothing store. The discount depends on the total amount spent:
 
// Spend < $50: No discount
// Spend $50-$100: 10% discount
// Spend $101-$200: 20% discount
// Spend > $200: 30% discount
 
// Sample Input: let totalSpent = 150;
// Sample Output: "You get a 20% discount"
 
// 18
 
// Write a program to determine if a password is strong, medium, or weak.
 
// Strong: At least 8 characters, includes numbers and special characters
// Medium: At least 6 characters, includes either numbers or special characters
// Weak: Less than 6 characters
 
// Sample Input: let password = 'Pass123!';
// Sample Output: "Your password is strong"

let passwordComment = {
    type: " strong",
    type1: "medium",
    type2: "muu"
}

const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const numbers = /[1234567890]+/;
const hasAnyUpper = /[A-Z]/;
const hasAnyLower = /[a-z]/;
let password =prompt("password oruulah");
 if (specialCharacters.test(password) && password.length >=8 && numbers.test(password) && hasAnyLower.test(password) && hasAnyUpper.test(password)){
    console.log(passwordComment.type);
  }
    else if(specialCharacters.test(password) && password.length >=6 && numbers.test(password) && hasAnyLower.test(password) && hasAnyUpper.test(password)) {
    console.log(passwordComment.type1);
    
 } else {
    console.log(passwordComment.type2);
    
 }

 
// 19
 
// You’re coding a program for an amusement park. Ticket prices vary by age and height:
 
// Children under 120 cm: $5
// Adults 120 cm or taller and aged under 60: $10
// Seniors aged 60 and above: $7
 
// Sample Input: let age = 65, height = 130;
// Sample Output: "Your ticket price is $7"
 
// 20
 
// Write a program for a mobile data plan. Determine the cost based on data usage:
 
// 0-5 GB: $10
// 5-20 GB: $20
// 20-50 GB: $30
// More than 50 GB: $50
 
// Sample Input: let dataUsage = 25;
// Sample Output: "Your data cost is $30"
 
// 21
 
// Write a program for a bank loan eligibility check. A user qualifies if:
 
// They are at least 21 years old
// Their annual income is greater than $25,000
// They do not have a poor credit score (creditScore > 600)
 
// Sample Input: let age = 30, income = 30000, creditScore = 650;
// Sample Output: "You are eligible for the loan"
 
// 22
 
// Write a program for an online grading system where the final grade depends on a combination of attendance and exam scores:
 
// If attendance is below 75%, the grade is automatically "F".
// Otherwise, calculate the average score of three exams:
// Average >= 90: A
// Average >= 80: B
// Average >= 70: C
// Average >= 60: D
// Below 60: F
 
// Sample Input: let attendance = 80; let exam1 = 85
// Sample Output: "Your final grade is B"
 
// 23
 
// Write a program to calculate the total salary for a company employee, including bonuses:
 
// Base salary is $2000.
// Add $500 if the employee has worked for more than 5 years.
// Add $300 if they achieved the monthly target.
// Add $100 if their attendance is above 90%.
 
// Sample Input:
// let yearsWorked = 6;
// const metTarget = true
// const attendance = 95;
// Sample Output: "Your total salary is $2900"
 
// 24
 
// Create a program to determine a runner’s performance in a marathon based on time and gender:
 
// For men: 
// Elite: Under 2:10:00
// Advanced: Under 3:00:00
// Amateur: Over 3:00:00
// For women:
// Elite: Under 2:30:00
// Advanced: Under 3:15:00
// Amateur: Over 3:15:00
 
// Sample Input:
// let gender = 'Female';
// const time = '2:45:00';
// Sample Output: "Your performance level is Advanced"

