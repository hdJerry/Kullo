 let nav_div = document.getElementById('nav__div');

 window.onscroll = function () {
     myFunction()
 };
 window.onload = function () {
     myFunction()
 };

 function myFunction() {
     if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
         nav_div.classList.add("active");
     } else {
         nav_div.classList.remove("active");
     }
 }