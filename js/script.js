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
const summaryBtn = document.querySelector('.summary-calculate');
const clearBtn = document.querySelector('.summary-clear');

const delivery = document.querySelector('#delivery');
delivery.textContent = 'Dostawa';
const extra = document.querySelector('#extra');
extra.textContent = 'Inne';
const deliveryBtn = document.querySelector('.delivery-btn');
const extraBtn = document.querySelector('.extra-btn');

const summaryPanel = document.querySelector('.popup-list');
const productsList = document.querySelector('ul');
const popupCloseBtn = document.querySelector('.popup-list-button');
const popupResult = document.querySelector('.popup-list-result');

const addNewProduct = product => {
	const newProduct = document.createElement('li');

	newProduct.textContent = product.textContent;
	const newProductPrice = document.createElement('p');
	newProductPrice.textContent = `${product.getAttribute('data-price')} zł`;

	const removeButton = document.createElement('button');
	removeButton.textContent = 'Usuń';
	removeButton.classList.add('popup-list-button');
	removeButton.classList.add('popup-list-button-remove');
	removeButton.addEventListener('click', removeItem);

	newProduct.appendChild(newProductPrice);
	newProduct.appendChild(removeButton);
	productsList.appendChild(newProduct);
	alert('Dodano nowy element do listy')
	summarize()
};

const addDelivery = () => {
	delivery.setAttribute('data-price', delivery.value * 3);
	delivery.textContent = `Dostawa - (${delivery.value}km).`;
	addNewProduct(delivery);
};

const addExtra = () => {
	extra.setAttribute('data-price', extra.value);
	addNewProduct(extra);
};

const removeItem = e => {
	e.target.closest('li').remove();
	summarize();
};

const summarize = () => {
	const allPrices = productsList.querySelectorAll('p');
	console.log(allPrices);
	let sum = 0;
	for (price of allPrices) {
		sum += parseFloat(price.textContent);
	}
	popupResult.textContent = `${sum} zł.`;
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
summaryBtn.addEventListener('click', () => {
	summaryPanel.classList.add('popup-list-visible');
	summarize();
});

popupCloseBtn.addEventListener('click', () => {
	summaryPanel.classList.remove('popup-list-visible');
});

clearBtn.addEventListener('click', () => {
	productsList.innerHTML = ''
	summarize()
});

deliveryBtn.addEventListener('click', addDelivery);
extraBtn.addEventListener('click', addExtra);
