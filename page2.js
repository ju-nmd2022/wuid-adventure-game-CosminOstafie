let kitchenBtn = document.getElementById("enterKitchen");
let flipbtn = document.getElementById("flipcoin");
let coinImg = document.getElementById("coin");
let rightCell = document.getElementById("rightCello");
let finishBtn = document.getElementById("finish");
let finishstate = 0;
let reloadGameBtn = document.getElementById("reloadgame");

let mainText = document.getElementById("textbox").innerHTML;

console.log(localStorage.stepComplete);
function changePage() {
  location.href = "page3.html";
}
function reloadGame() {
  location.href = "page1.html";
}

window.addEventListener("load", function () {
  kitchenBtn.addEventListener("click", function () {
    this.onclick = changePage();
    kitchenBtn.style.display = "none";
    changeTextOnReturn();
  });

  flipbtn.addEventListener("click", function () {
    flipResult = Math.floor(Math.random() * 2);
    console.log(flipResult);
    if (flipResult === 1) {
      alert(
        "You flipped heads so you will watch the comedy. This was the last task! "
      );
      finishstate++;
    } else {
      alert(
        "You flipped tails so you will watch the action movie. This was the last task!"
      );
      finishstate++;
    }
  });
  finishBtn.addEventListener("click", function () {
    if (finishstate !== 0) {
      alert(
        "You finished all the tasks! Now you can enjoy your night. Game Over!"
      );
      reloadGameBtn.style.display = "block";
    } else {
      alert("You need to finish your tasks first!");
    }
  });
  reloadGameBtn.addEventListener("click", function () {
    if (finishstate !== 0 && reloadGameBtn.style.display !== "none")
      reloadGame();
  });
  function changeTextOnReturn() {
    if (localStorage.stepComplete === "1") {
      document.getElementById("textbox").innerHTML =
        "You still haven't decided which movie to watch.You are stuck between an action movie and a comedy.<br /> You decide you will flip a coin to make the choice.";
      localStorage.stepComplete = "0";
      kitchenBtn.style.display = "none";
      rightCello.style.justifyContent = "space-between";
    } else {
      flipbtn.style.display = "none";
      coinImg.style.display = "none";
    }
  }
  changeTextOnReturn();
});
function saveToLocalStorage() {
  localStorage.stepComplete = localStorage.stepComplete;
}
