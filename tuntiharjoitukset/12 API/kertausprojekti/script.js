
// creating an URL for the API
const apiUrl = "https://randomuser.me/api/?results=50&gender=female&nat=fi";

// get users using the API
async function getUsers() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayUsers(data.results);

        /*   console.log(data.results);
        console.log(data.results[0].name); */


    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// create user cards
function displayUsers(users) {
    const container = document.querySelector("#users-container");


    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("user-card");

        const image = document.createElement("img");
        image.src = user.picture.large;
        image.alt = "Profile photo";

        const heading = document.createElement("h2");
        heading.textContent = `${user.name.first} ${user.name.last}`;

        const age = document.createElement("p");
        age.textContent = `Age: ${user.dob.age}`;

        const city = document.createElement("p");
        city.textContent = `City: ${user.location.city}`;

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;
        card.append(image, heading, age, city, email);

        /*  card.innerHTML = `
             <img src="${user.picture.large}" alt="Profile photo">
             <h2>${user.name.first} ${user.name.last}</h2>
             <p>Age: ${user.dob.age}</p>
             <p>City: ${user.location.city}</p>
             <p>Email: ${user.email}</p>`;  */

        container.appendChild(card);
    });
}

getUsers();