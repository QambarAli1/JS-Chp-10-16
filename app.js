// Assighnment 12-13

// IF…ELSE & ELSE IF STATEMENT



// Q1

// var a = +prompt("Enter value ");
// var b = Number.isInteger(a);
// function abc(){
//     if(b==false){
//         document.write("Value is String")
//     }
//     else{
//         document.write("Value is Number");
//     }
// }
// abc();





// Q2

// var a = +prompt("Enter first Number");
// var b = +prompt("Enter Second Number");
// if(a>b){
//     document.write( a + " is greater than " + b);
// }
// else if(a<b){
//     document.write( a + " is less than " + b);
// }
// else if (a==b){
//     document.write( a + " is equal to "+b);
// }
// else{
//     document.write("Enter Integers only")
// }





// Q3


// var a = +prompt("Enter a number");
// if(a>0){
//     document.write( a + " is Positive ");
// }
// else if(a<0){
//     document.write( a + " is Negative ")
// }
// else if(a==0){
//     document.write(" Number is 0")
// }
// else{
//     document.write("Error! Enter value in integers only")
// }



// Q4


// var alphabet = prompt("Enter Alphabet to check whether it is Vowel or not");
// alphabet = alphabet.toLowerCase();
// if (alphabet=="a"){
//     document.write( alphabet + " is a vowel");
// }
// else if (alphabet=="e"){
//     document.write( alphabet + " is a vowel");
// }
// else if (alphabet=="i"){
//     document.write( alphabet + " is a vowel");
// }
// else if (alphabet=="o"){
//     document.write( alphabet + " is a vowel");
// }
// else if (alphabet=="u"){
//     document.write( alphabet + " is a vowel");
// }
// else{
//     document.write("It is not a Vowel");
// }




// Q5


// var password = "123456789";
// var inpPass = prompt("Enter Password");
// if(password==inpPass){
//     alert("Correct Password");
// }
// else if(inpPass==""){
//     alert("Enter Password Please!");
// }
// else if(password!=inpPass){
//     alert("Incorrect Password");
// }
// else{
//     alert("Invelid Password");
// }




// Q6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else {
//     greeting = "Good evening";
//     alert(greeting);
// }




//----------------------//

// Chp 14-16
// ARRAYS


// Q1

// var std = [];


// Q1

// var std = ["Qambar","Ali" ]



// Q3

// var fruits = ["Apple","Mango","Banana","Orange","Grapes"]


// Q4

// var oddNum = ["1","3","5","7"];


// Q5

// var bolArr;
// bolArr = [true , false , false , true];



// Q6

// var mixArr = ["Qambar","1","Ali",true,"7"];



// Q7

// var qual = ["SSC","HSSC","BCS","BS","BCOM","MS","M. Phil.","PhD"];
// var tit = "Qualifications";
// document.write( "<h1>Qualifications</h1>"+"<br>"+" (1) "+qual[0]+"<br>"+" (2) "+qual[1]+"<br>"+" (3) "+qual[2]+"<br>"+" (4) "+qual[3]+"<br>"
// +" (5) "+qual[4]+"<br>"+" (6) "+qual[5]+"<br>"+" (7) "+qual[6]+"<br>"+" (8) "+qual[7]+"<br>" );



// Q8

// for(i=0;i<3;i++){    
//     var names = ["Qambar","Ali","Haider"];
//     var scores = [340,390,400];
//     document.write("Score of "+names[i]+" is "+scores[i]+" . "+"Percentage : "+ scores[i]/500*100 +"<br>");
// }



// Q9

// var colors = ["red","blue","green"];
// document.write(colors);
// var b = prompt("Enter Color you want to add to beginning");
// var addBegining = colors.unshift(b);
// document.write("<br>")
// document.write(addBegining);

