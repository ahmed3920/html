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

const sections = Array.from(document.querySelectorAll("section"));
const menu = document.getElementById("navbar__list");
let numberOfList = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function createListItem() {
  for (section of sections) {
    sectionName = section.getAttribute("data-nav");
    sectionLink = section.getAttribute("id");
    //creat an item for each one

    listItem = document.createElement("li");

    //Add the item text
    listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;

    //Add listItem to the menu
    menu.appendChild(listItem);
  }
}

// Determines if section is in viewport

function sectionIsInViewport(elem) {
  let sectionPos = elem.getBoundingClientRect();
  return sectionPos.top >= 0;
}

// Gives the section being viewed a different appearance

function toggleActiveClass() {
  for (section of sections) {
    // If the section is in the viewport
    if (sectionIsInViewport(section)) {
      // Check if it doesn't already contain "your-active-class"
      if (!section.classList.contains("your-active-class")) {
        // then add it
        section.classList.add("your-active-class");
      }
    } else {
      //If its out the viewport then remove 'your-active-class'

      section.classList.remove("your-active-class");
    }
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

createListItem();

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", toggleActiveClass);

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
