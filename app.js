'use strict';

function bgChanger() 
{
    if(this.scrollY > this.innerHeight / 1.5)
    {
        document.body.classList.add("bg-color");
    }
    else
    {
        document.body.classList.remove("bg-color");
    }

    console.log("hello")
}


window.addEventListener("scroll" , bgChanger);

