
function openNav() {
  document.getElementById("mySidebar").style.width = "50%";
  document.getElementById("main").style.marginLeft = "50%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function mytime() {
  document.getElementById("tm").innerHTML = Date();
}

function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "pic/bulboff.gif"
  } else {
    pic = "pic/bulbon.gif"
  }
  document.getElementById('myImage').src = pic;
}

function myFunction() {
  document.getElementById("demo").innerHTML = "You copied text!"
}