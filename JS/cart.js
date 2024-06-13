            document.addEventListener('DOMContentLoaded', () => {
            let cartCounter = 0;
            let productQuantity = 1;
        
            const cartCounterElement = document.getElementById('cart-counter');
            const addToCartButton = document.getElementById('add-to-cart-button');
            const increaseQuantityButton = document.getElementById('increase');
            const decreaseQuantityButton = document.getElementById('decrease');
            const productQuantityElement = document.getElementById('product');
        
            addToCartButton.addEventListener('click', () => {
                cartCounter += productQuantity;
                cartCounterElement.textContent = cartCounter;
            });
        
            increaseQuantityButton.addEventListener('click', () => {
                productQuantity++;
                productQuantityElement.textContent = productQuantity;
            });
        
            decreaseQuantityButton.addEventListener('click', () => {
                if (productQuantity > 1) {
                    productQuantity--;
                    productQuantityElement.textContent = productQuantity;
                }
            });
        })