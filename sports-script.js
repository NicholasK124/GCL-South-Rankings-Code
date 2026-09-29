/**
 * Elder Code
 */

const elderWinButton = document.getElementById("elderWin");

elderWinButton.addEventListener("click", function () {
  elderWin.textContent = Number(elderWin.textContent) + 1;
});

const elderWin = document.getElementById("elderAddWin");

const elderLossButton = document.getElementById("elderLoss");

elderLossButton.addEventListener("click", function () {
  elderLoss.textContent = Number(elderLoss.textContent) + 1;
});

const elderLoss = document.getElementById("elderAddLoss");

/**
 * St X Code
 */

const stxWinButton = document.getElementById("stxWin");

stxWinButton.addEventListener("click", function () {
  stxWin.textContent = Number(stxWin.textContent) + 1;
});

const stxWin = document.getElementById("stxAddWin");

const stxLossButton = document.getElementById("stxLoss");

stxLossButton.addEventListener("click", function () {
  stxLoss.textContent = Number(stxLoss.textContent) + 1;
});

const stxLoss = document.getElementById("stxAddLoss");

/**
 * LaSalle Code
 */

const lasalleWinButton = document.getElementById("lasalleWin");

lasalleWinButton.addEventListener("click", function () {
  lasalleWin.textContent = Number(lasalleWin.textContent) + 1;
});

const lasalleWin = document.getElementById("lasalleAddWin");

const lasalleLossButton = document.getElementById("lasalleLoss");

lasalleLossButton.addEventListener("click", function () {
  lasalleLoss.textContent = Number(lasalleLoss.textContent) + 1;
});

const lasalleLoss = document.getElementById("lasalleAddLoss");

/**
 * Moeller Code
 */

const moeWinButton = document.getElementById("moeWin");

moeWinButton.addEventListener("click", function () {
  moeWin.textContent = Number(moeWin.textContent) + 1;
});

const moeWin = document.getElementById("moeAddWin");

const moeLossButton = document.getElementById("moeLoss");

moeLossButton.addEventListener("click", function () {
  moeLoss.textContent = Number(moeLoss.textContent) + 1;
});

const moeLoss = document.getElementById("moeAddLoss");

/**
 * Erase Rankings
 */

const eraseButton = document.getElementById("eraseRankings");

eraseButton.addEventListener("click", function () {
  elderWin.textContent = 0;
  elderLoss.textContent = 0;

  stxWin.textContent = 0;
  stxLoss.textContent = 0;

  lasalleWin.textContent = 0;
  lasalleLoss.textContent = 0;

  moeWin.textContent = 0;
  moeLoss.textContent = 0;
});
