const adviceID = document.querySelector("#adviceID");
const adviceContent = document.querySelector("#adviceContent");
const adviceGenerator = document.querySelector("#adviceGenerator");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(url);
  const {
    slip: { id, advice },
  } = await res.json();
  adviceID.textContent = id;
  adviceContent.textContent = `"${advice}"`;
}

getAdvice();

adviceGenerator.addEventListener("click", function () {
  location.reload(true);
});
