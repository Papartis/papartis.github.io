class Item {
	constructor({id , name, image, price, size}){
		this.itemId = id;
		this.itemName = name;
		this.itemImage = image;
		this.itemPrice = price;
		this.itemSize = size;
	}
}


// Generate mock data, return an array of objects
function generateMockData(numberOfItems)
   {
    let itemArray = [];
    let imageSource = "";
    

    function randomName(){
      let randomNumber = Math.floor(Math.random() * 20);
      if(randomNumber < 5)
      {
        imageSource ="img/shirt.jpg";
        return "Shirt";
      } else if (randomNumber < 10){
        imageSource = "img/pants.jpg";
        return "Pants";
      } else if (randomNumber < 15){
        imageSource = "img/shoes.jpg";
        return "Shoes";
      } else {
        imageSource = "img/glasses.png";
        return "Glasses";
      }  
    }

    function randomSize(){
      let randomNumber = Math.floor(Math.random() * 30);
      return (randomNumber < 10 ? "S" : (randomNumber < 20 ? "M": "L"));
    }

    for(let i = 0; i < numberOfItems; i++){
        const generatedItem = {"id": i + 1,
           "name": randomName(),
           "image": imageSource,
           "price": Math.floor(Math.random() * 50),
           "size": randomSize()
         };
    itemArray.push(generatedItem);
    }
    return itemArray;
  };

//Open form modal
let openModalBtn = document.getElementById("openFormModal");
let modal = document.getElementById("formModal");
let span = document.getElementsByClassName("close")[0];
let createItemBtn = document.getElementById("createItem");

openModalBtn.onclick = function(){modal.style.display = "block"}; //Make modal visible
span.onclick = () => {modal.style.display = "none"}; //Make modal invisible after x is clicked
//Make modal invisible after click outside of modal
window.onclick = function(event) { 
  if (event.target == modal) {
  modal.style.display = "none";
  }
}

createItemBtn.onclick = function(){
  let title = document.getElementById("title").value;
  let image = document.getElementById("image").value;
  let price = document.getElementById("price").value;
  let size = document.getElementById("size").value;
  let itemCardArr = document.getElementsByClassName("itemCard");
  let lastItemId = parseInt(itemCardArr[itemCardArr.length - 1].id) + 1 ;

  displayItems([{"id": lastItemId, "name": title, "image": image,"price": price,"size": size}]);
  modal.style.display = "none";
}

//Display objects in HTML
function displayItems(itemArray)
{ 
  
  let itemCards = itemArray;


  for(let i = 0; i < itemCards.length; i++){
    let itemCard = new Item(itemCards[i]);

  // Get property names of the object in to an array for later use in cycle iteration
  let ownProps = [];
  for (let property in itemCard) {
  	if(itemCard.hasOwnProperty(property)){
  		ownProps.push(property);
  	}
  }


  // Generating DOM HTML elements
  let divElement = document.createElement("div");
  divElement.className = "itemCard";
  divElement.id = itemCard.itemId;
  
  for(let i = 0; i < ownProps.length; i++){
  	switch(ownProps[i]){
      case "itemImage":
  		  var itemElement = document.createElement("img");
 		    itemElement.src = itemCard[ownProps[i]];
        divElement.appendChild(itemElement);
      break;
  	  case "itemId":		
        itemElement = document.createElement("p");
        var itemContent = document.createTextNode(`Id: ${itemCard[ownProps[i]]}`);
        divElement.appendChild(itemElement);
        itemElement.appendChild(itemContent);
  	  break;
      case "itemName":    
        itemElement = document.createElement("p");
        itemContent = document.createTextNode(`Name: ${itemCard[ownProps[i]]}`);
        divElement.appendChild(itemElement);
        itemElement.appendChild(itemContent);
      break;
      case "itemPrice":    
        itemElement = document.createElement("p");
        itemContent = document.createTextNode(`Price: ${itemCard[ownProps[i]]} $`);
        divElement.appendChild(itemElement);
        itemElement.appendChild(itemContent);
      break;
      case "itemSize":    
        itemElement = document.createElement("p");
        itemContent = document.createTextNode(`Size: ${itemCard[ownProps[i]]}`);
        divElement.appendChild(itemElement);
        itemElement.appendChild(itemContent);
      break;
      default:
        itemElement = document.createElement("p");
        itemContent = document.createTextNode(`Unknown: ${itemCard[ownProps[i]]}`);
        divElement.appendChild(itemElement);
        itemElement.appendChild(itemContent);
  }

  let itemListDiv = document.getElementById("itemList");
  itemListDiv.appendChild(divElement);
 }
}
}