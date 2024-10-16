'use strict';

const ulList = document.querySelector(".js-list");

const anastasioContent = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asia al menos hace 500 años, donde tuvo su origen muy posiblemente.';

const anastasio = `<li class="card">
            <article>
              <img
                class="card_img"
                src="https://dev.adalab.es/gato-siames.webp"
                alt="siames-cat"
              />
              <h3 class="card_title">Anastacio</h3>
              <h4 class="card_race">Siamés</h4>
              <p class="card_description">
                ${anastasioContent}
              </p>
            </article>
          </li>`;

const fionaContent = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… Hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.'

const fiona = `<li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/sphynx-gato.webp"
              alt="sphynx-cat"
            />
            <h3 class="card_title">Fiona</h3>
            <h4 class="card_race">Sphynx</h4>
            <p class="card_description">
              ${fionaContent}
            </p>
          </li>`;

const cieloContent = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.'

const cielo = `<li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/maine-coon-cat.webp"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">Cielo</h3>
            <h4 class="card_race">Maine Coon</h4>
            <p class="card_description">
              ${cieloContent}
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


buttonPlus.addEventListener('click', ()=> {
  //newForm.classList.toggle('collapsed');
  newForm.classList.remove('collapsed');
}) 

buttonCancel.addEventListener('click', ()=> {
  //newForm.classList.toggle('collapsed');
  newForm.classList.add('collapsed');
})

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

  const descriptionValue = descripton.value;

  if (anastasioContent.includes(descriptionValue)) {
    console.log('Soy anastasio');


  }
  if (fiona.includes(descriptionValue)) {
    console.log('Soy fiona');
  }
  if (cielo.includes(descriptionValue)) {
    console.log('Soy cielo');
  }
})