  // Получаем список продуктов и соответствующие суммы
  const products = document.querySelectorAll('.product');
  const totalOutput = document.querySelector('.total');
  
  // Функция для обновления общей суммы
  function updateTotal() {
    let totalSum = 0;

    // Перебираем продукты и суммируем их стоимость
    products.forEach(product => {
      const priceInput = product.querySelector('.price');
      const price = parseFloat(priceInput.value);
    
      if (!isNaN(price)) {
        totalSum += price;
      }
    });

    // Обновляем текст в строке "Всего"
    totalOutput.textContent = `Всего: ${totalSum.toFixed(2)}`;
  }

  // Вызываем функцию при изменении значений
  products.forEach(product => {
    const priceInput = product.querySelector('.price');
    priceInput.addEventListener('input', updateTotal);
  });