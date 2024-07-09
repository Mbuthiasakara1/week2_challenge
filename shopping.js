let shoppingList = [];

function renderList() {
  const list = document.querySelector(".list");
  list.innerHTML = "";

  shoppingList.forEach((item, index) => {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.purchased;
    checkbox.addEventListener("click", () => markPurchased(index));
    listItem.appendChild(checkbox);

    const text = document.createTextNode(item.name);
    listItem.appendChild(text);

    const removeButton = document.createElement("a");
    removeButton.href = "#";
    removeButton.innerHTML = "&#10006;";
    removeButton.addEventListener("click", (e) => {
      e.preventDefault();
      removeItem(index);
    });
    listItem.appendChild(removeButton);

    if (item.purchased) {
      listItem.classList.add("purchased");
    }

    list.appendChild(listItem);
  });
}

function addItem(item) {
  shoppingList.push({ name: item, purchased: false });
  renderList();
}

function markPurchased(index) {
  shoppingList[index].purchased = !shoppingList[index].purchased;
  renderList();
}

function removeItem(index) {
  shoppingList.splice(index, 1);
  renderList();
}

function clearList() {
  shoppingList = [];
  renderList();
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const item = document.querySelector('input[name="item"]').value;
  if (item) {
    addItem(item);
    document.querySelector('input[name="item"]').value = "";
  }
});

document
  .querySelector("body")
  .appendChild(document.createElement("button")).innerHTML = "Clear List";
document.querySelector("button").addEventListener("click", clearList);

renderList();
