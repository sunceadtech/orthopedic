// =============================================
// Menu Toggle for Mobile Navigation
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  toggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    toggle.innerHTML = mobileNav.classList.contains("open")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // =============================================
  // Dropdown Toggle Logic
  // =============================================
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const dropdownMenu = this.nextElementSibling;

      // Close other open dropdowns
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.remove('show');
        }
      });

      // Toggle current dropdown
      dropdownMenu.classList.toggle('show');
    });
  });

  // Close all dropdowns if clicked outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
      menu.classList.remove('show');
    });
  });
});




// =============================================
// Dynamic Testimonial Swiper Setup (Default)
// =============================================
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      icon: "./images/testicon.png",
      text: "I had Hip pain for months. The doctor here explained everything so well and treated me with care Now I can walk without pain. Dr Amit Sharma is The Best Orthopedic Specialist In Ghaziabad",
      image: "./images/geeta.webp",
      name: "Geeta Devi (Patna)"
    },
    {
      icon: "./images/testicon.png",
      text: "I had an injury in my tendon during my exercise... Thanks to Dr. Amit for everything he has done for me.",
      image: "./images/mahendra.webp",
      name: "Mahender Rajput"
    },
    {
      icon: "./images/testicon.png",
      text: "I had pain in both my knees for many years... The hospital food was also very good.",
      image: "./images/pushp.webp",
      name: "Pushpata Garg"
    },
    {
      icon: "./images/testicon.png",
      text: "I got my left knee replacement done recently and I am very satisfied. My pain is gone.",
      image: "./images/premlate.webp",
      name: "Mrs Premlata"
    },
    {
      icon: "./images/testicon.png",
      text: "I was having problems walking. My pain has reduced and now I can walk. The doctor is very good-natured and caring.",
      image: "./images/Ramvati.webp",
      name: "Ramavati"
    }
  ];

  const swiperWrapper = document.querySelector("#testimonial-swiper .swiper-wrapper");

  testimonials.forEach(t => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
      <div class="testimonial-content">
        <img class="testimonial-icon" src="${t.icon}" alt="Quote Icon">
        <p class="testimonial-text">${t.text}</p>
        <img class="testimonial-image" src="${t.image}" alt="${t.name}">
        <h5 class="testimonial-name">${t.name}</h5>
      </div>
    `;
    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper for Testimonials
  new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
});


// =============================================
// Home Blog Section (Alternate Testimonials)
// =============================================
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      icon: "./images/testicon.png",
      text: "I have been suffering from osteoarthritis for the last 7-8 years... He is very caring. He checks on his patient 2-3 times a day. It has been a great experience.",
      image: "./images/geeta.webp",
      name: "Geeta Devi (Patna)"
    },
    {
      icon: "./images/testicon.png",
      text: "I had an injury in my tendon during my exercise... Thanks to Dr. Amit for everything he has done for me.",
      image: "./images/mahendra.webp",
      name: "Mahender Rajput"
    },
    {
      icon: "./images/testicon.png",
      text: "I had pain in both my knees for many years... The hospital food was also very good.",
      image: "./images/pushp.webp",
      name: "Pushpata Garg"
    },
    {
      icon: "./images/testicon.png",
      text: "I got my left knee replacement done recently and I am very satisfied. My pain is gone.",
      image: "./images/premlate.webp",
      name: "Mrs Premlata"
    },
    {
      icon: "./images/testicon.png",
      text: "I was having problems walking. My pain has reduced and now I can walk. The doctor is very good-natured and caring.",
      image: "./images/Ramvati.webp",
      name: "Ramavati"
    }
  ];

  const swiperWrapper = document.querySelector("#testimonial-swiper-unique .swiper-wrapper");

  testimonials.forEach(t => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
      <div class="testimonial-content-unique">
        <img class="testimonial-icon-unique" src="${t.icon}" alt="Quote Icon">
        <p class="testimonial-text-unique">${t.text}</p>
        <img class="testimonial-image-unique" src="${t.image}" alt="${t.name}">
        <h5 class="testimonial-name-unique">${t.name}</h5>
      </div>
    `;
    swiperWrapper.appendChild(slide);
  });

  // Swiper for home blog section
  new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
});


// =============================================
// FAQ Accordion Logic
// =============================================
const faqs = [
  {
    question: "When should I consult a specialist for joint pain?",
    answer:
      "If your joint pain lasts more than a few weeks, worsens with movement, or limits daily activities, it’s time to consult an orthopedic specialist.",
  },
  {
    question: "Is knee replacement the only solution for arthritis?",
    answer:
      "Not always. Early arthritis can often be managed with medications, physiotherapy, and lifestyle changes. Surgery is recommended only for advanced cases.",
  },
  {
    question: "What are the benefits of minimally invasive orthopedic surgery?",
    answer:
      "Minimally invasive procedures result in smaller incisions, faster recovery, less pain, and reduced hospital stays compared to traditional surgery.",
  },
  {
    question: "Do you offer treatments for sports injuries?",
    answer:
      "Yes, we treat a wide range of sports injuries including ligament tears, tendonitis, and joint dislocations through advanced techniques like arthroscopy.",
  },
  {
    question: "Can osteoporosis be prevented or managed?",
    answer:
      "Yes, with a combination of regular weight-bearing exercise, calcium & vitamin D, and bone density monitoring, osteoporosis can be effectively managed.",
  },
];


const faqContainer = document.getElementById("faqContainer");

faqs.forEach((faq, index) => {
  const item = document.createElement("div");
  item.className = "faq-item";

  const questionBtn = document.createElement("div");
  questionBtn.className = "faq-question";
  questionBtn.setAttribute("aria-expanded", "false");
  questionBtn.innerHTML = `
    <span>${faq.question}</span>
    <span class="faq-icon">+</span>
  `;

  const answerDiv = document.createElement("div");
  answerDiv.className = "faq-answer";
  answerDiv.id = `faq-${index}`;
  answerDiv.innerText = faq.answer;

  questionBtn.addEventListener("click", () => {
    const isOpen = answerDiv.classList.contains("active");

    // Collapse all open answers
    document.querySelectorAll(".faq-answer").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".faq-icon").forEach(el => el.innerText = "+");
    document.querySelectorAll(".faq-question").forEach(el => el.setAttribute("aria-expanded", "false"));

    // Expand current one if it was not open
    if (!isOpen) {
      answerDiv.classList.add("active");
      questionBtn.querySelector(".faq-icon").innerText = "−";
      questionBtn.setAttribute("aria-expanded", "true");
    }
  });

  item.appendChild(questionBtn);
  item.appendChild(answerDiv);
  faqContainer.appendChild(item);
});


// =============================================
// Appointment Form Submission using Web3Forms
// =============================================
document.getElementById("appointmentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const payload = {
    access_key: "d178f430-9dc9-4bf5-871b-b104717253a8",
    subject: "dramitsharmaortho.com - New Appointment",
    from_name: "dramitsharmaortho.com",
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      alert("Thank you! Your appointment has been submitted.");
      form.reset();
      window.location.href = "thankyou.html";
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again later.");
  }
});


// =============================================
// Hero/Top Swiper (Fade Effect, Navigation)
// =============================================
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 600,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});


// =============================================
// Swiper Slider for Expertise Section
// =============================================
var swiper = new Swiper("#expertiseSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1200: { slidesPerView: 5 }, // Show 5 slides on larger screens
  },
});