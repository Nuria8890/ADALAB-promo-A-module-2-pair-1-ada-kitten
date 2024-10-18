'use strict';

const ulList = document.querySelector(".js-list");

const anastasioDescription = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asia al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const anastasioImage = 'https://dev.adalab.es/gato-siames.webp';
const anastasioName = 'Anastacio';
const anastasioRace = 'Siamés';

const anastasio = `
<li class="card js-anastasio-li">
  <article>
    <img
      class="card_img"
      src= ${anastasioImage}
      alt="siames-cat"
    />
    <h3 class="card_title">${anastasioName}</h3>
    <h4 class="card_race">${anastasioRace}</h4>
    <p class="card_description">
      ${anastasioDescription}
    </p>
  </article>
</li>`;

const fionaDescription = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… Hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const fionaImage = 'https://dev.adalab.es/sphynx-gato.webp';
const fionaName = 'Fiona';
const fionaRace = 'Sphynx';

const fiona = `
<li class="card js-fiona-li">
  <img
    class="card_img"
    src="${fionaImage}"
    alt="sphynx-cat"
  />
  <h3 class="card_title">${fionaName}</h3>
  <h4 class="card_race">${fionaRace}</h4>
  <p class="card_description">
    ${fionaDescription}
  </p>
</li>`;

const cieloDescription = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const cieloImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const cieloName = 'Cielo';
const cieloRace = 'Maine Coon';

const cielo = `
<li class="card js-cielo-li">
  <img
    class="card_img"
    src="${cieloImage}"
    alt="maine-coon-cat"
  />
  <h3 class="card_title">${cieloName}</h3>
  <h4 class="card_race">${cieloRace}</h4>
  <p class="card_description">
    ${cieloDescription}
  </p>
</li>`;

ulList.innerHTML = anastasio + fiona + cielo;

/* AÑADIR +
    1. Cuando hacemos click en + se tiene que quitar la clase collapsed
    2. Cuando hacemos click en cancelar tiene que aparecer de nuevo la clase collapsed
*/

const buttonPlus = document.querySelector ('.js-btn-add');
const buttonCancel = document.querySelector ('.js-button-cancel');
const newForm = document.querySelector ('.js-new-form');

// buttonPlus.addEventListener('click', ()=> {
//   newForm.classList.remove('collapsed');
// }) 

// buttonCancel.addEventListener('click', ()=> {
//   newForm.classList.add('collapsed');
// })

// Ahora hacemos el mismo ejercicio pero utilizando funciones. Y el botón + abre y cierra el formulario.

function showNewCatForm(){
  console.log ('Ha hecho un click en el botón +');
  newForm.classList.remove('collapsed');
}

function hideNewCatForm() {
  console.log ('Ha hecho un click en el botón cancelar');
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm()
  }
}

buttonPlus.addEventListener('click', handleClickNewCatForm);

buttonCancel.addEventListener('click', hideNewCatForm);



/* FILTRAS / BUSCAR
1. Cuando la usuaria hace click en buscar:
  - Recoger valor del input de la descripción.
    - Comprobar si ese valor está incluido en la descripción de algún gato.
      Si sí está incluido, elimina los que no
*/


const buttonSearch = document.querySelector('.js_button-search');
const descripton = document.querySelector('.js_in_search_desc');

buttonSearch.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('click');
  const anastasioLi = document.querySelector('.js-anastasio-li');
  const fionaLi = document.querySelector('.js-fiona-li');
  const cieloLi =  document.querySelector('.js-cielo-li');

  const descriptionValue = descripton.value;

  if (anastasioDescription.includes(descriptionValue)) {
    console.log('Soy Anastasio');
    console.log(fionaLi);
    fionaLi.classList.add('collapsed');
    cieloLi.classList.add('collapsed');

  }
  if (fionaDescription.includes(descriptionValue)) {
    anastasioLi.classList.add('collapsed');
    cieloLi.classList.add('collapsed');
  }
  if (cieloDescription.includes(descriptionValue)) {
    anastasioLi.classList.add('collapsed');
    fionaLi.classList.add('collapsed');
  }
})

