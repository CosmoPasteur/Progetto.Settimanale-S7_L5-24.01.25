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

prodotti.forEach((prodotto) => {
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

  col.innerHTML = `
    <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>    
    `;
});
