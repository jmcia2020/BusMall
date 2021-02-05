"use strict";
console.log("Open for BusMall!");
// localStorage.clear()
var pageData = getPageData();
setProductImages();

function getPageData() {
  if (localStorage.getItem('pageData')){
    return JSON.parse(localStorage.getItem(pageData));
  }
  else {
    let pageData = {
      'productIndex1': -1,
      'productIndex2': -1,
      'productIndex3': -1,
      'totalClicks': 0,
      'roundsBeforeDisplay': 5,
      'productCatalog': createProductCatalog()
    };
    localStorage.setItem("pageData", JSON.stringify (pageData));
    return pageData;
  }
}

function Product(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  this.timesShown = 0;
}

function setProductImages() {
  selectRandomProducts ();
  displaySelectedProducts ();
  countTimesImagesShown ();
  savePageData ();
}


function createProductCatalog (){
  return [
  new Product('Bag', 'images/bag.jpg'),
  new Product('Banana', 'images/banana.jpg'),
  new Product('Bathroom', 'images/bathroom.jpg'),
  new Product('Boots', 'images/boots.jpg'),
  new Product('Breakfast', 'images/breakfast.jpg'),
  new Product('Bubblegum', 'images/bubblegum.jpg'),
  new Product('Chair', 'images/chair.jpg'),
  new Product('Cthulhu', 'images/cthulhu.jpg'),
  new Product('Dog-Duck', 'images/dog-duck.jpg'),
  new Product('Dragon', 'images/dragon.jpg'),
  new Product('Pen', 'images/pen.jpg'),
  new Product('Pet-Sweep', 'images/pet-sweep.jpg'),
  new Product('Scissors', 'images/scissors.jpg'),
  new Product('Shark', 'images/shark.jpg'),
  new Product('Tauntaun', 'images/tauntaun.jpg'),
  new Product('Unicorn', 'images/unicorn.jpg'),
  new Product('USB', 'images/usb.gif'),
  new Product('Water-Can', 'images/water-can.jpg'),
  new Product('Wine-Glass', 'images/wine-glass.jpg'),
  ];
}

function selectRandomProducts (){
  pageData.productIndex1 = Math.floor(Math.random() * pageData.productCatalog.length);
  
  do {
    pageData.productIndex2 = Math.floor(Math.random() * pageData.productCatalog.length);
  } while (pageData.productIndex2 === pageData.productIndex1)

  do {
    pageData.productIndex3 = Math.floor(Math.random() * pageData.productCatalog.length);
  } while (pageData.productIndex3 === pageData.productIndex1 || pageData.productIndex3 === pageData.productIndex2)
}


function displaySelectedProducts (){
  addSourceAndHandleClickEvent('productImage1', pageData.productCatalog[pageData.productIndex1].imageUrl);
  addSourceAndHandleClickEvent('productImage2', pageData.productCatalog[pageData.productIndex2].imageUrl);
  addSourceAndHandleClickEvent('productImage3', pageData.productCatalog[pageData.productIndex3].imageUrl);
}

function addSourceAndHandleClickEvent(elementName, imageSource){
  document.getElementById(elementName).src = imageSource;
  document.getElementById(elementName).addEventListener('click', handleProductImageClicked);
}

function countTimesImagesShown (){
  pageData.productCatalog[pageData.productIndex1].timesShown++;
  pageData.productCatalog[pageData.productIndex2].timesShown++;
  pageData.productCatalog[pageData.productIndex3].timesShown++;
}

function handleProductImageClicked(productImageClickEvent) { 
  if (productImageClickEvent != null) {
    pageData.totalClicks++;

    if (productImageClickEvent.srcElement.id === 'productImage1') {
      pageData.productCatalog[pageData.productIndex1].timesClicked++;
    }
    else if (productImageClickEvent.srcElement.id === 'productImage2') {
      pageData.productCatalog[pageData.productIndex2].timesClicked++;
    }
    else if (productImageClickEvent.srcElement.id === 'productImage3') {
      pageData.productCatalog[pageData.productIndex3].timesClicked++;
    }
  
    showResults();

    setProductImages();
  }
}

function savePageData() {
  localStorage.setItem("pageData", JSON.stringify(pageData));
}

function showResults() {
  if (pageData.totalClicks > pageData.roundsBeforeDisplay) {
    var marketingResultList = document.getElementById('marketingResults');
    marketingResultList.innerHTML = '';
    for (var product of pageData.productCatalog) {
      marketingResultList.appendChild(createListItem(product.name, product.timesClicked));
    }
  }
}


function createListItem(productName, clickCount) {
  var newListItem = document.createElement('li');
  newListItem.classList.add('marketingResultItem');
  newListItem.appendChild(document.createTextNode(productName + ": " + clickCount + " clicks"));
  return newListItem
}


