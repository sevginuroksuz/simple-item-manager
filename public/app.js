document.addEventListener('DOMContentLoaded', function() {
  const itemList = document.getElementById('item-list');
  const addItemForm = document.getElementById('addItemForm');
  const itemNameInput = document.getElementById('itemName');
  const itemQuantityInput = document.getElementById('itemQuantity');

  // Sunucudan öğeleri al ve HTML'de görüntüle
  function fetchItems() {
    fetch('/api/items')
      .then(response => response.json())
      .then(items => {
        itemList.innerHTML = items.map(item => `<li>${item.name} (x${item.quantity}) <button onclick="deleteItem('${item._id}')">Delete</button></li>`).join('');
      })
      .catch(error => console.error('Error fetching items:', error));
  }

  fetchItems();

  // Yeni öğe ekleme formunu dinle
  addItemForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = itemNameInput.value;
    const quantity = itemQuantityInput.value;
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, quantity })
    })
    .then(response => response.json())
    .then(() => {
      fetchItems();
      itemNameInput.value = '';
      itemQuantityInput.value = '';
    })
    .catch(error => console.error('Error adding item:', error));
  });
});

// Öğe silme işlemi
function deleteItem(id) {
  fetch(`/api/items/${id}`, {
    method: 'DELETE'
  })
  .then(() => {
    fetchItems();
  })
  .catch(error => console.error('Error deleting item:', error));
}
