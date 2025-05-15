const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chatBox");

expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const item = document.getElementById("item").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const assignedTo = document.getElementById("assignedTo").value;

  const li = document.createElement("li");
  li.innerHTML = `${item} - $${amount.toFixed(2)} (Assigned to: ${assignedTo}) 
    <button class="remove-btn">Remove</button>`;

  // Add remove event listener
  li.querySelector(".remove-btn").addEventListener("click", function () {
    total -= amount;
    updateTotalDisplay();
    li.remove();
  });

  expenseList.appendChild(li);
  total += amount;
  updateTotalDisplay();
  expenseForm.reset();
});



chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = document.getElementById("chatInput").value;
  const div = document.createElement("div");
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  chatForm.reset();
});

let total = 0;

function updateTotalDisplay() {
  const totalCostElem = document.getElementById("totalCost");
  totalCostElem.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
}

