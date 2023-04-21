$(document).ready(function () {
    $("#moon").click(function () {
        $("body").addClass("day");
        $("body").removeClass("night");

        // Add cursor-light class and remove cursor-dark class
        $("body").addClass("cursor-light");
        $("body").removeClass("cursor-dark");

        // Add link-cursor-light class and remove link-cursor-dark class for all links
        $("a").addClass("link-cursor-light");
        $("a").removeClass("link-cursor-dark");
    });

    $("#sun").click(function () {
        $("body").removeClass("day");
        $("body").addClass("night");

        // Remove cursor-light class and add cursor-dark class
        $("body").removeClass("cursor-light");
        $("body").addClass("cursor-dark");

        // Remove link-cursor-light class and add link-cursor-dark class for all links
        $("a").removeClass("link-cursor-light");
        $("a").addClass("link-cursor-dark");
    });
});
