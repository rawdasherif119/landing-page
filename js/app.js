/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// navMenu global variable
const navMenu = document.getElementById('navbar__list');
// Section global variable
let sections= document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavMenu()
{
    sections.forEach(function (section) {
        // create li element
        const tab = document.createElement('li');
        tab.setAttribute('id', section.getAttribute('id')+'_tab');
        tab.innerHTML = `<a class="menu__link" href="#${section.getAttribute('id')}">${section.getAttribute('data-nav')}</a>`;
        // Add tab to menu
        navMenu.appendChild(tab);
    });
}

function isInViewport(elem) {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= -400&&
            bounding.top <= 150
        );
    };

function activateSection(){
    sections.forEach(function (section) {
        tab = document.getElementById(section.getAttribute('id') + '_tab')
        if (isInViewport(section)){
             section.classList.add('your-active-class');
             tab.classList.add('active');
        }else{
            section.classList.remove('your-active-class');
            tab.classList.remove('active');
        }
    })
}

function scrolling(event){
    event.preventDefault();
    // get target and find ancor tag and its href 
    anchor = event.target.getAttribute('href');
    // check if anchor
    if (anchor != null) {
        // scroll smooth and set time out to slow it
        document.querySelector(anchor).scrollIntoView({
            behavior: "smooth"
        });
        setTimeout(() => {
            location.hash = anchor;
        }, 1000);
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNavMenu()

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', activateSection);

// Scroll to anchor ID using scrollTO event
navMenu.addEventListener("click", scrolling);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



