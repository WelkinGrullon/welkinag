let header = document.getElementById("change");
window.onscroll = function () {
  const scroller = window.scrollY;
  let header = document.getElementById("change");
  if (scroller > 150) {
    header.style.backgroundColor = "RGB(0, 0, 0, .5)";
  } else {
    header.style.backgroundColor = "black";
  }
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const linkSection = document.querySelector(".linkSection");
const socialSection = document.querySelector(".socialSection");
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("stop-scrolling");
  linkSection.classList.toggle("active");
});
const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 75 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
  document.querySelector(".active").style.color = "purple";
}
activeMenu();
window.addEventListener("scroll", activeMenu);

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const modal2 = document.getElementById("myModal2");
const btn2 = document.getElementById("myBtn2");
const span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
  modal2.style.display = "block";
  document.body.classList.toggle("stop-scrolling");
};
span2.onclick = function () {
  modal2.style.display = "none";
  document.body.classList.toggle("stop-scrolling");
};
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
    document.body.classList.toggle("stop-scrolling");
  }
};
