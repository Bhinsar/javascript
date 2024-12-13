const container = document.querySelector(".container")

function dropped(){
    const drop =document.createElement("spam")
    drop.classList.add("drop")
    drop.style.top = Math.random()*innerHeight+"px"
    drop.style.left = Math.random()*innerWidth+"px"
    setTimeout(()=>{
        drop.remove()
    },650)
    container.appendChild(drop)
}
setInterval(dropped,500)