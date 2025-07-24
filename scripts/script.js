const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContetnt = document.getElementById('cars-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLocaleLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === 'все марки' ||
        car
          .querySelector('h4')
          .textContent.toLocaleLowerCase()
          .includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });

    carsContetnt.scrollIntoView({ behavior: 'instant' });
  };
});

// Получаем поля формы по Id
const carField = document.getElementById('car');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');

// Обработчик для кнопки с id "order-action"
document.getElementById('order-action').addEventListener('click', function () {
  // Собираем поля в массив
  const fields = [carField, nameField, phoneField];

  let hasError = false;

  // Проверяем поля циклом
  fields.forEach((field) => {
    if (field.value.trim() === '') {
      field.style.borderColor = 'red';
      hasError = true;
    } else {
      field.style.borderColor = 'white';
    }
  });

  // Если все поля валидны
  if (!hasError) {
    alert('Спасибо за заявку! Мы скоро свяжемся с вами!');

    // Очищаем поля
    fields.forEach((field) => (field.value = ''));
  }
});
