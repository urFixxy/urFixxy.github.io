// Toggle class active
const navMenu = document.querySelector('.nav-menu');

// Ketika Bars diclick
document.querySelector('#bars').onclick = (e) => {
    e.preventDefault(); // Mencegah navigasi default
    navMenu.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan navbar
const bars = document.querySelector('#bars');
document.addEventListener('click', function (e) {
    if (!bars.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Navbar Transparent
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
})