let genderPicked = document.querySelector("#gender");
let akanName = document.getElementById('result');

let dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let maleNames=["Kwasi,","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
function generateAkanName() {
    let pickedDate = document.querySelector("#date").value;
    let day = new Date(pickedDate).getDay();

    //Checking for empty input fields
    if(pickedDate == ""){
        alert("Enter your Date of Birth!");
    }else if(genderPicked.value === ""){
        alert("Select your gender!");
    }

    //Checking the gender that was selected
    if (genderPicked.value === "male") {
        akanName.innerText = `Your Akan name is ${maleNames[day]}`;
        return;
    } 
    if (genderPicked.value === "female") {
        akanName.innerText = `Your Akan name is ${femaleNames[day]}`;
        return;
    }
}
  

