// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the BMI form
    var bmiForm = document.getElementById('bmiForm');
    // Add an event listener for form submission
    bmiForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the form values
        var gender = document.getElementById('gender').value;
        var weight = document.getElementById('weight').value;
        var height = document.getElementById('height').value;

        // Validate the form inputs
        if (gender === '' || weight === '' || height === '') {
            alert('Silakan isi semua field!');
            return;
        }

        // Convert height to meters
        var heightInMeters = height / 100;

        // Calculate BMI
        var bmi = weight / (heightInMeters * heightInMeters);

        // Display the result
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = 'BMI: ' + bmi.toFixed(2) + ' (' + getBmiCategory(gender, bmi) + ')';
    });
});

// Function to determine BMI category based on gender and BMI value
function getBmiCategory(gender, bmi) {
    if (gender === 'male') {
        if (bmi < 18.5) {
            return 'Kurus';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'Normal';
        } else if (bmi >= 25 && bmi < 30) {
            return 'Gemuk';
        } else {
            return 'Obesitas';
        }
    } else {
        if (bmi < 17) {
            return 'Kurus';
        } else if (bmi >= 17 && bmi < 23) {
            return 'Normal';
        } else if (bmi >= 23 && bmi < 27) {
            return 'Gemuk';
        } else {
            return 'Obesitas';
        }
    }
}