$(document).ready(function(){
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
        // Called after the entrance animation is executed.
        }
    })

    $("#email").click(function(){
        $("#subject").css("display", "block");
        $("#message").css("display", "block");
        $("#submit").css("display", "block");
    })

    $("#email-img").click(function(){
        $("#subject").css("display", "block");
        $("#message").css("display", "block");
        $("#submit").css("display", "block");
    })

    $("#email-img-two").click(function(){
        $("#subject").css("display", "block");
        $("#message").css("display", "block");
        $("#submit").css("display", "block");
    })

    $("#submit").click(function(){
        $("#email-success").css("display", "block");
        $("#email").hide();
        $("#subject").hide();
        $("#message").hide();
        $("#submit").hide();
    })


});

var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});