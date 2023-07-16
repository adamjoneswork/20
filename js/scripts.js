document.addEventListener("DOMContentLoaded", function(event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        if (toggle && nav && bodypd && headerpd) {
            nav.classList.add('show');
            toggle.classList.add('bx-x');
            bodypd.classList.add('body-pd');
            headerpd.classList.add('body-pd');

            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
                toggle.classList.toggle('bx-x');
                bodypd.classList.toggle('body-pd');
                headerpd.classList.toggle('body-pd');
            });
        }
    }

    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accactive");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

    const scrollToTop = document.getElementById('scrollToTop');
    if (scrollToTop) {
        scrollToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    const sectionLinks = document.querySelectorAll('.nav_link[data-scroll-target]');
    const sections = document.querySelectorAll('section');

    function activateLink(link) {
        sectionLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    }

    function determineActiveSection() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const headerHeight = document.getElementById('header').offsetHeight;
            const sectionTop = section.offsetTop - headerHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const targetLink = document.querySelector(`.nav_link[data-scroll-target="#${section.id}"]`);
                if (targetLink) {
                    activateLink(targetLink);
                }
            }
        });
    }

    sectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.dataset.scrollTarget;
            const section = document.querySelector(target);
            if (section) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = section.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                activateLink(this);
            }
        });
    });

    window.addEventListener('scroll', determineActiveSection);

});
