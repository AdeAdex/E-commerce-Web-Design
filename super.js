
function openNav() {
  document.getElementById("mySidebar").style.width = "50%";
  document.getElementById("main").style.marginLeft = "50%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
};


function rmv() {
  document.getElementById("alert").style.width = "0";
  document.getElementById("alert").innerHTML = null
  document.getElementById("under").style.width = "100%"
}


/*setInterval(myTimer);

function myTimer() {
  const date = new Date();
  document.getElementById("tim").innerHTML = date.toLocaleTimeString();
};*/

setInterval(myDays);
function myDays() {
  const days = new Date();
  document.getElementById("time").innerHTML = days.toDateString() + " " + days.toLocaleTimeString();
};





function myFunction() {
  document.getElementById("demo").innerHTML = "You copied text!"
};



function increase() {
  document.getElementById("y").style.size = "20px";
};


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let txt = document.getElementsByClassName("lftDiv");
  for (i = 0; i < txt.length; i++) {
    txt[i].style.display = "none";  
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  txt[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 7 seconds
};

function changeMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
};


setTimeout (function myFunc() {
  document.getElementById("showImg").style.display = "block";
  //document.getElementById("bload").innerHTML = " happy";
}, 10000);
//setTimeout(myFunc, 10000);


