'use strict';

let balanceEl = document.getElementById('balance');
let expensesEl = document.getElementById('expenses');
let inputAmount = document.getElementById('inputAmount');
const inputDesc = document.getElementById('inputDesc');
const submitEl = document.getElementById('submit');
const tracker__history = document.getElementById('tracker__history');

let balanceAmount = 0;
let expensesAmount = 0;

submitEl.addEventListener('click', () => {
  if (!inputDesc.value || inputAmount.value === '') {
    alert('Please enter value.');
  } else {
    balanceAmount += Number(inputAmount.value);
    balanceEl.innerHTML = `₱ ${balanceAmount}`;

    tracker__history.innerHTML += `<div class="history">
        <p>${inputDesc.value}</p>
        <button class="deleteEl" type="button">Delete</button>
      </div>`;

    const deleteEl = document.querySelectorAll('.deleteEl');
    for (let i = 0; i < deleteEl.length; i++) {
      deleteEl[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
  inputDesc.value = '';
  inputAmount.value = '';
});

//add features to this is can

// fix balance when clicking the delete button
// and it should be go to expenses element all of the expenses
