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

function generateNavbar() {
    let fragment = document.createDocumentFragment();

    for (let i = 1; i <= pageSections.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#section${[i]}" style="color: white; text-decoration: none;">Section ${[i]}</a>`;
        fragment.appendChild(listItem);
        listItem.style.cssText = "padding: 10px";
    }

    navbar.appendChild(fragment);
    navbar.style.backgroundColor = "black";
}

// Populate the navigation bar
generateNavbar();