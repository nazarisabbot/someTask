const firstInput = document.getElementById("euro");
const button01 = document.getElementById("button01");
const blockAnswer01 = document.getElementById("answer01");

button01.addEventListener("click", (e) => {
  e.preventDefault();
  convertorFromEuro(firstInput.value);
});

function convertorFromEuro(data) {
  let dollar = data * 1.2;
  let rub = dollar * 73;

  let res = rub;
  renderAnswer01(res);
  return res;
}

function renderAnswer01(answer) {
  let content = answer.toLocaleString();
  blockAnswer01.textContent = content;
}
