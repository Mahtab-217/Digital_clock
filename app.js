const div=document.getElementById("box");


const hour= document.createElement("span");
div.append(hour);
hour.classList.add("hours");

function displayTime(){
   const now= new Date();
   let sec=now.getSeconds();
   let min= now.getMinutes();
   let hours=now.getHours();
   if(sec<10){
    sec= "0"+sec;
   }
   if(min<10){
    min= "0"+min;
   }
   if(hours<10){
    hours="0"+hours;
   }


  hour.textContent= hours+":"+min+":"+sec;
}


setInterval(()=>{ displayTime();},1000);
displayTime();