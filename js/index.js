let mainText = document.getElementById("main-text");
let boxes = document.querySelectorAll(".container > div");
let windowHeight;

window.addEventListener('scroll',reveal);

function reveal(){
    check(mainText);
    for(let i of boxes){
        check(i);
    }
}

function check(box){
    windowHeight = window.innerHeight;
    let revealtop = box.getBoundingClientRect().top;
    let revealpoint = 150;
    
    if(revealtop < windowHeight - revealpoint){
        box.classList.add("active");
    }

    else {box.classList.remove("active")};
}

document.body.style = "opacity:1;"
