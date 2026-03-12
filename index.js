// const container=document.getElementById("container");
// async function getData(){
//     const Info = await fetch("https://jsonplaceholder.typicode.com/users");
//     const response=await Info.json();
//     for(let user of response){
//        const name= document.createElement("h1");
//        const email= document.createElement("p");
//        const phone= document.createElement("a");
//        phone.setAttribute("href",`tel: ${user.phone}`);
//        name.textContent= user.name;
//        email.textContent= user.email;
//        phone.textContent= user.phone;
//      const div=document.createElement("div");
//        div.append(name,email,phone);
//        div.style.cssText= "width:80%; margin:8px auto; box-shadow:2px 2px 10px rgba(0,0,0,0.8); padding:12px;";
//        container.appendChild(div);
//     }
// }
// getData();
let num=0;
function greeting(){
  console.log("Show me");
  num++;
  if(num==5){
    return;
  }
    greeting(); 
}
greeting();

function add(num){
  for(let i=0; i<num; i++ ){
    for(let j =0; j<num;i++){
      for(let k =0; k<num; k++){
        sum=i+j+k;
      }
    }
  }
  return sum;
}

console.time("timer");
console.log(add(1000));
console.timeEnd("timer")
