let total = 0;
let userOwes = 0;
let currentUser = "";

// Handle name input and show main app
document.getElementById("nameForm").addEventListener("submit", function(e) {
  e.preventDefault();
  currentUser = document.getElementById("userName").value.trim().toLowerCase();
  if (!currentUser) return;

  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("mainApp").style.display = "block";
});

// Update total cost display
function updateTotalDisplay() {
  document.getElementById("totalCost").innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
}

// Update how much the current user owes
function updateOwedDisplay() {
  document.getElementById("amountOwed").innerHTML = `<strong>You Owe: $${userOwes.toFixed(2)}</strong>`;
}

// Handle expense form submission
document.getElementById("expenseForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const item = document.getElementById("item").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const assignedTo = document.getElementById("assignedTo").value.trim().toLowerCase();

  const li = document.createElement("li");
  li.innerHTML = `${item} - $${amount.toFixed(2)} (Assigned to: ${assignedTo}) 
    <button class="remove-btn">Remove</button>`;

  // Remove button handler
  li.querySelector(".remove-btn").addEventListener("click", function() {
    total -= amount;
    if (assignedTo === currentUser) {
      userOwes -= amount;
    }
    li.remove();
    updateTotalDisplay();
    updateOwedDisplay();
  });

  document.getElementById("expenseList").appendChild(li);
  total += amount;

  if (assignedTo === currentUser) {
    userOwes += amount;
  }

  updateTotalDisplay();
  updateOwedDisplay();
  e.target.reset();
});

// Pay button logic
function payDebt() {
  alert(`Thanks for paying $${userOwes.toFixed(2)}!`);
  userOwes = 0;
  updateOwedDisplay();
}
