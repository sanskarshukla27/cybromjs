let flow=(a)=>{

let para = document.querySelector("#para");
para.innerHTML = `

square is ${a*a}
cube is ${a*a*a};`


if(a%2==0){
para.innerHtml("even")
}else{
para.innerHtml("odd")
}




}