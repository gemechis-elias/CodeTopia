function show_password(form_id) {
    // function for revealing password data from password field
    var form_instance = document.getElementById(form_id);
    if (form_instance.type === "password") {
        // change the form type to text to reveal the password data
        form_instance.type = "text";
    }
    else {
        form_instance.type = "password";
    }
}
function caps_lock_on(field_id, message_div_id) {
    // display cas lock is on message
    var message = "Caps lock is On.";
    // Get field instance
    var input = document.getElementById(field_id);
    input.addEventListener("keyup", function (event) {
        if (event.getModifiedState("CapsLock")) {
            // display message
            document.getElementById(message_div_id).innerHTML = message;
        }
        else {
            // Hide message
            document.getElementById(message_div_id).innerHTML = "";
        }
    });
}
function copy_to_clipboard(input_id) {
    var input_instance = document.getElementById(input_id);
    input_instance.select();
    input_instance.setSelectionRange(0, 99999); // for mobile devices
    document.execCommand("copy");
    input_instance.clearSelected();
    // Note: The document.execCommand() method is not supported in IE8 and earlier.
}
function disable_btn(btn_id) {
    console.log("hello");
}
function nav_toggler() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar";
    }
}
function navSlide() {
    var toggler = document.querySelector(".toggler");
    var nav = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li");
    toggler.addEventListener("click", function () {
        nav.classList.toggle("nav-active");
        navLinks.forEach(function (link, index) {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = "navLinkFade 0.5s ease forwards " + index / 5 + "s";
            }
        });
        toggler.classList.toggle("toggle");
    });
}
navSlide();
