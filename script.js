const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  if (choice === 'January') {
    days = 31;
  } else if (choice === 'February') {
    days = 29;
  } else if (choice === 'March') {
    days = 31;
  } else if (choice === 'April') {
    days = 30;
  } else if (choice === 'May') {
    days = 31;
  } else if (choice === 'June') {
    days = 30;
  } else if (choice === 'July') {
    days = 31;
  } else if (choice === 'August') {
    days = 31;
  } else if (choice === 'September') {
    days = 30;
  } else if (choice === 'October') {
    days = 31;
  } else if (choice === 'November') {
    days = 30;
  } else if (choice === 'December') {
    days = 31;
  } else {
    choice = ""
  }


  
  createCalendar(days, choice);
  
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}