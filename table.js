let store='';

let cal=(value)=>{

let show=document.querySelector("#show")
store=store+value
show.innerHTML=store
}

let result=()=>{

    let show = document.querySelector("#show")

    show.innerHTML=eval(store)
    store=eval(store)
    store.toString();

}
let ac=()=>{

store=" ";
let show = document.querySelector("#show")
show.innerHTML=store;

}
let del=()=>{
    store = store.slice(0,-1)
    let show=document.querySelector("#show")
    show.innerHTML=store;
}