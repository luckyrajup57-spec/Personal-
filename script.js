/* =========================
   TYPING EFFECT
========================= */

const words = [
    "CSE Student",
    "Web Developer",
    "Cricket Enthusiast",
    "Fast Bowler",
    "Photographer",
    "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1000);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            charIndex = 0;
            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* CLOSE MENU AFTER CLICK */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "🌙";

    } else {

        themeBtn.textContent = "☀️";

    }

});


/* =========================
   AI PROFILE GENERATOR
========================= */

const aiBtn =
    document.getElementById("aiBtn");

const aiOutput =
    document.getElementById("aiOutput");

const profiles = [

    "AI Analysis: LeftyXLucky is a technology-focused CSE student who combines programming, creativity and continuous learning with a strong passion for cricket.",

    "AI Analysis: Personality detected — Creative + Disciplined + Curious. LeftyXLucky enjoys building digital projects, photography and improving technical skills.",

    "AI Analysis: Core interests detected — Web Development, Python, Photography, Cricket, Fitness and Technology.",

    "AI Analysis: Mission detected — Learn technology, build useful projects, develop a strong personal brand and keep improving every day.",

    "AI Analysis: Developer profile detected — Front-end development, creative design, problem solving and experimentation are key interests."
];


aiBtn.addEventListener("click", function () {

    aiOutput.textContent = "🤖 AI is analyzing...";

    setTimeout(function () {

        const randomIndex =
            Math.floor(Math.random() * profiles.length);

        aiOutput.textContent =
            profiles[randomIndex];

    }, 1000);

});


/* =========================
   CONTACT FORM
========================= */

const sendBtn =
    document.getElementById("sendBtn");

sendBtn.addEventListener("click", function () {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("⚠️ Please fill all fields.");

        return;
    }


    alert(
        "✅ Thanks " +
        name +
        "! Your message has been received."
    );


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

});


/* =========================
   SCROLL TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".stat h3");

let counterStarted = false;

function startCounters() {

    if (counterStarted) {
        return;
    }

    const statsSection =
        document.querySelector(".stats");

    const position =
        statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight) {

        counterStarted = true;

        counters.forEach(function (counter) {

            const target =
                Number(
                    counter.getAttribute("data-target")
                );

            let current = 0;

            const increment =
                Math.max(1, Math.ceil(target / 50));

            const timer =
                setInterval(function () {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);
                    }

                    counter.textContent = current;

                }, 30);

        });
    }
}

window.addEventListener("scroll", startCounters);

startCounters();


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});