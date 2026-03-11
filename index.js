const container=document.getElementById("container");
async function getData(){
    const Info = await fetch("https://jsonplacholder.typicode.com/users");
    const response=await Info.json();
    for(let user of response){
       const name= document.createElement("h1");
       const email= document.createElement("p");
       const phone= document.createElement("a");
    }
}
getData();