// Auto Typing
let typed = new Typed(".auto-input", {
    strings: ["Please Sign In"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  })

// Drag
const wrapper = document.querySelector(".drags"),
  header = wrapper.querySelector("section");
  function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(wrapper);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    wrapper.style.left = `${leftVal + movementX}px`;
    wrapper.style.top = `${topVal + movementY}px`;
    wrapper.style.bottom = `${bottomVal + movementY}px`;
  }
  header.addEventListener("mousedown", ()=>{
    header.addEventListener("mousemove", onDrag);
  });
  document.addEventListener("mouseup", ()=>{
    header.removeEventListener("mousemove", onDrag);
  });




