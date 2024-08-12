let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a, .header1 nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelectorAll('header nav a[href*=' + id + '], .header1 nav a[href*=' + id + ']').forEach(link => {
                link.classList.add('active');
            });
        }
    });
};

document.write(new Date().getFullYear())





