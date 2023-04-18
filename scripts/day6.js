// let sum2= ((((24-5) **2) +1) / (6*8)) + (5**2 /76);
// console.log(sum2);

function sum1(){
   let sum= (100**3) + 9874;
   console.log("results for sum:",sum);
   return "sum";
}
let a= sum1()+20;
let salary= a + 1000;
console.log("for line9:",a);
console.log("for line10:",salary);

// function add(x,y){
//     let sum= x + y;
//     return sum;
// }
// let t=7;
// let s=5
// let sum= add(t,s);
// console.log(sum);

function count(ex){
    let f1= ex.split(";");
    let f2= f1.length;
    return f2;
}

let example= "hi;today;is;js";
let f3= count(example);
console.log(f3);

let example2="the;number;is;not;correct";
let f4= count(example2);
console.log(f4);


