export let cart = [];


export function cartQuantityUpdate() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });

    const quantity = document.getElementById('js-cart-quantity');
    document.querySelector('#js-cart-quantity').innerHTML = cartQuantity;

    if (cartQuantity > 0) {
        quantity.classList.remove('hidden');
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
    } else
        cart.push({
            productId: productId,
            quantity: 1
        });
}