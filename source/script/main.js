document.addEventListener('DOMContentLoaded', function () {
	const addItemButton = document.getElementById('add-item-btn');
	const parentContainer = document.getElementById('parent-container');

	addItemButton.addEventListener('click', function () {
		const newItemCard = document.createElement('div');
		newItemCard.classList.add('item-card');

		const starsDiv = document.createElement('div');
		starsDiv.classList.add('stars');
		starsDiv.innerHTML = `
      <input type="radio" id="star1" name="rating" value="1" />
      <input type="radio" id="star2" name="rating" value="2" />
      <input type="radio" id="star3" name="rating" value="3" />
      <input type="radio" id="star4" name="rating" value="4" />
      <label for="star1" aria-label="Banana">1 star</label>
      <label for="star2">2 stars</label>
      <label for="star3">3 stars</label>
      <label for="star4">4 stars</label>
    `;
		newItemCard.appendChild(starsDiv);

		const itemTitleInput = document.createElement('input');
		itemTitleInput.setAttribute('type', 'text');
		itemTitleInput.setAttribute('placeholder', 'Item name...');
		itemTitleInput.setAttribute('maxlength', '32');
		itemTitleInput.classList.add('item-card-title');
		newItemCard.appendChild(itemTitleInput);

		const itemMaterialsDiv = document.createElement('div');
		itemMaterialsDiv.classList.add('item-card-materials');

		const materialsLabelsDiv = document.createElement('div');
		materialsLabelsDiv.classList.add('item-card-materials-labels');
		materialsLabelsDiv.innerHTML = `
      <p>Material Name</p>
      <p>Qty</p>
    `;
		itemMaterialsDiv.appendChild(materialsLabelsDiv);

		const materialDiv = document.createElement('div');
		materialDiv.classList.add('material');
		materialDiv.innerHTML = `
      <img src="https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image" alt="lynel" class="material-img">
      <input type="text" class="material-name" placeholder="Material name...">
      <div class="counter">
        <input type="number" class="counter-number" id="item-1-material-1-number" min="1" max="999" value="1">
        <div class="arrow-container">
          <button class="arrow-btn" id="up-arrow" onclick="this.parentNode.parentNode.querySelector('input[type=number]').stepUp()">
            <span class="material-icons">arrow_drop_up</span>
          </button>
          <button class="arrow-btn" id="down-arrow" onclick="this.parentNode.parentNode.querySelector('input[type=number]').stepDown()">
            <span class="material-icons">arrow_drop_down</span>
          </button>
        </div>
      </div>
      <button type="button" class="material-delete">
        <span class="material-icons">delete</span>
      </button>
    `;
		itemMaterialsDiv.appendChild(materialDiv);

		const addMaterialButton = document.createElement('button');
		addMaterialButton.setAttribute('type', 'button');
		addMaterialButton.classList.add('btn', 'btn-edgeless', 'add-material-btn');
		addMaterialButton.setAttribute('id', 'add-material-btn');
		addMaterialButton.innerHTML = 'Add material <span class="material-icons">add</span>';
		newItemCard.appendChild(itemMaterialsDiv);
		newItemCard.appendChild(addMaterialButton);

		parentContainer.appendChild(newItemCard);

		addMaterialButton.addEventListener('click', function () {
			const materialDiv = document.createElement('div');
			materialDiv.classList.add('material');
			materialDiv.innerHTML = `
        <img src="https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image" alt="lynel" class="material-img">
        <input type="text" class="material-name" placeholder="Material name...">
        <div class="counter">
          <input type="number" class="counter-number" min="1" max="999" value="1">
          <div class="arrow-container">
            <button class="arrow-btn" onclick="this.parentNode.parentNode.querySelector('input[type=number]').stepUp()">
              <span class="material-icons">arrow_drop_up</span>
            </button>
            <button class="arrow-btn" onclick="this.parentNode.parentNode.querySelector('input[type=number]').stepDown()">
              <span class="material-icons">arrow_drop_down</span>
            </button>
          </div>
        </div>
        <button type="button" class="material-delete">
          <span class="material-icons">delete</span>
        </button>
      `;

			const itemCard = this.parentNode;
			const itemMaterialsDiv = itemCard.querySelector('.item-card-materials');
			itemMaterialsDiv.appendChild(materialDiv);

			const materialDeleteButton = materialDiv.querySelector('.material-delete');
			materialDeleteButton.addEventListener('click', function () {
				itemMaterialsDiv.removeChild(materialDiv);
				checkAndDeleteItemCard();
			});
		});

		const deleteItemButton = newItemCard.querySelector('.material-delete');
		deleteItemButton.addEventListener('click', function () {
			const itemCard = this.parentNode.parentNode;
			const itemMaterialsDiv = itemCard.querySelector('.item-card-materials');

			if (itemMaterialsDiv.children.length === 1) {
				parentContainer.removeChild(itemCard);
			} else {
				itemMaterialsDiv.removeChild(this.parentNode);
			}
		});

		function checkAndDeleteItemCard() {
			const itemCard = deleteItemButton.parentNode.parentNode;
			const itemMaterialsDiv = itemCard.querySelector('.item-card-materials');

			if (itemMaterialsDiv.children.length === 1) {
				parentContainer.removeChild(itemCard);
			}
		}
	});
});