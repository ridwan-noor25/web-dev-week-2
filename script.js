
// ===== SPENDWISE BUDGET DATA =====

// Variables
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;


// ===== COLLECT USER INPUT =====

monthlyBudget = Number(prompt("Enter your monthly budget in KSh:"));

totalExpenses = Number(prompt("Enter your total expenses in KSh:"));


// ===== BUDGET CALCULATION FUNCTION =====

function calculateBalance(budget, expenses) {
    return budget - expenses;
}


// ===== PROCESS BUDGET INFORMATION =====

if (
    Number.isFinite(monthlyBudget) &&
    Number.isFinite(totalExpenses) &&
    monthlyBudget >= 0 &&
    totalExpenses >= 0
) {

    remainingBalance = calculateBalance(
        monthlyBudget,
        totalExpenses
    );

    // ===== DISPLAY RESULTS =====

    console.log("===== SPENDWISE BUDGET SUMMARY =====");

    console.log("Monthly Budget: KSh " + monthlyBudget);

    console.log("Total Expenses: KSh " + totalExpenses);

    console.log("Remaining Balance: KSh " + remainingBalance);

    if (remainingBalance < 0) {
        console.log("Warning: You have exceeded your budget.");
    } else {
        console.log("You are within your budget.");
    }

} else {

    console.log("Invalid input. Please enter valid non-negative numbers.");

}
