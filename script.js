// Create an empty cart array to hold items
let cart = [];

// Function to update the cart display in the UI
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items'); // Cart item list
    const totalPrice = document.getElementById('total-price'); // Total price display

    // Clear the current cart display
    cartItems.innerHTML = '';

    let total = 0;

    // Loop through the cart items and display them
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price; // Add the item price to the total
    });

    // Update the total price display
    totalPrice.textContent = total.toFixed(2); // Format the total to 2 decimal places
}

// Function to handle the "Add to Cart" button click
function handleAddToCart(event) {
    // Get product name and price from the button's data attributes
    const productName = event.target.getAttribute('data-name');
    const productPrice = parseFloat(event.target.getAttribute('data-price'));

    // Add the product to the cart array
    cart.push({ name: productName, price: productPrice });

    // Update the cart display in the UI
    updateCartDisplay();
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', handleAddToCart);
});

// Checkout button functionality (optional)
const checkoutButton = document.getElementById('checkout');
if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert(`Checking out with ${cart.length} item(s), total price: $${document.getElementById('total-price').textContent}`);
        } else {
            alert('Your cart is empty.');
        }
    });
}

// Function to show product details
function showProductDetails(name, price, image, description) {
    // Set the product details in the modal
    document.getElementById('modal-product-name').textContent = name;
    document.getElementById('modal-product-price').textContent = price;
    document.getElementById('modal-product-image').src = 'images/' + image;  // Assuming the image is in the images folder
    document.getElementById('modal-product-description').textContent = description;

    // Display the modal
    document.getElementById('productModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}
