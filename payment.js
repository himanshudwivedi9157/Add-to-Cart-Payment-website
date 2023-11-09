
document.getElementById("form").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
    // If the form is valid, the default form submission will occur
});

function validateForm() {
    const cardName = document.getElementById("card_name").value;
    const cardNumber = document.getElementById("card_number").value;
    const cardCVV = document.getElementById("card_cvv").value;
    const cardDate = document.getElementById("card_date").value;

    if (cardName === "" || cardNumber === "" || cardCVV === "" || cardDate === "") {
        alert("Invaild Detils"); // Display a validation message if any field is empty
        return false;
    }

    // You can add more specific validation logic for card number, CVV, and date if needed.
alert("Payment Successfull")
    return true; // Form is valid
}
