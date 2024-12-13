let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["bhinsar", "jagdish", "bhinu"];
let colors = ["#FF0000", "#00FF00", "#ee4f2e", "#ec3b16", "#f045d2"];

let sticker = function (name) {
  let div = template.content.querySelector("div");
  let nameOfSticker = div.querySelector(".name");
  nameOfSticker.innerHTML = name;

  div.style.background = colors[Math.floor(Math.random() * colors.length)];
  div.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

  let node = document.importNode(div, true);
  wrapper.appendChild(node);
};

setTimeout(refereshPage, 1000);
function refereshPage(){
    location.reload()
}
names.forEach(sticker);
