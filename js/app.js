onscroll=function(){
    var sc=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
    if (screen.width < 991.98) {
      if(sc>1320){
        document.getElementById('btn-2002D').setAttribute('class','text-amarillo btn-tiempo-historia');
        document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-naranja');
        document.getElementById('btn-2008D').setAttribute('class','text-azul btn-tiempo-historia');
        document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-azul');
        document.getElementById('btn-hoyD').setAttribute('class','text-azul btn-tiempo-historia');
        if(sc>2228){
          document.getElementById('btn-2002D').setAttribute('class','text-amarillo btn-tiempo-historia');
          document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-naranja');
          document.getElementById('btn-2008D').setAttribute('class','text-amarillo btn-tiempo-historia');
          document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-naranja');
          document.getElementById('btn-hoyD').setAttribute('class','text-azul btn-tiempo-historia');
          if(sc>3194){
            document.getElementById('btn-2002D').setAttribute('class','text-amarillo btn-tiempo-historia');
            document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-naranja');
            document.getElementById('btn-2008D').setAttribute('class','text-amarillo btn-tiempo-historia');
            document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-naranja');
            document.getElementById('btn-hoyD').setAttribute('class','text-amarillo btn-tiempo-historia');
          }
        }
      }
      else if(sc<1320){
        document.getElementById('btn-2002D').setAttribute('class','text-azul btn-tiempo-historia');
        document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-azul');
        document.getElementById('btn-2008D').setAttribute('class','text-azul btn-tiempo-historia');
        document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-azul');
        document.getElementById('btn-hoyD').setAttribute('class','text-azul btn-tiempo-historia');
      }
    } else if (screen.width < 1440) {
      if(sc>480){
        document.getElementById('btn-2002D').setAttribute('class','text-amarillo btn-tiempo-historia');
        document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-naranja');
        document.getElementById('btn-2008D').setAttribute('class','text-azul btn-tiempo-historia');
        document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-azul');
        document.getElementById('btn-hoyD').setAttribute('class','text-azul btn-tiempo-historia');
        if(sc>1280){
          document.getElementById('btn-2002D').setAttribute('class','text-amarillo btn-tiempo-historia');
          document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-naranja');
          document.getElementById('btn-2008D').setAttribute('class','text-amarillo btn-tiempo-historia');
          document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-naranja');
          document.getElementById('btn-hoyD').setAttribute('class','text-azul btn-tiempo-historia');
          if(sc>1880){
            document.getElementById('btn-2002D').setAttribute('class','text-amarillo btn-tiempo-historia');
            document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-naranja');
            document.getElementById('btn-2008D').setAttribute('class','text-amarillo btn-tiempo-historia');
            document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-naranja');
            document.getElementById('btn-hoyD').setAttribute('class','text-amarillo btn-tiempo-historia');
          }
        }
      }
      else if(sc<480){
        document.getElementById('btn-2002D').setAttribute('class','text-azul btn-tiempo-historia');
        document.getElementById('line-2002D').setAttribute('class','mt-0 mb-0 linea-azul');
        document.getElementById('btn-2008D').setAttribute('class','text-azul btn-tiempo-historia');
        document.getElementById('line-2008D').setAttribute('class','mt-0 mb-0 linea-azul');
        document.getElementById('btn-hoyD').setAttribute('class','text-azul btn-tiempo-historia');
      }
    }
}
/*------------------------------------------------------------------------------------*/
function showMenu() {
  var election = event.target;
  if (election === spanMenu) {
    document.getElementById('list-menu').hidden = false;
    document.getElementById('spanMenu2').hidden = false;
    document.getElementById('spanMenu').hidden = true;
  }
}

function closeMenu() {
  var election = event.target;
  if (election === spanMenu2) {
    document.getElementById('list-menu').hidden = true;
    document.getElementById('spanMenu2').hidden = true;
    document.getElementById('spanMenu').hidden = false;
  }
}

document.getElementById('spanMenu').addEventListener('click', showMenu);
document.getElementById('spanMenu2').addEventListener('click', closeMenu);

// Select
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

var buttonTooltip = document.getElementById("shareFacebook");
var buttonTooltip2 = document.getElementById("shareFacebook2");
var menuFacebook = document.getElementById("menuFacebook");
var buttonTooltipm = document.getElementById("shareFacebookm");
var buttonTooltip2m = document.getElementById("shareFacebook2m");
var menuFacebookm = document.getElementById("menuFacebookm");

function showTooltip() {
  menuFacebook.hidden = false;
  buttonTooltip2.hidden = false;
  buttonTooltip.hidden = true;
}

function closeTooltip() {
  menuFacebook.hidden = true;
  buttonTooltip2.hidden = true;
  buttonTooltip.hidden = false;
}

function showTooltipm() {
  menuFacebookm.hidden = false;
  buttonTooltip2m.hidden = false;
  buttonTooltipm.hidden = true;
}

function closeTooltipm() {
  menuFacebookm.hidden = true;
  buttonTooltip2m.hidden = true;
  buttonTooltipm.hidden = false;
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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
