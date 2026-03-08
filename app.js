const parent=document.getElementById("box");

const hour= document.createElement("span");
const minutes= document.createElement("span");
const seconds = document.createElement("span");
function displayTime(){
   const now=new Date();
   const sec=now.getSeconds();
   const min= now.getMinutes();
   const hours=now.getHours();
   if(sec<10){
    sec= "0"+sec;
   }
   if(min<10){
    min= "0"+min;
   }
   if(hours<10){
    hours="0"+hours;
   }
}