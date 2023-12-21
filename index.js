let leg = ["rock", "pepar", "scissors", "rock"];
let scoor = 0;
let rulesBtten = document.querySelector(".rules");
let rulesMain = document.querySelector(".rulesMain");
let rulesClows = document.querySelector(".rulesMain div div:nth-child(3)");
rulesBtten.addEventListener("click", () => {
  rulesMain.classList.remove("disoff");
});
rulesClows.addEventListener("click", () => {
  rulesMain.classList.add("disoff");
});
let ele = document.querySelectorAll(".ch");
let eleMain = document.querySelector(".slectChos");
let you, hos;
let chMain = document.querySelector(".battel");
let yoPi = document.querySelector(".yoPi");
let hoPi = document.querySelector(".hoPi");
ele.forEach((e) => {
  e.addEventListener("click", () => {
    eleMain.classList.add("disoff");
    you = e.cloneNode(true);
    hos = rande().cloneNode(true);
    chMain.classList.remove("disoff");
    yoPi.appendChild(you);
    you.classList.add("gr");
    hos.classList.add("gr");
    setTimeout(() => {
      hoPi.appendChild(hos);
      batt(you, hos);
    }, 250);
  });
});
let resul = document.querySelector(".winn");
let playa = document.querySelector(".bttona");
playa.addEventListener("click", () => {
  chMain.classList.add("disoff");
  eleMain.classList.remove("disoff");
  resul.classList.add("disoff");
  yoPi.children[0].classList.remove("shadow");
  hoPi.children[0].classList.remove("shadow");
  you.remove();
  hos.remove();
});
function rande() {
  return ele[Math.floor(Math.random() * 3)];
}
function batt(you, hos) {
  if (
    leg.indexOf(hos.classList[0]) == leg.indexOf(you.classList[0]) + 1 ||
    (leg.indexOf(hos.classList[0]) == 0 && leg.indexOf(you.classList[0]) == 2)
  ) {
    res("YOU LOASE");
    eff(hoPi);
  } else if (
    leg.indexOf(hos.classList[0]) == leg.indexOf(you.classList[0]) - 1 ||
    (leg.indexOf(hos.classList[0]) == 2 && leg.indexOf(you.classList[0]) == 0)
  ) {
    res("YOU WINN");
    eff(yoPi);
    scour();
  } else if (leg.indexOf(hos.classList[0]) == leg.indexOf(you.classList[0])) {
    res("DRAWE");
  }
}
function res(txt) {
  document.querySelector(".txtr").innerHTML = txt;
  setTimeout(() => {
    resul.classList.remove("disoff");
  }, 500);
}
function scour() {
  scoor++;
  setTimeout(() => {
    document.getElementById("scoor").innerHTML = scoor;
  }, 550);
}
function eff(e) {
  setTimeout(() => {
    e.children[0].classList.add("shadow");
  }, 500);
}
