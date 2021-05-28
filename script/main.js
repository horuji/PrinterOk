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

let fo = document.forms.user; //форма 
let username = fo.elements.name; //имя формы
let userphon = fo.elements.phone;  //телефон формы
let sub = document.querySelector(".sub"); //кнопка отправки
let n;
let Client = {};


function addValObj (Obj, name, phone ){ //функция добавления элементов в обект после клика
    Obj.name = name.value
    Obj.phone = phone.value
   
    n = JSON.stringify(Obj);
    
    return Obj, n;
     ;
    }
sub.addEventListener("click", function(){addValObj(Client, username, userphon)});
 


