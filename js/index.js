const categoryListContainer = document.querySelector(".category_list_container");

fetch ("https://kea-alt-del.dk/t7/api/categories")
.then(res => res.json())
.then((categories) => showCategories(categories));


function showCategories(categories){
    categories.forEach(category => {
        categoryListContainer.innerHTML += `<a href="productlist.html?category=${category.category}">${category.category}</a>`
    });
}
