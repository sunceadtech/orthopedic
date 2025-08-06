
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  toggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    toggle.innerHTML = mobileNav.classList.contains("open")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent closing due to bubbling
      const dropdownMenu = this.nextElementSibling;
      // Close other open dropdowns
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.remove('show');
        }
      });

      // Toggle current menu
      dropdownMenu.classList.toggle('show');
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
      menu.classList.remove('show');
    });
  });

});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 4000,
    },
  });
});


const orthopedicServices = [
  {
    label: "Knee Replacement",
    image: "/images/icon1.webp",
    alt: "Icon showing knee joint replacement surgery care",
    href: "/knee-replacement",
  },
  {
    label: "Hip Replacement",
    image: "/images/icon2.webp",
    alt: "Icon for hip joint replacement surgery treatment",
    href: "/hip-replacement",
  },
  {
    label: "Arthroscopy",
    image: "/images/icon3.webp",
    alt: "Arthroscopy icon depicting minimally invasive joint care",
    href: "/arthroscopy",
  },
  {
    label: "ACL Repair",
    image: "/images/icon4.webp",
    alt: "ACL and PCL ligament repair surgery icon",
    href: "/acl-reconstruction",
  },
  {
    label: "Sports Injuries",
    image: "/images/icon5.webp",
    alt: "Sports injury treatment icon for active individuals",
    href: "/sports-injury",
  },
  {
    label: "Fracture Care",
    image: "/images/icon6.webp",
    alt: "Fracture bone care and treatment icon",
    href: "/minimal-invasive-complex-trauma-surgery",
  },
];

const servicesGrid = document.getElementById('ortho-services-grid-id');

orthopedicServices.forEach((item, index) => {
  const serviceItem = document.createElement('div');
  serviceItem.className = 'ortho-service-grid-item';

  serviceItem.innerHTML = `
        <a href="${item.href}" class="ortho-service-link" aria-label="Learn more about ${item.label}">
          <img
            src="${item.image}"
            alt="${item.alt}"
            class="ortho-service-icon"
            width="64"
            height="64"
            loading="${index === 0 ? 'eager' : 'lazy'}"
            decoding="async"
          />
          <span class="ortho-service-label">${item.label}</span>
        </a>
      `;

  servicesGrid.appendChild(serviceItem);
});

/*testimonal logic here */
const testimonials = [
  {
    name: "Mahender Rajput",
    image: "/images/paitent1.webp",
    alt: "Tendon surgery recovery",
    text: "I had a serious tendon injury that affected my training. Thanks to Dr. Amit Sharma's expert care, I recovered quickly and got back to my fitness routine without complications.",
  },
  {
    name: "Rahul Kumar",
    image: "/images/paitent7.webp",
    alt: "Orthopedic surgery recovery",
    text: "After a severe leg fracture, I was worried about my mobility. Dr. Amit's treatment and rehab plan brought me back to normal life faster than expected. Forever grateful.",
  },
  {
    name: "Pushplata Garg",
    image: "/images/paitent5.webp",
    alt: "Knee pain treatment",
    text: "I suffered from constant knee pain for years. Dr. Amit diagnosed the root cause and recommended the right procedure. I now walk comfortably without any pain.",
  },
  {
    name: "Mrs. Karan",
    image: "/images/testimonial10.webp",
    alt: "Knee replacement result",
    text: "Getting a knee replacement felt overwhelming, but Dr. Amit made the process smooth and stress-free. I can now move freely and live independently again.",
  },
  {
    name: "Priya Sharma",
    image: "/images/blog6.webp",
    alt: "Knee surgery recovery",
    text: "After my injury, even daily walking was painful. Dr. Amit's precise treatment and care helped me regain strength and return to my daily activities pain-free.",
  },
];

let currentIndex = 0;

const updateTestimonial = (index) => {
  const t = testimonials[index];
  document.getElementById("testimonial-image").src = t.image;
  document.getElementById("testimonial-image").alt = t.alt;
  document.getElementById("testimonial-name").textContent = t.name;
  document.getElementById("testimonial-alt").textContent = `“${t.alt}.”`;

  const indicators = document.querySelectorAll(".testimonial-home-indicators button");
  indicators.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
};

const goToNext = () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
};

const goToPrev = () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
};

const renderIndicators = () => {
  const container = document.getElementById("testimonial-indicators");
  container.innerHTML = "";
  testimonials.forEach((_, index) => {
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", `Go to testimonial ${index + 1}`);
    btn.onclick = () => {
      currentIndex = index;
      updateTestimonial(index);
    };
    if (index === 0) btn.classList.add("active");
    container.appendChild(btn);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  updateTestimonial(0);
  renderIndicators();
  setInterval(goToNext, 5000);
});

/*testimonal end here*/

/*home blog logic here*/
const homeBlogs = [
  {
    title: "Is Your Knee Pain Getting Worse? Here’s What to Know",
    date: "08-Aug-2024",
    image: "/images/blog1.webp",
    alt: "Patient holding knee in pain - knee pain awareness blog",
    excerpt:
      "Knee pain shouldn't be ignored. Learn about common causes, early symptoms, and when it’s time to see an orthopedic specialist.",
    link: "/knee-replacement",
  },
  {
    title: "Top 5 Recovery Tips After Orthopedic Surgery",
    date: "18-Jul-2024",
    image: "/images/blog2.webp",
    alt: "Post-surgery patient doing physiotherapy exercise",
    excerpt:
      "Recover faster and safer with these expert tips—covering physiotherapy, nutrition, rest, and follow-up care after joint surgery.",
    link: "/orthopedic-recovery",
  },
  {
    title: "Preventing Sports Injuries: A Guide for Active Adults",
    date: "01-Jun-2024",
    image: "/images/blog3.webp",
    alt: "Athletic adult stretching to prevent sports injury",
    excerpt:
      "Stay in the game longer! Discover how to protect your joints, strengthen muscles, and avoid common sports injuries at any age.",
    link: "/sports-injury",
  },
];

const blogGrid = document.querySelector(".home-blog-grid");
homeBlogs.forEach((blog) => {
  const article = document.createElement("article");
  article.className = "home-blog-card";

  article.innerHTML = `
      <div class="home-blog-card-image-container">
        <img src="${blog.image}" alt="${blog.alt}" width="400" height="208"
          class="home-blog-card-image" loading="lazy" decoding="async" />
        <time class="home-blog-card-date" datetime="${new Date(blog.date).toISOString()}">
          ${blog.date}
        </time>
      </div>
      <div class="home-blog-card-content">
        <h3>
    <a href="${blog.link}.html" class="home-blog-card-title" aria-label="Read full article: ${blog.title}">
  ${blog.title}
     </a>

        </h3>
        <p class="home-blog-card-excerpt">${blog.excerpt}</p>
        <a href="${blog.link}" class="home-blog-read-link" aria-label="Read full blog: ${blog.title}">
          Read Full Blog →
        </a>
      </div>
    `;
  blogGrid.appendChild(article);
});
/*home blog end logic*/

/*home contact forms here*/
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
    document.querySelectorAll(".faq-answer").forEach((el) => el.classList.remove("active"));
    document.querySelectorAll(".faq-icon").forEach((el) => el.innerText = "+");
    document.querySelectorAll(".faq-question").forEach((el) => el.setAttribute("aria-expanded", "false"));

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

// Form submission
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

