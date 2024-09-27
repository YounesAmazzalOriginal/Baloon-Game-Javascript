// balloon Size Code

var valueAdded = 210;
let scoreSpanCounter = 0;

document.querySelector(".balloon").addEventListener("click", function () {
  this.style.width = `${valueAdded}px`;
  this.style.height = `${valueAdded}px`;
  valueAdded += 10;
  if (this.style.width == "420px") {
    this.style.width = "";
    this.style.height = "";
    valueAdded = 210;
  }
  const scoreSpan = document.querySelector(".scoreSpan");
  scoreSpanCounter++;
  if (scoreSpanCounter > 21) {
    scoreSpanCounter = 0;
  } else {
    scoreSpan.innerHTML = scoreSpanCounter;
  }
});

// Score Code
let backgroundSwitcher = 0;
document.querySelector(".balloon").addEventListener("click", function () {
  backgroundSwitcher++;
  const greencolorValue = [1, 4, 7, 10, 13, 16, 19];
  const blueColorValue = [2, 5, 8, 11, 14, 17, 20];
  if (greencolorValue.includes(backgroundSwitcher)) {
    this.style.backgroundColor = "green";
  } else if (blueColorValue.includes(backgroundSwitcher)) {
    this.style.backgroundColor = "blue";
  } else {
    this.style.backgroundColor = "red";
  }
});

// SwitchTheme Code
let switcher = true;
function themeSwitch() {
  if (switcher) {
    document.querySelector(".circle").style.marginLeft = "18px";

    document.querySelector("button").style.backgroundColor = "#101010";
    document.querySelector("span").style.color = "#101010";
    document.querySelector("body").style.backgroundColor = "white";

    document.querySelector("h1").style.color = "#101010";
    document.querySelector("h1").innerHTML = "Light Mode";

    document.querySelector("i").style.color = "#101010";

    document.querySelectorAll("*").forEach((cursorStyle) => {
      cursorStyle.style.cursor = 'url("CursorLight.png"), auto';
    });

    document.querySelectorAll("p").forEach((p) => {
      p.style.color = "101010";
    });
  } else {
    document.querySelector(".circle").style.marginLeft = "0px";

    document.querySelector("button").style.backgroundColor = "white";
    document.querySelector("span").style.color = "white";
    document.querySelector("body").style.backgroundColor = "#101010";

    document.querySelector("h1").style.color = "white";
    document.querySelector("h1").innerHTML = "Dark Mode";

    document.querySelector("i").style.color = "white";

    document.querySelectorAll("*").forEach((cursorStyle) => {
      cursorStyle.style.cursor = 'url("Cursor.png"), auto';
    });

    document.querySelectorAll("p").forEach((p) => {
      p.style.color = "white";
    });
  }
  switcher = !switcher;
}
