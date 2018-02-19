// Variables
var $prev = $('#prev');
var $next = $('#next');
var $dot = $('#dot');
var $dotClass = $('.dot');
var $mySlides = $('.mySlides');
var $templateDoc = `<span class="dot"></span>`;


// Thumbnail controls dinamics
$mySlides.each(function(ev){
  $dot.append($templateDoc)
})

// Next/previous controls
$prev.click(function(){
  showSlides(slideIndex += -1)
})

$next.click(function(){
  showSlides(slideIndex += 1);
})

/*
<span class="dot" onclick="currentSlide(1)"></span> 
<span class="dot" onclick="currentSlide(2)"></span> 
<span class="dot" onclick="currentSlide(3)"></span>
*/

var slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";

}





// Reproducción automática
/*setInterval(function(){
  slideIndex++
  showSlides(slideIndex);
}, 7000);*/