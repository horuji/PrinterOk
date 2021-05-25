let helpbut = document.querySelector(".helper");
let helpform = document.querySelector(".helpform");
let exit = document.querySelector(".exitbut");
function click_class(el, cl){
    el.classList.toggle(cl);}
   

helpbut.addEventListener("click",function(){
    click_class(helpform, "invis");
})
exit.addEventListener("click",function(){
    click_class(helpform, "invis");
})

let fo = document.forms.user;

let userphon = fo.elements.phone;
let sub = document.querySelector(".sub");
let username
let n;
sub.addEventListener("click", function(){
     username = fo.elements.name;
    return username
} )
let Client = {};
Client.name = username.value;