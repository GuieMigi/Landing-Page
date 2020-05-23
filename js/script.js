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
function removeActiveButton() {
    document.querySelectorAll("li").forEach(button => {
        button.classList.remove("active-button");
    });
}

// Adds or removes the active class from the clicked button
function addActiveButton() {
    document.querySelectorAll("li").forEach(listItem => {
        removeActiveButton();
        if (listItem.classList.contains("active-button")) {
            listItem.classList.remove("active-button");
        } else {
            listItem.classList.add("active-button");
        }
    });
}

// Adds or removes the active class to the button based on the section in the viewport
function activeButton(section) {
    const buttonList = document.getElementsByClassName("button-link");
    for (const button of buttonList) {
        if (section === button.getAttribute("id")) {
            button.classList.add('active-button');
        } else {
            button.classList.remove('active-button');
        }
    }
};

// Generates the navbar items based on the available items
function generateNavbar() {
    const fragment = document.createDocumentFragment();
    for (section of pageSections) {
        const listItem = document.createElement("li");
        const sectionId = section.getAttribute("id");
        const sectionName = section.getAttribute("data-nav");
        listItem.innerHTML = `<a id="${sectionId}" class="button-link" href="#${sectionId}" data-target="${sectionId}">${sectionName}</a>`;
        fragment.appendChild(listItem);
    }
    navbar.appendChild(fragment);
    navbar.style.backgroundColor = "black";
}

// Populate the navigation bar
generateNavbar();

// Checks and returns the section that is in the viewport
function inViewport(section) {
    let bounding = section.getBoundingClientRect();
    return (
        bounding.top <= 150 &&
        bounding.left <= 150 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// On Scroll add the active class to the button and the section based on the section that is in the viewport
function activeSection() {
    window.addEventListener("scroll", function () {
        for (const section of pageSections) {
            const sectionInView = section.getBoundingClientRect();
            if (sectionInView.top <= 150 && sectionInView.bottom >= 150) {
                section.classList.add("active");
                activeButton(section.getAttribute("id"));
            } else {
                section.classList.remove("active");
                removeActiveButton();
            }
        }
    });
}

// Scroll to the correct section on user click
function scrollOnClick() {
    let buttonList = document.getElementById("navbar-list").childNodes;
    buttonList.forEach(button => {
        const link = button.childNodes[0];
        link.addEventListener("click", function(element) {
            detectClickedSection(element.target.getAttribute('data-target'));
        })
    })
}

// Detects the clicked section and scrolls to the clicked section
function detectClickedSection(target) {
    const sections = document.querySelectorAll('[data-nav]');
    for (const section of sections) {
        if (target === section.getAttribute('id')) {
            const direct = section.getBoundingClientRect();
            scrollTo(direct.x, direct.y + window.pageYOffset);
        }
    }
}

activeSection();
scrollOnClick()