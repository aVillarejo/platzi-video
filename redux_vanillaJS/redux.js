import { createStore } from "redux";
/*Elementos DOM*/
const $form = document.getElementById("form");

$form.addEventListener("submit", handleSubmit);

// const handleSubmit = event => {
//   event.preventDefault();
//   const data = new FormData($form);
//   const title = data.get("title");
//   console.log(title);
// };

/*Handle para el formulario*/
function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get("title");

  console.log(title);
  store.dispatch({
    type: "ADD_SONG",
    payload: {
      //title:title
      title //sugar sintax
    }
  });
}

/*Valores iniciales*/
const initialState = [
  {
    title: "despacito"
  },
  {
    title: "One more time"
  },
  {
    title: "Echame la culpa"
  }
];

/*Nuestro reducer*/
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return [...state, action.payload];
    default:
      return state;
  }
};

/* Crear store */
/* const store = createStore(
  reducer,
  initialState,
  enhancer);
*/

/*Creación de nuestro Store*/
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*Funcion para mi render*/
function render() {
  /*Elementos DOM donde renderizamos todo*/
  const $container = document.getElementById("playlist");
  $container.innerHTML = "";
  /*Asignación de nuestro Store */
  const playlist = store.getState();

  /*Recorrer nuestra playlist*/
  playlist.forEach(item => {
    const template = document.createElement("p");
    template.textContent = item.title;
    $container.appendChild(template);
  });
}

render();

/*Funcion handleChange*/
const handleChange = () => {
  render();
};
/*Actualizacion de la aplicacion en cada cambio con Subscribe*/
store.subscribe(handleChange);

console.log(store.getState());
