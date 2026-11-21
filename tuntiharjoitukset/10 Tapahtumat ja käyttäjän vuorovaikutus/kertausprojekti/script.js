const cardContainer = document.querySelector(' .card-container');
const searchInput = document.querySelector('#search');

const products = [
    { id: 1, name: "Margherita", price: 12.50, favorite: false },
    { id: 2, name: "Pepperoni", price: 14.00, favorite: false },
    { id: 3, name: "Hawaiian", price: 13.50, favorite: false },
    { id: 4, name: "Four Cheese", price: 15.00, favorite: false },
    { id: 5, name: "Vegetarian", price: 13.00, favorite: false },
    { id: 6, name: "BBQ Chicken", price: 15.50, favorite: false }
];


for (const product of products) {
    const item = document.createElement('article');
    item.dataset.productId = product.id;
    item.dataset.name = product.name.toLowerCase();

    const heading = document.createElement('h2');
    heading.textContent = product.name;
    
    const price = document.createElement('p')
    price.textContent = `Price: ${product.price} €`;
    
    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = 'Add to favorite';
    
   
    item.append(heading, price, favoriteButton);
    cardContainer.append(item);
}

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.trim().toLowerCase();
  const articles = cardContainer.querySelectorAll("article");

  articles.forEach((article) => {
    article.hidden = !article.dataset.name.includes(searchTerm);
  });
});


