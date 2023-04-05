// let table = {
// color:"brown",
// size:"2m",
// weight:"2kg",
// legs:4,
// shape:"rectangle"
// };
// table.color="green";
// // console.log(table.color);
// table.price= "2000"
// console.log(table);

// let names=["Robert" ,"Angelo","Albert"];
// let weights=["57kg","61kg","65kg"];
// let p1={
//     gender: "male",
//     height: "average",
//     status: "single"
// };
// let p2={
//     gender:"male",
//     height:"tall",
//     status: "single"
// }
// let p3={
//     gender:"male",
//     height:"average",
//     status: "married" 
// }
// let props=[p1,p2,p3];

// console.log(names,weights,props);
// console.log(props[1]);

// console.log(props[2].height);

// let string= "Hello class, xyz";
// let upperString= string.toUpperCase();
// let lowerString= string.toLowerCase();
// let stringLength= string.length;
// let slice= string.slice(5,11);
// let replace= string.replace("class","morning");
// let add= string + " Tekcode";
// let split= string.split(" ");
// console.log(upperString);
// console.log(lowerString);
// console.log(stringLength);
// console.log(slice);
// console.log(replace);
// console.log(add);
// console.log(split);


let para= document.getElementById("para").innerHTML;
// console.log(
//     para.replace("we/g","You"),
//     para.replace("I/g","You"),
// ); // first approach

let split2= para.split(". ");
let arry1= split2[0].replace("we","You");
let arry2= split2[1].replace("We","You");
let practice1= arry2.replace("exercise","practice");
let upper= practice1.toUpperCase();
let arry3= split2[2].replace("I","You");
let practice2= arry3.replace("exercise","practice");
let arry4= split2[3];
let solution= arry1 +". \n" + upper +". \n" + practice2 +". \n" + arry4;
console.log(solution);
let hello= "while you are 12 you are free";
console.log(hello);
let a="11";
let z= parseInt(a);
let b=1;
let c=z + b;
console.log(c);

let d= 2.933
let e=parseInt(d);
console.log(e);

let y= d.toFixed(4);
console.log(y);

// let names= ["angelo","robert","celestin"];
// let joined= names.join("");
// console.log(joined);

// let reversed= names.reverse();
// console.log(reversed);

let rv1= "Today is Tuesday";
let rv2= rv1.split("");
console.log(rv2);
let rv3= rv2.reverse("");
let rv4= rv3.join("");
console.log(rv4);

let nbr= 100024;
let nbr2= nbr.toString();
let nbr3= nbr2.split("");
let nbr4= nbr3.reverse("");
let nbr5= nbr4.join("");
let nbr6= parseInt(nbr5);
console.log(nbr6);

let nbr7= false;
console.log(nbr7);
let nbr8= nbr7.toString();
console.log(nbr8);


let exercise= "i.like.this.program.very.much";
let exercise2= exercise.split(".");
let exercise3= exercise2.reverse();
let exercise4= exercise3.join(".");
console.log(exercise4);