export function checkAuthentication() {
    function checkAuthentication() {
        var isAuthenticated = localStorage.getItem("isAuthenticated");
        if (isAuthenticated !== "true") {
            window.location.href = "../../index.html";
        }
    }
}

document.body.onload = checkAuthentication;