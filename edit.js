const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  const newItem = document.getElementById('item').value;

  // Create new li element
  const li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  const deleteBtn = document.createElement('button');

  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Create edit button element
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.className = "btn btn-warning btn-sm float-center";

  // Add a click event listener to the edit button
  editButton.addEventListener('click', () => {
    // TODO: Add edit functionality
  });

  // Insert the edit button after the delete button
  li.insertBefore(editButton, deleteBtn.nextSibling);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  const text = e.target.value.toLowerCase();

  // Get lis
  const items = itemList.getElementsByTagName('li');

  // Convert to an array
  Array.from(items).forEach(item => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if(itemName.indexOf(text) !== -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
