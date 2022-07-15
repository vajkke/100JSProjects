// display

const budgetDisplay = document.querySelector('.budget-display');
const expenseDisplay = document.querySelector('.expenses-display');
const balanceDisplay = document.querySelector('.balance-display');

const expenseNameDisplayList = document.querySelector('.expenses-name-list');
const expenseCostDisplayList = document.querySelector('.expenses-cost-list');

// users money

let budget = 0;
let expenses = 0;
let balance = 0;

let finalBudget = 0;
let finalExpenses = 0;
let finalBalance = 0;

const expensesArray = [];

// buttons

const enterBudgetBtn = document.querySelector('.enter-budget');
const enterExpenseBtn = document.querySelector('.enter-expense');
const deleteBtn = document.querySelector('.delete');

// messages

const errorBudget = () => {
  budget = 0;
  balance = 0;
  expenses = 0;
  expenseDisplay.textContent = expenses;
  balanceDisplay.textContent = finalBalance;
  document.querySelector('.error-message-budget').style.display = 'flex';
  document.querySelector('.budget-input').style.backgroundColor = 'red';
};

const errorExpenses = () => {
  expenses = 0;
  expenseDisplay.textContent = expenses;
  document.querySelector('.error-message-expenses').style.display = 'flex';
  document.querySelector('.expense-cost--input').style.backgroundColor = 'red';
};

const removeMessages = () => {
  document.querySelector('.error-message-expenses').style.display = '';
  document.querySelector('.expense-cost--input').style.backgroundColor = '';
};

// inserting HTML

const insertHTML = (expenseName, expenseCost) => {
  const htmlForName = `
		<li class="expense-name-list">${expenseName}</li>

	`;

  expenseNameDisplayList.innerHTML += htmlForName;

  const htmlForCost = `
		<li class="expense-cost-list">${expenseCost}
		<span class="material-icons delete">delete</span>
		</li>
	`;

  expenseCostDisplayList.innerHTML += htmlForCost;
};

const appLogic = function () {
  const budgetValue = document.querySelector('.budget-input').value;
  const expenseName = document.querySelector('.expense-name--input').value;
  const expenseCost = document.querySelector('.expense-cost--input').value;
  const expenseCostInput = document.querySelector('.expense-cost--input');
  let budgetReset = finalBudget;

  budget = +budgetValue;
  expenses = +expenseCost;
  finalExpenses = expenses > 0 ? finalExpenses + expenses : finalExpenses + 0;

  if (budget > 0) {
    removeMessages();
    finalBudget = budget;
    finalBalance = finalBudget;
    expenseDisplay.textContent = finalExpenses;
    budgetDisplay.textContent = budget;
    balanceDisplay.textContent = finalBalance;
    document.querySelector('.budget-input').value = '';
  } else if (finalBudget < 0 && budget < 0 && budget === 0) errorBudget();

  if (expenses > 0 && finalBudget > 0) {
    removeMessages();
    expensesArray.push(expenses);
    insertHTML(expenseName, expenseCost);
    document.querySelector('.budget-input').value = '';
    document.querySelector('.expense-name--input').value = '';
    document.querySelector('.expense-cost--input').value = '';
    finalBalance -= expenses;
    expenseDisplay.textContent = finalExpenses;
    balanceDisplay.textContent = finalBalance;

    document.querySelector('.expense-name--input').focus();
  } else if (finalBudget > 0 && expenses < 0) errorExpenses();
  else if (finalBudget !== budgetReset) {
    finalBudget = 0;
    finalExpenses = 0;
    finalBalance = 0;
    finalBudget = budget;
    finalBalance = finalBudget;
    expenseDisplay.textContent = finalExpenses;
    budgetDisplay.textContent = budget;
    balanceDisplay.textContent = finalBalance;

    expenseNameDisplayList.innerHTML = '';
    expenseCostDisplayList.innerHTML = '';
  }
};

const deleteExpense = () => {
  document.querySelector('.expense-name-list').remove();
  document.querySelector('.expense-cost-list').remove();
  let lastExpense = expensesArray.pop(-1);
  finalExpenses -= +lastExpense;
  finalBalance += +lastExpense;
  expenseDisplay.textContent = finalExpenses;
  balanceDisplay.textContent = finalBalance;
};

// event listeners

expenseCostDisplayList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    deleteExpense();
  }
});

enterBudgetBtn.addEventListener('click', function (e) {
  e.preventDefault();
  appLogic();
});

enterExpenseBtn.addEventListener('click', function (e) {
  e.preventDefault();
  appLogic();
});

fetch('https://mealrush-recipe-api.herokuapp.com/recipes/')
  .then(response => response.json())
  .then(data => console.log(data));
