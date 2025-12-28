document.addEventListener("DOMContentLoaded", () => {

  console.log("Animation JS loaded ✅");

  const courses = [
    "Web Developer",
    "Digital Marketing",
    "Graphic Designer",
    "Computer Expert",
    "Software Engineer"
  ];

  const textEl = document.getElementById("animated-text");

  if (!textEl) {
    console.error("❌ animated-text not found");
    return;
  }

  textEl.classList.add("gradient-animate");

  let index = 0;
  let directionUp = true;

  const isMobile = window.innerWidth < 768;
  const intervalTime = isMobile ? 3500 : 2200;
  const moveDistance = isMobile ? 120 : 80;

  function animateText() {
    // fade + slide out
    textEl.style.opacity = "0";
    textEl.style.transform = directionUp
      ? `translateY(-${moveDistance}%)`
      : `translateY(${moveDistance}%)`;

    setTimeout(() => {
      index = (index + 1) % courses.length;
      textEl.textContent = courses[index];

      directionUp = !directionUp;

      // reset from opposite side
      textEl.style.transform = directionUp
        ? `translateY(${moveDistance}%)`
        : `translateY(-${moveDistance}%)`;

      // force reflow
      textEl.offsetHeight;

      // fade + slide in
      textEl.style.opacity = "1";
      textEl.style.transform = "translateY(0)";
    }, 600);
  }

  // start animation
  setInterval(animateText, intervalTime);

});


  const modal = document.getElementById("courseModal");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDesc");
  const list = document.getElementById("modalList");

  const courses = {
    web: {
      title: "Web Development",
      desc: "Learn to build complete websites and web applications.",
      points: [
        "HTML, CSS, JavaScript",
        "Responsive Design",
        "Live Projects",
        "Career Guidance"
      ]
    },
    marketing: {
      title: "Digital Marketing",
      desc: "Become an expert in online marketing strategies.",
      points: [
        "SEO & SEM",
        "Social Media Marketing",
        "Google Ads",
        "Real Campaigns"
      ]
    },
    design: {
      title: "Graphic Designing",
      desc: "Learn professional graphic design tools and creativity.",
      points: [
        "Photoshop & Illustrator",
        "Branding & Layout",
        "Portfolio Projects",
        "Freelancing Basics"
      ]
    }
  };

  function openModal(type) {
    const course = courses[type];
    title.textContent = course.title;
    desc.textContent = course.desc;

    list.innerHTML = "";
    course.points.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      list.appendChild(li);
    });

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }


  const counters = document.querySelectorAll(".stat-number");

  function animateCounter(el) {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || "";
    const duration = 1500;
    let start = 0;

    el.textContent = "0";

    const step = () => {
      start += target / (duration / 16);
      if (start < target) {
        el.textContent = Math.floor(start) + suffix;
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    };

    step();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
        } else {
          // 👇 reset when section goes out
          entry.target.textContent = "0";
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  counters.forEach(counter => observer.observe(counter));


  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "919117744925"; 

    const text =
      `Hello RTech Computer %0A%0A` +
      ` Name: ${name}%0A` +
      ` Mobile: ${phone}%0A` +
      ` Course: ${course}%0A` +
      ` Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, "_blank");
  });



//  const btn = document.getElementById("menu-btn");
//         const menu = document.getElementById("mobile-menu");
//         const ham = document.getElementById("hamburger");
//         const cross = document.getElementById("cross");

//         btn.addEventListener("click", () => {
//             menu.classList.toggle("hidden");
//             ham.classList.toggle("hidden");
//             cross.classList.toggle("hidden");
//         });
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const ham = document.getElementById("hamburger");
const cross = document.getElementById("cross");

// Toggle menu on hamburger click
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
});

// 🔥 Close menu when any mobile link is clicked
const mobileLinks = document.querySelectorAll(".mobile-link");

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    ham.classList.remove("hidden");
    cross.classList.add("hidden");
  });
});

        AOS.init({
            duration: 1000,
             easing: "ease-out-cubic",
            once: false
        });