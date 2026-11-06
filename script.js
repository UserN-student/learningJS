let counts = [0, 0, 0];
let names = ["Хлеб", "Молоко", "Яблоки"];
 
for (let i = 1; i <= 3; i++) {
  document.getElementById("plus" + i).addEventListener("click", function () {
    counts[i - 1]++;
    document.getElementById("count" + i).textContent = counts[i - 1];
  });
 
  document.getElementById("minus" + i).addEventListener("click", function () {
    if (counts[i - 1] > 0) {
      counts[i - 1]--;
      document.getElementById("count" + i).textContent = counts[i - 1];
    }
  });
}
 
document.getElementById("order").addEventListener("click", function () {
  let text = "Ваш заказ:\n";
  for (let i = 0; i < 3; i++) {
    text += names[i] + ": " + counts[i] + " шт.\n";
  }
  document.getElementById("result").textContent = text;
});
