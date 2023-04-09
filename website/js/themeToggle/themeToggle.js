$(document).ready(function () {
    $("#moon").click(function () {
        $("body").addClass("day");
        $("body").removeClass("night");
    });
    $("#sun").click(function () {
        $("body").removeClass("day");
        $("body").addClass("night");
    });
});
