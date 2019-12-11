$(document).ready(function () {
    $("#design").hide();
    $(".designtoggle0 , .designtoggle1").click(function () {
        $("#design").toggle();
        $(".designtoggle0").hide();
    });
    $(".designtoggle1").click(function () {
        $(".designtoggle0").show();
        $(".designtoggle1").hide();
    });
    $("#development").hide();
    $(".development-image, .development-image1").click(function () {
        $("#development").toggle();
        $(".development-image").hide();
    });
    $(".development-image1").click(function () {
        $(".development-image").show();
        $(".development-image1").hide();
    });

    $("#product").hide();
    $(".product-image1, .product1").click(function () {
        $("#product").toggle();
        $(".product-image1").hide();
    });
    $(".product1").click(function () {
        $(".product-image1").show();
        $(".product1").hide();
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
        if ($("input#name").val() || $("input#email").val()) {
            alert("Hey " + name + ", your message has been received. Thank you for reaching out to us.");
        } 
        else if(name=="" && email==""){
            alert("Please input your details")
        }
        else {
            alert("Make sure you provide the correct details!"); 
        }
     
    });

});
