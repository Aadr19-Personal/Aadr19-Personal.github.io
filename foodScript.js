const d = new Date();
let dayOfWeek = d.getDay();

const menu = [
  {
    day: 1,
    main: ["rice", "chickpeas & potatoes in tomato masala"],
    dessert: ["apple cinnamon", "halava"],
  },
  {
    day: 2,
    main: ["yellow rice", "Mexican black beans", "corn chips"],
    dessert: ["banana cream", "halava"],
  },
  {
    day: 3,
    main: ["vegan mac n' cheese", "BBQ tofu chunks", "corn chips"],
    dessert: ["pumpkin spice", "halava"],
  },
  {
    day: 4,
    main: ["rice", "lentil (mung) soup", "thai coconut curry"],
    dessert: ["pineapple coconut", "halava"],
  },
  {
    day: 5,
    main: ["rice", "chili", "Gauranga (creamy) potatoes"],
    dessert: ["carob halava"],
  },
];

menu.forEach((element) => {
  if (element.day == dayOfWeek) {
    const mainList = document.getElementById("mainItems");
    const dessertList = document.getElementById("dessertItems");
    //Fill main items
    element.main.forEach((mainItem) => {
      const item = document.createElement("li");
      const itemBody = document.createTextNode(mainItem);
      item.appendChild(itemBody);

      mainList.appendChild(item);
    });
    //Fill dessert items
    element.dessert.forEach((dessertItem) => {
      const item = document.createElement("li");
      const itemBody = document.createTextNode(dessertItem);
      item.appendChild(itemBody);

      dessertList.appendChild(item);
    });
  } else {
    // Create behaviour for weekends
  }
});
