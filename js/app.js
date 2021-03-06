function listItemsHandler() {
  // get the unorder list
  const ul = document.getElementById("navbar__list");

  // get all sections in a array
  const sections = document.querySelectorAll("section");

  //

  for (let i = 0; i < sections.length; i++) {
    // get sectins attributes
    const id = sections[i].getAttribute("id");

    // get the "data-nav" attribute
    const dataNav = sections[i].getAttribute("data-nav");

    // create a link
    const link = `<a class="menu__link" href=${id}>${dataNav}</a>`;

    // create a list item
    const li = document.createElement("li");

    // append the link in the list item as child
    li.innerHTML = link;

    // add list item to the parent unorder list
    ul.appendChild(li);
  }
  const liElement = document.querySelectorAll("li");

  liElement.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      // get the required section id
      let requredId = element.querySelector("a").getAttribute("href");

      // get the required section
      selectedSection = document.getElementById(requredId);

      // scrolling to the required section smoothly
      selectedSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

//

// inview port function to detect the visable section
function visableSection(section) {
  //declare the method getBoundingClientRect
  const postion = section.getBoundingClientRect();

  // when section in the viewport will return true
  return postion.top >= -300 && postion.top <= 300;
}

// active section
function activeSection() {
  // get all the sections in array by querySelectAll
  const sections = document.querySelectorAll("section");

  // use addEventListener for scroll event
  document.addEventListener("scroll", function () {
    // use forEach loap to give the section in viewport acitve class
    sections.forEach((section) => {
      if (visableSection(section)) {
        // add active class
        section.className = "your-active-class";
      } else {
        // remove active class
        section.className = "";
      }
    });
  });
}

//use DOM  to get the btn UP
const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  // when ckick on button will move to top smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// show the up button when start scroll down
document.addEventListener("scroll", (e) => {
  // get the scroll position
  const scrollPosition = document.body.scrollTop;

  // show the button if started scrolling down more than 300
  if (scrollPosition >= 300) {
    btn.style.display = "block";

    // hide the btn on the top of the page
  } else {
    btn.style.display = "none";
  }
});

listItemsHandler();

activeSection();
