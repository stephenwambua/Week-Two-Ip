var submit = document.getElementById("submit");

submit.addEventListener("click", function(e){
    e.preventDefault();
    var dob = document.getElementById("date").value;
    var mob = document.getElementById ("month").value;
    var yob = document.getElementById("year").value;
    var gent = document.getElementById("male").value;
    var lady = document.getElementById("female").value;
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var man = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var woman =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (dob == "") {
    alert("Date must be filled out");
    return false;
    }else if (mob == "") {
    alert("Date must be filled out")
    }

    // var formula =( ( (cent/4) - 2 * (cent - 1)) + ((5*yobs/4) ) + ((26*(mob+1)/10)) + dob)% 7;
    // this is the area that will receive values inputed
    var date = new Date(`${yob}-${mob}-${dob}`); //yob + "-" + mob + "-" + dob
    // here it provides us with the day in form of integers
    var day = date.getDay();
    if (gent.checked) {  
        alert("your Akan name is " + man[day] + " which means you were born on "+ weekdays[day]); 
    }
    else{ 
        alert("your Akan name is " + woman[day] + " which means you were born on " + weekdays[day]);
    }

    // alert(day);
})