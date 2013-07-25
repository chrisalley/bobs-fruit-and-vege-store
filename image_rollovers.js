function createImageLists() {
  imageList = new Array();
  imageRollOverList = new Array();
    
  imageList[0] = "images/home.png";
  imageList[1] = "images/produce.png";
  imageList[2] = "images/fruit.png";
  imageList[3] = "images/veges.png";
  imageList[4] = "images/suppliers.png";
  imageList[5] = "images/contact.png";   
      
  imageRollOverList[0] = "images/home_rollover.png";
  imageRollOverList[1] = "images/produce_rollover.png";
  imageRollOverList[2] = "images/fruit_rollover.png";
  imageRollOverList[3] = "images/veges_rollover.png";
  imageRollOverList[4] = "images/suppliers_rollover.png";
  imageRollOverList[5] = "images/contact_rollover.png";
}
    
function preload() {
  createImageLists();
  images = new Array();
  for (var i = 0; i < imageRollOverList.length; i++) {
    images[i] = new Image();
    images[i].src = imageRollOverList[i];
  }
}
    
function showRollOverImage(imageNumber) {
  var imageId = "image" + imageNumber;
  document.getElementById(imageId).src = imageRollOverList[imageNumber];
}
    
function showNormalImage(imageNumber) {
  var imageId = "image" + imageNumber;
  document.getElementById(imageId).src = imageList[imageNumber];
}
    
window.onload = preload;
