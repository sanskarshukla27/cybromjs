// let objectName ={

//     key1:"value",
//     key1:"value2"
// }

// let student ={
//     name:"sanskar",
//     age:21,
//     adress:"bhopal",
//     welcome:function(){
//         return `hello my name is ${this.name} and name is ${this.age} `
//     }
// }
// console.log(student.name);                //how to access

// student.gender="male";
// student.email="sanskar2002@gmail.com"     //how to add
// console.log(student);

// student.age =23;                          //how to update
// console.log(student);



// console.log(student.welcome())




//destructuring...

const St=()=>{

    // let Student = {name:"sanskar",age:21,city:"bhopal",}
    // const{name,age,city}=student;

    // console.log(age)

//spread operator.....


    let obj1={name:"sanskar",city:"bhopal"}
    let obj2={age1:21,city:"banaras"}

    let newobj = {...obj1,...obj2}
    console.log(newobj);

}
St()