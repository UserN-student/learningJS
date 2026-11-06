function showGreeting() {
    let input = document.getElementById("userName");
    let name = input.value;
    let result = document.getElementById("result");
    if (name.trim() === "") {
        result.textContent = "Введите имя";
        return;
    }
    result.textContent = "Привет, " + name + "!";
    input.value = "";
}
let button = document.getElementById("showButton");
button.addEventListener("click", showGreeting);

function changeColor() {
    let colorMessage = document.getElementById("colorMessage");
    colorMessage.style.color = "blue";
}
let button2 = document.getElementById("colorButton");
button2.addEventListener("click", changeColor);

let message = document.getElementById("message");
let hideButton = document.getElementById("hideButton");
let showTextButton = document.getElementById("showTextButton");

hideButton.addEventListener("click", function () {
    message.style.display = "none";
});

showTextButton.addEventListener("click", function () {
    message.style.display = "block";
});