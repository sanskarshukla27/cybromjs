let sub=()=>{

let name=document.querySelector("#name").value;
let number =document.querySelector("#num").value;
let email =document.querySelector("#email").value;
let pass =document.querySelector("#pass").value;
let cpass =document.querySelector("#cpass").value;

let errorname = document.querySelector("#errorname")
let errornum = document.querySelector("#errornum")
let erroremail = document.querySelector("#erroremail")
let errorpass = document.querySelector("#errorpass")
let errorcpass = document.querySelector("#errorcpass")

if(name==="")
{
    errorname.textContent="please enter your name";
    errorname.style.color="red";
    return false;
}
else if(number===""){

    errornum.textContent ="please enter your number";
    errorname.style.color="red";
    return false;

} 
else if(isNaN(number)){
errornum.innerHTML="please enter number only";
errorname.style.color="red";
return false;
}

else if(number.length!==10){
    errornum.innerHTML="please enter valid number";
    errorname.style.color="red";
    return false;
}
else if(!(email.includes("@") && email.includes(".com"))){
    erroremail.innerHTML="please enter valid email";
    erroremail.style.color="red";
    return false;
}
else if(!
    (
        pass.match(/[1234567890]/) 
         && 
        pass.match(/[!@#$%^&*()]/) 
         && 
        pass.match(/[a-z]/) 
         && 
        pass.match(/[A-Z]/)
    )
){
    errorpass.innerHTML = "Password contain atleast 1 lower, upper ,special and number";
    errorpass.style.color = "red";
    
    let passinp=document.querySelector("#pass")
    passinp.style.borderColor = "red"
    passinp.style.outlineColor = "red"
    return false;
}


else if(pass===""){
    errorpass.innerHTML="please enter password";
    errorpass.style.color="red";
    return false;
}
else if(pass!==cpass){
    errorcpass.innerHTML="please enter correct password";
    errorcpass.style.color="red";
    return false;
}

   


















}