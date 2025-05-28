
const frameworks = [
  { nombre: 'JavaScript', icono: 'logos:javascript' },
  { nombre: 'HTML5', icono: 'logos:html-5' },
  { nombre: 'CSS3', icono: 'logos:css-3' },
  { nombre: 'TailwindCSS', icono: 'logos:tailwindcss-icon' },
  { nombre: 'SASS', icono: 'logos:sass' },
  { nombre: 'React', icono: 'logos:react' },
  { nombre: 'Node.js', icono: 'logos:nodejs-icon' },
];
const habilidades = [
  'Trabajo en equipo',
  'Pensamiento crítico',
  'Gestión del tiempo',
  'Resolución de problemas',
  'Creatividad',
  'Figma',
  'Trello',
  'Moqups',
  'Github',
  'VSCode',
  'Canva'
];

// Datos de los estudios
const estudios = [
    {
      titulo: 'Técnico Superior en Programación - Instituto TECLAB',
      imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_300,f_auto,q_auto/v1748468833/t%C3%ADtulo-Prog_q4bwyo.png', 
      imagenGrande: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/v1748468833/t%C3%ADtulo-Prog_q4bwyo.png'
    },
    {
        titulo: "Certificado de Prácticas Profesionalizante - Instituto TECLAB",
        imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_300,f_auto,q_auto/v1748468832/pP_kwsyqh.jpg', 
        imagenGrande: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/v1748468832/pP_kwsyqh.jpg'
    },
    {
      titulo: 'Desarrollo Web - Coderhouse',
      imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_300,f_auto,q_auto/v1748468829/desarrolloWeb-Coderhouse_nup4ux.png',
      imagenGrande: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/v1748468829/desarrolloWeb-Coderhouse_nup4ux.png'
    },
    {
        titulo: 'Developer - No Country',
        imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_300,f_auto,q_auto/v1748468831/nNo-country_rkswzs.jpg',
        imagenGrande: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/v1748468831/nNo-country_rkswzs.jpg'
    },
    {
        titulo: 'Visualización de Datos - FreeCodeCamp',
        imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_300,f_auto,q_auto/v1748468833/visu_Dat_jjckdf.png',
        imagenGrande: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/v1748468833/visu_Dat_jjckdf.png'
    },
    {
        titulo: 'Diseño Web Responsive - FreeCodeCamp',
        imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_300,f_auto,q_auto/v1748468834/web-responsi_vahjph.png',
        imagenGrande: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/v1748468834/web-responsi_vahjph.png'
    },
    {
        titulo: 'Bibliotecas de Desarrollo Front-end - FreeCodeCamp',
        imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_300,f_auto,q_auto/v1748468829/bibli-desa_front_ihxpmk.png',
        imagenGrande: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/v1748468829/bibli-desa_front_ihxpmk.png'
    },
  ];

// Datos de los proyectos
const proyectos = [
    {
      titulo: 'Web de recetas',
      descripcion: 'Sitio de Recetas realizada en un proyecto de Desarrollo Web.',
      link: 'https://github.com/NadineEscobar/Recetando-SASS',
      imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_600,f_auto,q_auto/v1748468881/receteandoR-Sass_sfoik2.jpg'
    },
    {
      titulo: 'Ruleta personalizada',
      descripcion: 'Ruleta interactiva desarrollada con JS y CSS con animación fluida de giro y detección aleatoria de resultados al deteners',
      link: 'https://github.com/NadineEscobar/Ruleta-Customizable',
      imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_600,f_auto,q_auto/v1748468882/ruleta_aytp1z.png'
    },
    {
        titulo: 'Ta Te Ti',
        descripcion: 'Un simple juego de Ta Te Ti, detección de ganador o empate y diseño interactivo y fácil de usar',
        link: 'https://github.com/NadineEscobar/JuegoDelTaTeTi',
        imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_600,f_auto,q_auto/v1748468883/taTeTi_bwfhqx.png'
    },
    {
        titulo:'E-commerce',
        descripcion: 'Proyecto de práctica de una página web sobre un almacen con sus distintos productos, ofertas, etc. Este proyecto se encuentra en proceso.',
        link: 'https://github.com/NadineEscobar/e-commerce-almacen',
        imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_600,f_auto,q_auto/v1748468879/e-commerce_mri8ai.png'
    },
     {
        titulo: 'Simulador de Ahorros',
        descripcion: 'Proyecto de simulador de ahorros, donde se puede calcular el monto total de ahorro al cabo de un tiempo determinado en pesos y dólares, con un diseño sencillo y fácil de usar.',
        link: 'https://github.com/NadineEscobar/SimuladordeAhorro-ProyectoFinal-Escobar',
        imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_600,f_auto,q_auto/v1748474378/Captura_de_pantalla_28-5-2025_201911_nadineescobar.github.io_iln6r1.jpg'
    },
    {
        titulo: 'Lista de Tareas',
        descripcion: 'Web de una Lista de Tareas pendientes sencillas',
        link: 'https://github.com/NadineEscobar/Tareas-Pendientes-React-ts',
        imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_600,f_auto,q_auto/v1748468880/lista-Tareas_exqdvj.jpg'
    },
    {
        titulo: 'Mi Portafolio',
        descripcion: 'Sitio de mi Portafolio personal',
        link: 'https://github.com/NadineEscobar/MiPortafolio',
        imagen: 'https://res.cloudinary.com/dgy7rqtqn/image/upload/w_600,f_auto,q_auto/v1748474985/Captura_de_pantalla_28-5-2025_202928_127.0.0.1_mvcoag.jpg'
    },
  ];

// Render frameworks
const frameworksList = document.getElementById('frameworks');
frameworks.forEach(fw => {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="inline-flex items-center gap-2">
      <span class="iconify" data-icon="${fw.icono}" data-width="20"></span>${fw.nombre}
    </span>`;
  frameworksList.appendChild(li);
});
const habilidadesList = document.getElementById('habilidades');
habilidades.forEach(hab => {
  const li = document.createElement('li');
  li.textContent = hab;
  habilidadesList.appendChild(li);
});

  
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
      img.className = 'w-32 h-32 rounded-lg cursor-pointer';
      
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
      <div class="relative max-w-3xl max-h-[90vh] bg-white p-4 rounded-lg overflow-auto">
        <img src="${imagen}" alt="Imagen ampliada" class="w-full h-auto rounded-lg">
        <button onclick="closeModal()" class="absolute top-2 right-2 z-10 p-2 text-gray-700 bg-white rounded-full shadow">X</button>
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
  
