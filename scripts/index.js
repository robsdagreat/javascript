const main= document.createElement("div");
main.id="main";

const test= document.createElement("h3");
test.id="test";
test.innerHTML= "Hello world";

const text= document.createElement("p");
text.id="text";
text.innerHTML="Today we're learning practical javascript";

const robs= document.createElement("p");
robs.id="robs";
robs.innerHTML="#makeProgress";

const h1= document.createElement("h1");
h1.innerHTML="javascript is powerful";

const link= document.createElement("a");
link.id="link";
link.innerHTML="Instagram";
link.href= "www.instagram.com";

const demo= document.createElement("div");
demo.class="demo";

let anchor= document.createElement("a");
anchor.id="anchor";
anchor.href="www.google.com";
anchor.innerHTML="Google";
demo.appendChild(anchor);


//getElementsByTagName("body")[0].appendChild(main);

main.appendChild(test);
main.appendChild(text);
main.appendChild(robs);
main.appendChild(link);
main.appendChild(demo);


document.body.appendChild(main);


const date= new Date();
let day= document.getElementById("day");
day.innerHTML=date;
let birthday= new Date("2001-10-28");
day.innerHTML=birthday;
let day1= birthday.getDay();
// let day1= birthday.getFullYear();
// // let day1= birthday.getHours();
// // let day1= birthday.getMonths();
// let day1= birthday.getSeconds();
// let day1= birthday.getMinutes();
day.innerHTML=day1;

const address=document.getElementById("address");
let website= window.location.href;
address.innerHTML= website;

// let protocol= window.location.protocol;
let host= window.location.host;
let port= window.location.port;
// let pathname= window.location.pathname;
address.innerHTML= port;

const back= document.getElementById("back");
let history= window.history.length;
back.innerHTML=history;

window.alert("Hello evening!");
window.confirm("Are you above 18 yrs?");

// window.location.href="https://www.instagram.com";

// window.location.replace("https://www.twitter.com");

let input='';
while(input== ''){
    input= prompt('please eneter your age');

    if(!isNaN(input)){
        console.log("invalid input");}
    else{
        if(input<18){
            console.log("sorry kid u're note old");
        }
        else{
            console.log("welcome!");
        }
    }
}

