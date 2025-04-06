// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    const apartmentNumber = document.getElementById('apartmentNumber').value.trim();
    const password = document.getElementById('password').value;

    // Simple validation logic
    if (apartmentNumber === "" || password === "") {
        document.getElementById('message').innerText = "Both fields are required!";
    } else {
        // Simulating login success
        document.getElementById('message').innerText = "Login successful!";
        document.getElementById('message').style.color = "green";

        // In real-world applications, you'd send the data to the server here
        console.log(`Apartment Number: ${apartmentNumber}, Password: ${password}`);
    }
});