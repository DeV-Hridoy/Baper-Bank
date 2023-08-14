// step 1: add  event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step 2: get the deposit amount from the deposite input field
  // for the input field use .value inside the input field

  const depositField = document.getElementById("deposit-field");
  const newDepositeAmountString = depositField.value;
  const newDepositeAmount = parseFloat(newDepositeAmountString);

  depositField.value = '';

  if (isNaN(newDepositeAmount)) {
    alert('Please Provide a Valid number');
    return;
}

  // step 3: get the current deposit total
  // for non input, so use innerText to get the text

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step 4: add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositeAmount;
// set the deposit total

  depositTotalElement.innerText = currentDepositTotal;

//step 5:get balance current total

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step 6: calculate current total balance
const currentTotalBalance = previousBalanceTotal + newDepositeAmount;
// set the balance total
balanceTotalElement.innerText = currentTotalBalance;

  // step 7: clear the deposit field

  
});
