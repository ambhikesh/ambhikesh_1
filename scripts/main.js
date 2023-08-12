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
const modalButtons = document.querySelectorAll("[data-modal-target]");
const closeButtons = document.querySelectorAll("[data-modal-close]");
const container = document.querySelector(".container");
const area = document.querySelector(".area")

modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetModal = document.querySelector(button.dataset.modalTarget);
    if (targetModal) {
      targetModal.showModal();
      container.classList.add("blur-background");
      area.classList.add("blur-background");
      targetModal.classList.remove("hide");
      targetModal.classList.add("show");
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest("dialog");
    if (modal) {
      modal.classList.add("hide");
      modal.classList.remove("show");

      setTimeout(() => {
        modal.close();
        container.classList.remove("blur-background");
        area.classList.remove("blur-background");
        modal.classList.remove("hide");
      }, 300);
    }
  });
});


