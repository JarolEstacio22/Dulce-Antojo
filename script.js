/* ============================================================
   DULCE ANTOJO - SCRIPT DE INTERACCIÓN
   Enfocado en UI/UX y navegación institucional
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú Móvil (Hamburguesa)
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('activo');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('activo');
      });
    });
  }

  // 2. Cambiar sombra del Header al hacer scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Animaciones de aparición (Fade-up) al hacer scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.fade-up');
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });

  // 4. Marcar enlace activo en el menú de navegación
  const secciones = document.querySelectorAll('section[id]');
  const enlacesNav = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let seccionActual = '';
    
    secciones.forEach(seccion => {
      const seccionTop = seccion.offsetTop;
      if (window.scrollY >= (seccionTop - 150)) {
        seccionActual = seccion.getAttribute('id');
      }
    });

    enlacesNav.forEach(enlace => {
      enlace.classList.remove('activo');
      if (enlace.getAttribute('href') === `#${seccionActual}`) {
        enlace.classList.add('activo');
      }
    });
  });
});