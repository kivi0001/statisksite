const productListSection = document.querySelector(".productlist-container");
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const header = (document.querySelector(".overskrift").textContent = category);

document.querySelectorAll("#filter-knapper button").forEach(knap => knap.addEventListener("click", showFiltered));

function showFiltered(){
    console.log(this.dataset.gender);
    const gender = this.dataset.gender;
    if(gender =="All"){
        showProducts(allData);
    }
    else{
        const udsnit = allData.filter(product => product.gender == gender);
        showProducts(udsnit);
    }
}

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=45&category=${category}`)
.then((res) => res.json())
.then((data) => {
    allData = data;
    showProducts(allData);
});



function showProducts(data) {
    productListSection.innerHTML = "";
    data.forEach(products => {
   

productListSection.innerHTML += `<div class="standard-card">
<div class="image-div">
            <img
              class="soldout-image ${products.soldout && "img-soldout"}"
              src="https://kea-alt-del.dk/t7/images/webp/640/${products.id}.webp"
              alt="pants"
            />
            <div class="not-soldout ${products.soldout && "SoldOut"}">Sold Out</div>
          </div>
          <h2 class="product-title">${products.productdisplayname}</h2>
          <p class="type-and-brand">${products.articletype}</p>
          <p class="price ${products.discount && "scratch-price"}">DKK ${products.price},-</p>
          <div class="no-discount ${products.discount && "price-and-percentage"}">
            <p class="now-price">Now: DKK ${Math.round(products.price - products.price * products.discount / 100)},-</p>
            <p class="percentage">${products.discount}%</p>
          </div>
          <a href="product.html?id=${products.id}" class="product-link">Read More</a>
          </div>` 
        });

}