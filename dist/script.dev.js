"use strict";

var menuBtn = document.getElementById('menu-btn');
var nav = document.getElementById('navbar');
var toggleDarkmode = document.getElementById('toggle-dark-mode'); // Toggle navigation menu on small screens

menuBtn.addEventListener('click', function () {
  nav.classList.toggle('show');

  if (nav.classList.contains('show')) {
    menuBtn.innerHTML = '&times;'; // Change to times icon
  } else {
    menuBtn.innerHTML = '&#9776;'; // Change back to hamburger icon
  }
}); // Toggle dark mode

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);
/*-- Accept to download Cv--*/

var cv_link = document.getElementById('cv_link').addEventListener('click', function () {
  alert('Are you sure you want to download wamilimo cv?');
}); // Simple typewriter effect

var textElement = document.getElementById('typing-text');
var texts = ["Hello folks, I'm Dr.Wamilimo Hillarie! 👋", "I'm a passionate Full Stack Web Engineer and App Developer 💻🎨", "I have a deep interest in AI and Networking 🤖🔗", "Learning AI keeps me competitive and drives my innovative spirit 🚀", "Check out my work and experience in web development 🌐", "More on the About Page 📖➡️"];
var textIndex = 0;
var charIndex = 0;
var typingSpeed = 80; // typing speed in milliseconds

var erasingSpeed = 20; // erasing speed in milliseconds

var delayBetweenTexts = 2000; // delay between texts in milliseconds

function type() {
  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, typingSpeed);
});
/*CLIENT TESTIMONIAL EVENT*/

document.querySelectorAll('.read-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var testimonialCard = this.nextElementSibling;
    testimonialCard.style.display = 'block';
  });
});
document.querySelectorAll('.close-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var testimonialCard = this.parentElement;
    testimonialCard.style.display = 'none';
  });
});
/*---slides for technology*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("myslide");
  /*retrieves all the slide elements*/

  for (var i = 0; i < slides.length; i++) {
    /*iterates through each slide*/
    slides[i].style.display = "none"; // Hide all slides
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset index if it exceeds number of slides
  }

  slides[slideIndex - 1].style.display = "block"; // Display current slide

  setTimeout(showSlides, 2000); // Change slide every 2 seconds (2000 milliseconds)
}

document.addEventListener("DOMContentLoaded", function () {
  var figures = document.querySelectorAll('figure');

  function checkFigures() {
    figures.forEach(function (figure, index) {
      var rect = figure.getBoundingClientRect();

      if (rect.top <= window.innerHeight - 100 && rect.bottom >= 0) {
        setTimeout(function () {
          figure.classList.add('show');
        }, index * 150); // Stagger animations by 150ms
      } else {
        figure.classList.remove('show'); // Remove class when out of view for continuous animation
      }
    });
  } // Run the check on scroll


  window.addEventListener('scroll', checkFigures);
  checkFigures(); // Initial check on load
});
//# sourceMappingURL=script.dev.js.map
