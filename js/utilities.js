function updatePhoneNumber(isIncreases) {
    const quantityInput = document.getElementById("quantity1Input");
    const quantityInputValue = quantityInput.value;
    const quantityInputNumber = parseFloat(quantityInputValue);
    let newPhoneNumber;
    if(isIncreases){
        newPhoneNumber = quantityInputNumber + 1;
    }else {
        newPhoneNumber = quantityInputNumber - 1;
    }

    quantityInput.value = newPhoneNumber;

    return newPhoneNumber;
}


function updateCaseNumber(isIncrease) {
  const quantityInput = document.getElementById("quantity2Input");
  const quantityInputValue = quantityInput.value;
  const quantityInputNumber = parseFloat(quantityInputValue);
  let newCaseNumber;
  if (isIncrease) {
    newCaseNumber = quantityInputNumber + 1;
  } else {
    newCaseNumber = quantityInputNumber - 1;
  }

  quantityInput.value = newCaseNumber;

  return newCaseNumber;
}

function priceCaseUpdate(parameter) {
    const priceCase = document.getElementById("priceCase");
    priceCase.innerText = 59 * parameter;
}

function pricePhoneUpdate(parameters) {
    const pricePhone = document.getElementById("pricePhone");
    pricePhone.innerText = 1219 * parameters;
}

document.getElementById("removeItem2").addEventListener("click", function(event){
    const removeItem = document.getElementById("removeItem2");
    const parentSection = removeItem.parentNode.parentNode.parentNode;
    parentSection.remove();
})

function getTextElementValueId(id) {
  const phoneTotalElement = document.getElementById(id);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseFloat(currentPhoneTotalString);
  return currentPhoneTotal;
}

function setTextElementValueId(id, value) {
  const idValue = document.getElementById(id);
  idValue.innerText = value;
}


function subTotal() {
    const currentPhoneTotal = getTextElementValueId("pricePhone");
    const currentCaseTotal = getTextElementValueId("priceCase");

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueId("subTotal", currentSubTotal);

    // calculate Tax Amount
    const taxAmount = (currentSubTotal * 0.1).toFixed(2);
    const taxAmountNumber = parseFloat(taxAmount); 
    setTextElementValueId("tax", taxAmountNumber);

    const finalAmount = currentSubTotal + taxAmountNumber;
    const totalAmount = document.getElementById("total");
    totalAmount.innerText = finalAmount;
}