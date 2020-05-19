// Define Global Variables

// End Global Variables

// Start Helper Functions

// End Helper Functions

// Begin Main Functions

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

// End Main Functions

// Begin Events

// Build menu 

// Scroll to section on link click

// Set sections as active


const pageSections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar-list");

// A function that removes the active class from all the buttons
function removeActiveClass() {
    document.querySelectorAll("li").forEach(button => {
        button.classList.remove("active-button");
    });
}

// Check that the DOM was generated
document.addEventListener('DOMContentLoaded', function () {
    // Get the button list and add a listener on the buttons to add or remove the active class
    document.querySelectorAll("li").forEach(listItem => {
        listItem.addEventListener('click', () => {
            removeActiveClass();
            if (listItem.classList.contains("active-button")) {
                listItem.classList.remove("active-button");
            } else {
                listItem.classList.add("active-button");
            }
        });
    });
});

// Helper function that scrolls to the clicked section
function clickedSection(target) {
    for (const section of pageSections) {
        // Check if the parameter matches the section's id
        if (target === section.getAttribute('id')) {
            // Get the section's rectangle
            const direction = section.getBoundingClientRect()
            // Scroll to the position provided by the ractangle
            scrollTo(direction.x, direction.y + window.pageYOffset)
        }
    }
}

// Generates the navbar items based on the available items
function generateNavbar() {
    const fragment = document.createDocumentFragment();
    for (let i = 1; i <= pageSections.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a id="button${i}" class="button" href="#section${i}" style="color: white; text-decoration: none;">Section ${i}</a>`;
        fragment.appendChild(listItem);
    }
    navbar.appendChild(fragment);
    navbar.style.backgroundColor = "black";
}

// Populate the navigation bar
generateNavbar();

// Function that returns the section that is in the viewport
function inViewport(section) {
    let bounding = section.getBoundingClientRect();
    return (
        bounding.top <= 150 &&
        bounding.left <= 150 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Add Scroll EventListener add the active class to the section that is in the viewport
window.addEventListener("scroll", function () {
    for (const section of pageSections) {
        if (inViewport(section)) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
});