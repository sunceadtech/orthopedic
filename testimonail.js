 const testimonials = [
      {
        name: "Rahul Verma",
        image: "/images/testimonial1.webp",
        title: "Hip Replacement Surgery in Ghaziabad",
        description:
          "After struggling with intense hip pain for over a year, I chose Dr. Amit Sharma for my hip replacement. The surgery was a success — now I walk pain-free and feel younger again. Truly the best orthopedic surgeon in Ghaziabad!",
        video: "https://www.youtube.com/watch?v=FOIu2Dt1Wvw",
        alt: "Rahul Verma after successful hip replacement surgery by Dr. Amit Sharma in Ghaziabad",
      },
      {
        name: "Sita Devi",
        image: "/images/testimonial2.webp",
        title: "Total Knee Replacement",
        description:
          "Years of knee stiffness had taken away my energy. Dr. Amit Sharma performed my knee replacement with such expertise that I feel active and mobile again. He’s a miracle worker for joint care in Ghaziabad.",
        video: "https://www.youtube.com/shorts/SsTBvblBpzA",
        alt: "Sita Devi walking comfortably after total knee replacement by Dr. Amit Sharma",
      },
      {
        name: "Anjali Verma",
        image: "/images/testimonial4.webp",
        title: "Spinal Disc Issue Treatment",
        description:
          "I suffered from a bulging disc and couldn’t sit for long hours. Dr. Amit’s spinal care plan brought me full relief. I’m back at work without back pain — highly recommended for anyone with spine issues.",
        alt: "Anjali Verma smiling after spinal disc treatment.",
      },
      {
        name: "Priya Thakur",
        image: "/images/testimonial6.webp",
        title: "ACL Reconstruction Surgery",
        description:
          "After tearing my ACL during a tournament, I was worried about sports forever. Dr. Amit’s surgical skills brought me back to the badminton court within months. His team is world-class for sports injuries!",
        alt: "Priya Thakur back on badminton court after ACL reconstruction by Dr. Amit Sharma",
      },
      {
        name: "Mr. Ramcena",
        image: "/images/testimonial7.webp",
        title: "International Orthopedic Patient Care",
        description:
          "I traveled from Nigeria for orthopedic treatment in India. Dr. Amit Sharma and his hospital staff offered outstanding care and guidance. The surgery and recovery were smooth and successful.",
        alt: "Mr. Ramcena from Nigeria post orthopedic surgery at Dr. Amit Sharma's clinic",
      },
      {
        name: "Rekha Sharma",
        image: "/images/testimonial11.webp",
        title: "Shoulder Fracture Surgery",
        description:
          "A severe shoulder fracture made daily tasks painful. Dr. Amit’s precise orthopedic surgery restored my mobility. Within weeks, I could lift my arm fully again. Thank you for giving me my life back.",
        alt: "Rekha Sharma raising arm after shoulder fracture surgery by Dr. Amit Sharma",
      },
      {
        name: "Priya Tiwari",
        image: "/images/testimonial9.webp",
        title: "Elbow Joint Surgery",
        description:
          "I had lost movement in my elbow due to bone stiffness. Thanks to Dr. Amit Sharma, I regained full range of motion after surgery. His approach is modern and highly effective.",
        alt: "Priya Tiwari smiling after successful elbow joint surgery in Ghaziabad",
      },
      {
        name: "Manju Kumari",
        image: "/images/testimonial10.webp",
        title: "Complex Fracture Recovery",
        description:
          "After a major accident, I had multiple fractures and limited hope. But Dr. Amit’s expert care and surgical precision helped me recover completely. I now walk and move confidently again.",
        alt: "Manju Kumari walking again after multiple fracture recovery under Dr. Amit Sharma",
      },
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