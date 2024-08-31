window.onscroll = function () {
  stickyNavbar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickyNavbar() {
  if (document.documentElement.scrollTop === 0) {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  } else {
    navbar.style.backgroundColor = "#FFFFFF";
    navbar.style.boxShadow = "0px 2px 4px 0px rgba(0,0,0,.2)";
  }

  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var modal = document.getElementById("imageModal");
var images = document.querySelectorAll(".grid-image");
var modalImg = document.getElementById("modalImg");
images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

function toTheTop() {
  document.documentElement.scrollTop = 0;
}
