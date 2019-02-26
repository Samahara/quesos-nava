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
