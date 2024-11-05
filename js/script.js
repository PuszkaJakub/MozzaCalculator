// import {Pizza, menu} from './pizzas.js';
class Pizza {
	constructor(name, number, category, price) {
		this.name = name;
		this.number = number;
		this.category = category;
		this.price = price;
	}
}

const menu = [
	new Pizza('Margheritta', 1, 'Wege', 33),
	new Pizza('Mozza', 2, 'Wege', 37),
	new Pizza('Grilled Garden', 3, 'Wege', 40),
	new Pizza('Pesto (bez mozzarelli)', 4, 'Wege', 40),
	new Pizza('Popey', 5, 'Wege', 40),
	new Pizza('Quattro Formaggi', 6, 'Wege', 41),
	new Pizza('Greco (bianca, bez sosu)', 7, 'Wege', 41),
	new Pizza('Sweet Balsamico', '7.1', 'Wege', 41),
	new Pizza('Quattro Colori', '7.2', 'Wege', 41),
	new Pizza('Italian Lover', 8, 'Z Mięskiem', 41),
	new Pizza('Crudo', 9, 'Z Mięskiem', 41),
	new Pizza('Diesel Rider', 10, 'Z Mięskiem', 41),
	new Pizza('Capriciosa', 11, 'Z Mięskiem', 41),
	new Pizza('Hells Bells', 12, 'Z Mięskiem', 41),
	new Pizza('Jalapeno Honey', 13, 'Z Mięskiem', 41),
	new Pizza('Hot Honey', '13.1', 'Z Mięskiem', 41),
	new Pizza('Pancetta Funghi', 14, 'Z Mięskiem', 41),
	new Pizza('Pancetta Rosmarino', 15, 'Z Mięskiem', 41),
	new Pizza('Spianata Piccante', 16, 'Z Mięskiem', 37),
	new Pizza('Bambini Felici', 17, 'Z Mięskiem', 41),
	new Pizza('Costarica', 18, 'Z Mięskiem', 41),
	new Pizza('Tonno', 19, 'Z Owocami Morza', 44),
	new Pizza('Forrest Gump', 20, 'Z Owocami Morza', 44),
	new Pizza('Frutti di Mare (bez mozzarelli)', 21, 'Z Owocami Morza', 41),
	new Pizza('Alla Puttanesca (bez mozzarelli)', 22, 'Z Owocami Morza', 40),
];

const pizzasPanel = document.querySelector('.panel');

const delivery = document.querySelector('#delivery');
delivery.textContent = 'Dostawa';
const extra = document.querySelector('#extra');
extra.textContent = 'Inne';
const deliveryBtn = document.querySelector('.delivery-btn');
const extraBtn = document.querySelector('.extra-btn');

const summaryPanel = document.querySelector('.products-list');
const productsList = document.querySelector('ul');
const productsListResult = document.querySelector('.products-list-result');
const clearBtn = document.querySelector('.products-list-button-clear');
const productsNumber = document.querySelector('.products-list-counter')

const addNewProduct = product => {
	const newProduct = document.createElement('li');

	newProduct.textContent = product.textContent;
	const newProductPrice = document.createElement('p');
	newProductPrice.textContent = `${product.getAttribute('data-price')} zł`;

	const removeButton = document.createElement('button');
	removeButton.textContent = 'Usuń';
	removeButton.classList.add('products-list-button');
	removeButton.classList.add('products-list-button-remove');
	removeButton.addEventListener('click', removeItem);

	newProduct.appendChild(newProductPrice);
	newProduct.appendChild(removeButton);
	productsList.appendChild(newProduct);
	alert('Dodano nowy element do listy');
	summarize();
};

const addDelivery = () => {
	if (delivery.value !== '') {
		delivery.setAttribute('data-price', (parseFloat(delivery.value) * 3.0).toFixed(2));
		delivery.textContent = `Dostawa - (${delivery.value}km).`;
		addNewProduct(delivery);
		delivery.value = '';
	} else {
		alert('Podaj wartość');
	}
};

const addExtra = () => {
	if (extra.value !== '') {
		extra.setAttribute('data-price', parseFloat(extra.value).toFixed(2));
		addNewProduct(extra);
		extra.value = '';
	} else {
		alert('Podaj wartość');
	}
};

const removeItem = e => {
	e.target.closest('li').remove();
	summarize();
};

const summarize = () => {
	const allPrices = productsList.querySelectorAll('p');
	let sum = 0;
	for (price of allPrices) {
		sum += parseFloat(price.textContent);
	}
	productsListResult.textContent = `${sum} zł.`;
	productsNumber.textContent = `Ilość elementów: ${productsList.childElementCount}`;

};

// Load all the menu
menu.forEach(pizza => {
	const newPizza = document.createElement('button');
	newPizza.classList.add('panel-item');
	newPizza.textContent = `${pizza.number}. ${pizza.name}`;
	newPizza.setAttribute('data-price', `${pizza.price}`);

	newPizza.addEventListener('click', () => {
		addNewProduct(newPizza);
	});

	pizzasPanel.appendChild(newPizza);
});

// Add buttons functions
clearBtn.addEventListener('click', () => {
	productsList.innerHTML = '';
	summarize();
});

deliveryBtn.addEventListener('click', addDelivery);
extraBtn.addEventListener('click', addExtra);
