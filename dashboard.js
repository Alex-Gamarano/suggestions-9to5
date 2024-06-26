let ghosts = document.querySelectorAll(".ghost");
let collapse = document.querySelector(".collapse");
let bars = document.querySelectorAll(".bar");
let send = document.querySelector("#enviar");
let add = document.querySelector(".add");
let counters = document.getElementsByClassName("counter");
let array = [0, 0, 0, 0];
let i = 0;
let brray = [];

let stat = document.querySelector("#status");

function close() {
  ghosts.forEach((ghost) => {
    ghost.classList.remove("show");
  });
}

collapse.addEventListener("click", close);

send.addEventListener("click", () => {
  i++;
  array[stat.value]++;
  let x = 1 + parseInt(stat.value);
  counters[x].innerHTML = `${array[stat.value]}`;
  let sum = array.reduce((accumulator, current) => accumulator + current);

  counters[0].innerHTML = `${sum}`;

  brray = [];
  array.forEach((element) => {
    let b = (element * 100) / sum;
    brray.push(b);

    bars[0].style.width = brray[0] + "%";

    bars[1].style.width = brray[1] + "%";

    bars[2].style.width = brray[2] + "%";

    bars[3].style.width = brray[3] + "%";
    //bars[3].innerHTML = brray[3] + "%";
  });
});

add.addEventListener("click", () => {
  ghosts.forEach((ghost) => {
    ghost.classList.add("show");
  });
});
