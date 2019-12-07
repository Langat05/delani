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

$(document).ready(function () {
    $("#project1").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay").hide();
    });
});
$(document).ready(function () {
    $("#project2").mouseover(function () {
        $("#overlay1").show();
    }).mouseout(function () {
        $("#overlay1").hide();
    });
});
$(document).ready(function () {
    $("#project3").mouseover(function () {
        $("#overlay2").show();
    }).mouseout(function () {
        $("#overlay2").hide();
    });
});
$(document).ready(function () {
    $("#project4").mouseover(function () {
        $("#overlay3").show();
    }).mouseout(function () {
        $("#overlay3").hide();
    });
});

