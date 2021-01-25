"use strict";
console.log("Open for BusMall!");

var nextProductIndex1 = 0;
var nextProductIndex2 = 0;
var nextProductIndex3 = 0;
var allProducts = [];
var totalClicks = 0;
var rounds = 5;


collectMarketingData();

function collectMarketingData (){
  createProductCatalog ();
  selectRandomProducts ();
  displayRandomProducts ();
  countTimesImagesShown ();
  productWasClicked ();
  roundsComplete ();
  results ();
}

function createProductCatalog (){
  new Product('Bag', 'images/bag.jpg');
  new Product('Banana', 'images/banana.jpg');
  new Product('Bathroom', 'images/bathroom.jpg');
  new Product('Boots', 'images/boots.jpg');
  new Product('Breakfast', 'images/breakfast.jpg');
  new Product('Bubblegum', 'images/bubblegum.jpg');
  new Product('chair', 'images/chair.jpg');
  new Product('Cthulhu', 'images/cthulhu.jpg');
  new Product('Dog-Duck', 'images/dog-duck.jpg');
  new Product('Dragon', 'images/dragon.jpg');
  new Product('Pen', 'images/pen.jpg');
  new Product('Pet-Sweep', 'images/pet-sweep.jpg');
  new Product('Scissors', 'images/scissors.jpg');
  new Product('Shark', 'images/shark.jpg');
  new Product('Tauntaun', 'images/tauntaun.jpg');
  new Product('Unicorn', 'images/unicorn.jpg');
  new Product('USB', 'images/usb.gif');
  new Product('Water-Can', 'images/water-can.jpg');
  new Product('Wine-Glass', 'images/wine-glass.jpg');
}

function selectRandomProducts (){
  nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  
  nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  while((nextProductIndex2 === nextProductIndex1))
  {
    nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  }

  nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
  while((nextProductIndex3 === nextProductIndex2) || (nextProductIndex3 === nextProductIndex1))
  {
    nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
  }
}

function displayRandomProducts (){
  var productElements = document.getElementsByTagName('img');

  productElements[1].src = allProducts[nextProductIndex1].imageUrl;
  productElements[2].src = allProducts[nextProductIndex2].imageUrl;
  productElements[3].src = allProducts[nextProductIndex3].imageUrl;

  for(var i = 0; i < productElements.length; i++){
    console.log("You chose a product and I'm listening.");
    productElements[i].addEventListener('click', productWasClicked);
  }
}

function countTimesImagesShown (){
  allProducts[nextProductIndex1].timesShown++;
  allProducts[nextProductIndex2].timesShown++;
  allProducts[nextProductIndex3].timesShown++;
}

function productWasClicked(event){ 
  totalClicks++;
  if(event.srcElement[nextProductIndex1] === '1')
  {
    allProducts[nextProductIndex1].timesClicked++;
  } 
  
  else if (event.srcElement[nextProductIndex2] === '2')
  {
    allProducts[nextProductIndex2].timesClicked++;
  }
  else if (event.srcElement[nextProductIndex3] === '3')
  {
    allProducts[nextProductIndex2].timesClicked++;
  }

  selectRandomProducts ();
  displayRandomProducts ();
  countTimesImagesShown ();
}

function roundsComplete (){
  if(totalClicks >= rounds){
    var asideElement = document.getElementsByTagName('aside')[0];
    if(asideElement.firstElementChild){
      asideElement.firstElementChild.remove();
    }
    footerElement.textContent = 'You chose 5 products. Thank you for your input!';
  }//closing image was clicked.
}

function 
  Product(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  this.timesShown = 0;
  allProducts.push(this);
}

function results(){
  var resultsElement=document.getElementById('results');

  Product.prototype.render = function(){
    for (var i = 0; i < allProducts.length; i++){
      allProducts = document.createElement(np);
      var resultsStr = allProducts(i).name + 'was clicked:';
      allProducts.textContent = resultsStr;
      resultsElement.appendChild(); allProducts;
    }
  }
} 