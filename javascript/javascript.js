var submit = document.getElementById("submit");
submit.addEventListener("click", function(e){
    e.preventDefault();
    var dob = document.getElementById("date").value;
    var mob = document.getElementById ("month").value;
    var yob = document.getElementById("year").value;
    var sex = document.getElementsByName("gender").value;
    var gent = document.getElementById("male");
    var lady = document.getElementById("female").value;
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var man = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var woman =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (dob <1 || dob>31){
    alert("Enter a valid date");
    return false;
    }else if (mob <1 || mob>12) {
    alert("Enter a valid month")
    return false;
    }else if(yob <1800 || dob>2019){
    alert("Enter a valid year")
    return false;
    }else if (mob ==2 && dob>29){
    alert("Enter a valid date")
    return false;
    }
    if (sex == "") {
     alert("Enter a valid gend");   
     return false;
    }
    console.log(sex);
    // var formula =( ( (cent/4) - 2 * (cent - 1)) + ((5*yobs/4) ) + ((26*(mob+1)/10)) + dob)% 7;
    // this is the area that will receive values inputed
    var date = new Date(`${yob}-${mob}-${dob}`); //yob + "-" + mob + "-" + dob
    // here it provides us with the day in form of integers
    var day = date.getDay();
    if(gent.checked) {  
        // alert("your Akan name is " + man[day] + " which means you were born on "+ weekdays[day]); 
        document.getElementById("results").innerHTML = man[day];
    }
    else{ 
        // alert("your Akan name is " + woman[day] + " which means you were born on " + weekdays[day]);
        document.getElementById("results").innerHTML = woman[day];
    }
    // alert(day);
})