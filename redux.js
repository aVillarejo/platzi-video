import { createStore } from "redux";

const $form = document.getElementById("form");
$form.addEventListener("submit", handleSubmit);

// const handleSubmit = event => {
//   event.preventDefault();
//   const data = new FormData($form);
//   const title = data.get("title");
//   console.log(title);
// };

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get("title");
  console.log(title);
}
/* Crear store */
/* const store = createStore(
  reducer,
  initialState,
  enhancer);
*/
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

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
