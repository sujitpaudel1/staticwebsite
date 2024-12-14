document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Product 1", price: "$10" },
    { name: "Product 2", price: "$20" },
    { name: "Product 3", price: "$30" },
  ];

  const productsContainer = document.getElementById("products");

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;
    productsContainer.appendChild(productElement);
  });
});
