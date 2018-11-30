let mainNavLinks = document.querySelectorAll("nav");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});





var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: "#slidein",
            triggerHook: "onLeave",
        })
        .setPin("#slidein")
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);
