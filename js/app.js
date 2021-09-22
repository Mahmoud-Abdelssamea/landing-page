function listItemsHandler() {
  // get the unorder list
  const ul = document.getElementById("navbar__list");

  // get all sections in a array
  const sections = document.querySelectorAll("section");

  console.log(sections[0].getAttribute("id"));
  //

  for (let i = 0; i < sections.length; i++) {
    // get sectins attributes
    const id = sections[i].getAttribute("id");
    const dataNav = sections[i].getAttribute("data-nav");

    // make a link
    const link = `<a class="menu__link" href={#${id}}>${dataNav}</a>`;

    // create a list item
    const li = document.createElement("li");

    // add class to link
    // li.className = "menu__link";

    // append the link to the list item
    li.innerHTML = link;

    // add list item to the parent unorder list
    ul.appendChild(li);
  }
}

//
listItemsHandler();
