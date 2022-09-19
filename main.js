const pizzas = [
  {
    id: 1,
    nombre: 'Muzzarella',
    ingredientes: ['Queso', 'Oregano', 'Salsa'],
    precio: 500,
    imagen:
      'https://quem.com.ar/wp-content/uploads/2018/05/Pizza-e1584547627773.jpg',

  },
  {
    id: 2,
    nombre: 'Napolitana',
    ingredientes: ['Queso', 'Salsa', 'Tomate', 'Oregano'],
    precio: 800,
    imagen:
      'https://milrecetas.net/wp-content/uploads/2015/06/Pizza-Napolitana-4.jpg',
  },
  {
    id: 3,
    nombre: 'Roquefort',
    ingredientes: ['Queso', 'Roquefort', 'Salsa'],
    precio: 850,
    imagen:
      'http://pizzagold.es/wp-content/uploads/2019/09/Roquefort.jpg',

  },
  {
    id: 4,
    nombre: 'Calabrese',
    ingredientes: ['Queso', 'Salame', 'Salsa'],
    precio: 1200,
    imagen:
      'https://www.expresschef.ro/wp-content/uploads/2020/02/Pizza-Calabrese-1.jpg',
  },
  {
    id: 5,
    nombre: 'Rucula',
    ingredientes: ['Queso', 'Salsa', 'Rucula'],
    precio: 450,
    imagen:
      'https://i.ytimg.com/vi/4qCaV2Fiw2k/maxresdefault.jpg',
  },
  {
    id: 6,
    nombre: 'Anana',
    ingredientes: ['Queso', 'Anana', 'Salsa'],
    precio: 1500,
    imagen:
      'http://images.lacucinaitaliana.it/wp-content/uploads/2017/02/pizza-con-ananas.jpg',
  },
];





const input = document.getElementById('input-number');
const button = document.getElementById('btn');
const resultadoPizza = document.querySelector('.result-list');

const isEmpty = value => (value === '' ? false : true);
localStorage.setItem('myArray', JSON.stringify(pizzas));
var array = localStorage.getItem('myArray');
array = JSON.parse(array);


button.addEventListener('click', e => {
  e.preventDefault();
  const valor = input.value.trim();
  const varPizza = pizzas.find(pizza => pizza.id == valor)
  input.value = '';

  if (valor === '') {
    return resultadoPizza.innerHTML = `
          <img class="error" src="./img/advertencia.png" alt="">
          <p class="text-advertencia" >Ingrese un Numero para Realizar La Busqueda</p>`
  }

  else {


    if (varPizza) {
      return resultadoPizza.innerHTML = `<img class="pizza" src="${varPizza.imagen}"/> <h2 class="text-nombre">Nombre: ${varPizza.nombre}</h2>
          <h2 class="text-ingrediente">Ingredientes: ${varPizza.ingredientes}</h2>
                  <h3 class="text-precio">Precio: $ ${varPizza.precio}</h3>`
    } else {
      resultadoPizza.innerHTML = `
          <img class="error" src="./img/error.png" alt="">
          <p class="text" >No existe ninguna pizza con ese id</p>`

    }
  }
});


// (function(){
//   const sliders = [...document.querySelectorAll('.slider__body')];  
//   const arrowNext = document.querySelector('#next');
//   const arrowBefore = document.querySelector('#before');
//   let valule;

//   arrowNext.addEventListener('click', ()=>changePosition(1));
//   arrowBefore.addEventListener('click', ()=>changePosition(-1));

//   function changePosition(change){
//     const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
//     value = currentElement;
//     value+= change;
//     console.log(sliders.length)
//     if(value === 0 || value == sliders.length+1){
//       value = value === 0 ? sliders.length: 1;
//     }
//     sliders[currentElement -1].classList.toggle('slider__body--show');
//     sliders[value -1].classList.toggle('slider__body--show');
//   }
// })()






