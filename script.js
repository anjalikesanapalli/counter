var number = document.getElementById("txt");
var reset = document.getElementById("reset");
var decrement = document.getElementById("decrement");
var increment = document.getElementById("increment");
var counter = document.getElementById("counter");
let l = 0;

increment.addEventListener("click", function () {
  let num = parseInt(number.value);
  if (isNaN(num) || num === "") {
    num = 1;
  }
  l += num;
  counter.textContent = l;
});

decrement.addEventListener("click", function () {
  let num = parseInt(number.value);
  if (isNaN(num) || num === "") {
    num = 1;
  }
  l -= num;
  counter.textContent = l;
});
reset.addEventListener("click", function () {
  l = 0;
  counter.textContent = "";
  number.value = "";
});
