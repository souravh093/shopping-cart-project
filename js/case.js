document.getElementById("minusBtn2").addEventListener("click", function() {
    const newCaseNumber = updateCaseNumber(false);
    priceCaseUpdate(newCaseNumber);
    subTotal();
});


document.getElementById("plusBtn2").addEventListener("click", function() {
    const newCaseNumber = updateCaseNumber(true);
    priceCaseUpdate(newCaseNumber);
    subTotal();
});


