document.querySelector(".inputfield").addEventListener("submit", function (event) {
    event.preventDefault();

    let income = parseFloat(document.getElementById("income").value);
    let expense = parseFloat(document.getElementById("expense").value);

    if (isNaN(income)) income = 0;
    if (isNaN(expense)) expense = 0;
    let balance = income - expense;

    if (income > 0 && expense > 0 && income > expense) {
        document.getElementById("result").textContent = balance * .20;
    } else if (income > 0 && income < expense) {
        document.getElementById("result").textContent = "You have suffered losses in your business.";
    } else {
        document.getElementById("result").textContent = "Invalid Input";
        document.getElementById("result").style.color = "red";
    }
});
