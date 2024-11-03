const addBtn = document.querySelector('.controls-btn__add');
const addMenu = document.querySelector('.add-menu');
const itemsList = document.querySelector('.items-list')
const selection = document.querySelector('#products-selection')
const asa = document.querySelector('.asa')

const confirmPizzaButton = document.querySelector('.add-menu-button');

addBtn.addEventListener('click', () => {
	addMenu.classList.add('add-menu-visible');
});

confirmPizzaButton.addEventListener('click', () =>{
    const newProduct = document.createElement('li');
    newProduct.textContent = selection.value;
    itemsList.appendChild(newProduct);
    addMenu.classList.remove('add-menu-visible');
})
