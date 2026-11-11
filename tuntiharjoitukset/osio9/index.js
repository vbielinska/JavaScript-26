//Harjoitus 1

const title = document.getElementById('title');
title.textContent = "DOM toimii!";

const status = document.querySelector('.status');
status.textContent = "Valmis";
status.classList.add("success");

//Harjoitus 2 
const kielet = ['HTML', 'CSS', 'JavaScript'];
const lista = document.querySelector('#languages');

for (const kieli of kielet) {
    const item =document.createElement("li");
    item.textContent = kieli;
    item.classList.add("language-item");
    lista.append(item);
}

//Harjoitus 3 
const tuote = {
  nimi: "Näppäimistö",
  hinta: 79,
  saatavilla: false
};

const article = document.createElement("article");
const heading = document.createElement("h2");
const price = document.createElement("p");
const button = document.createElement("button");

heading.textContent = tuote.nimi;
price.textContent = `${tuote.hinta} €`;
button.textContent = "Lisää ostoskoriin";

article.append(heading, price, button);

if( tuote.saatavilla === false) {
    article.classList.add("sold-out");
}

document.querySelector(".products").append(article);

