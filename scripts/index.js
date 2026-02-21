import { products } from "../data/products.js";
import { cartQuantityUpdate, addToCart,} from "../data/cart.js";
import { renderCart, totalCost } from "./checkout.js";

const navBar = document.querySelector('.nav-bar');
const menuBar = document.querySelector('.menu-bar');
const menuIcon = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.menu-close');
const cartIcon = document.querySelector('.cart-icon');
const cartPage = document.querySelector('.cart-page');
const cartClose = document.querySelector('.cart-close');


menuBar.addEventListener('click', () => {
    navBar.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
});
cartIcon.addEventListener('click', () => {
    cartPage.classList.toggle('hidden');
});
cartClose.addEventListener('click', () => {
    cartPage.classList.add('hidden');
});

let productsHTML = '';
products.forEach((product) => {
    productsHTML += `
    <div class="h-fit relative">
        <img class="w-full h-40 object-cover transition-transform hover:scale-110 cursor-pointer" src="${product.image}" alt="Lingerie">
        <div class="font-medium leading-snug capitalize py-2">
            <span class="text-xs">${product.category}</span>
            <p class="text-sm">${product.name}</p>
        </div>
        <span class="font-bold">&#8358;${product.price}</span>
        <button class="js-add-cart-btn" data-product-id="${product.id}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" size-6 text-blue-600 absolute right-0 bottom-0.5 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        </button>
    </div>
    `
});

document.getElementById('js-products').innerHTML = productsHTML;


document.querySelectorAll('.js-add-cart-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        cartQuantityUpdate();
        renderCart();
        totalCost();
    });
});
