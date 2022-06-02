const items = document.querySelectorAll(".item");
const Containers = document.getElementById("Container");
let gallery = document.getElementById("yay-no-balloons");
gallery.style.display = "none";

const handleClick = (event) => {



  if (event.target.className === "item") {
    event.target.style.backgroundColor = "#ededed";
    event.target.textContent = "POP!";
    event.target.className = "btmColor";

    let listt = document.querySelectorAll(".item");
    if (listt.length === 0) {
      Containers.style.display = "none";

      gallery.style.display = "block";
    }
  }
};

items.forEach((items) => {
  items.addEventListener("mouseenter", handleClick);
});

const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

// document.addEventListener('mouseover', function(e) {

//             if (e.target.className === "item") {

//                 e.target.style.backgroundColor = "#ededed";
//                 e.target.textContent = "POP!";
//                 popped++;
//                 removeEvent(e);
//         checkAllPopped();
//     }
// });

// function removeEvent(e) {
//     e.target.removeEventListener('mouseover', function() {

//     })
// };

// function checkAllPopped() {
//     if (popped === 24) {
// let gallery = document.querySelector('#Container');
// gallery.innerHTML = '';
// message.style.display = 'block';
//     }
// };
