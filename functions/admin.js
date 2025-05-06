let menubar = document.querySelector("aside");
let menubtn = document.querySelector("#menu_bar");
let closebtn = document.querySelector("#closebtn");
let addproduct = document.querySelector("#add-pro");
let productform = document.querySelector("#add_form");
let themetoggler = document.querySelector(".theme-toggler");
let submit = document.querySelector("#submitform");
let dashboard = document.querySelector("#Dashboard");
let dashboardbtn = document.querySelector("#dash");
let customerbtn = document.querySelector("#cusbtn");
let customerlist = document.querySelector("#customer");
let messagebody = document.querySelector("#message-body");
let messagebtn = document.querySelector("#message");
let productbtn = document.querySelector("#pro-btn");
let inventory = document.querySelector("#inventory");
let settingsbtn = document.querySelector("#settings-btn");
let settings = document.querySelector("#settings");

menubtn.addEventListener("click", () => {
  menubar.style.display = "block";
});

closebtn.addEventListener("click", () => {
  menubar.style.display = "none";
});

themetoggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themetoggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themetoggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

dashboardbtn.addEventListener("click", () => {
  event.preventDefault();
  productform.style.display = "none";
  dashboard.style.display = "";
  customerlist.style.display = "none";
  messagebody.style.display = "none";
  inventory.style.display = "none";
  settings.style.display = "none";
});

addproduct.addEventListener("click", () => {
  event.preventDefault();
  productform.style.display = "flex";
  dashboard.style.display = "none";
  customerlist.style.display = "none";
  messagebody.style.display = "none";
  inventory.style.display = "none";
  settings.style.display = "none";
});

submit.addEventListener("click", (event) => {
  event.preventDefault();

  let form = document.querySelector("#add_form form");
  let formData = new FormData(form);

  let productName = formData.get("productName");
  let quantity = formData.get("quantity");
  let price = formData.get("price");
  let description = formData.get("description");
  let image = formData.get("imageUpload");
  let starRating = document.querySelector(
    'input[name="rating"]:checked'
  )?.value;

  console.log({ productName, quantity, price, description, image, starRating });

  // Show success notification
  let notification = document.getElementById("notification");
  notification.textContent = "Product added successfully!";
  notification.classList.add("show");

  // Reset the form fields
  form.reset();

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
  }, 5000);
});

customerbtn.addEventListener("click", () => {
  event.preventDefault();
  dashboard.style.display = "none";
  productform.style.display = "none";
  messagebody.style.display = "none";
  inventory.style.display = "none";
  settings.style.display = "none";
  customerlist.style.display = "flex";
});

function searchCustomer() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let table = document.getElementById("customerTable");
  let rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    let match = false;
    for (let j = 1; j < 3; j++) {
      // Check Name and Email columns
      if (cells[j] && cells[j].textContent.toLowerCase().includes(input)) {
        match = true;
        break;
      }
    }
    rows[i].style.display = match ? "" : "none";
  }
}

// Sort function
function sortTable(columnIndex) {
  let table = document.getElementById("customerTable");
  let rows = Array.from(table.rows).slice(1);
  let isAscending = table.getAttribute("data-sort-direction") === "asc";
  let newDirection = isAscending ? "desc" : "asc";
  table.setAttribute("data-sort-direction", newDirection);

  rows.sort((a, b) => {
    let cellA = a.cells[columnIndex].textContent.toLowerCase();
    let cellB = b.cells[columnIndex].textContent.toLowerCase();
    return isAscending
      ? cellA.localeCompare(cellB)
      : cellB.localeCompare(cellA);
  });

  rows.forEach((row) => table.tBodies[0].appendChild(row));
}

messagebtn.addEventListener("click", () => {
  event.preventDefault();
  productform.style.display = "none";
  dashboard.style.display = "none";
  customerlist.style.display = "none";
  inventory.style.display = "none";
  settings.style.display = "none";
  messagebody.style.display = "flex";
});

let messages = {
  "John Doe": [
    "I placed an order for these products: live Catfish qty: 10...",
    "When will my order be delivered?",
    "Can I update my shipping address?",
  ],
  "Jane Smith": [
    "I placed an order for these products: live Catfish qty: 5...",
    "I need assistance with payment issues.",
  ],
};

// Handle click event to display messages
document.querySelectorAll(".person").forEach((person) => {
  person.addEventListener("click", () => {
    let name = person.getAttribute("data-name");
    let modalTitle = document.getElementById("modalTitle");
    let modalContent = document.getElementById("modalContent");

    // Set the modal title and content
    modalTitle.textContent = name;
    modalContent.innerHTML = messages[name]
      ? messages[name].map((msg) => `<li>${msg}</li>`).join("")
      : "<li>No messages found.</li>";

    // Show modal and overlay
    document.getElementById("messageModal").classList.add("show");
    document.getElementById("modalOverlay").classList.add("show");
  });
});

// Close the modal
function closeModal() {
  document.getElementById("messageModal").classList.remove("show");
  document.getElementById("modalOverlay").classList.remove("show");
}

function searchCustomer() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let customerList = document.getElementById("customerList");
  let people = customerList.getElementsByClassName("person");
  let found = false;

  for (let person of people) {
    let name = person.querySelector("h3").textContent.toLowerCase();
    let email = person.querySelector("h4").textContent.toLowerCase();
    if (name.includes(input) || email.includes(input)) {
      person.style.display = "block";
      found = true;
    } else {
      person.style.display = "none";
    }
  }

  if (!found) {
    customerList.innerHTML = `<p class="no-results">No results found</p>`;
  }
}

productbtn.addEventListener("click", () => {
  event.preventDefault();
  productform.style.display = "none";
  dashboard.style.display = "none";
  customerlist.style.display = "none";
  messagebody.style.display = "none";
  inventory.style.display = "flex";
});

function editQuantity(button) {
  const row = button.parentElement.parentElement;
  const quantityCell = row.querySelector(".quantity");
  quantityCell.setAttribute("contenteditable", "true");
  quantityCell.focus();
  button.style.display = "none";
  const saveButton = row.querySelector(".save-btn");
  saveButton.style.display = "inline-block";
}

function saveQuantity(button) {
  const row = button.parentElement.parentElement;
  const quantityCell = row.querySelector(".quantity");
  quantityCell.setAttribute("contenteditable", "false");
  button.style.display = "none";
  const editButton = row.querySelector(".edit-btn");
  editButton.style.display = "inline-block";

  // Optional: Add logic to update quantity in the database or backend here.
  console.log(`Updated Quantity: ${quantityCell.textContent}`);
}

settingsbtn.addEventListener("click", () => {
  event.preventDefault();
  productform.style.display = "none";
  dashboard.style.display = "none";
  customerlist.style.display = "none";
  messagebody.style.display = "none";
  inventory.style.display = "none";
  settings.style.display = "flex";
});

// Select all menu links
const menuLinks = document.querySelectorAll(".menu-link");

// Add click event listeners to each link
menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    if (this.getAttribute("href") === "#") {
      event.preventDefault();
    }

    // Remove 'active' class from all links
    menuLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});

