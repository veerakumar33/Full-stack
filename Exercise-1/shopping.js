document.addEventListener("DOMContentLoaded", function() {
    // For the Login Page
    if (document.querySelector('.login-container')) {
        const loginButton = document.querySelector('button');
        loginButton.addEventListener('click', function() {
            navigatePages();
        });

        function navigatePages() {
            window.open('products.html', '_self');
        }
    }

    // For the Products Page
    if (document.querySelector('.product-container')) {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach((button) => {
            button.addEventListener('click', () => {
                // Navigate to the payment page after adding a product to the cart
                window.open('payment.html', '_self');
            });
        });
    }

    
    if (document.querySelector('.payment-container')) {
        const placeOrderButton = document.querySelector('button');
        placeOrderButton.addEventListener('click', function() {
            
            alert('Your order has been placed successfully!');
        });
    }
});
