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



// Marquee
const marquee = document.getElementById("marquee");
marquee.style.animation = "marquee 100s linear infinite";
