//user input sections
var scheduale = document.getElementById("userText");
var scheduale1 = document.getElementById("userText1");
var scheduale2 = document.getElementById("userText2");
var scheduale3 = document.getElementById("userText3");
var scheduale4 = document.getElementById("userText4");
var scheduale5 = document.getElementById("userText5");
var scheduale6 = document.getElementById("userText6");
var scheduale7 = document.getElementById("userText7");
var scheduale8 = document.getElementById("userText8");

//save buttons
var Save = document.getElementById("save");
var Save1 = document.getElementById("save1");
var Save2 =document.getElementById("save2");
var Save3 = document.getElementById("save3");
var Save4 = document.getElementById("save4");
var Save5 = document.getElementById("save5");
var Save6 = document.getElementById("save6");
var Save7 = document.getElementById("save7");
var Save8 = document.getElementById("save8");

//Time Blocks
var Hour9 = document.getElementById("hour");
var Hour10 = document.getElementById("hour1");
var Hour11 = document.getElementById("hour2");
var Hour12 = document.getElementById("hour3");
var Hour1 = document.getElementById("hour4");
var Hour2 = document.getElementById("hour5");
var Hour3 = document.getElementById("hour6");
var Hour4 = document.getElementById("hour7");
var Hour5 = document.getElementById("hour8");
Hour9.innerHTML = moment().set({"hour": 9, "minute": 0}).format('hh:mm A');
Hour10.innerHTML = moment().set({"hour": 10, "minute": 0}).format('hh:mm A');
Hour11.innerHTML = moment().set({"hour": 11, "minute": 0}).format('hh:mm A');
Hour12.innerHTML = moment().set({"hour": 12, "minute": 0}).format('hh:mm A');
Hour1.innerHTML = moment().set({"hour": 1, "minute": 0}).format('hh:mm A');
Hour2.innerHTML = moment().set({"hour": 2, "minute": 0}).format('hh:mm A');
Hour3.innerHTML = moment().set({"hour": 3, "minute": 0}).format('hh:mm A');
Hour4.innerHTML = moment().set({"hour": 4, "minute": 0}).format('hh:mm A');
Hour5.innerHTML = moment().set({"hour": 5, "minute": 0}).format('hh:mm A');



//setting current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY hh:mm a"));


 

//set save function
function SaveInput(){
    localStorage.setItem("input" , scheduale.innerHTML);    
}
Save.addEventListener("click", SaveInput);

function SaveInput1(){
    localStorage.setItem("input1" , scheduale1.innerHTML);  
}
Save1.addEventListener("click", SaveInput1);

function SaveInput2(){
    localStorage.setItem("input2" , scheduale2.innerHTML);    
}
Save2.addEventListener("click", SaveInput2);

function SaveInput3(){
    localStorage.setItem("input3" , scheduale3.innerHTML);  
}
Save3.addEventListener("click", SaveInput3);

function SaveInput4(){
    localStorage.setItem("input4" , scheduale4.innerHTML);  
}
Save4.addEventListener("click", SaveInput4);

function SaveInput5(){
    localStorage.setItem("input5" , scheduale5.innerHTML);    
}
Save5.addEventListener("click", SaveInput5);

function SaveInput6(){
    localStorage.setItem("input6" , scheduale6.innerHTML);
    console.log (scheduale6.innerHTML);    
}
Save6.addEventListener("click", SaveInput6);

function SaveInput7(){
    localStorage.setItem("input7" , scheduale7.innerHTML);  
}
Save7.addEventListener("click", SaveInput7);

function SaveInput8(){
    localStorage.setItem("input8" , scheduale8.innerHTML);
}
Save8.addEventListener("click", SaveInput8);


//display user input in scheduale over page reloads 
var main = document.getElementsByTagName("body")
function displayUserSceduale(){
   var Input = localStorage.getItem("input");
   var Input1 = localStorage.getItem("input1");
   var Input2 = localStorage.getItem("input2");
   var Input3 = localStorage.getItem("input3");
   var Input4 = localStorage.getItem("input4");
   var Input5 = localStorage.getItem("input5");
   var Input6 = localStorage.getItem("input6");
   var Input7 = localStorage.getItem("input7");
   var Input8 = localStorage.getItem("input8");
   scheduale.textContent = Input;
   scheduale1.textContent = Input1;
   scheduale2.textContent = Input2;
   scheduale3.textContent = Input3;
   scheduale4.textContent = Input4;
   scheduale5.textContent = Input5;
   scheduale6.textContent = Input6;
   scheduale7.textContent = Input7;
   scheduale8.textContent = Input8;

}
main.onload = displayUserSceduale();







//set past/presant/future




