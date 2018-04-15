var taglineColor = "yellow";
var title1 = "Eastern European Food";
var title3 = "the Best food ever";

// document.getElementsByClassName("tagline")[0].innerHTML = title1 + " - " +title3; 
// document.getElementsByClassName("tagline")[0].style.color = taglineColor;

// $("div.tagline").on("mouseover", function() {
// $(this).css("color", "grey");
// });
// $("div.tagline").on("mouseout", function() {
// $(this).css("color", "goldenrod");
// });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (
        i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (
        i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

 