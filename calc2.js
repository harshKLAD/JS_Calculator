var calc = {
  display: "",
  a: null,
  b: null,
  nextOpp: false,
  opperator: null,
};

const screen = document.getElementById("screen");

function updateDisplay(newNum) {
  calc.display = calc.display + newNum;
  screen.value = calc.display;
}

const calc_body = document.getElementById("calc_body");

calc_body.addEventListener("click", function click_event(event) {
  var target1 = event.target;

  if (!target1.matches("button")) {
    console.log("not");
    return;
  }

  if (target1.classList.contains("digit")) {
    console.log("digit " + target1.value);
    // if (!calc.nextOpp) {
    updateDisplay(target1.value);
    return;
    // } else {
    //   updateDisplay(target1.value);
    //   return;
    // }
  }

  if (target1.classList.contains("dot")) {
    console.log("dot " + target1.value);
    if (!screen.value.includes(".")) {
      updateDisplay(target1.value);
      return;
    }
  }

  if (target1.classList.contains("operator")) {
    console.log("Operator " + target1.value);
    if (!calc.nextOpp) {
      console.log(calc.nextOpp);
      console.log(calc.display);
      calc.opperator = target1.value;
      calc.nextOpp = true;
      calc.a = screen.value;
      calc.display = "";
      screen.value = "";
      updateDisplay;
      return;
    }
  }

  if (target1.classList.contains("clear")) {
    console.log("Clear " + target1.value);
    clearScreen();
    return;
  }

  if (target1.classList.contains("equal")) {
    console.log("Equal " + target1.value);
    if (calc.nextOpp) {
      Equals();
      return;
    }
  }
});

function calculations(a1, b1, opp) {
  var a = parseFloat(a1);

  var b = parseFloat(b1);

  if (opp === "+") {
    return a + b;
  } else if (opp === "-") {
    return a - b;
  } else if (opp === "*") {
    return a * b;
  } else if (opp === "/") {
    return a / b;
  }
}

function clearScreen() {
  calc.display = "";
  calc.a = null;
  calc.b = null;
  calc.nextOpp = false;
  calc.opperator = null;
  calc.display = "";
  screen.value = "";
  updateDisplay;
}

function Equals() {
  calc.b = screen.value;
  calc.nextOpp = false;

  console.log(calculations(calc.a, calc.b, calc.opperator));
  calc.display = "";
  var ans = calculations(calc.a, calc.b, calc.opperator);

  updateDisplay(ans);
}
