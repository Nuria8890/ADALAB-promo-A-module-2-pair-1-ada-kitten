'use strict';

const ulList = document.querySelector(".js-list");

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asia al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés'
}

const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… Hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx'
}

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon'
}
const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

// Función que pinta el gato en el HTML con arrays: 

const renderKitten = (kitten) => {
  const kittenPaint = `<li class="card">
  <article>
    <img
      class="card_img"
      src= ${kitten.image}
      alt="${kitten.race}-cat"
    />
    <h3 class="card_title">${kitten.name}</h3>
    <h4 class="card_race">${kitten.race}</h4>
    <p class="card_description">
      ${kitten.desc}
    </p>
  </article>
</li>`
return kittenPaint;
}

for (const kitten of kittenDataList) {
  ulList.innerHTML += renderKitten(kitten);  
}

/* BUTTON +
    1. Cuando hacemos click en + se tiene que quitar la clase collapsed
    2. Cuando hacemos click en cancelar tiene que aparecer de nuevo la clase collapsed
*/

const buttonPlus = document.querySelector ('.js-btn-add');
const buttonCancel = document.querySelector ('.js-button-cancel');
const newForm = document.querySelector ('.js-new-form');

/*
buttonPlus.addEventListener('click', ()=> {
  newForm.classList.remove('collapsed');
}) 

buttonCancel.addEventListener('click', ()=> {
  newForm.classList.add('collapsed');
})
*/

// Ahora hacemos el mismo ejercicio pero utilizando funciones. Y el botón + abre y cierra el formulario.
function showNewCatForm(){
  console.log ('Ha hecho un click en el botón +');
  newForm.classList.remove('collapsed');
}

function hideNewCatForm() {
  console.log ('Ha hecho un click en el botón cancelar');
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm() {
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm()
  }
}

buttonPlus.addEventListener('click', handleClickNewCatForm);

buttonCancel.addEventListener('click', hideNewCatForm);

/* FILTRAR / BUSCAR
1. Cuando la usuaria hace click en buscar:
  - Eliminar todos los gatos del html
  - Recoger valor del input de la descripción.
    - Comprobar si ese valor está incluido en la descripción de algún gato.
      Si sí está incluido, añádelo
*/

const buttonSearch = document.querySelector('.js_button-search');
const descriptonInput = document.querySelector('.js_in_search_desc');

/*
  buttonSearch.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('click');
  const anastasioLi = document.querySelector('.js-anastasio-li');
  const fionaLi = document.querySelector('.js-fiona-li');
  const cieloLi =  document.querySelector('.js-cielo-li');

  const descriptionValue = descripton.value;

  fionaLi.classList.add('collapsed');
  cieloLi.classList.add('collapsed');
  anastasioLi.classList.add('collapsed');

  if (anastasioDescription.includes(descriptionValue)) {
    anastasioLi.classList.remove('collapsed');
  }
  if (fionaDescription.includes(descriptionValue)) {
    fionaLi.classList.remove('collapsed');
  }
  if (cieloDescription.includes(descriptionValue)) {
    cieloLi.classList.remove('collapsed');
  }
})*/

//AHORA, VAMOS A HACERLO CON FUNCIÓN ARROW 



const filterKitten = (event) => {
  event.preventDefault ();
  const description = descriptonInput.value;

  ulList.innerHTML = '';

  for (const kitten of kittenDataList) {
    console.log('en el for of kitten es:', kitten)
    if (kitten.desc.includes(description)) {
      ulList.innerHTML += renderKitten(kitten);
    }
  }

  // if (kittenDataList[0].desc.includes(description)) {
  //   ulList.innerHTML += renderKitten(kittenDataList[0]);
  // }
  // if (kittenDataList[1].desc.includes(description)){
  //   ulList.innerHTML += renderKitten(kittenDataList[1]);
  // }
  // if (kittenDataList[2].desc.includes(description)){
  //   ulList.innerHTML += renderKitten(kittenDataList[2]);
  // }
}

buttonSearch.addEventListener('click', filterKitten);


/* AÑADIR UN NUEVO GATO//BONUS
Recoger la información del HTML
  - Información del formulario
    - input url
    - input nombre
    - input raza
    - input descripción
  - Botón añadir

Cuando la usuaria haga click en añadir
  - pinta el nuevo gato en el html
    - Necesitamos
      - recoger el ul.inherHTML ((ul.inerHTML = ul.inerHTML + <li>))
        - pintar el <li> con la información recogida en los inputs.
*/
