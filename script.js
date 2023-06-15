function addItem() {
  var item = document.getElementById("item").value;
  var shoppingList = document.getElementById("shopping-list");

  var listItem = document.createElement("li");
  listItem.innerText = item;

  var removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.onclick = function() {
    shoppingList.removeChild(listItem);
  };

  var toggleButton = document.createElement("button");
  toggleButton.innerText = "Got";
  toggleButton.onclick = function() {
    listItem.classList.toggle("completed");
  };

  listItem.appendChild(removeButton);
  listItem.appendChild(toggleButton);
  shoppingList.appendChild(listItem);

  document.getElementById("item").value = "";
}