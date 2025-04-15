const reason = document.querySelector('#input-reason');
const amount = document.querySelector('#input-amount');
const cancel = document.querySelector('#button-cancel');
const confirm = document.querySelector('#button-confirm');
const expensesList = document.querySelector('#expenses-list');
const total = document.querySelector('#total-expenses');
const alertController = document.querySelector('#ion-alert-controller');

let totalExpense = 0;

const clear = () => {
  reason.value = '';
  amount.value = '';
}

confirm.addEventListener('click', async () => {
  const enteredReason = reason.value;
  const enteredAmount = amount.value;

  if (enteredReason.trim().length <= 0 || enteredAmount.value <= 0 || enteredAmount.trim().length <= 0) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid input alert'
    alert.message = 'Please enter valid inputs'
    alert.buttons = ['Okay']

    document.body.appendChild(alert)
    await alert.present();
    return
  }
  console.log({ enteredAmount, enteredReason })
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': $' + enteredAmount;

  expensesList.appendChild(newItem);

  totalExpense += +enteredAmount;
  total.textContent = totalExpense.toFixed(2);

  clear();
})

cancel.addEventListener('click', clear);