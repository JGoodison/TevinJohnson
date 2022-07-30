let text = document.getElementsByClassName("text");
window.onload = function deleteText(){
    
    // let text3 = document.getElementsByClassName("text3");
    // text2.style.opacity = 0;
    // text3.style.opacity = 0;
    text.style.display = "none";
   }

// function deleteText(){
    

// }
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}

// function byeText(){
//     let text2 = document.getElementsByClassName("text2");
//     let text3 = document.getElementsByClassName("text3");
//     text2.style.display="none";
//     text3.style.display="none";
// }


// Listening button action
// function listenFunction(){
//     let listenBtn = document.getElementsByClassName('listenBtn');

//     for(let i = 0; i < listenBtn.length; i++){
//         if(n==1){
//             listenBtn[0].style.opacity= "0";
//             break;
//         }
//         else if(n>1){
//             for(let last = i-1; last>=0; last--){
//                 listenBtn[i].style.opacity='0';
//                 listenBtn[last].style.opacity= "1";
//             }
//         }
//     }
//     listenBtn.style.opacity='0';
    
// }


// function opacity(){
//     let musicButton = document.getElementsByClassName("music-buttons");
//     let gridItemButton = document.getElementsByClassName("grid__item");
//     let listenButton = document.getElementsByClassName("listenBtn");
    
    
// }

// function showImage(){
//     let listenBtn = document.getElementsByClassName("image");
//     listenBtn.style.opacity="1";
// }
// let i = 0;
// function listenFunction(n){
//     if(image.className == "open"){
//         image.className = "";
//         listen-button.innerHTML = "LISTEN"; 
//     }
//     else{

//     }

    
// }

