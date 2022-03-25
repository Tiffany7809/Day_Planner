var scheduale = document.getElementById("userText");
var Save = document.getElementById("save");


var TimeSlot = [
    moment(9, 'hh:mm').format('hh:mm A'),
    moment(10, 'hh:mm').format('hh:mm A'),
    moment(11, 'hh:mm').format('hh:mm A'),
    moment(12, 'hh:mm').format('hh:mm A'),
    moment(01, 'hh:mm').format('hh:mm A'),  
    moment(2, 'hh:mm').format('hh:mm A'),  
    moment(3, 'hh:mm').format('hh:mm A'), 
    moment(4, 'hh:mm').format('hh:mm A'),
    moment(5, 'hh:mm').format('hh:mm A')  ];
 
//setting current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//set time-blocks 
console.log(TimeSlot);


//set save function
function SaveInput(){
    localStorage.setItem("input" , scheduale.innerHTML);
    console.log (scheduale.innerHTML);    
}

Save.addEventListener("click", SaveInput);

//display user input in scheduale over page reloads 
var main = document.getElementsByTagName("body")

function display(){
   var Input = localStorage.getItem("input");
   scheduale.textContent = Input;

    console.log("page reloaded")

}
main.onload = display();






//set past/presant/future




