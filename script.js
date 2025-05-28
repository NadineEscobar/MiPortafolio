// script.js

// Datos simulados, podés modificarlos en el futuro dinámicamente
const frameworks = ['JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'SASS', 'React', 'Node.js'];

// Render frameworks
const frameworksList = document.getElementById('frameworks');
frameworks.forEach(fw => {
  const li = document.createElement('li');
  li.textContent = fw;
  frameworksList.appendChild(li);
});

// Datos de los proyectos
const proyectos = [
    {
      titulo: 'Web de recetas',
      descripcion: 'Sitio de Recetas realizada en un proyecto de Desarrollo Web.',
      link: 'https://github.com/NadineEscobar/Recetando-SASS',
      imagen: './img/proyectos/receteandoR-Sass.jpeg'
    },
    {
      titulo: 'Ruleta personalizada',
      descripcion: 'Ruleta interactiva desarrollada con JS y CSS con animación fluida de giro y detección aleatoria de resultados al deteners',
      link: 'https://github.com/NadineEscobar/Ruleta-Customizable',
      imagen: './img/proyectos/ruleta.png'
    },
    {
        titulo: 'Ta Te Ti',
        descripcion: 'Un simple juego de Ta Te Ti, detección de ganador o empate y diseño interactivo y fácil de usar',
        link: 'https://github.com/NadineEscobar/JuegoDelTaTeTi',
        imagen: './img/proyectos/taTeTi.png'
    },
    {
        titulo:'E-commerce',
        descripcion: 'Proyecto de práctica de una página web sobre un almacen con sus distintos productos, ofertas, etc. Este proyecto se encuentra en proceso.',
        link: 'https://github.com/NadineEscobar/e-commerce-almacen',
        imagen: './img/proyectos/e-commerce.png'
    },
    {
        titulo: 'Lista de Tareas',
        descripcion: 'Web de una Lista de Tareas pendientes sencillas',
        link: 'https://github.com/NadineEscobar/Tareas-Pendientes-React-ts',
        imagen: './img/proyectos/lista-Tareas.jpeg'
    },
    {
        titulo: 'Mi Portafolio',
        descripcion: 'Sitio de mi Portafolio personal',
        link: '',
        imagen: './img/proyectos/'
    },
  ];
  
  // Renderizar los proyectos
  const proyectosDiv = document.getElementById('proyectos');
  proyectos.forEach(proy => {
    const card = document.createElement('div');
    card.className = 'bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg border border-violet-500';
    card.innerHTML = `
      <div class="mb-4">
        <img src="${proy.imagen}" alt="Imagen de ${proy.titulo}" class="w-full h-40 object-cover rounded-lg">
      </div>
      <h3 class="text-xl text-violet-300 font-semibold mb-2">${proy.titulo}</h3>
      <p class="text-gray-300 mb-2">${proy.descripcion}</p>
      <a href="${proy.link}" target="_blank" class="text-violet-400 underline">Ver en GitHub</a>
    `;
    proyectosDiv.appendChild(card);
  });
  
  // Datos de los estudios
const estudios = [
    {
      titulo: 'Técnico Superior en Programación - Instituto TECLAB',
      imagen: './img/certificados/título-Prog.png', 
      imagenGrande: './img/certificados/título-Prog.png'
    },
    {
        titulo: "Certificado de Prácticas Profesionalizante - Instituto TECLAB",
        imagen: './img/certificados/pP.jpeg', 
        imagenGrande: './img/certificados/pP.jpeg'
    },
    {
      titulo: 'Desarrollo Web - Coderhouse',
      imagen: './img/certificados/desarrolloWeb-Coderhouse.png',
      imagenGrande: './img/certificados/desarrolloWeb-Coderhouse.png'
    },
    {
        titulo: 'Developer - No Country',
        imagen: './img/certificados/nNo-country.jpg',
        imagenGrande: './img/certificados/nNo-country.jpg'
    },
    {
        titulo: 'Visualización de Datos - FreeCodeCamp',
        imagen: './img/certificados/visu Dat.png',
        imagenGrande: './img/certificados/visu Dat.png'
    },
    {
        titulo: 'Diseño Web Responsive - FreeCodeCamp',
        imagen: './img/certificados/web-responsi.png',
        imagenGrande: './img/certificados/web-responsi.png'
    },
    {
        titulo: 'Bibliotecas de Desarrollo Front-end - FreeCodeCamp',
        imagen: './img/certificados/bibli-desa front.png',
        imagenGrande: './img/certificados/bibli-desa front.png'
    },
  ];
  
  // Renderizar los estudios
  const estudiosList = document.getElementById('estudios');
  if (estudiosList) {
    estudios.forEach(est => {
      const li = document.createElement('li');
      li.className = 'flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4';
  
      // Imagen de estudio
      const img = document.createElement('img');
      img.src = est.imagen;
      img.alt = `Imagen de ${est.titulo}`;
      img.className = 'w-20 h-20 rounded-lg cursor-pointer';
      
      // Evento al hacer clic en la imagen
      img.addEventListener('click', () => {
        openModal(est.imagenGrande); // Abre el modal con la imagen grande
      });
  
      const text = document.createElement('span');
      text.className = 'text-gray-300';
      text.textContent = est.titulo;
  
      li.appendChild(img);
      li.appendChild(text);
      estudiosList.appendChild(li);
    });
  }
  
  // Función para abrir el modal
  function openModal(imagen) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="relative p-4 bg-white rounded-lg">
        <img src="${imagen}" alt="Imagen ampliada" class="max-w-full max-h-full rounded-lg">
        <button onclick="closeModal()" class="absolute top-0 right-0 p-2 text-gray-700 bg-white rounded-full">X</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  // Función para cerrar el modal
  function closeModal() {
    const modal = document.querySelector('div.fixed');
    modal.remove();
  }
  
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
   mobileMenu.classList.toggle('hidden');
  });
  
