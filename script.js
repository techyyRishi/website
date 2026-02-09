/*==toggle icon ==*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const footer = document.querySelector("#footer");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    // Default: remove all active
    navLinks.forEach(link => link.classList.remove("active"));

    // Check normal sections
    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollY >= offset && scrollY < offset + height) {
            document
                .querySelector(`header nav a[href*=${id}]`)
                ?.classList.add("active");
        }
    });

    // 🔥 SPECIAL CASE: FOOTER + CONTACT
    const contactSection = document.querySelector("#contact");
    const contactLink = document.querySelector('header nav a[href*="contact"]');

    const footerTop = footer.offsetTop;
    const windowBottom = scrollY + window.innerHeight;

    if (windowBottom >= footerTop) {
        navLinks.forEach(link => link.classList.remove("active"));
        contactLink.classList.add("active");
    }

    /*==sticky navbbar ==*/
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);
  
    /*==remove toggleicon and navbar when click nav bar link(Scroll) ==*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');



});

/*==================Scroll Reveal=====================*/
 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

 });

 ScrollReveal().reveal('.home-content, .heading, .contact h2', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .work-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


 /*================== typed js =====================*/
 const typed = new Typed('.multiple-text', {
    strings: ['Video Editor', 'Graphic Designer', 'Thumbnail Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });