document.addEventListener('DOMContentLoaded', function () {
    var addressForm = document.getElementById('new_address');

    addressForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Check if all fields in the address form are filled
        if (isAddressFormValid()) {
            // If all fields are filled, redirect to invoice.html
            window.location.href = 'invoice.html';
        } else {
            // If any field is empty, display an alert
            alert('Please fill in all address fields');
        }
    });

    function isAddressFormValid() {
        var inputs = addressForm.querySelectorAll('input, select');

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                return false; // If any field is empty, return false
            }
        }

        return true; // All fields are filled, return true
    }
});
