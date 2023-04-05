const out= setTimeout(()=>{
    // window.location.href="https://www.instagram.com"
    // console.log("this is a timer");
    },5000);
// clearTimeout(out);


const interval= setInterval(()=>{
     window.confirm("did you enjoy the wait?");
},4000);

let stop= document.getElementById("stop");

stop.addEventListener("click",()=>{
    clearInterval(interval);
});

let a="data \"hello\" type";
console.log(a);
let b= 2030;
console.log(b);
let c= "0\\7";
console.log(c);
let d=false ;
console.log(d);
let e= 1.5;
console.log(e);
// let f=10.000.000;
// console.log(f);
