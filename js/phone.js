document.getElementById("minusBtn1").addEventListener("click", function(){
    const newPhoneNumber = updatePhoneNumber(false);
    pricePhoneUpdate(newPhoneNumber);
    subTotal();
});

document.getElementById("plusBtn1").addEventListener("click", function(){
    const newPhoneNumber = updatePhoneNumber(true);
    pricePhoneUpdate(newPhoneNumber);
    subTotal();
});

document.getElementById("removeItem1").addEventListener("click", function(event){
    const removeItem = document.getElementById("removeItem1");
    const parentSection = removeItem.parentNode.parentNode.parentNode;
    parentSection.remove();
})

