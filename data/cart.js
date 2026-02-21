export let cart = JSON.parse(localStorage.getItem('cart')) ||[];

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function cartQuantityUpdate() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });

    const quantity = document.getElementById('js-cart-quantity');
    quantity.innerHTML = cartQuantity;

    if (cartQuantity > 0) {
        quantity.classList.remove('hidden');
    } else {
        quantity.classList.add('hidden');
    }
}

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }

        saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;

    saveToStorage();
}

export function decreaseQuantity(productId) {
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            cartItem.quantity -= 1;
        }
        if (cartItem.quantity === 0) {
            removeFromCart(productId);
        }
    });
    saveToStorage();
}

export function increaseQuantity(productId) {
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            cartItem.quantity += 1;
        }
    });
    saveToStorage();
}