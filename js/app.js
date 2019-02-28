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

spanMenu.addEventListener('click', showMenu);
spanMenu2.addEventListener('click', closeMenu);

function timeline(){
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
      document.getElementById("historia-hoy4").style.display = "none";
}

function timeline1(){
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
      document.getElementById("historia-hoy4").style.display = "none";
}
function timeline2(){
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
      document.getElementById("historia-hoy4").style.display = "none";
}
function timeline3(){
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
      document.getElementById("historia-hoy4").style.display = "block";
}
