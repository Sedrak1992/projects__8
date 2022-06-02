const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const handleClick = (event) => {
  if (event.target.className === "item") {
    event.target.style.backgroundColor = "#ededed";
    event.target.textContent = "POP!";
    event.target.className = "btmColor";
     
    let listt = document.querySelectorAll(".item");
    if (listt.length === 0) {
      Containers.style.display = "none";
      // Containers.innerHTML = "";
      gallery.style.display = "block";
    }
  }
};
for (let i = 0; i < 20; i++) {
  const div = document.createElement("div");
  div.addEventListener("mouseenter", handleClick);
  const color = randomColor();
  div.style.backgroundColor = color;
  div.style.color = color;
  div.classList.add("item");
  document.querySelector("#Container").append(div);
}

const items = document.querySelectorAll(".item");
const Containers = document.getElementById("Container");
let gallery = document.getElementById("yay-no-balloons");
gallery.style.display = "none";
