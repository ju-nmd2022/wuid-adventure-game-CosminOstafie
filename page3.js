let kitchenimg = document.getElementById("kitchenImg");
let chipsimg = document.getElementById("chipsbag");
let livingBtn = document.getElementById("returntoLiving");
let chipsFound = false;

function changePage() {
  location.href = "page2.html";
}

kitchenimg.addEventListener("click", function () {
  if (chipsFound === false) {
    chipsimg.style.display = "block";
    chipsFound = true;
    alert("You found a bag of Chips! You can return to the Living Room");
  } else {
    alert("You can return to the Living Room!");
  }
});
livingBtn.addEventListener("click", function () {
  if (chipsFound === true) {
    this.onclick = changePage();
  } else {
    alert("You need to find some snacks first!");
  }
});
function showAlertchips() {
  alert("You found a bag of chips! Now you can return to the living room.");
}

localStorage.stepComplete = "1";
