let textInput = document.getElementById("textInput");
let result = document.getElementById("result");

textInput.addEventListener("input", function () {
    result.textContent = "Символов: " + textInput.value.length;
});

let nameInput = document.getElementById("nameInput");
let nameResult = document.getElementById("nameResult");

nameInput.addEventListener("change", function () {
    nameResult.textContent = "Ваше имя: " + nameInput.value;
});