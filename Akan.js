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
    else if(document.myForm.month.value=="" || isNaN(document.myForm.month.value) ||
    document.myForm.month.value.length !=2|| document.myForm.month.value>12 || document.myForm.month.value<=0){
        alert("Please provide a valid month of birth! between 1 and 12");
        document.myForm.month.focus() ;
        return false;
    }
    else if(document.myForm.date.value==""|| isNaN(document.myform.month.value) ||
    document.myForm.month.value.length !=2|| document.myForm.date.value >31 ||document.myForm.date.value <=0) {
        alert("Please provide a valid date of birth!");
        document.myForm.day.focus() ;
        return false;
    }
    else if(gender[0].checked==false&&gender[1].checked==false){
        alert("Select either male or female");
        return false;
    }
    else{
        return true;
    }
    function calculateDayvalue(){
        year= document.getElementById("year"). value;
        CC=parseInt(year.substring(0,2));
        YY=parseInt(year.substring(2,4));
        MM=parseInt(document.getElementById("month").value);
        DD=parseInt(document.getElementById("date").value);
        d=(((CC/4) -2*CC-1) +( (5*YY/4) )+((26*(MM+1)/10))+DD)%7;
        console.log(d);
        return (Math.floor(d));
    }
    function getGender(){
        let gender=document.getElementsByName("gender");
        if(gender[0].checked==true){
            let gender="male";
        }
        else if(gender[1].checked==true){
            let gender="female";
        }
        else{
            return false;
        }
        switch(gender){
            case"male":
            if (dayvalue==1){
                alert("you were born on " +dayNames[0] + " and Your akan name is " +maleNames[0]+"!");
            }
            else if(dayvalue==2){
                alert("you were born on " +dayNames[1] + " and Your akan name is " +maleNames[1]+"!");
            }
            else if(dayvalue==3){
                alert("you were born on " +dayNames[2] + " and Your akan name is " +maleNames[2]+"!");
            }
            else if(dayvalue==4){
                alert("you were born on " +dayNames[3] + " and Your akan name is " +maleNames[3]+"!");
            }
            else if(dayvalue==5){
                alert("you were born on " +dayNames[4] + " and Your akan name is " +maleNames[4]+"!");
            }
            else if(dayvalue==6){
                alert("you were born on " +dayNames[5] + " and Your akan name is " +maleNames[5]+"!");
            }
            else if(dayvalue==0){
                alert("you were born on " +dayNames[6] + " and Your akan name is " +maleNames[6]+"!");
            } 
            break;
            case"female":
            if (dayvalue==1){
                alert("you were born on " +dayNames[0] + " and Your akan name is " +femaleNames[0]+"!");
            }
            else if(dayvalue==2){
                alert("you were born on " +dayNames[1] + " and Your akan name is " +femaleNames[1]+"!");
            }
            else if(dayvalue==3){
                alert("you were born on " +dayNames[2] + " and Your akan name is " +femaleNames[2()]+"!");
            }
            else if(dayvalue==4){
                alert("you were born on " +dayNames[3] + " and Your akan name is " +femaleNames[3()]+"!");
            }
            else if(dayvalue==5){
                alert("you were born on " +dayNames[4] + " and Your akan name is " +femaleNames[4()]+"!");
            }
            else if(dayvalue==6){
                alert("you were born on " +dayNames[5] + " and Your akan name is " +femaleNames[5()]+"!");
            }
            else if(dayvalue==0){
                alert("you were born on " +dayNames[6] + " and Your akan name is " +femaleNames[6()]+"!");
            }


    }
    }
}