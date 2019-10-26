var submit = document.getElementById("submit");

submit.addEventListener("click", function(e){
    e.preventDefault();
    var dob = document.getElementById("date").value;
    var mob = document.getElementById ("month").value;
    var yob = document.getElementById("year").value;
    var gent = document.getElementById("male").value;
    var lady = document.getElementById("female").value;
    var weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var man = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var woman =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//     function validationForm(){
//         var x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//     }
    // var formula =( ( (cent+1/4) - 2 * (cent - 1)) + ((5*yobs/4) ) + ((26*(mob+1)/10)) + dob)% 7;

    // this is the area that will receive values inputed
    var date = new Date(`${yob}-${mob}-${dob}`); //yob + "-" + mob + "-" + dob
    // here it provides us with the day in form of integers
    var day = date.getDay();
    if (gent.checked) {  
        alert("your name is " + man[day]); 
    }else{ 
        alert("your name is " + woman[day]);
    }

    // alert(day);
})