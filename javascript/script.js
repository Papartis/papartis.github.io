function colorChange(x)
{
  if(x.style.backgroundColor === "" || x.style.backgroundColor === "rgb(250, 200, 250)"){
  	  x.style.backgroundColor = "rgb(200, 190, 230)";
  } else if (x.style.backgroundColor === "rgb(200, 190, 230)"){
  	  x.style.backgroundColor = "rgb(160, 250, 160";
  } else {
  	  x.style.backgroundColor = "rgb(250, 200, 250)";
  }
}

class Item {
	constructor({id , name, image, price, size}){
		this.itemId = id;
		this.itemName = name;
		this.itemImage = image;
		this.itemPrice = price;
		this.itemSize = size;
	}
}


function displayItems()
{

  // Generate mock data
  function generateMockData(numberOfItems)
   {
    let itemArray = [];
    let imageSource = "";
    

    function randomName(){
      let randomNumber = Math.floor(Math.random() * 20);
      if(randomNumber < 5)
      {
        imageSource ="https://shorturl.at/qsV25";
        return "Shirt";
      } else if (randomNumber < 10){
        imageSource = "https://bit.ly/311Geer";
        return "Pants";
      } else if (randomNumber < 15){
        imageSource = "https://shorturl.at/fiqrC";
        return "Shoes";
      } else {
        imageSource = "https://shorturl.at/uDLQU";
        return "Glasses";
      }  
    }

    function randomSize(){
      let randomNumber = Math.floor(Math.random() * 30);
      return (randomNumber < 10 ? "S" : (randomNumber < 20 ? "M": "L") );
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
  
  let itemCards = generateMockData(15);


  // Read mock data

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