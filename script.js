const menuBtn = document.getElementById('menu-btn');
        const nav = document.getElementById('navbar');
        const toggleDarkmode = document.getElementById('toggle-dark-mode');

        // Toggle navigation menu on small screens
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('show');
            if (nav.classList.contains('show')) {
                menuBtn.innerHTML = '&times;'; // Change to times icon
            } else {
                menuBtn.innerHTML = '&#9776;'; // Change back to hamburger icon
            }
        });

        // Toggle dark mode
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
            
        document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);

        /*-- Accept to download Cv--*/
        const cv_link=document.getElementById('cv_link').addEventListener('click',()=> {
            alert('Are you sure you want to download wamilimo cv?');
        }
        );
      
        // Simple typewriter effect
        const textElement = document.getElementById('typing-text');
        const texts = [
            "Hello folks, I'm Dr.Wamilimo Hillarie! 👋",
            "I'm a passionate Full Stack Web Engineer and App Developer 💻🎨",
            "I have a deep interest in AI and Networking 🤖🔗",
            "Learning AI keeps me competitive and drives my innovative spirit 🚀",
            "Check out my work and experience in web development 🌐",
            "More on the About Page 📖➡️"
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        const typingSpeed = 80; // typing speed in milliseconds
        const erasingSpeed = 20; // erasing speed in milliseconds
        const delayBetweenTexts = 2000; // delay between texts in milliseconds

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

        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(type, typingSpeed);
        });


        /*CLIENT TESTIMONIAL EVENT*/    
        document.querySelectorAll('.read-btn').forEach(button => {
            button.addEventListener('click', function() {
                const testimonialCard = this.nextElementSibling;
                testimonialCard.style.display = 'block';
            });
        });
        
        document.querySelectorAll('.close-btn').forEach(button => {
            button.addEventListener('click', function() {
                const testimonialCard = this.parentElement;
                testimonialCard.style.display = 'none';
            });
        });
        

        /*---slides for technology*/
            let slideIndex = 0;
    showSlides();
    function showSlides() {
        let slides = document.getElementsByClassName("myslide"); /*retrieves all the slide elements*/
        for (let i = 0; i < slides.length; i++) { /*iterates through each slide*/
            slides[i].style.display = "none";  // Hide all slides
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;  // Reset index if it exceeds number of slides
        }
        slides[slideIndex - 1].style.display = "block";  // Display current slide
        setTimeout(showSlides, 2000);  // Change slide every 2 seconds (2000 milliseconds)
    }

    document.addEventListener("DOMContentLoaded", function() {
        const figures = document.querySelectorAll('figure');
    
        function checkFigures() {
            figures.forEach((figure) => {
                const rect = figure.getBoundingClientRect();
                if (rect.top <= window.innerHeight - 50 && rect.bottom >= 0) {
                    figure.classList.add('show');
                } else {
                    figure.classList.remove('show');
                }
            });
        }
    
        // Run the check on scroll and on load
        window.addEventListener('scroll', checkFigures);
        window.addEventListener('resize', checkFigures); // Handle window resizing
        checkFigures(); // Initial check on page load
    });
    //stop header animation
    document.addEventListener("DOMContentLoaded", function() {
        const header = document.querySelector('.header');
    
        header.addEventListener('animationend', () => {
            header.style.animation = 'none'; // Stop the animation
            
        });
    });