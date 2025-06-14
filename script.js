import { renderFrameworks, renderProyectos, renderEstudios, renderHabilidades } from './render.js';

renderFrameworks();
renderProyectos();
renderEstudios();
renderHabilidades();

// Menú hamburguesa resp.
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');

  if (!mobileMenu.classList.contains('hidden')) {
    // menú abierto: escuchamos clics fuera
    document.addEventListener('click', outsideClickListener);
  } else {
    // menú cerrado: quitamos el listener
    document.removeEventListener('click', outsideClickListener);
  }
}

function outsideClickListener(event) {
  if (
    !mobileMenu.contains(event.target) && 
    !menuBtn.contains(event.target)
  ) {
    // clic fuera -> ocultar menú y remover listener
    mobileMenu.classList.add('hidden');
    document.removeEventListener('click', outsideClickListener);
  }
}

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // evita que el click suba y cierre el menú
  toggleMenu();
});
