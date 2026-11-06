let goalInput = document.getElementById("goalInput");
let goalList = document.getElementById("goalList");
let addGoalButton = document.getElementById("addGoalButton");

addGoalButton.addEventListener("click", function () {
    let goal = goalInput.value;
    
    if (goal.trim() === "") {
        alert("Введите цель");
    } else {
        let newGoal = document.createElement("li");
        newGoal.textContent = goal;
        goalList.append(newGoal);
        goalInput.value = "";
    }
});