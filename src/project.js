console.log("project.js loaded");

// ==================== Efek Tilt Gambar Halaman Project ====================
const projectImage = document.getElementById("project-image");
const projectWrapper = document.getElementById("project-wrapper");

let idleTransformProject = "translateY(0px)";
let isHoveringProject = false;

if (projectWrapper && projectImage) {
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
} else {
    console.log("project.js: no project image/ wrapper found, skipping tilt effect");
}

// ==================== Testimoni ====================
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const buttons = section.querySelectorAll("[data-id]");
        const testimonials = section.querySelectorAll(".testimonial");

        if (!buttons.length || !testimonials.length) return;

        buttons.forEach((btn) => {
            btn.addEventListener("click", () => {
                buttons.forEach(b => {
                    b.classList.remove("border-b", "pb-1", "text-black");
                    b.classList.add("text-gray-500");
                });

                testimonials.forEach(t => {
                    t.classList.add("hidden");
                    t.classList.remove("active");
                });

                btn.classList.add("border-b", "pb-1", "text-black");
                btn.classList.remove("text-gray-500");

                const id = btn.getAttribute("data-id");
                const target = section.querySelector(`#${id}`);
                if (target) {
                    target.classList.remove("hidden");
                    target.classList.add("active");
                }
            });
        });
    });
});
