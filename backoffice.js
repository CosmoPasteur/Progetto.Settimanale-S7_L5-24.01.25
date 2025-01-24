const form = document.getElementById("shop-form"); // nodo del form
const productList = document.getElementById("product-list");
const submitButton = document.getElementById("submit-btn");
const deleteButton = document.getElementById("delete-btn");

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

//funzione per caricare prodotti
function loadProducts() {
  makeRequest("GET", "https://striveschool-api.herokuapp.com/api/product/")
    .then((products) => {
      const productList = document.getElementById("product-list");
      productList.innerHTML = "";
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("card", "mb-3");
        productCard.innerHTML = `
          <div class="card-body">
            <img src="${product.imageUrl}" alt="${product.name}" class="img-fluid" />
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>Prezzo:</strong> €${product.price}</p>
            <button class="btn btn-warning" onclick="editProduct(${product._id})">Modifica</button>
            <button class="btn btn-danger" onclick="deleteProduct(${product._id})">Elimina</button>
          </div>
        `;
        productList.appendChild(productCard);
      });
    })
    .catch((error) => console.error("Error loading products:", error));
}

//Agg una eventListner al submit del form
form.addEventListener("submit", function (event) {
  event.preventDefault(); //evito la ricarica della pagina

  const newProduct = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
    price: parseFloat(document.getElementById("price").value),
  };
});
//   if (Object.values(newProduct).some((field) => field === "")) {
//     alert("Tutti i campi sono obbligatori!");
//     return;
//   }
// });

//   fetch("https://striveschool-api.herokuapp.com/api/product/", {
//     method: "GET",
//     headers: {
//       Authorization: token,
//     },
//   })
//     .then((response) => response.json())
//     .then((products) => {
//       const productList = document.getElementById("product-list");
// productList.innerHTML = ""; // La Lista verrà pulita.
//       products.forEach((product) => {
//         const productCard = document.createElement("div");
//         productCard.classList.add("card", "mb-3");
//         productCard.innerHTML = `
//         <div class="card-body">
//           <img src="${product.imageUrl}" alt="${product.name}" class="img-fluid" />
//           <h5 class="card-title">${product.name}</h5>
//           <p class="card-text">${product.description}</p>
//           <p class="card-text"><strong>Prezzo:</strong> €${product.price}</p>
//           <button class="btn btn-warning" onclick="editProduct(${product._id})">Modifica</button>
//           <button class="btn btn-danger" onclick="deleteProduct(${product._id})">Elimina</button>
//         </div>
//       `;
//         productList.appendChild(productCard);
//       });
//     })
//     .catch((error) => console.error("Error:", error));
// }

//la funzione per modificare il prodotto
// function editProduct(productId) {

// }
