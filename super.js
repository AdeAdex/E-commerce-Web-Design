
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


let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementById("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}



function myFunction() {
  document.getElementById("demo").innerHTML = "You copied text!"
}

function sub() {
  document.getElementById("outputp").innerHTML = confirm("Thank you for filling out this form, your login details have being received");
}

function increase() {
  document.getElementById("y").style.size = "20px";
};


let myTimeout = setTimeout(myGreeting, 5000);
function myGreeting() {
  let pics =  "pic/LG-Rollable2.gif"
  document.getElementById("demo8").src = pics;
}




let myTimeout2 = setTimeout(showCar, 5000);
function showCar() {
  let picss =  "pic/2022.gif"
  document.getElementById("display").src = picss;
}
