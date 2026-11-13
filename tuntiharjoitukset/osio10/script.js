//harjoitus 1

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

   
  console.log(data);
  console.log("Username:", data.get("username"));
  console.log("Email:", data.get("email"));
}
);

/* Challenge: добавьте отдельные сообщения об ошибках для полей, а также aria-invalid и aria-describedby. */