// ================= PRELOADER =================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }

});

// ================= STICKY HEADER =================

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });

}

// ================= ACTIVE NAV =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

if (sections.length && navLinks.length) {

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            if (window.scrollY >= section.offsetTop - 150) {
                current = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

}

// ================= FAQ =================

document.querySelectorAll(".faq-question").forEach(question => {

    question.addEventListener("click", () => {

        question.parentElement.classList.toggle("active");

    });

});

// ================= DARK MODE =================

const darkBtn = document.getElementById("dark-btn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        darkBtn.innerHTML = document.body.classList.contains("dark")
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

    });

}

// ================= SCROLL TO TOP =================

const scrollBtn = document.querySelector(".scroll-top");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }

    });

    scrollBtn.addEventListener("click", e => {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ================= SEARCH =================

const search = document.querySelector(".search-box input");

if (search) {

    search.addEventListener("keyup", () => {

        const value = search.value.toLowerCase();

        document.querySelectorAll("section").forEach(section => {

            if (section.innerText.toLowerCase().includes(value)) {

                section.style.display = "";

            } else {

                section.style.display = "none";

            }

        });

    });

}

// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", e => {

        e.preventDefault();

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}

// ================= NEWSLETTER =================

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", e => {

        e.preventDefault();

        alert("Thank you for subscribing!");

        newsletter.reset();

    });

}

// ================= SIMPLE FADE ANIMATION =================

const cards = document.querySelectorAll(
    ".service-card,.team-card,.portfolio-card,.testimonial-card,.achievement-card,.why-card,.tech-card,.process-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-animation");

            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(card => observer.observe(card));

}