window.onload = function(){
    window.scrollTo(0,0);
  };

let item = document.querySelectorAll(".food-container");
let body = document.getElementById("scroll");
let addToCart = document.querySelectorAll(".Buy");
let a = document.getElementsByClassName("Price-tag");
let header = document.getElementsByTagName("header")[0];
let logo = document.getElementsByClassName("logo")[0];
let headerArea = document.getElementsByClassName("header-area")[0];
let mainMenu = document.getElementsByClassName("main-menu")[0];
let icon = document.getElementById("hamburgger-icon");
let span = document.querySelectorAll(".icon");
var bool = false;

icon.addEventListener("click",toggle);

function toggle(){
    if(bool === false){
        mainMenu.style.opacity = "0.7";
        span[0].style.transform = "rotateZ(45deg)";
        span[0].style.transformOrigin = "0% 200%";
        span[0].style.transition = "0.5s";
        span[1].style.transform = "translateX(-80px)";
        span[1].style.opacity = "0";
        span[1].style.transition = "0.5s";
        span[2].style.transform = "rotateZ(-45deg)";
        span[2].style.transition = "0.5s";
        bool = true;
   }
   else if(bool === true){
    mainMenu.style.opacity = "0";
    span[0].style.transform = "rotateZ(0deg)";
    span[0].style.transformOrigin = "0% 0%";
    span[0].style.transition = "0.5s";
    span[1].style.transform = "translateX(0px)";
    span[1].style.opacity = "1";
    span[1].style.transition = "0.5s";
    span[2].style.transform = "rotateZ(0deg)";
    span[2].style.transition = "0.5s";
    bool = false;  
  } 
}

for(let i=0; i<item.length; i++){
    item[i].addEventListener("mouseover",function(){
        item[i].style.background = "#1a6cd0";
        item[i].style.color = "#fff";
        item[i].style.transform = "scale(1.050)";
        a[i].style.display = "none";
        a[i].style.opacity = "0";
        a[i].style.transition = "0.3s";
        addToCart[i].style.display = "block";
        addToCart[i].style.opacity = "1";
        addToCart[i].style.transition = "0.3s";
    });

    item[i].addEventListener("mouseout",function(){
        item[i].style.background = "#ccc";
        item[i].style.color = "#000";
        item[i].style.transform = "scale(1)";
        a[i].style.display = "inline-block";
        a[i].style.opacity = "1";
        a[i].style.transition = "0.3s";
        addToCart[i].style.display = "none";
        addToCart[i].style.opacity = "0";
        addToCart[i].style.transition = "0.3s";
    });
}

body.onscroll = function(){
    let scroll = window.scrollY;
    console.log(scroll);

    if(scroll > 20){
        header.style.height = "100px";
        header.style.background = "#fff";
       // header.style.position = "fixed";
        header.style.boxShadow = "0 10px 10px rgba(0,0,0,0.3)";
        header.style.transition = "0.3s";
        headerArea.style.background = "#fff";
        headerArea.style.height = "100px";
       // headerArea.style.position = "fixed";
        headerArea.style.transition  = "0.3s";
        logo.style.flexBasis = "100px";
        logo.style.transition = "0.3s";
    }

    if(scroll < 20){
        header.style.height = "200px";
        header.style.background = "rgb(229, 130, 130)";
        header.style.boxShadow = "0 0 0 rgba(0,0,0,0.7)";
        header.style.transition = "0.3s";
        headerArea.style.background = "rgb(229, 130, 130)";
        headerArea.style.height = "200px";
        headerArea.style.transition  = "0.3s";
        logo.style.flexBasis = "200px";
        logo.style.transition = "0.3s";
    }

    if(scroll >250){
        for(let j=0; j<item.length; j++){
            item[j].style.opacity = "1";
            item[j].style.transform = "translateY(0px)";
        }
                item[0].style.transition = "0.5s";
           
                item[1].style.transition = "0.8s";
           
                item[2].style.transition = "1.1s";
            
                item[4].style.transition = "1.4s";
    }
}

