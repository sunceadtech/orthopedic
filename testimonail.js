const testimonials = [
  {
    name: "Geeta Devi (Patna)",
    image: "/images/geeta.jpg",
    title: "Osteoarthritis Treatment",
    description:
      "I have been suffering from osteoarthritis for the last 7-8 years. Dr. Amit is very caring — he checks on his patient 2-3 times a day. It has been a great experience.",
    alt: "Geeta Devi from Patna after osteoarthritis treatment by Dr. Amit Sharma",
  },
  {
    name: "Mahender Rajput",
    image: "/images/mahendra.jpg",
    title: "Tendon Injury Recovery",
    description:
      "I am a bodybuilder and lift heavy weights. I had an injury in my tendon during my exercise. I was scared about my sports career but Dr. Amit Sharma reassured me that I will be absolutely fine after surgery. He was absolutely right. I had a successful tendon surgery and soon I was able to get back into my game. Thanks to Dr. Amit for everything he has done for me.",
    alt: "Mahender Rajput recovered from tendon injury under Dr. Amit Sharma",
  },
  {
    name: "Pushplata Garg",
    image: "/images/pushp.jpg",
    title: "Knee Pain Relief",
    description:
      "I had pain in both my knees for many years. I had consulted many doctors who advised surgery, but I was not comfortable. Then my family brought me to Yashoda Hospital, Kaushambi, where I met Dr. Amit Sharma. He was very reassuring. I decided to undergo surgery. It has been a very nice experience. I am very hopeful to walk back in the same way as I did before. The hospital food was also very good.",
    alt: "Pushpata Garg smiling after knee pain treatment at Dr. Amit Sharma's clinic",
  },
  {
    name: "Mrs Premlata",
    image: "/images/premlate.jpg",
    title: "Left Knee Replacement",
    description:
      "I had a lot of pain in my left knee. We did a lot of research on doctors and the surgery and decided to undergo the surgery under Dr Amit Sharma. I got my left knee replacement done recently and I am very satisfied. I am feeling good now. My pain is gone.",
    alt: "Mrs. Premlata relieved after successful left knee replacement",
  },
  {
    name: "Ramavati",
    image: "/images/Ramvati.jpg",
    title: "Walking Improvement after Treatment",
    description:
      "I was having problems walking. Someone advised my husband about Dr. Amit Sharma. The doctor did an x-ray of my knee and advised me knee replacement surgery. My pain has reduced and now I can walk. The doctor is very good-natured and caring. The staff at the hospital is also very caring.",
    alt: "Ramavati walking again after orthopedic care by Dr. Amit Sharma",
  }
];


const container = document.getElementById("testimonialContainer");

testimonials.forEach((t, index) => {
  const card = document.createElement("div");
  card.className = "testimonial";
  card.setAttribute("role", "group");
  card.setAttribute("aria-labelledby", `testimonial-${index}-name`);

  card.innerHTML = `
        <div class="testimonial-image">
          <img src="${t.image}" alt="${t.alt}" title="${t.name} - ${t.title}" loading="lazy" width="160" height="160"/>
          ${t.video ? `
            <a href="${t.video}" target="_blank" class="video-overlay" aria-label="Watch ${t.name}'s video testimonial">
              <i class="fas fa-play-circle" aria-hidden="true"></i>
              <span class="sr-only">Watch ${t.name}'s video testimonial</span>
            </a>` : ''
    }
        </div>
        <div class="testimonial-text">
          <h3 id="testimonial-${index}-name">${t.name}</h3>
          <p class="title">${t.title}</p>
          <p class="desc">${t.description}</p>
        </div>
      `;
  container.appendChild(card);
});