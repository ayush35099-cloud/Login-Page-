const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        message.textContent = "Please fill all fields";
        message.style.color = "red";
    } 
    else if (email === "admin@gmail.com" && password === "12345") {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } 
    else {
        message.textContent = "Invalid email or password";
        message.style.color = "red";
    }
});