// const searchBar = document.getElementById("searchBar");

// searchBar.addEventListener("keyup", (e) => {
//   const searchString = e.target.value;
// });




// java for changing elephant images on individual item page

function changeImage(fileName){
  let img = document.querySelector("#bigelephantimg");
  img.setAttribute("src", fileName);
}

// java for automatically chaning images every 3 seconds

// https://www.youtube.com/watch?v=4YQ4svkETS0
// used this guide with help

var i = 0;
var images = [];
var time = 3000;

images[0] = 'images/grogu.webp';
images[1] = 'images/toysale.jpeg';

function changeImg (){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;

  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;