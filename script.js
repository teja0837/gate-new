function validateLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    let username = document.getElementById("kyasaswini253@gmail.com").value;
    let password = document.getElementById("Yashu@123098").value;
    let captcha = document.getElementById("2").value;
    let errorMessage = document.getElementById("error-message");

    // Correct login details
    const validUsername = "kyasaswini253@gmail.com";
    const validPassword = "Yashu@123098";
    const correctCaptcha = "2"; // 6 - 4 = 2

    if (username === validUsername && password === validPassword && captcha === correctCaptcha) {
        alert("Login Successful!"); // Show success alert
        window.location.href = "image.html"; // Redirect to image.html
    } else {
        errorMessage.textContent = "❌ Invalid credentials or captcha!";
        errorMessage.style.color = "red";
    }
}

