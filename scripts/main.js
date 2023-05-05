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