let startBtn = document.getElementById("startButton");
let leftCell = document.getElementById("leftCell");
let rightCell = document.getElementById("rightCell");
let enterHouse = document.getElementById("enterhouse");
let pocketBtn = document.getElementById("pocketbtn");
let gameState = true;
let keysFound = false;
let keysimg = document.getElementById("keys");

startBtn.addEventListener("click", function () {
  if (gameState === true) {
    leftCell.style.display = "flex";
    rightCell.style.display = "flex";
    this.style.display = "none";
    gameState = false;
    console.log("gamestate is true");
  } else {
    leftCell.style.display = "none";
    this.style.display = "block";
    gameState = true;
    console.log("gamestate is false");
  }
});

function changePage() {
  location.href = "page2.html";
}

function showAlertdoor() {
  alert(
    "You need to unlock the door. Maybe you should look for them in your pockets."
  );
}

function showAlertkeys() {
  alert("You found the keys! Now you can enter the house");
}

enterHouse.addEventListener("click", function () {
  if (keysFound == true) {
    this.onclick = changePage();
  } else {
    pocketBtn.style.display = "block";
    showAlertdoor();
  }
});

pocketBtn.addEventListener("click", function () {
  keysimg.style.display = "block";
  this.style.display = "none";
  showAlertkeys();
  keysFound = 1;
});
