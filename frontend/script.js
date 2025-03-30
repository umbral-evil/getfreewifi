document.getElementById("payWithPayPal").addEventListener("click", function () {
    window.location.href = "https://www.paypal.com/buy-now-link"; // Replace with actual PayPal link
});

// Authentication logic
const authForm = document.getElementById("authForm");
authForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple authentication simulation (replace with backend logic)
    if (email && password) {
        alert("Login/Signup successful (Demo)");
    } else {
        alert("Please enter valid credentials");
    }
});

// contact us submission
// Contact Us Form Submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
        alert("Message sent successfully");
    } else {
        alert("Failed to send message");
    }
});
