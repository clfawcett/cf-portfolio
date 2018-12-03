var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("sgSlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(showSlide, 4000);
}


// var slideIndex = 0;
// slideShow();
//
// function slideShow() {
//     var i;
//     var slides = document.getElementsByClassName("sgSlides");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//     }
//     slideIndex++;
//     slides[slideIndex-1].style.display = "block";
//
//     setTimeout(slideShow, 5000);
// }
