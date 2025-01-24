fetch("https://striveschool-api.herokuapp.com/api/product/", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjRmYWI3NDcwMTAwMTU4YjJiNGQiLCJpYXQiOjE3Mzc3MTI4OTAsImV4cCI6MTczODkyMjQ5MH0.FWQbRy1wAuJIDU8YstrKUJqkSSIdIzTVTefxfvXPi1w",
  },
})
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("Request failed with status " + resp.status);
    }
  })
  .then((prodotti) => {
    console.log(prodotti);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const row = document.getElementById("productList");

productList.forEach((prodotto) => {
  const col = document.createElement("div");
  col.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.alt = prodotto.title;
  img.src = prodotto.img;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const h5 = document.createElement("h5");
  h5.classList.add("card-text");
  h5.innerText = prodotto.price;

  const p = document.createElement("p");
  p.classList.add("card-text");
  p.innerText = prodotto.title;

  const button = document.createElement("button");
  button.classList.add("btn", "btn-warning");
  button.innerText = "Modifica";

  button.onclick = function (event) {
    console.log(event.target);

    event.target.closest("col").editProduct();
  };

  const addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("btn", "btn-success");
  addToCartBtn.innerText = "Aggiungi al carrello";

  addToCartBtn.onclick = function (event) {
    // event.target;
    console.log(prodotto);

    // gestisco il dato (oggetto libro) nell'array
    cart.push(prodotto);
    // uso l'array per creare o modificare la voce esistente "cart" nel localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // a questo punto gestiamo la visualizzazione dell'elemento nella UI per dare un feedback visivo all'utente
    addBookToCart(prodotto);
  };

  //   col.innerHTML = `
  //     <div class="card">
  //               <img src="..." class="card-img-top" alt="..." />
  //               <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">
  //                   Some quick example text to build on the card title and make up the bulk of the card's content.
  //                 </p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //               </div>
  //             </div>
  //     `;

  //   const cardBody = col.querySelector(".card-body");

  cardBody.appendChild(h5);
  cardBody.appendChild(p);
  cardBody.appendChild(button);
  cardBody.appendChild(addToCartBtn);
  card.appendChild(img);
  card.appendChild(cardBody);
  col.appendChild(card);
  row.appendChild(col);
});

function addBookToCart(prodotti) {
  const ul = document.querySelector("#cart-container ul");
  const li = document.createElement("li");
  li.classList.add("list-group-item", "px-0", "d-flex", "align-items-center");
}

const prodottoImg = document.createElement("img");
prodottoImg.classList.add("me-3");
prodottoImg.src = prodotto.img;
prodottoImg.alt = prodotto.title;
prodottoImg.style.width = "50px";
