// let on=()=>{

// let show = document.querySelector("#text")

// setTimeout(()=>{
// show.style.display="none"

// },3000)


// }

let on=()=>{

    let show = document.querySelector("#text")
    
    let ans = new Date();
    let ans1= `${ans.getHours()} HOURS:${ans.getMinutes()}MINUTES:${ans.getSeconds()}SECONDS`;
    show.innerHTML=(ans1);

}
setInterval(on,1000)