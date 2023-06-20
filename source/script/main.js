// Create a function to add an item card to the item-container div
function addItemCard() {
	// Define and create Item Card
	const itemCard = document.createElement("div");
	itemCard.classList.add("item-card");

	// Define and create Card Name input
	const itemName = document.createElement("input");
	itemName.classList.add("item-name");
	itemName.setAttribute('type', 'text');
	itemName.setAttribute('placeholder', 'Item name...');
	itemName.setAttribute('maxlength', '32');

	// Define and create item materials section
	const itemMaterials = document.createElement("div");
	itemMaterials.classList.add("item-materials");

	// Define and create materials labels
	const materialsLabels = document.createElement("div");
	materialsLabels.classList.add("materials-labels");
	const materialsLabelOne = document.createElement("p");
	materialsLabelOne.innerText = "Material Name";
	const materialsLabelTwo = document.createElement("p");
	materialsLabelTwo.innerText = "Qty";

	// Define and create material
	const material = document.createElement("div");
	material.classList.add("material");

	// Define and create material image
	const materialImage = document.createElement("img");
	materialImage.classList.add("material-img");
	materialImage.setAttribute('src', 'https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image');
	materialImage.setAttribute('alt', 'Lynel');

	// Define and create material name label
	const materialName = document.createElement("input");
	materialName.classList.add("material-name");
	materialName.setAttribute('type', 'text');
	materialName.setAttribute('placeholder', 'Material name...');
	materialName.setAttribute('maxlength', '32');

	// Define and create material needed counter
	const materialCounter = document.createElement('div');
	materialCounter.classList.add('material-counter');

	// Define material counter number input
	let materialNeeded = document.createElement('input');
	materialNeeded.classList.add('counter-number');
	materialNeeded.setAttribute('type', 'number');
	materialNeeded.setAttribute('value', 1);
	materialNeeded.setAttribute('min', 1);
	materialNeeded.setAttribute('max', 999);

	// Define and create counter button container
	const counterButtonContainer = document.createElement('div');
	counterButtonContainer.classList.add('counter-btn-container');

	// Define and create counter button up
	const counterButtonUp = document.createElement('button');
	counterButtonUp.classList.add('counter-btn');
	counterButtonUp.setAttribute('onclick', "this.parentNode.parentNode.querySelector('input[type=number]').stepUp()");

	// Define and create counter button up Icon
	const counterButtonUpIcon = document.createElement('span');
	counterButtonUpIcon.classList.add('material-icons');
	counterButtonUpIcon.innerText = 'arrow_drop_up';

	// Define and create counter button down
	const counterButtonDown = document.createElement('button');
	counterButtonDown.classList.add('counter-btn');
	counterButtonDown.setAttribute('onclick', "this.parentNode.parentNode.querySelector('input[type=number]').stepDown()");

	// Define and create counter button down Icon
	const counterButtonDownIcon = document.createElement('span');
	counterButtonDownIcon.classList.add('material-icons');
	counterButtonDownIcon.innerText = 'arrow_drop_down';

	// Define and create material delete button
	const deleteMaterial = document.createElement('button');
	deleteMaterial.setAttribute('type', 'button');
	deleteMaterial.setAttribute('id', 'delete-material');

	// Define and create material delete button icon
	const deleteMaterialIcon = document.createElement('span');
	deleteMaterialIcon.classList.add('material-icons');
	deleteMaterialIcon.innerText = 'delete';

	// Define and create add material button
	const addMaterial = document.createElement('button');
	addMaterial.classList.add('btn', 'btn-edgeless');
	addMaterial.setAttribute('id', 'add-material');
	addMaterial.innerText = 'Add material ';

	// Define and create add material icon
	const addMaterialIcon = document.createElement('span');
	addMaterialIcon.classList.add('material-icons');
	addMaterialIcon.innerText = 'add';

	// Append item card to item card container
	document.getElementById('item-container').appendChild(itemCard);

	// Append item name to item card
	itemCard.appendChild(itemName);

	// Append item materials to item card
	itemCard.appendChild(itemMaterials);

	// Append materials labels to item materials container
	itemMaterials.appendChild(materialsLabels);

	// Append materials labels to parent container
	materialsLabels.appendChild(materialsLabelOne);
	materialsLabels.appendChild(materialsLabelTwo);

	// Append material to item materials
	itemMaterials.appendChild(material);

	// Append material image to material
	material.appendChild(materialImage);

	// Append material name to material
	material.appendChild(materialName);

	// Append material counter name to material
	material.appendChild(materialCounter);

	// Append counter number to material counter
	materialCounter.appendChild(materialNeeded);

	// Append counter button container to material counter
	materialCounter.appendChild(counterButtonContainer);

	// Append counter button up to parent container
	counterButtonContainer.appendChild(counterButtonUp);

	// Append counter button down to parent container
	counterButtonContainer.appendChild(counterButtonDown);

	// Append counter button up symobl to parent container
	counterButtonUp.appendChild(counterButtonUpIcon);

	// Append counter button down symobl to parent container
	counterButtonDown.appendChild(counterButtonDownIcon);

	// Append delete material button to material
	material.appendChild(deleteMaterial);

	// Append delete material icon to delete material button
	deleteMaterial.appendChild(deleteMaterialIcon);

	// Append add material button to item card
	itemCard.appendChild(addMaterial);

	// Append add icon to add material button
	addMaterial.appendChild(addMaterialIcon);
}

// Function to create a new panel item
function addPanelItem() {
	// Define and create panel item
	const panelItem = document.createElement('div');
	panelItem.classList.add("panel-item");

	// Define and create panel item image
	const panelItemImage = document.createElement('img');
	panelItemImage.classList.add('panel-item-img');
	panelItemImage.setAttribute('src', 'https://botw-compendium.herokuapp.com/api/v2/entry/apple/image');
	panelItemImage.setAttribute('alt', 'apple');

	// Define and create panel item label
	const panelItemLabel = document.createElement('div');
	panelItemLabel.classList.add('panel-item-label');

	// Define and create panel item label text
	const panelItemLabelText = document.createElement('p');
	panelItemLabelText.innerText(0 + '/' + 4);

	// identify panel content
	const panelContent = document.getElementById('panel-content');

	// Append panel item to panel content
	panelContent.appendChild(panelItem);

	// Append panel image to panel item
	panelItem.appendChild(panelItemImage);

	// Append panel label to panel item
	panelItem.appendChild(panelItemLabel);

	// Append panel label text to panel label
	panelItemLabel.appendChild(panelItemLabelText);
}

//// From Zach
//
//class Material {
//	constructor(materialName, imgSrc, currentCount = 0, neededCount = 0) {
//		this.materialName = materialName;
//		this.imgSrc = imgSrc;
//		this.currentCount = currentCount;
//		this.neededCount = neededCount;
//	}
//
//	generateHtml(materialPanel) {
//		const materialElement = document.createElement("div");
//		materialElement.classList.add("panel-item");
//		const materialImage = document.createElement("img");
//		materialImage.classList.add("panel-item-img");
//		materialImage.src = this.imgSrc;
//		const nestedDiv = document.createElement("div");
//		nestedDiv.classList.add("panel-item-pill");
//		const nestedParagraph = document.createElement("p");
//		nestedParagraph.innerText = `${this.currentCount}/${this.neededCount}`;
//
//		// Append nested paragraph to div
//		nestedDiv.appendChild(nestedParagraph);
//
//		// append both children to outer div
//		materialElement.appendChild(materialImage);
//		materialElement.appendChild(nestedDiv);
//
//		// finally append new material to outer panel
//		materialPanel.appendChild(materialElement);
//	}
//}
//
//const materialList = [
//    new Material(
//		"Apple",
//		"https://botw-compendium.herokuapp.com/api/v2/entry/apple/image",
//		0,
//		2
//	)
//    // {
//    //  materialName: "Apple",
//    //  imgSrc: "https://botw-compendium.herokuapp.com/api/v2/entry/apple/image",
//    //  currentCount: 0,
//    //  neededCount: 2
//    // },
//    // {
//    //  materialName: "Apple",
//    //  imgSrc: "https://botw-compendium.herokuapp.com/api/v2/entry/apple/image",
//    //  currentCount: 0,
//    //  neededCount: 2
//    // },
//  ];
//
//const materialPanel = document.getElementById("panel-content");
//
//materialList.forEach((material) => {
//	material.generateHtml(materialPanel);
//	// ORIGINAL BEFORE CLASS IMPLEMENTATION
//	// const materialElement = document.createElement("div");
//	// materialElement.classList.add("panel-item");
//	// const materialImage = document.createElement("img");
//	// materialImage.classList.add("panel-item-img");
//	// materialImage.src = material.imgSrc;
//	// const nestedDiv = document.createElement("div");
//	// nestedDiv.classList.add("panel-item-pill");
//	// const nestedParagraph = document.createElement("p");
//	// nestedParagraph.innerText = `${material.currentCount}/${material.neededCount}`;
//	// // Append nested paragraph to div
//	// nestedDiv.appendChild(nestedParagraph);
//	// // append both children to outer div
//	// materialElement.appendChild(materialImage);
//	// materialElement.appendChild(nestedDiv);
//	// // finally append new material to outer panel
//	// materialPanel.appendChild(materialElement);
//});
