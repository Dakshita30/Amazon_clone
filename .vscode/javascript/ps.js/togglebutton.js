btn=document.querySelector("#btn");
body=document.querySelector("body");
let mode="light";
btn.addEventListener("click",()=>{


if(mode==="light"){
    mode="dark";
 body.classList.add("black");
 body.classList.remove("white");
}
else{
    mode="light";
    body.classList.add("white");
    body.classList.remove("black");

}
})
