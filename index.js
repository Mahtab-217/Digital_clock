const container=document.getElementById("container");
async function getData(){
    const Info = await fetch("https://jsonplaceholder.typicode.com/users");
    const response=await Info.json();
    for(let user of response){
       const name= document.createElement("h1");
       const email= document.createElement("p");
       const phone= document.createElement("a");
       phone.setAttribute("href",`tel: ${user.phone}`);
       name.textContent= user.name;
       email.textContent= user.email;
       phone.textContent= user.phone;

       container.append(name,email,phone);
    }
}
getData();