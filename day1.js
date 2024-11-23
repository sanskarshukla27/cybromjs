
//function run(){
    // var num=25;
    // console.log(num)

    // let num1 =55;
    // console.log(num1)

    // const num2=60;
    // console.log(num2)  


    //====================scope==============
    // const num =55;
    // {
    //     const num = 45;
    // }
    // console.log(num)

    //=======================redeclaration==================

    // const num=44;
    // const num=55;
    // console.log(num) 


    //========================reassisment==============
    // const num=45;
    // num = 34;
    // console.log(num)




//}
//run();

// function oper(){


    //Alert promt confirm

//alert("hello i am alert")
//prompt("hello i am promt")

//confirm("hello i am confirm")

//let num1 =parseInt(prompt("enter the num1" )) ;
//let num2 =parseInt(prompt("enter the num2" )); 

//console.log(num1+num2)
//alert ("the sum is : " + (num1+num2))
//alert("the sum of promt is: " + (num1+num2));

// 




// }
// oper();

function run(){
   // confirm("hello everyone")
//prompt("hello guys")
    //alert("hello")

    // let num = prompt("enter your age :");
    // num<18?alert("uh cant vote"):alert("uh can vote")

    // let num1 = confirm("haave uh completed the course")
    // let num2 = confirm("do uh have the certificate")
    // if(num1&&num2){
    //     alert("completed")
    // }else{
    //     alert("not completed")
    // }

    // let num1 = prompt("enter the number");
    // if(num1 % 2==0){
    //     alert("number is even")
    // }else{
    //     alert("number is odd")
    // }

    // let num1 =prompt("tell your item price:")
   
    // let num2 = confirm("do uh have a discount coupon ")
    // num1 = ans1;
    // num2 = ans2;
    // if(ans1 == "true"){
    //   discount = (ans1/10)*100; 
    //   alert(discount); 
    // }else{
    //     alert("no discount")
    // }


    // let num = prompt("tell me your marks")
    // if(num >= 33){
    //     alert("uh are passed")
    // }else{
    //     alert("uh are fail")
    // }

//      let num = confirm("are uh sure to delete")
//      if(num){
//         alert("item deleted")
//      }else{
// alert("canceled")
//      } 

// alert("hi")

// let num1=1;
//      while(num1<=10){
    
//         // document.write(num1++)
//         console.log(num1++)
//      }

// let para = document.querySelector("#text");

// para.textContent=" HELLO BAEBY ";
// para.style.color = "red" 

// let para = document.querySelector("#text");

// if(para.style.display === "none"){
// para.style.display ="block";
// }else{
//     para.style.display="none"
// }


// let para = document.querySelector("#first")
// para.style.height = ("200px")
// para.style.width = ("200px")
// para.style.backgroundColor = ("red")


// let para = document.querySelector("#first")
// para.innerHTML =("hello")


// let para = document.querySelector("#first")
// para.style.height = ("200px")
// para.style.width = ("200px")
// para.style.backgroundColor = ("green")


      }

      
let count = 0;
function inc(){
count++;
let para = document.querySelector("#first")
para.innerHTML =count;
}
function dec(){
    count--;
    let para = document.querySelector("#first")
    para.innerHTML =count;
    
}




