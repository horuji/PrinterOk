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

class Client{constructor(firstName, phone){
    this.firstName = firstName;
    this.phone = phone;

}} ;
let newClient;

function addValObj (name, phone ){ //функция добавления элементов в обект после клика
  
    let newClient = new Client( name.value, phone.value )
   
    //n = JSON.stringify(Obj);
    
    return newClient;
    }
    
    sub.addEventListener("click", function(){  
       newClient = new Client( username.value, userphon.value )
    
     });
 


