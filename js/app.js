var spanMenu = document.getElementById('spanMenu');
var spanMenu2 = document.getElementById('spanMenu2');
var menu = document.getElementById('list-menu');

var showMenu = function() {
  var election = event.target;
  if (election === spanMenu) {
    menu.hidden = false;
    spanMenu2.hidden = false;
    spanMenu.hidden = true;
  }
}

var closeMenu = function() {
  var election = event.target;
  if ( election === spanMenu2) {
    menu.hidden = true;
    spanMenu2.hidden = true;
    spanMenu.hidden = false;
  }
}


// Select
spanMenu.addEventListener('click', showMenu);
spanMenu2.addEventListener('click', closeMenu);

var spanMenu = document.getElementById('spanMenu');
var spanMenu2 = document.getElementById('spanMenu2');
var menu = document.getElementById('list-menu');

var showMenu = function() {
  var election = event.target;
  if (election === spanMenu) {
    menu.hidden = false;
    spanMenu2.hidden = false;
    spanMenu.hidden = true;
  }
}

var closeMenu = function() {
  var election = event.target;
  if ( election === spanMenu2) {
    menu.hidden = true;
    spanMenu2.hidden = true;
    spanMenu.hidden = false;
  }
}


// Select
spanMenu.addEventListener('click', showMenu);
spanMenu2.addEventListener('click', closeMenu);

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.setAttribute("class", "linebajo");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

// End select

function timeline() {
  document.getElementById('btn-2002').setAttribute('class','text-azul btn-tiempo-historia');
  document.getElementById('line-2002').setAttribute('class','mt-0 mb-0 linea-azul');
  document.getElementById('btn-2008').setAttribute('class','text-azul btn-tiempo-historia');
  document.getElementById('line-2008').setAttribute('class','mt-0 mb-0 linea-azul');
  document.getElementById('btn-hoy').setAttribute('class','text-azul btn-tiempo-historia');
  document.getElementById("historia-1960").style.display = "block";
  document.getElementById("historia-2002").style.display = "none";
  document.getElementById("historia-2008").style.display = "none";
  document.getElementById("historia-hoy").style.display = "none";
  document.getElementById("historia-hoy2").style.display = "none";
  document.getElementById("historia-hoy3").style.display = "none";
}

function timeline1() {
  document.getElementById('btn-2002').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById('line-2002').setAttribute('class','mt-0 mb-0 linea-naranja');
  document.getElementById('btn-2008').setAttribute('class','text-azul btn-tiempo-historia');
  document.getElementById('line-2008').setAttribute('class','mt-0 mb-0 linea-azul');
  document.getElementById('btn-hoy').setAttribute('class','text-azul btn-tiempo-historia');
  document.getElementById("historia-1960").style.display = "none";
  document.getElementById("historia-2002").style.display = "block";
  document.getElementById("historia-2008").style.display = "none";
  document.getElementById("historia-hoy").style.display = "none";
  document.getElementById("historia-hoy2").style.display = "none";
  document.getElementById("historia-hoy3").style.display = "none";
}

function timeline2() {
  document.getElementById('btn-2002').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById('line-2002').setAttribute('class','mt-0 mb-0 linea-naranja');
  document.getElementById('btn-2008').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById('line-2008').setAttribute('class','mt-0 mb-0 linea-naranja');
  document.getElementById('btn-hoy').setAttribute('class','text-azul btn-tiempo-historia');
  document.getElementById("historia-1960").style.display = "none";
  document.getElementById("historia-2002").style.display = "none";
  document.getElementById("historia-2008").style.display = "block";
  document.getElementById("historia-hoy").style.display = "none";
  document.getElementById("historia-hoy2").style.display = "none";
  document.getElementById("historia-hoy3").style.display = "none";
}

function timeline3() {
  document.getElementById('btn-2002').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById('line-2002').setAttribute('class','mt-0 mb-0 linea-naranja');
  document.getElementById('btn-2008').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById('line-2008').setAttribute('class','mt-0 mb-0 linea-naranja');
  document.getElementById('btn-hoy').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById("historia-1960").style.display = "none";
  document.getElementById("historia-2002").style.display = "none";
  document.getElementById("historia-2008").style.display = "none";
  document.getElementById("historia-hoy").style.display = "block";
  document.getElementById("historia-hoy2").style.display = "block";
  document.getElementById("historia-hoy3").style.display = "block";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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

function milnove() {
  location.href='#historia--1960--desktop';
  document.getElementById('btn-2002D').setAttribute('class','text-azul btn-tiempo-historia');
  document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-azul');
  document.getElementById('btn-2008D').setAttribute('class','text-azul btn-tiempo-historia');
  document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-azul');
  document.getElementById('btn-hoyD').setAttribute('class','text-azul btn-tiempo-historia');
}

function dosmildos() {
  location.href='#historia--2002--desktop';
  document.getElementById('btn-2002D').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-naranja');
  document.getElementById('btn-2008D').setAttribute('class','text-azul btn-tiempo-historia');
  document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-azul');
  document.getElementById('btn-hoyD').setAttribute('class','text-azul btn-tiempo-historia');
}

function dosmilocho() {
  location.href='#historia--2008--desktop';
  document.getElementById('btn-2002D').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-naranja');
  document.getElementById('btn-2008D').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-naranja');
  document.getElementById('btn-hoyD').setAttribute('class','text-azul btn-tiempo-historia');
}

function hoyActual() {
  location.href='#historia--hoy--desktop';
  document.getElementById('btn-2002D').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-naranja');
  document.getElementById('btn-2008D').setAttribute('class','text-amarillo btn-tiempo-historia');
  document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-naranja');
  document.getElementById('btn-hoyD').setAttribute('class','text-amarillo btn-tiempo-historia');
}

function chesseAwardOne() {
  document.getElementById('adoberAwards').hidden = false;
  document.getElementById('adoberAwardsText').hidden = false;
  document.getElementById('bestHispanicAwards').hidden = true;
  document.getElementById('bestHispanicAwardsText').hidden = true;
  document.getElementById('oaxacAwards').hidden = true;
  document.getElementById('oaxacAwardsText').hidden = true;
  document.getElementById('panelAwards').hidden = true;
  document.getElementById('panelAwardsText').hidden = true;
  document.getElementById('bestHispanicAwardsNow').hidden = true;
  document.getElementById('bestHispanicAwardsNowText').hidden = true;
  document.getElementById('manchegAwards').hidden = true;
  document.getElementById('manchegAwardsText').hidden = true;
  document.getElementById('anejoAwards').hidden = true;
  document.getElementById('anejoAwardsText').hidden = true;
  document.getElementById('manchegAwardsPlata').hidden = true;
  document.getElementById('manchegAwardsPlataText').hidden = true;
  document.getElementById('cheddarAnejAwards').hidden = true;
  document.getElementById('cheddarAnejAwardsText').hidden = true;
  document.getElementById('anejoBestAwards').hidden = true;
  document.getElementById('anejoBestAwardsText').hidden = true;
}

function chesseAwardTwo() {
  document.getElementById('adoberAwards').hidden = true;
  document.getElementById('adoberAwardsText').hidden = true;
  document.getElementById('bestHispanicAwards').hidden = false;
  document.getElementById('bestHispanicAwardsText').hidden = false;
  document.getElementById('oaxacAwards').hidden = true;
  document.getElementById('oaxacAwardsText').hidden = true;
  document.getElementById('panelAwards').hidden = true;
  document.getElementById('panelAwardsText').hidden = true;
  document.getElementById('bestHispanicAwardsNow').hidden = true;
  document.getElementById('bestHispanicAwardsNowText').hidden = true;
  document.getElementById('manchegAwards').hidden = true;
  document.getElementById('manchegAwardsText').hidden = true;
  document.getElementById('anejoAwards').hidden = true;
  document.getElementById('anejoAwardsText').hidden = true;
  document.getElementById('manchegAwardsPlata').hidden = true;
  document.getElementById('manchegAwardsPlataText').hidden = true;
  document.getElementById('cheddarAnejAwards').hidden = true;
  document.getElementById('cheddarAnejAwardsText').hidden = true;
  document.getElementById('anejoBestAwards').hidden = true;
  document.getElementById('anejoBestAwardsText').hidden = true;
}

function chesseAwardThree() {
  document.getElementById('adoberAwards').hidden = true;
  document.getElementById('adoberAwardsText').hidden = true;
  document.getElementById('bestHispanicAwards').hidden = true;
  document.getElementById('bestHispanicAwardsText').hidden = true;
  document.getElementById('oaxacAwards').hidden = false;
  document.getElementById('oaxacAwardsText').hidden = false;
  document.getElementById('panelAwards').hidden = true;
  document.getElementById('panelAwardsText').hidden = true;
  document.getElementById('bestHispanicAwardsNow').hidden = true;
  document.getElementById('bestHispanicAwardsNowText').hidden = true;
  document.getElementById('manchegAwards').hidden = true;
  document.getElementById('manchegAwardsText').hidden = true;
  document.getElementById('anejoAwards').hidden = true;
  document.getElementById('anejoAwardsText').hidden = true;
  document.getElementById('manchegAwardsPlata').hidden = true;
  document.getElementById('manchegAwardsPlataText').hidden = true;
  document.getElementById('cheddarAnejAwards').hidden = true;
  document.getElementById('cheddarAnejAwardsText').hidden = true;
  document.getElementById('anejoBestAwards').hidden = true;
  document.getElementById('anejoBestAwardsText').hidden = true;
}

function chesseAwardFour() {
  document.getElementById('adoberAwards').hidden = true;
  document.getElementById('adoberAwardsText').hidden = true;
  document.getElementById('bestHispanicAwards').hidden = true;
  document.getElementById('bestHispanicAwardsText').hidden = true;
  document.getElementById('oaxacAwards').hidden = true;
  document.getElementById('oaxacAwardsText').hidden = true;
  document.getElementById('panelAwards').hidden = false;
  document.getElementById('panelAwardsText').hidden = false;
  document.getElementById('bestHispanicAwardsNow').hidden = true;
  document.getElementById('bestHispanicAwardsNowText').hidden = true;
  document.getElementById('manchegAwards').hidden = true;
  document.getElementById('manchegAwardsText').hidden = true;
  document.getElementById('anejoAwards').hidden = true;
  document.getElementById('anejoAwardsText').hidden = true;
  document.getElementById('manchegAwardsPlata').hidden = true;
  document.getElementById('manchegAwardsPlataText').hidden = true;
  document.getElementById('cheddarAnejAwards').hidden = true;
  document.getElementById('cheddarAnejAwardsText').hidden = true;
  document.getElementById('anejoBestAwards').hidden = true;
  document.getElementById('anejoBestAwardsText').hidden = true;
}

function chesseAwardFive() {
  document.getElementById('adoberAwards').hidden = true;
  document.getElementById('adoberAwardsText').hidden = true;
  document.getElementById('bestHispanicAwards').hidden = true;
  document.getElementById('bestHispanicAwardsText').hidden = true;
  document.getElementById('oaxacAwards').hidden = true;
  document.getElementById('oaxacAwardsText').hidden = true;
  document.getElementById('panelAwards').hidden = true;
  document.getElementById('panelAwardsText').hidden = true;
  document.getElementById('bestHispanicAwardsNow').hidden = false;
  document.getElementById('bestHispanicAwardsNowText').hidden = false;
  document.getElementById('manchegAwards').hidden = true;
  document.getElementById('manchegAwardsText').hidden = true;
  document.getElementById('anejoAwards').hidden = true;
  document.getElementById('anejoAwardsText').hidden = true;
  document.getElementById('manchegAwardsPlata').hidden = true;
  document.getElementById('manchegAwardsPlataText').hidden = true;
  document.getElementById('cheddarAnejAwards').hidden = true;
  document.getElementById('cheddarAnejAwardsText').hidden = true;
  document.getElementById('anejoBestAwards').hidden = true;
  document.getElementById('anejoBestAwardsText').hidden = true;
}

function chesseAwardSix() {
  document.getElementById('adoberAwards').hidden = true;
  document.getElementById('adoberAwardsText').hidden = true;
  document.getElementById('bestHispanicAwards').hidden = true;
  document.getElementById('bestHispanicAwardsText').hidden = true;
  document.getElementById('oaxacAwards').hidden = true;
  document.getElementById('oaxacAwardsText').hidden = true;
  document.getElementById('panelAwards').hidden = true;
  document.getElementById('panelAwardsText').hidden = true;
  document.getElementById('bestHispanicAwardsNow').hidden = true;
  document.getElementById('bestHispanicAwardsNowText').hidden = true;
  document.getElementById('manchegAwards').hidden = false;
  document.getElementById('manchegAwardsText').hidden = false;
  document.getElementById('anejoAwards').hidden = true;
  document.getElementById('anejoAwardsText').hidden = true;
  document.getElementById('manchegAwardsPlata').hidden = true;
  document.getElementById('manchegAwardsPlataText').hidden = true;
  document.getElementById('cheddarAnejAwards').hidden = true;
  document.getElementById('cheddarAnejAwardsText').hidden = true;
  document.getElementById('anejoBestAwards').hidden = true;
  document.getElementById('anejoBestAwardsText').hidden = true;
}

function chesseAwardSeven() {
  document.getElementById('adoberAwards').hidden = true;
  document.getElementById('adoberAwardsText').hidden = true;
  document.getElementById('bestHispanicAwards').hidden = true;
  document.getElementById('bestHispanicAwardsText').hidden = true;
  document.getElementById('oaxacAwards').hidden = true;
  document.getElementById('oaxacAwardsText').hidden = true;
  document.getElementById('panelAwards').hidden = true;
  document.getElementById('panelAwardsText').hidden = true;
  document.getElementById('bestHispanicAwardsNow').hidden = true;
  document.getElementById('bestHispanicAwardsNowText').hidden = true;
  document.getElementById('manchegAwards').hidden = true;
  document.getElementById('manchegAwardsText').hidden = true;
  document.getElementById('anejoAwards').hidden = false;
  document.getElementById('anejoAwardsText').hidden = false;
  document.getElementById('manchegAwardsPlata').hidden = true;
  document.getElementById('manchegAwardsPlataText').hidden = true;
  document.getElementById('cheddarAnejAwards').hidden = true;
  document.getElementById('cheddarAnejAwardsText').hidden = true;
  document.getElementById('anejoBestAwards').hidden = true;
  document.getElementById('anejoBestAwardsText').hidden = true;
}

function chesseAwardEight() {
  document.getElementById('adoberAwards').hidden = true;
  document.getElementById('adoberAwardsText').hidden = true;
  document.getElementById('bestHispanicAwards').hidden = true;
  document.getElementById('bestHispanicAwardsText').hidden = true;
  document.getElementById('oaxacAwards').hidden = true;
  document.getElementById('oaxacAwardsText').hidden = true;
  document.getElementById('panelAwards').hidden = true;
  document.getElementById('panelAwardsText').hidden = true;
  document.getElementById('bestHispanicAwardsNow').hidden = true;
  document.getElementById('bestHispanicAwardsNowText').hidden = true;
  document.getElementById('manchegAwards').hidden = true;
  document.getElementById('manchegAwardsText').hidden = true;
  document.getElementById('anejoAwards').hidden = true;
  document.getElementById('anejoAwardsText').hidden = true;
  document.getElementById('manchegAwardsPlata').hidden = false;
  document.getElementById('manchegAwardsPlataText').hidden = false;
  document.getElementById('cheddarAnejAwards').hidden = true;
  document.getElementById('cheddarAnejAwardsText').hidden = true;
  document.getElementById('anejoBestAwards').hidden = true;
  document.getElementById('anejoBestAwardsText').hidden = true;
}

function chesseAwardNine() {
  document.getElementById('adoberAwards').hidden = true;
  document.getElementById('adoberAwardsText').hidden = true;
  document.getElementById('bestHispanicAwards').hidden = true;
  document.getElementById('bestHispanicAwardsText').hidden = true;
  document.getElementById('oaxacAwards').hidden = true;
  document.getElementById('oaxacAwardsText').hidden = true;
  document.getElementById('panelAwards').hidden = true;
  document.getElementById('panelAwardsText').hidden = true;
  document.getElementById('bestHispanicAwardsNow').hidden = true;
  document.getElementById('bestHispanicAwardsNowText').hidden = true;
  document.getElementById('manchegAwards').hidden = true;
  document.getElementById('manchegAwardsText').hidden = true;
  document.getElementById('anejoAwards').hidden = true;
  document.getElementById('anejoAwardsText').hidden = true;
  document.getElementById('manchegAwardsPlata').hidden = true;
  document.getElementById('manchegAwardsPlataText').hidden = true;
  document.getElementById('cheddarAnejAwards').hidden = false;
  document.getElementById('cheddarAnejAwardsText').hidden = false;
  document.getElementById('anejoBestAwards').hidden = true;
  document.getElementById('anejoBestAwardsText').hidden = true;
}

function chesseAwardTen() {
  document.getElementById('adoberAwards').hidden = true;
  document.getElementById('adoberAwardsText').hidden = true;
  document.getElementById('bestHispanicAwards').hidden = true;
  document.getElementById('bestHispanicAwardsText').hidden = true;
  document.getElementById('oaxacAwards').hidden = true;
  document.getElementById('oaxacAwardsText').hidden = true;
  document.getElementById('panelAwards').hidden = true;
  document.getElementById('panelAwardsText').hidden = true;
  document.getElementById('bestHispanicAwardsNow').hidden = true;
  document.getElementById('bestHispanicAwardsNowText').hidden = true;
  document.getElementById('manchegAwards').hidden = true;
  document.getElementById('manchegAwardsText').hidden = true;
  document.getElementById('anejoAwards').hidden = true;
  document.getElementById('anejoAwardsText').hidden = true;
  document.getElementById('manchegAwardsPlata').hidden = true;
  document.getElementById('manchegAwardsPlataText').hidden = true;
  document.getElementById('cheddarAnejAwards').hidden = true;
  document.getElementById('cheddarAnejAwardsText').hidden = true;
  document.getElementById('anejoBestAwards').hidden = false;
  document.getElementById('anejoBestAwardsText').hidden = false;
}
