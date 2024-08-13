//#region Sources Modal

const sourceBtn = document.getElementById("source-button");
const sourceModal = document.getElementById("sources-modal");
const sourceBackground = document.getElementById("sources-background");

sourceBtn.addEventListener("click", () => {
  sourceModal.classList.add("is-active");
});

sourceBackground.addEventListener("click", () => {
  sourceModal.classList.remove("is-active");
});
//#endregion
//#region Contact Modal
const contactBtn = document.getElementById("contact-button");
const contactModal = document.getElementById("contact-modal");
const contactBackground = document.getElementById("contact-background");

contactBtn.addEventListener("click", () => {
  contactModal.classList.add("is-active");
});
contactBackground.addEventListener("click", () => {
  contactModal.classList.remove("is-active");
});
//#endregion

//#region result Modal

const resultBody = document.getElementById("result-body");
const resultModal = document.getElementById("result-modal");
const resultBackground = document.getElementById("result-background");

const RESULT_HISTORY_KEY = "resultHistory";
const getResultHistory = function () {
  let resultHistory = JSON.parse(localStorage.getItem(RESULT_HISTORY_KEY));
  if (!resultHistory || resultHistory.length <= 0) {
    resultHistory = [];
  }
  return resultHistory;
};

const showResultModal = function (resultData) {
  resultMessage = `$${resultData.start.amount} in the year ${resultData.start.year} is worth $${resultData.end.amount} in the year ${resultData.end.year}`;
  localStorage.setItem(
    RESULT_HISTORY_KEY,
    JSON.stringify([resultMessage, ...getResultHistory()])
  );
  resultBody.innerHTML = resultMessage;
  resultModal.classList.add("is-active");
};

resultBackground.addEventListener("click", () => {
  resultModal.classList.remove("is-active");
});
//#endregion

//#region History Modal

const historyBtn = document.getElementById("history-button");
const historyModal = document.getElementById("history-modal");
const historyBody = document.getElementById("history-body");
const historyBackground = document.getElementById("history-background");

historyBtn.addEventListener("click", () => {
  console.log(getResultHistory());
  historyBody.innerHTML = `<div>${getResultHistory().join("</div><div>")}<div>`;
  historyModal.classList.add("is-active");
});

historyBackground.addEventListener("click", () => {
  historyModal.classList.remove("is-active");
});
