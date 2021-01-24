"use strict";
console.log("Open for BusMall!");

// Display three unique products by chance so that the viewers can pick a favorite.

// Create a constructor function that creates an object associated with each product, and has the following properties:

// Name of the product
// File path of image
// Times the image has been shown


//These are in an html collection(array) use ref to image index instead of id's for tracking images shown we are still going to count total clicks and each image's click amount.

var imageElements = document.getElementsByTagName('img');

var productIndex1 = 0;
var productIndex2 = 1;

var rounds = 5;
var allProducts = [];

function Product(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  allProducts.push(this);


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
    new Product('USB', 'images/usb.jpg');
    new Product('Water-Can', 'images/water-can.jpg');
    new Product('Wine-Glass', 'images/wine-glass.jpg');


// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

var totalClicks = 0;
function imageWasClicked(event){

  totalClicks++;
  if(event.srcElement.id === '1'){
    allProducts[productIndex1].timesClicked++;
  } else if (event.srcElement[productIndex2] === '2'){
    allProducts[productIndex2].timesClicked++;
  }


  //logic so that we dont see the same images from click to click
  var nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  while((nextProductIndex1 === productIndex1) || (nextProductIndex1 === nextProductIndex2)){
    nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  }

  var nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  while((nextProductIndex2 === productIndex2) || (nextProductIndex2 === nextProductIndex1)){
    nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  }


  //relfect the updates to the new values next pizzas
  //set up reference to new pizza images.
  productIndex1 = nextProductIndex1;
  productIndex2 = nextProductIndex2;

  imageElements[0].src = allProducts[productIndex1].imageUrl;
  imageElements[1].src = allProducts[productIndex2].imageUrl;


  // For each of the three images, increment its property of times it has been shown by one.
  productIndex1 = nextProductIndex1;
  productIndex2 = nextProductIndex2;

  imageElements[0].src = allProducts[productIndex1].imageUrl;
  imageElements[1].src = allProducts[productIndex2].imageUrl;


if(totalClicks >= rounds){
    var footerElement = document.getElementsByTagName('footer')[0];
    if(footerElement.firstElementChild){
      footerElement.firstElementChild.remove();
    }
    footerElement.textContent = 'You chose 5 images. Thank you for your input!';
  }//closing image was clicked.

// Attach an event listener to the section of the HTML page where the images are going to be displayed.

for(var i = 0; i < imageElements.length; i++){
  console.log('this is the even listener for the click on pizza event.');
  imageElements[i].addEventListener('click', imageWasClicked);
}