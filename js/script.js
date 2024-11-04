// import {Pizza, menu} from './pizzas.js';
class Pizza {
	constructor(name, category, price) {
		this.name = name;
		(this.category = category), (this.price = price);
	}
}

const menu = [
	new Pizza('Margheritta', 'Wege', 33),
	new Pizza('Mozza', 'Wege', 37),
	new Pizza('Grilled Garden', 'Wege', 40),
	new Pizza('Pesto (bez mozzarelli)', 'Wege', 40),
	new Pizza('Popey', 'Wege', 40),
	new Pizza('Quattro Formaggi', 'Wege', 41),
	new Pizza('Greco (bianca, bez sosu)', 'Wege', 41),
	new Pizza('Sweet Balsamico', 'Wege', 41),
	new Pizza('Quattro Colori', 'Wege', 41),
	new Pizza('Italian Lover', 'Z Mięskiem', 41),
	new Pizza('Crudo', 'Z Mięskiem', 41),
	new Pizza('Diesel Rider', 'Z Mięskiem', 41),
	new Pizza('Capriciosa', 'Z Mięskiem', 41),
	new Pizza('Hells Bells', 'Z Mięskiem', 41),
	new Pizza('Jalapeno Honey', 'Z Mięskiem', 41),
	new Pizza('Hot Honey', 'Z Mięskiem', 41),
	new Pizza('Pancetta Funghi', 'Z Mięskiem', 41),
	new Pizza('Pancetta Rosmarino', 'Z Mięskiem', 41),
	new Pizza('Spianata Piccante', 'Z Mięskiem', 37),
	new Pizza('Bambini Felici', 'Z Mięskiem', 41),
	new Pizza('Costarica', 'Z Mięskiem', 41),
	new Pizza('Tonno', 'Z Owocami Morza', 44),
	new Pizza('Forrest Gump', 'Z Owocami Morza', 44),
	new Pizza('Frutti di Mare (bez mozzarelli)', 'Z Owocami Morza', 41),
	new Pizza('Alla Puttanesca (bez mozzarelli)', 'Z Owocami Morza', 40),
];


const pizzasPanel = document.querySelector('.panel');

menu.forEach(pizza => {
	const newPizza = document.createElement('div');
	newPizza.classList.add('panel-item');
	newPizza.textContent = `${pizza.name}`;
	newPizza.setAttribute('data-price', `${pizza.price}`)
	pizzasPanel.appendChild(newPizza);
});
