// animation logic on game logo
setInterval(() => {
    let randomIndex = Math.floor(Math.random() * 9);
    let box = document.getElementById("box" + randomIndex);

    box.classList.add("rotate");


    setTimeout(() => {
        box.classList.remove("rotate");
    }, 1000);
}, 1000);


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.innerHTML = navLinks.classList.contains("open") ? "✖" : "☰";
});
// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelector('.nav-link[href="#chatbot"]').classList.add("active");
    }
});
