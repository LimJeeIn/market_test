const inputs = document.querySelectorAll('.inputs input');
const productBtn = document.querySelector('#product-btn');

function checkInputs() {
  const allFilled = [...inputs].every((item) => item.value !== '');

  if (allFilled) {
    productBtn.disabled = false;
    productBtn.style.backgroundColor = '#f26e22';
  } else {
    productBtn.disabled = true;
  }
}

inputs.forEach((i) => {
  i.addEventListener('input', checkInputs);
});
