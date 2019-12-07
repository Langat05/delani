$(document).ready(function () {
    $("#design-image").click(function () {
        $("#design-image").hide();
        $("#design").show();
    });
    $("#design").click(function () {
        $("#design").show();
        $("#design-image").show();
    });

    $("#development-image").click(function () {
        $("#development-image").hide();
        $("#development").show();
    });
    $("#development").click(function () {
        $("#development").show();
        $("#development-image").show();
    });

    $("#product-image").click(function () {
        $("#product-image").hide();
        $("#product").show();
    });
    $("#product").click(function () {
        $("#product").show();
        $("#product-image").show();
    });
});


