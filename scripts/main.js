const contain = document.getElementById("contain")

document.addEventListener("mousemove",(e)=>{
    rotateElement(e,contain);
})

function rotateElement(event, element){
    const x = event.clientX;
    const y = event.clientY;
    //console.log(x,y)

    const middleX = window.innerWidth/2;
    const middleY = window.innerHeight/2;

    const offsetX = ((x - middleX)/middleX)*15;
    const offsetY = ((y - middleY)/middleY)*15;
    //console.log(offsetX,offsetY)

    element.style.setProperty("--rotateX",-1*offsetY+"deg");
    element.style.setProperty("--rotateY",offsetX+"deg");
}

//Modal-Script

//about

const abtModal = document.getElementById("about-modal");
const abtBtn = document.getElementById("aboutBtn")
const projModal = document.getElementById("project-modal");
const projBtn = document.getElementById("projectBtn")
const contactModal = document.getElementById("contact-modal");
const contactBtn = document.getElementById("contactBtn")

abtBtn.onclick = ()=>{
    abtModal.style.display = "block";
}

projBtn.onclick = ()=>{
    projModal.style.display = "block";
}

contactBtn.onclick = ()=>{
    contactModal.style.display = "block";
}

window.onclick = (event)=>{
    if(event.target == abtModal ||event.target == projModal ||event.target == contactModal ){
        event.target.style.display = "none";
    }
}