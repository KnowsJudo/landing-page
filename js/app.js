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
 *
 */

// Checks page is loaded before building nav bar
document.addEventListener('DOMContentLoaded', (event) => {
    buildPage();
    // Checks if sections are visible while scrolling
    document.addEventListener('scroll', () => {
        for (let i = 0; i < sections.length; i++) {
            let findSection = document.getElementById(sections[i].id);
            if (isSectionVisible(findSection)) {
                findSection.classList.add('active')
            } else {
                findSection.classList.remove('active');
            }
        }
    })
});

const navBarList = document.querySelector('#navbar__list');

const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Functions
 * 
 */
// Build menu 
function createNavBtn(title, id) {
    let listItem = document.createElement('li');
    listItem.textContent = title;
    // Event listener for scrolling to each function
    listItem.addEventListener('click', () => {
        // Scroll to section on link click
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });

        for (let i = 0; i < sections.length; i++) {
            // Highlights the active section when the nav menu is clicked, otherwise hides the highlight
            let findSection = document.getElementById(sections[i].id)
            if (sections[i].id == id) {
                findSection.classList.add('active');
            } else {
                findSection.classList.remove('active');
            }
        }
    });
    return listItem;
}

// Build the nav
function buildPage() {
    for (let i = 0; i < sections.length; i++) {
        // Look for each variable within sections array
        let barTitle = sections[i].getAttribute('data-nav');
        let barID = sections[i].getAttribute('id')
        let btn = createNavBtn(barTitle, barID);
        navBarList.appendChild(btn);
    }
}

// Checks if section is in the viewport
function isSectionVisible(section) {
    const view = section.getBoundingClientRect();
    return (view.top >= 0) && (view.bottom <= window.innerHeight);
}

/**
 * End Functions
 * 
 */