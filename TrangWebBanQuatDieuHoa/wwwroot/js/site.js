themoi = (function (value) {
    if (value == 1) {
        $("#quathoinuoc").show();
        $("#kieumay").hide();
        $("#maylocnuoc").hide();
        $("#binhnonglanh").hide();
    } else if (value == 2) {
        $("#quathoinuoc").hide();
        $("#kieumay").show();
        $("#maylocnuoc").show();
        $("#binhnonglanh").hide();
    } else if (value == 3) {
        $("#quathoinuoc").hide();
        $("#kieumay").show();
        $("#binhnonglanh").show();
        $("#maylocnuoc").hide();
    } else {
        $("#quathoinuoc").hide();
        $("#kieumay").hide();
        $("#binhnonglanh").hide();
        $("#maylocnuoc").hide();
    }
})

$(document).ready(function () {
    $("#quathoinuoc").hide();
    $("#binhnonglanh").hide();
    $("#maylocnuoc").hide();
    $("#kieumay").hide();
});

