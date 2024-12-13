let go=()=>{

let inp = document.querySelector("#inp").value;
let show=document.querySelector("#show")

let date = new Date();
let cyear=date.getFullYear();

show.innerHTML=`you are ${cyear-inp} years old`;
show.style.color="red";




}