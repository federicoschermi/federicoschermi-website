var countDownDate = new Date("Sept 14, 2020 08:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = now - countDownDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML =
        days +
        " days, " +
        hours +
        " hour" +
        (hours === 1 ? "" : "s") +
        ", " +
        minutes +
        " minute" +
        (minutes === 1 ? "" : "s") +
        ", and " +
        seconds +
        " second" +
        (seconds === 1 ? "" : "s");

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "year";
    }
}, 1000);
