const supabase = require('../supabase/supabase.js');

document.getElementById("login-button").addEventListener("click", checkPassword);

document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});

async function checkPassword() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    try {
        const {error } = await supabase.auth.signIn({
            email: email,
            password: password
        });

        if (error) {
            throw error;
        }

        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "main.html";
    } catch (error) {
        alert("Authentication failed. Retry.");
        console.error('Error during authentication:', error.message);
    }
}
