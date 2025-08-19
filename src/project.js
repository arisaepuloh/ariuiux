// ==================== Efek Tilt Gambar Halaman Project ====================
const projectImage = document.getElementById("project-image");
const projectWrapper = document.getElementById("project-wrapper");

let idleTransformProject = "translateY(0px)";
let isHoveringProject = false;

projectWrapper.addEventListener("mousemove", (e) => {
    const bounds = projectWrapper.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * -20;

    projectImage.style.animation = "none";
    projectImage.style.transition = "transform 0.3s ease-out";
    projectImage.style.transform = `${idleTransformProject} rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

projectWrapper.addEventListener("mouseleave", () => {
    isHoveringProject = false;
    projectImage.style.transition = "transform 0.6s ease-in-out";
    projectImage.style.transform = idleTransformProject;
    projectImage.style.animation = "float 4s ease-in-out infinite";
});




// Testimoni
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-id]");
    const testimonials = document.querySelectorAll(".testimonial");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Reset semua button
            buttons.forEach(b => b.classList.remove("border-b", "pb-1", "text-black"));
            buttons.forEach(b => b.classList.add("text-gray-500"));

            // Sembunyikan semua testimoni
            testimonials.forEach(t => t.classList.add("hidden"));
            testimonials.forEach(t => t.classList.remove("active"));

            // Aktifkan button & testimoni sesuai klik
            btn.classList.add("border-b", "pb-1", "text-black");
            btn.classList.remove("text-gray-500");

            const id = btn.getAttribute("data-id");
            document.getElementById(id).classList.remove("hidden");
            document.getElementById(id).classList.add("active");
        });
    });
});