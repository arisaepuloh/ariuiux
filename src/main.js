// ==================== Efek Tilt Gambar ====================
const image = document.getElementById("image");
const wrapper = document.getElementById("wrapper");

let idleTransform = "translateY(0px)";
let isHovering = false;

wrapper.addEventListener("mousemove", (e) => {
  const bounds = wrapper.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;

  const centerX = bounds.width / 2;
  const centerY = bounds.height / 2;

  const rotateX = ((y - centerY) / centerY) * 20;
  const rotateY = ((x - centerX) / centerX) * -20;

  image.style.animation = "none";
  image.style.transition = "transform 0.3s ease-out";
  image.style.transform = `${idleTransform} rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

wrapper.addEventListener("mouseleave", () => {
  isHovering = false;
  image.style.transition = "transform 0.6s ease-in-out";
  image.style.transform = idleTransform;
  image.style.animation = "float 4s ease-in-out infinite";
});


// ==================== Slider Geser ====================
const slider = document.getElementById("slider");

let sliderPosition = 0;
const sliderSpeed = 0.5;

function animateSlider() {
  sliderPosition -= sliderSpeed;
  if (sliderPosition <= -slider.scrollWidth / 2) {
    sliderPosition = 0;
  }

  slider.style.transform = `translateX(${sliderPosition}px)`;
  requestAnimationFrame(animateSlider);
}

animateSlider();


// ==================== Kursor Kustom ====================
const cursor = document.getElementById("custom-cursor");
const section = document.querySelector(".bg-gray-100");
const projectLink = ('  project.html');

section.addEventListener("mousemove", (e) => {
  const rect = section.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  cursor.style.transform = `translate(${x - cursor.offsetWidth / 2}px, ${y - cursor.offsetHeight / 2}px)`;
  cursor.classList.remove("opacity-0");
});

section.addEventListener("mouseleave", () => {
  cursor.classList.add("opacity-0");
});

section.addEventListener("click", () => {
  window.location.href = projectLink;
});


// ==================== Duplikasi Konten Marquee ====================
document.addEventListener('DOMContentLoaded', () => {
  const marqueeContent = document.querySelector('.marquee-content');
  const items = marqueeContent.innerHTML;
  let duplicateCount = 3;

  for (let i = 0; i < duplicateCount; i++) {
    marqueeContent.innerHTML += items;
  }
});


// ==================== Iklan Jalan (Marquee Scroll) ====================
const marqueeScroll = document.querySelector('.marquee-content');
let marqueeSpeed = 1;
let marqueePosition = 0;

function animateMarquee() {
  marqueePosition -= marqueeSpeed;
  if (Math.abs(marqueePosition) >= marqueeScroll.scrollWidth / 2) {
    marqueePosition = 0;
  }
  marqueeScroll.style.transform = `translateX(${marqueePosition}px)`;
  requestAnimationFrame(animateMarquee);
}

animateMarquee();


// Efek parallax halus
window.addEventListener('scroll', function () {
  const section = document.getElementById('parallax');
  const scrollPosition = window.scrollY;
  // Geser background sedikit sesuai scroll
  section.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
});


// Scrool smoth
const scrollContainer = document.documentElement;
let scrollPos = scrollContainer.scrollTop;

window.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollPos += e.deltaY;
  smoothScroll();
}, { passive: false });

function smoothScroll() {
  scrollContainer.scrollTop += (scrollPos - scrollContainer.scrollTop) * 0.1;
  if (Math.abs(scrollPos - scrollContainer.scrollTop) > 0.5) {
    requestAnimationFrame(smoothScroll);
  }
}