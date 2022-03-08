function submitForm(e) {
    event.preventDefault();}
    let genderPicked = document.querySelector("#gender");
let akanName = document.getElementById('result');

let dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function generateAkanName() {
    let pickedDate = document.querySelector("#date").value;
    let day = new Date(pickedDate).getDay();
    
    for (let gender of genderPicked) {
    
        let pickedGender = gender.value;
        if (pickedGender === "male") {
        akanName.innerText = `Your Akan name is ${maleNames[day]}`
        ;
        } else if (pickedGender === "female") {
        akanName.innerText = `Your Akan name is ${femaleNames[day]}`;
        }
    }
}

  

