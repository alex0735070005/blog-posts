'use strict'

const ar = [
    { id: 1, name: 'product-1' },
    { id: 2, name: 'product-2' },
    { id: 3, name: 'product-3' },
    { id: 4, name: 'product-4' },
    { id: 5, name: 'product-5' },
    { id: 6, name: 'product-6' },
]

const container = document.querySelector('#products');
const cart = document.querySelector('#cart');

for (let product of ar) {

    const wrap = document.createElement('div');
    wrap.className = 'product';

    wrap.onclick = function () {

        const id = +this.dataset.productId;

        const product = ar.find(p => p.id === id);
        
        const wrap = document.createElement('div');
        wrap.className = 'cart-product';

        const h2 = document.createElement('h2');
        h2.innerHTML = product.name;

        wrap.appendChild(h2);

        cart.appendChild(wrap);
    }

    wrap.dataset.productId = product.id;

    const h2 = document.createElement('h2');

    h2.innerHTML = product.name;

    wrap.appendChild(h2);

    container.appendChild(wrap);
}