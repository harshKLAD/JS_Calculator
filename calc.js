const b_1 = document.getElementById("id_1");
const b_2 = document.getElementById("id_2");
const b_equal = document.getElementById("id_=");
const screen = document.getElementById("screen");

b_1.addEventListener("click", function btn_1(e) {
  console.log(1);
  screen.value = screen.value + "1";
  e.preventdefault;
});

b_2.addEventListener("click", function btn_2(e) {
  console.log(2);
  screen.value = screen.value + "2";
  e.preventdefault;
});

b_equal.addEventListener("click", function btn_equal(e) {
  console.log(parseInt(screen.value));
  var A = parseInt(screen.value);

  screen.value = "";

  const b_1 = document.getElementById("id_1");
  const b_2 = document.getElementById("id_2");

  b_1.addEventListener("click", btn_1);
  b_2.addEventListener("click", btn_2);

  e.preventdefault;
});
