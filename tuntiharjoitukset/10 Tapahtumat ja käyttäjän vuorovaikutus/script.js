
//harjoitus 1
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const countDisplay = document.querySelector("#count")

let count = 0;

countDisplay.textContent = count;
minusButton.disabled = count === 0;

plusButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
    minusButton.disabled = count === 0;
});

minusButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
    minusButton.disabled = count === 0;
}
);

//harjoitus 2
const inputName = document.querySelector("#name");
const nameDisplay = document.querySelector("#preview");
const charCount = document.querySelector("#charCount");

inputName.addEventListener("input", event => {
    const value = event.target.value;

    nameDisplay.textContent = value
        ? value.slice(0, 30) : "vieras"

    charCount.textContent = value.length;

});

//harjoitus 3
const todoList = document.querySelector("#todo-list");

todoList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('[data-action="delete"]');
    if (deleteButton) {
        deleteButton.closest('li').remove();
        return;
    }

    const completeButton = event.target.closest('[data-action="toggle"]');
    if (completeButton) {
        completeButton.closest('li').classList.toggle('complete');
        return;

    }
});
