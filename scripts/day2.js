//  const save= document.getElementById("save");
// save.addEventListener("click", ()=>{
//     console.log("Hello single click");
// })

let save= document.getElementById("save");
save.addEventListener("dblclick", () => {
    console.log("Hello doulbe click");
});




const login=document.getElementById("login");

login.addEventListener("submit",(event)=>{
    event.preventDefault();
    let text=login.username.value;
    let pass=login.password.value;
    window.alert(text);
    window.alert(pass);
    if(text==''){
        alert("please fill in the name");
    }
    
    login.reset();
});

