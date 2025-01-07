// Set current year
const yearEl = document.querySelector(".year");
const curDate = new Date().getFullYear();
yearEl.textContent = curDate;

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// Select the header element and the target section
const header = document.querySelector(".header");
const sectionHow = document.querySelector("#how");

// Function to handle sticky class
const handleStickyNav = function () {
  const sectionTop = sectionHow.getBoundingClientRect().top;

  if (sectionTop <= 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// Add event listener to scroll
window.addEventListener("scroll", handleStickyNav);
