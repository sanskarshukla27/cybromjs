let run=()=>{

let btn=document.querySelector("#btn")

let dice =Math.round(Math.random()*6+1)

let show1=document.querySelector("#one")
let show2=document.querySelector("#two")
let show3=document.querySelector("#three")
let show4=document.querySelector("#four")
let show5=document.querySelector("#five")
let show6=document.querySelector("#six")

if(dice==1){
    show1.style.display="block";
    show2.style.display="none";
    show3.style.display="none";
    show4.style.display="none";
    show5.style.display="none";
    show6.style.display="none";
    
}
if(dice==2){
   
    show2.style.display="block";
    show1.style.display="none";
    show3.style.display="none";
    show4.style.display="none";
    show5.style.display="none";
    show6.style.display="none";
}
if(dice==3){
    show1.style.display="none";
    show2.style.display="none";
    show4.style.display="none";
    show5.style.display="none";
    show6.style.display="none";
    show3.style.display="block";
}
if(dice==4){
    
    show4.style.display="block";
    show1.style.display="none";
    show2.style.display="none";
    show5.style.display="none";
    show6.style.display="none";
    show3.style.display="none";
}
if(dice==5){
    show1.style.display="none";
    show2.style.display="none";
    show4.style.display="none";
    show6.style.display="none";
    show3.style.display="none";
    show5.style.display="block";
}
if(dice==6){
    show1.style.display="none";
    show2.style.display="none";
    show4.style.display="none";
    show5.style.display="none";
    show3.style.display="none";
    show6.style.display="block";
}
}