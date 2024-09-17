document.addEventListener('DOMContentLoaded', function() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const viewDetailBtns = document.querySelectorAll('.view-details');
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    let cart = [];
    let total = 0;

    // Modal functionality for viewing product details
    viewDetailBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            modalTitle.innerText = button.dataset.product;
            modalDescription.innerText = button.dataset.description;
            modal.style.display = 'flex';
        });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal if clicking outside of the modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Function to update the cart count and total amount
    function updateCart() {
        cartCount.innerText = cart.length; // Update cart count
        cartTotal.innerText = `$${total.toFixed(2)}`; // Update total amount
    }

    // Function to remove an item from the cart
    function removeItem(index) {
        // Subtract the price of the item being removed
        total -= cart[index].price;

        // Remove item from the cart array
        cart.splice(index, 1);

        // Clear the cart display and re-render items
        renderCartItems();

        // Update cart count and total amount
        updateCart();
    }

    // Function to render cart items
    function renderCartItems() {
        cartItems.innerHTML = ''; // Clear current items

        // Re-render cart items with remove button
        cart.forEach((item, index) => {
            const itemElement = document.createElement('p');
            itemElement.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button class="remove-item" data-index="${index}">Remove</button>`;
            cartItems.appendChild(itemElement);
        });

        // Add event listener for remove buttons
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = button.dataset.index;
                removeItem(index);
            });
        });
    }

    // Add to Cart functionality
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    addToCartBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            const productName = button.dataset.product;
            const productPrice = parseFloat(button.dataset.price);  // Ensure price is a number

            // Add product to cart array
            cart.push({
                name: productName,
                price: productPrice
            });

            // Add product price to total
            total += productPrice;

            // Re-render cart items and update total
            renderCartItems();
            updateCart();
        });
    });

    // Checkout button alert with total amount
    checkoutBtn.addEventListener('click', function() {
        if (cart.length > 0) {
            alert('Proceeding to checkout. Total: $' + total.toFixed(2));
        } else {
            alert('Your cart is empty!');
        }
    });
});
