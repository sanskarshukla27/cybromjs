 let signup=()=>{

let signame =document.querySelector("#signname").value
let signpass =document.querySelector("#signpass").value
let signemail =document.querySelector("#signemail").value

if(signame===""){

    let sign =document.querySelector("#signname")
    sign.style.borderColor="red";
    return false;
}
else if(!(signemail.includes("@") && signemail.includes(".com"))){
   let signemail =document.querySelector("#signemail")
   signemail.style.borderColor="red"
   return false;
}


localStorage.setItem("username",signame)
localStorage.setItem("userpass",signpass)
localStorage.setItem("useremail",signemail)

window.location.href="locallogin.html"

return false;

}

let login=()=>{

let loginname=document.querySelector("#loginname").value
let loginpass=document.querySelector("#loginpass").value

let checkname=localStorage.getItem("username")
let checkpass=localStorage.getItem("userpass")

if(loginname===checkname && loginpass===checkpass){
    alert("uh have login succefully")
    window.location.href="localhome.html"
}else{
    alert("login failed")
    return false;
}
return false;


}