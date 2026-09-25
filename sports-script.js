const elderWinButton = document.getElementById("elderWin");

elderWinButton.addEventListener("click", function () {
  elderWin.textContent = Number(elderWin.textContent) + 1;
});

const elderWin = document.getElementById("elderAddWin");
