document.getElementById("payWithPayPal").addEventListener("click", function() {
    window.location.href = "https://www.paypal.com/buy-now-link"; // Replace with actual PayPal link
});

// Authentication logic
const authForm = document.getElementById("authForm");
authForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    
    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        alert("Login successful");
    } else {
        alert("Invalid credentials or user not found");
    }
});

// Store Payment Method
async function savePaymentMethod(paymentMethod) {
    const token = localStorage.getItem("token");
    if (!token) {
        alert("Please log in first");
        return;
    }

    const response = await fetch("http://localhost:5000/payment-method", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ email: document.getElementById("email").value, paymentMethod })
    });

    if (response.ok) {
        alert("Payment method saved");
    } else {
        alert("Failed to save payment method");
    }
}

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("contactEmail").value;
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
