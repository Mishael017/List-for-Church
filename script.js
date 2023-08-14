const products = document.querySelectorAll('.product');
const totalOutput = document.querySelector('.total');
const resetButton = document.getElementById('resetButton');

// Функция для обновления общей суммы и сохранения данных
function updateTotal() {
  let totalSum = 0;

  products.forEach((product, index) => {
    const priceInput = product.querySelector('.price');
    const price = parseFloat(priceInput.value);
  
    if (!isNaN(price)) {
      totalSum += price;
      localStorage.setItem(`product${index}`, price); // Сохраняем цену в Local Storage
    }
  });

  totalOutput.textContent = `Всего: ${totalSum.toFixed(2)}`;
  localStorage.setItem('totalSum', totalSum); // Cохраняем общую сумму в Local Storage
}

// Вызываем функцию при изменении значений
products.forEach((product, index) => {
  const priceInput = product.querySelector('.price');
  
  // Восстанавливаем данные из Local Storage
  const savedPrice = localStorage.getItem(`product${index}`);
  if (savedPrice !== null) {
    priceInput.value = savedPrice;
  }
  
  priceInput.addEventListener('input', updateTotal);
});

// Восстанавливаем общую сумму из Local Storage при загрузке страницы
const savedTotalSum = localStorage.getItem('totalSum');
if (savedTotalSum !== null) {
  totalOutput.textContent = `Всего: ${parseFloat(savedTotalSum).toFixed(2)}`;
}

resetButton.addEventListener('click', () => {
  products.forEach((product, index) => {
    const priceInput = product.querySelector('.price');
    priceInput.value = '';
    localStorage.removeItem(`product${index}`);
  });

  totalOutput.textContent = `Всего: 0.00`;
  localStorage.removeItem('totalSum');
});

window.addEventListener('beforeunload', () => {
  updateTotal();
});