const productListSection = document.querySelector(".productlist-container");

console.log(productListSection);

fetch(`https://kea-alt-del.dk/t7/api/products`)
.then((res) => res.json())
.then(showProducts);

function showProducts(data) {
    console.log(data)
    let markup = "";
    data.forEach(products => {
   

markup += `<div class="standard-card">
<div class="image-div ${products.discount && "OnSale"} ${products.soldout && "SoldOut"}">
            <img
              class="soldout-image"
              src="https://kea-alt-del.dk/t7/images/webp/640/${products.id}.webp"
              alt="pants"
            />
            <p class="not-soldout ${products.soldout && "SoldOut"}">Sold Out</p>
          </div>
          <h2 class="product-title">${products.productdisplayname}</h2>
          <p class="type-and-brand">${products.articletype}</p>
          <p class="price">DKK ${products.price},-</p>
          <div class="no-discount ${products.discount && "price-and-percentage"}">
            <p class="now-price">Now: DKK ${Math.round(products.price - products.price * products.discount / 100)},-</p>
            <p class="percentage">${products.discount}%</p>
          </div>
          <a href="product.html?id=${products.id}" class="product-link">Read More</a>
          </div>` 
        });
productListSection.innerHTML += markup;

}