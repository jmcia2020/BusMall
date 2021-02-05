"use strict";
console.log("Open for BusMall!");

var pageData = getPageData();
setProductImages();

function getPageData() {
  if (localStorage.getItem('pageData')){
    return JSON.parse(localStorage.getItem('pageData'));
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

function Product(name, imageUrl, chartColor){
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  this.timesShown = 0;
  this.chartColor = chartColor;
}

function setProductImages() {
  selectRandomProducts ();
  displaySelectedProducts ();
  countTimesImagesShown ();
  savePageData ();
}


function createProductCatalog (){
  return [
  new Product('Bag', 'images/bag.jpg','#A1A3C8'),
  new Product('Banana', 'images/banana.jpg', '#F4C815'),
  new Product('Bathroom', 'images/bathroom.jpg','#B2B2B2'),
  new Product('Boots', 'images/boots.jpg','#EAE5B3'),
  new Product('Breakfast', 'images/breakfast.jpg','#A8A0C6'),
  new Product('Bubblegum', 'images/bubblegum.jpg','#00A34A'),
  new Product('Chair', 'images/chair.jpg','#A4EEF1'),
  new Product('Cthulhu', 'images/cthulhu.jpg','#003207'),
  new Product('Dog-Duck', 'images/dog-duck.jpg','#A15D98'),
  new Product('Dragon', 'images/dragon.jpg','#FE7578'),
  new Product('Pen', 'images/pen.jpg','#0114A6'),
  new Product('Pet-Sweep', 'images/pet-sweep.jpg','#A4EEF1'),
  new Product('Scissors', 'images/scissors.jpg','#B88ECE'),
  new Product('Shark', 'images/shark.jpg','#D1403C'),
  new Product('Tauntaun', 'images/tauntaun.jpg','#8B6D4D'),
  new Product('Unicorn', 'images/unicorn.jpg','#183150'),
  new Product('USB', 'images/usb.gif','#77AA5F'),
  new Product('Water-Can', 'images/water-can.jpg','#4382BB'),
  new Product('Wine-Glass', 'images/wine-glass.jpg','#D284A1'),
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

    drawChart();
  }
  
}


function createListItem(productName, clickCount) {
  var newListItem = document.createElement('li');
  newListItem.classList.add('marketingResultItem');
  newListItem.appendChild(document.createTextNode(productName + ": " + clickCount + " clicks"));
  return newListItem
}


