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

    /*Portfolio*/

    $("#project1").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay").hide();
    });

    $("#project2").mouseover(function () {
        $("#overlay1").show();
    }).mouseout(function () {
        $("#overlay1").hide();
    });

    $("#project3").mouseover(function () {
        $("#overlay2").show();
    }).mouseout(function () {
        $("#overlay2").hide();
    });
    $("#project4").mouseover(function () {
        $("#overlay3").show();
    }).mouseout(function () {
        $("#overlay3").hide();
    });
    $("#project5").mouseover(function () {
        $("#overlay4").show();
    }).mouseout(function () {
        $("#overlay4").hide();
    });
    $("#project6").mouseover(function () {
        $("#overlay5").show();
    }).mouseout(function () {
        $("#overlay5").hide();
    });
    $("#project7").mouseover(function () {
        $("#overlay6").show();
    }).mouseout(function () {
        $("#overlay6").hide();
    });
    $("#project8").mouseover(function () {
        $("#overlay7").show();
    }).mouseout(function () {
        $("#overlay7").hide();
    });

    $("form#form").submit(function (event) {

        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#comment").val();
        if ($("input#name").val() && $("input#email").val()) {
            alert("Hey " + name + ", your message has been received. Thank you for reaching out to us.");
        } else {
            alert("Make sure you provide the correct details!");
        }

    });

});
