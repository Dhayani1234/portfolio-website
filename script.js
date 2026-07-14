/* ==========================================
   AOS Animation
========================================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});


/* ==========================================
   Typed.js
========================================== */

const typedElement = document.querySelector(".typing");

if (typedElement) {
    new Typed(".typing", {
        strings: [
            "Software Developer",
            "Technical Support Engineer",
            "Application Support Engineer",
            "Backend Developer"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1800,
        loop: true
    });
}


/* ==========================================
   Sticky Navbar
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "#ffffff";

    }

});


/* ==========================================
   Active Navigation Link
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ==========================================
   Smooth Scroll
========================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ==========================================
   Scroll To Top Button
========================================== */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#2563EB";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
scrollBtn.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ==========================================
   Mobile Menu (Ready for Future)
========================================== */

const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-links");

if (menuIcon) {

    menuIcon.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


/* ==========================================
   Resume Download Alert (Optional)
========================================== */

const resumeBtn = document.querySelector(".resume-btn");

if (resumeBtn) {

    resumeBtn.addEventListener("click", () => {

        console.log("Resume Downloaded");

    });

}


/* ==========================================
   Contact Form (Future Ready)
========================================== */

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});

const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

window.addEventListener("load",()=>{

    document.getElementById("loader").style.display="none";

});

