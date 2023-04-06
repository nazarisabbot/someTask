const thirdInput = document.getElementById("invoice");
const quantity = document.getElementById("quantity");
const promoCode = document.getElementById("promocode");

const button03 = document.getElementById("button03");
const blockAnswer03 = document.getElementById("answer03");

button03.addEventListener("click", (e) => {
  e.preventDefault();
  calculate(+thirdInput.value, +quantity.value, promoCode.value);
});

function calculate(invoice, quantity, promocode) {
  let res03 = invoice;
  let rest = null;

  if (invoice > 30000) {
    rest = (res03 - 30000) * 0.15;
    res03 = res03 - rest;
  }

  if (quantity > 10) {
    res03 = res03 - res03 * 0.03;
  }

  if (promocode == "METHED") {
    res03 = res03 - (res03 / 100) * 10;
  } else if (promocode == "G3H2Z1" && res03 > 2000) {
    res03 = res03 - 500;
  }

  renderAnswer03(res03);
  return res03;
}

function renderAnswer03(total) {
  let content = total.toLocaleString();
  blockAnswer03.textContent = content;
}
