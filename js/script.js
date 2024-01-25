function calculateInterest() {
    // Get user inputs
    var principal = parseFloat(document.getElementById('principal').value);
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    // Calculate the time difference in months and days
    var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth() + 1;
    months += endDate.getMonth() + 1;

    var days = endDate.getDate() - startDate.getDate();

    // Adjust for days
    if (days < 0) {
        months--;
        days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    }

    // Calculate interest
    var rate = 2; // Assuming rate is 2 rupees for every 100 rupees
    var interest = (principal * rate * (months + days / 30.0)) / 100;

    // Calculate total amount
    var totalAmount = principal + interest;

    // Display results
    document.getElementById('result').innerHTML =
        `<p>Months: ${months}</p>
         <p>Days: ${days}</p>
         <p>Interest Amount: ${interest.toFixed(2)}</p>
         <p>Total Amount: ${totalAmount.toFixed(2)}</p>`;
}
function isValidDate(date) {
    return !isNaN(date.getTime());
}

function calculateInterest() {
    // Get user inputs
    var principalInput = document.getElementById('principal');
    var startDateInput = document.getElementById('startDate');
    var endDateInput = document.getElementById('endDate');

    // Check for empty values
    if (!principalInput.value.trim() || !startDateInput.value || !endDateInput.value) {
        alert('Please fill in all required fields.');
        return;
    }

    var principal = parseFloat(principalInput.value);
    var startDate = new Date(startDateInput.value);
    var endDate = new Date(endDateInput.value);

    // Input validation
    if (isNaN(principal) || principal < 0) {
        alert('Please enter a valid non-negative principal amount.');
        return;
    }

    if (!isValidDate(startDate) || !isValidDate(endDate)) {
        alert('Please enter valid start and end dates.');
        return;
    }

    if (startDate >= endDate) {
        alert('End date must be greater than the start date.');
        return;
    }

    // Calculate the time difference in months and days
    var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth() + 1;
    months += endDate.getMonth() + 1;

    var days = endDate.getDate() - startDate.getDate();

    // Adjust for days
    if (days < 0) {
        months--;
        days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    }

    // Calculate interest
    var rate = 2; // Assuming rate is 2 rupees for every 100 rupees
    var interest = (principal * rate * (months + days / 30.0)) / 100;

    // Calculate total amount
    var totalAmount = principal + interest;

    // Display results
    document.getElementById('result').innerHTML =
        `<p>Months: ${months}</p>
         <p>Days: ${days}</p>
         <p>Interest Amount: ${interest.toFixed(2)}</p>
         <p>Total Amount: ${totalAmount.toFixed(2)}</p>`;
}