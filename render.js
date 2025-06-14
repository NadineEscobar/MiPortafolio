import { frameworks, proyectos, estudios, habilidades } from './data.js';

export function renderFrameworks() {
  const frameworksList = document.getElementById('frameworks');
  frameworks.forEach(fw => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="inline-flex items-center gap-2">
        <span class="iconify" data-icon="${fw.icono}" data-width="20"></span>${fw.nombre}
      </span>`;
    frameworksList.appendChild(li);
  });
}

export function renderHabilidades() {
  const habilidadesList = document.getElementById('habilidades');
  habilidades.forEach(hab => {
     const li = document.createElement('li');
     li.textContent = hab;
     habilidadesList.appendChild(li);
    });
}

export function renderProyectos() {
  const proyectosDiv = document.getElementById('proyectos');
  proyectos.forEach(proy => {
    const card = document.createElement('div');
    card.className = 'bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg border border-violet-500 flex flex-col ';
    card.innerHTML = `
      <div class="mb-4">
        <img src="${proy.imagen}" alt="Imagen de ${proy.titulo}" class="w-full h-40 object-cover rounded-lg">
      </div>
      <h3 class="text-xl text-violet-300 font-semibold mb-2">${proy.titulo}</h3>
      <p class="text-gray-300 mb-2">${proy.descripcion}</p>
      <div class="flex flex-wrap gap-2 mb-2">
        ${proy.tecnologias?.map(tech => `
            <span 
                class="iconify bg-violet-700 text-white w-8 h-8 flex items-center justify-center rounded-full" 
                data-icon="${tech.icono}" 
                data-width="20" 
                title="${tech.nombre}">
            </span>

        `).join('')}
       </div>

      <a href="${proy.link}" target="_blank" class="inline-block mt-auto px-4 py-2 bg-purple-900 hover:bg-purple-200 hover:text-black text-white font-semibold rounded transition-colors duration-300">Ver Proyecto</a>
    `;
    proyectosDiv.appendChild(card);
  });
}

export function renderEstudios() {
  const estudiosList = document.getElementById('estudios');
  if (estudiosList) {
    estudios.forEach(est => {
      const li = document.createElement('li');
      li.className = 'flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4';

      const img = document.createElement('img');
      img.src = est.imagen;
      img.alt = `Imagen de ${est.titulo}`;
      img.className = 'w-32 h-32 object-cover rounded-lg cursor-pointer';
      img.addEventListener('click', () => openModal(est.imagenGrande));

      const text = document.createElement('span');
      text.className = 'text-gray-300';
      text.textContent = est.titulo;

      li.appendChild(img);
      li.appendChild(text);
      estudiosList.appendChild(li);
    });
  }
}

function openModal(imagen) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 modal-overlay';
  
  document.body.appendChild(modal);

  modal.innerHTML = `
    <div class="relative max-w-3xl max-h-[90vh] bg-white p-4 rounded-lg overflow-auto">
      <button id="closeModalBtn" class="absolute top-2 right-2 z-10 p-2 text-gray-700 bg-white rounded-full shadow">X</button>
      <img src="${imagen}" alt="Imagen ampliada" class="w-full h-auto rounded-lg">
    </div>
  `;

  const closeBtn = modal.querySelector('#closeModalBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
   modal.addEventListener('click', (e) => {
        if (e.target === modal) {
        closeModal();
        }
    });
}

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) modal.remove();
}
