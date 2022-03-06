let CC, YY, MM, DD, d, dayValue;
let dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
function validate() {
    let genders=document.getElementsByName("gender");
    if(document.myForm.year.value==""|| document.myForm.year.value.length !=4 ||  document.myForm.year.value>2100 || document.myForm.year.value <=1900){
        alert( "Please provide a valid year of birth! Example 2000");
        document.myForm.year.focus() ;
        return false;
    }
}