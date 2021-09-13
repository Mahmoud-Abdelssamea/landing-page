
// 
let navMenu = document.querySelector("#navbar__list")
let sections= document.querySelectorAll("section")
console.log(sections.length);
let addSection = document.getElementById("btn")
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function navlistHandler() {
  // build the nav list items
  for (let i = 0; i < sections.length; i++) {
    
    //   get id and data-nav attr. from every section
    let sectionDataNav = sections[i].getAttribute("data-nav");
    let sectionID = sections[i].getAttribute("id");
    
    // create list item
    let newListItem = `<li><a href="#${sectionID}" class="menu__link" >${sectionDataNav}</a></li>`
    
    //append list item  to ul 
    navMenu.innerHTML += newListItem
  }
}

navlistHandler()

//  * Start Main Function

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", activedSection);
// console.log(sections[1].);
function activedSection() {
  sections[0].classList.remove("your-active-class");

  sections.forEach((element, i) => {
    let rect = sections[i].getBoundingClientRect();
    if (rect.y >= -100 && rect.y < 500) {
      element.className = "your-active-class";
    } else {
      element.classList.remove("your-active-class");
    }
  });
}

//  * End Main Function



