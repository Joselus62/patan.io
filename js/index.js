let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function validateForm() {
 
  let x = document.forms["miFormulario"]["nombre"].value;
  if (x == "") {
    alert("Por Favor, debe Ingresar su Nombre");
    return false;
  } 
  let y = document.forms["miFormulario"]["apellido"].value;
  if (y == "") {
    alert("Por Favor,debe Ingresar su Apellido");
    return false;
  } 
  let z = document.forms["miFormulario"]["email"].value;
  if (z == "") {
    alert("Por Favor,debe Ingresar su Correo Electrónico");
    return false;
  } 
}  