var dob = parseInt(document.getElementById("date").value);
var mod = parseInt(document.getElementById ("month").value);
var yob = document.getElementById("year").value;

var cent = parseInt(yob.slice (0, 2));
var yobs = parseInt (yob.slice (2, 4));



// function myForm(){

//     var day =parseInt(document.getElementById("date").Value;);

//     return document.getElementById("result").innerHTML= day;

// }
// CC - is the century digits. For example 1989 has CC = 19
// YY - is the Year digits (1989 has YY = 89)
// MM -  is the Month
// DD - is the Day of the month 
// mod - is the modulus function ( % )