var submit = document.getElementById("submit");

submit.addEventListener("click", function(e){
    e.preventDefault();
    var dob = document.getElementById("date").value;
    var mob = document.getElementById ("month").value;
    var yob = document.getElementById("year").value;
    var gent = document.getElementById("male").value;
    var lady = document.getElementById("female").value;

    // var formula =( ( (cent+1/4) - 2 * (cent - 1)) + ((5*yobs/4) ) + ((26*(mob+1)/10)) + dob)% 7;

    var date = new Date(`${yob}-${mob}-${dob}`); //yob + "-" + mob + "-" + dob
    var day = date.getDay();
        
    alert(day);
    

})

// document.write("formula");

// function myForm(){

//     var day =parseInt(document.getElementById("date").Value;);

//     return document.getElementById("result").innerHTML= day;

// }
// CC - is the century digits. For example 1989 has CC = 19
// YY - is the Year digits (1989 has YY = 89)
// MM -  is the Month
// DD - is the Day of the month 
// mod - is the modulus function ( % )