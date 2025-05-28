 window.onload= function(){ // when windows load or reload. this function will disable the calculate button. 
alert("welcome to the love score finder");
alert("keep in mind . that the future can always change ❤️😘")
const name1input = document.querySelector("#name1");
const name2input = document.querySelector("#name2");
const btn = document.querySelector(".btn1");
function toggle (){// this is  the function to toggle the dissable mode to no/off .according to the condition.
    if(name1.value.trim() !=="" && name2.value.trim() !==""){
       btn.disabled= false; 
    }
    else{
        btn.disabled= true;
    }  
}
name1input.addEventListener("input", toggle);
name2input.addEventListener("input", toggle);
toggle();


 }
 function calculate(){   // this function provides you a random number between 1-100.and displays the message.
    const randomnumber= Math.floor( Math.random()*100)+1;
    const name1 = document.querySelector("#name1").value.trim();
    const name2 = document.querySelector("#name2").value.trim();
    
     
   
    const message= name1+" your love score with "+name2+" is "+randomnumber+"%";
    
    document.querySelector(".score").innerHTML=randomnumber+"%";
    if(randomnumber===100){
        document.querySelector(".main-message").innerHTML=message;

    }else if(randomnumber>40){
        document.querySelector(".main-message").innerHTML=message;
    }
    else{
         document.querySelector(".main-message").innerHTML=message;
    }
}