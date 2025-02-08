const itensList = document.querySelector(".item-list");

const itens = [
  { name: "X-Burger", price: "12.90", image: "x-burger.jpg" },
  { name: "X-Bacon", price: "12.90", image: "x-bacon.jpg" },
  { name: "X-Futuro", price: "13.90", image: "x-futuro.jpg" },
  { name: "X-Salada", price: "18.90", image: "x-salada.jpg" },
  { name: "Double-X", price: "17.90", image: "double-x.jpg" },
  { name: "O Burger-X", price: "16.90", image: "o-burger-x.jpg" },
];

document.addEventListener("DOMContentLoaded", () => {
  let output = "";

  itens.forEach(({ name, price, image }) => {
    output += `      
    <div class="item-card">

        <img src="assets/${image}" alt="${name}" class="item-image">

        <div class="card-content">

          <h2>${name}</h2>

          <p>R$ <span class="item-price">${price}</span></p>

          <div class="item-raiting">
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star-half'></i>
          </div>

          <div class="item-option">

            <a href="item_details.html?name=${name}&price=${price}&image=${image}" class="option-detail">Ver
              Detalhes</a>

            <div class="icon-option">

              <i class='bx bx-chat'></i>

            </div>

            <div class="icon-option">

              <i class='bx bx-heart'></i>

            </div>

          </div>

        </div>

      </div>`;

    itensList.innerHTML = output;
  });
});

// Registro do Service Worker
// Verificação se ele é suportado pelo browser
// Quando a pagina é carregada fazermos o registro
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/servirceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
