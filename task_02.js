const secondInput = document.getElementById("text");
const button02 = document.getElementById("button02");
const blockAnswer02 = document.getElementById("answer02");

button02.addEventListener("click", (e) => {
  e.preventDefault();
  strokeChange(secondInput.value);
});

function strokeChange(text) {
  let arr = Array.from(text);
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[0]) {
      resArr.push(arr[0].toUpperCase());
    } else if (arr[i] === " ") {
      resArr.push(" ");
      resArr.push(arr[i + 1].toLowerCase());
      arr.splice(i + 1, 1);
    } else {
      resArr.push(arr[i].toLowerCase());
    }
  }

  renderAnswer02(resArr.join(""));
  return resArr;
}

function renderAnswer02(text) {
  let content = text;
  blockAnswer02.textContent = content;
}
