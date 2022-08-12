const links = document.querySelector(".links");
const link = document.querySelectorAll(".link");
const burgermenu = document.querySelector(".burger-menu");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu(){
  if 
  (links.classList.contains("showMenu")) {
    links.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }else{
    links.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

burgermenu.addEventListener("click", toggleMenu);
link.forEach(
  function(link){
    link.addEventListener("click", toggleMenu);
  }
)

function toggleHamburger() {
  overlay.classList.toggle("showOverlay")
  sideNav.classList.toggle("showNav")
}

ScrollReveal().reveal(".home-titulo", {duration:2500, delay:900});
ScrollReveal().reveal(".home-titulo-primario", {delay:500});
ScrollReveal().reveal(".home-titulo-secundario", {delay:2000});
ScrollReveal().reveal(".sobremi-class", {delay:350});
ScrollReveal().reveal(".about-description", {delay: 600});
ScrollReveal().reveal(".about-skills", {delay: 600});
ScrollReveal().reveal(".proyecto-class", {delay:350});
ScrollReveal().reveal(".about-items", {delay:600});
ScrollReveal().reveal(".contacto-class", {delay:350});
ScrollReveal().reveal(".contact-grid", {delay:600});
ScrollReveal().reveal(".footer", {delay:350});