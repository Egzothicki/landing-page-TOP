// Get the popup
var popup = document.getElementById("signup-popup");

// Get the button that opens the popup (this would be your sign-up button)
var btn = document.querySelector(".cta-button");

// Get the <span> element that closes the popup
var span = document.querySelector(".close-btn");

// When the user clicks the button, open the popup 
btn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}