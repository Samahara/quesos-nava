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
}

function timeline1() {
      document.getElementById('btn-2002').setAttribute('class','text-amarillo btn-tiempo-historia');
      document.getElementById('line-2002').setAttribute('class','mt-0 mb-0 linea-naranja');
      document.getElementById('btn-2008').setAttribute('class','text-azul btn-tiempo-historia');
      document.getElementById('line-2008').setAttribute('class','mt-0 mb-0 linea-azul');
      document.getElementById('btn-hoy').setAttribute('class','text-azul btn-tiempo-historia');
}

function timeline2() {
      document.getElementById('btn-2002').setAttribute('class','text-amarillo btn-tiempo-historia');
      document.getElementById('line-2002').setAttribute('class','mt-0 mb-0 linea-naranja');
      document.getElementById('btn-2008').setAttribute('class','text-amarillo btn-tiempo-historia');
      document.getElementById('line-2008').setAttribute('class','mt-0 mb-0 linea-naranja');
      document.getElementById('btn-hoy').setAttribute('class','text-azul btn-tiempo-historia');
}

function timeline3() {
      document.getElementById('btn-2002').setAttribute('class','text-amarillo btn-tiempo-historia');
      document.getElementById('line-2002').setAttribute('class','mt-0 mb-0 linea-naranja');
      document.getElementById('btn-2008').setAttribute('class','text-amarillo btn-tiempo-historia');
      document.getElementById('line-2008').setAttribute('class','mt-0 mb-0 linea-naranja');
      document.getElementById('btn-hoy').setAttribute('class','text-amarillo btn-tiempo-historia');
}
