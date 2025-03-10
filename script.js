// Existing hamburger menu functions
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Updated typewriter effect with your roles
const texts = [
    "SOFTWARE ENGINEER",
    "GAME DEVELOPER",
    "PROBLEM SOLVER"
]
let speed = 30; //Time in milliseconds
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if (characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

function toggleAboutMe() {
    const toggle = document.querySelector('.about-me-toggle');
    const content = document.querySelector('.about-me-content');
    
    toggle.classList.toggle('active');
    content.classList.toggle('show');
}


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close mobile menu if open
        const dropdown = document.querySelector(".dropdown");
        dropdown.style.transform = "translateY(-500px)";
    });
});

window.onload = typeWriter;
