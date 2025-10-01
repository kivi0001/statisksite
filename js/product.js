const productSection = document.querySelector(".produkt-sektion");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("mit id fra URL" + id);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
.then((res) => res.json())
.then((product) => {

productSection.innerHTML = `
<div class="product-name"><h1>${product.productdisplayname}</h1>
</div>
<section class="product-section">
        <div class="product-img">
          <img 
          class="soldout-image ${product.soldout && "img-soldout"}"
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="pants" />
              <div class="not-soldout ${product.soldout && "SoldOut"}">Sold Out</div>
        </div>
        <div class="product-info">
          <h2>Product information</h2>
          <h3>Model</h3>
          <p class="model">${product.productdisplayname}</p>
          <h3>Color</h3>
          <p class="color">${product.basecolour}</p>
          <h3>Description</h3>
          <p>${product.description}</p>
          <h3>Price</h3>
          <p class="price ${product.discount && "scratch-price"}">DKK ${product.price},-</p>
          <div class="no-discount ${product.discount && "price-and-percentage"}">
            <p class="now-price">Now: DKK ${Math.round(product.price - product.price * product.discount / 100)},-</p>
            <p class="percentage">${product.discount}%</p>
          </div>
        </div>
        <div class="buy-now">
          <h2>Choose your size</h2>
          <h3>Model</h3>
          <p>${product.productdisplayname}</p>
          <div class="choose-and-add">
            <label for="sizes">Sizes available</label>
            <select name="sizes" id="sizes">
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
            <button class="knap">
              <a href=""> Add to basket </a>
            </button>
          </div>
        </div>
        </section>
`;

});
