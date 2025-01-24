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
