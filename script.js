// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
counter.innerText = '0';
const updateCounter = () => {
const target = +counter.getAttribute('data-target');
const c = +counter.innerText;
const increment = target / 100;

if (c < target) {
counter.innerText = `${Math.ceil(c + increment)}`;
setTimeout(updateCounter, 20);
} else {
counter.innerText = target;
}
};
updateCounter();
});

// Accordion
const buttons = document.querySelectorAll(".accordion-btn");
buttons.forEach(button => {
button.addEventListener("click", () => {
const content = button.nextElementSibling;
content.style.display =
content.style.display === "block" ? "none" : "block";
});
});
