let on=()=>{

    let ans = document.querySelector("#show")
    let date = new Date();
    let ans1 = date.getHours();
    if(ans1<12){
        ans.innerHTML="good morning"
    }
    else if(ans1>12){
        ans.innerHTML="good night"
    }
}