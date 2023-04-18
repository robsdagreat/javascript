function add(){
    console.log(1+1);
    window.alert("It's your guy Mr function!");
}

function division(){
    console.log(10/2);
}

function substruction(){
    console.log(9-5);
}
division();

let name= "Robert";

function phonecall(x){
    console.log(x);
}
phonecall(name);

let car={
    color: "red",
    drive: function(){
        console.log("driving");
    },
};
// console.log(car.drive());
car.drive();