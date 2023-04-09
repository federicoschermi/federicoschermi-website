document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});

function checkPassword() {
    var password = document.getElementById("password").value;
    var correctPassword = "6969"; // Inserisci qui la password corretta

    if (password === correctPassword) {
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "main.html";
    } else {
        alert("Password errata, riprova.");
    }
}
